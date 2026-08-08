# Fix hellowebby.com domain verification

## Confirmed issue
The domain is already connected in Lovable, as shown in the screenshot. A live DNS lookup currently returns two A records for the root domain:

- `185.158.133.1` — correct Lovable record
- `162.255.119.130` — conflicting registrar parking/redirect record

The `www` record correctly resolves only to `185.158.133.1`. No `_lovable` TXT record is currently visible publicly.

## Resolution
1. In the registrar DNS settings, delete only the root (`@`) A record pointing to `162.255.119.130`.
2. Keep the root (`@`) A record pointing to `185.158.133.1`.
3. Keep the `www` A record pointing to `185.158.133.1`.
4. Do not change the `notify` email records, MX records, SPF, DKIM, or DMARC.
5. In Lovable Domains, click **Check status** after the DNS change propagates.
6. If Lovable then specifically displays a required `_lovable` TXT value, add that exact value at the registrar; do not invent a TXT value.

## Verification
- Confirm the root domain returns only `185.158.133.1`.
- Confirm `www.hellowebby.com` still returns `185.158.133.1`.
- Recheck the Lovable domain status until it changes from **Unable to verify** to **Active**.