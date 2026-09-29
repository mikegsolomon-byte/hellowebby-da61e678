import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { supabaseForUser } from "../supabase";

export default defineTool({
  name: "submit_website_enquiry",
  title: "Submit website enquiry",
  description: "Send a website enquiry to hellowebby for the signed-in caller after they confirm the details.",
  inputSchema: {
    name: z.string().trim().min(2).max(100).describe("Contact name"),
    phone: z.string().trim().max(40).optional().describe("Contact phone number"),
    company: z.string().trim().max(120).optional().describe("Business or company name"),
    message: z.string().trim().min(10).max(1000).describe("Website requirements and questions"),
    plan: z.string().trim().max(150).optional().describe("Plan of interest, if known"),
  },
  annotations: { readOnlyHint: false, destructiveHint: false, idempotentHint: false, openWorldHint: true },
  handler: async ({ name, phone, company, message, plan }, ctx) => {
    if (!ctx.isAuthenticated()) throw new ToolError("Please sign in before submitting an enquiry.");
    const email = ctx.getUserEmail();
    if (!email) throw new ToolError("Your signed-in account does not include an email address.");

    const client = supabaseForUser(ctx);
    const pricingPlan = plan || "Agent integration enquiry";
    const { error: insertError } = await client.from("form_submissions").insert({
      name,
      email,
      phone: phone || null,
      company: company || null,
      message,
      pricing_plan: pricingPlan,
    });
    if (insertError) throw new ToolError("The enquiry could not be saved. Please try again.");

    const submissionId = crypto.randomUUID();
    const { error: emailError } = await client.functions.invoke("send-contact-emails", {
      body: {
        submissionId,
        name,
        email,
        phone: phone || null,
        company: company || null,
        message,
        pricing_plan: pricingPlan,
      },
    });
    if (emailError) throw new ToolError("The enquiry was saved, but its email could not be sent. Please contact hello@hellowebby.com.");

    return {
      content: [{ type: "text", text: "Your enquiry was sent to hellowebby. The team will be in touch within a few days." }],
      structuredContent: { submitted: true, email, plan: pricingPlan },
    };
  },
});