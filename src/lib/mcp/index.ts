import { auth, defineMcp } from "@lovable.dev/mcp-js";
import getPlansTool from "./tools/get-plans";
import submitEnquiryTool from "./tools/submit-enquiry";

const projectRef = import.meta.env.VITE_SUPABASE_PROJECT_ID ?? "project-ref-unset";

export default defineMcp({
  name: "hellowebby",
  title: "hellowebby",
  version: "0.1.0",
  instructions: "Use these tools to explain hellowebby's website plans and submit a website enquiry only after confirming the details with the caller.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [getPlansTool, submitEnquiryTool],
});