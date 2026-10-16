import { EmbeddedCheckoutProvider, EmbeddedCheckout } from "@stripe/react-stripe-js";
import { getStripe, getStripeEnvironment } from "@/lib/stripe";
import { supabase } from "@/integrations/supabase/client";
import { TERMS_VERSION } from "../../supabase/functions/_shared/checkout-consent";

interface Props {
  planPriceId: string;
  setupPriceId?: string;
  customerEmail?: string;
  returnUrl: string;
  termsAccepted: boolean;
}

export function StripeEmbeddedCheckout({
  planPriceId,
  setupPriceId,
  customerEmail,
  returnUrl,
  termsAccepted,
}: Props) {
  const fetchClientSecret = async (): Promise<string> => {
    const { data, error } = await supabase.functions.invoke("create-checkout", {
      body: {
        planPriceId,
        setupPriceId,
        customerEmail,
        returnUrl,
        environment: getStripeEnvironment(),
        termsAccepted,
        termsVersion: TERMS_VERSION,
      },
    });
    if (error || !data?.clientSecret) {
      throw new Error(error?.message || "Failed to create checkout session");
    }
    return data.clientSecret;
  };

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider stripe={getStripe()} options={{ fetchClientSecret }}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
}