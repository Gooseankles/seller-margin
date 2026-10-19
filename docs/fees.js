// Marketplace fee data. Rates come from search snippets of official pages (2026-10-19).
// eBay + Amazon plan price checked against official pages 2026-10-19. Etsy pages return 403 to automated fetch -> still unverified.
// verified:false = must be re-checked against the source page before relying on it.
window.FEES = {
  updated: "2026-10-19",
  marketplaces: [
    {
      id: "etsy", name: "Etsy (US)", verified: false,
      source: "https://help.etsy.com/hc/en-us/articles/360035902374-Etsy-Fee-Basics",
      listingFee: 0.20,
      pctOnItemAndShipping: 6.5,      // transaction fee
      paymentPct: 3, paymentFixed: 0.25, // US payment processing
      monthly: 0
    },
    {
      id: "ebay", name: "eBay (US, most categories)", verified: true, verifiedOn: "2026-10-19",
      source: "https://www.ebay.com/help/selling/fees-credits-invoices/selling-fees?id=4822",
      listingFee: 0,
      pctOnItemAndShipping: 13.6,
      paymentPct: 0, paymentFixed: 0,
      perOrderSmall: 0.30, perOrderLarge: 0.40, // <= $10 / > $10
      monthly: 0
    },
    {
      id: "amazon", name: "Amazon (Professional, 15% category)", verified: true, verifiedOn: "2026-10-19" /* $39.99/mo confirmed on official page; 15% referral is category-specific */,
      source: "https://sell.amazon.com/pricing",
      listingFee: 0,
      pctOnItemOnly: 15,
      paymentPct: 0, paymentFixed: 0,
      monthly: 39.99
    },
    {
      id: "amazon-handmade", name: "Amazon Handmade", verified: false,
      source: "https://sell.amazon.com/programs/handmade",
      listingFee: 0,
      pctOnItemOnly: 15, minReferral: 0.30,
      paymentPct: 0, paymentFixed: 0,
      monthly: 0
    },
    {
      id: "depop", name: "Depop (US)", verified: false,
      source: "https://depophelp.zendesk.com/hc/en-us/articles/360003803179", // 403 to bots; rates from third-party blogs
      listingFee: 0, paymentPct: 3.3, paymentFixed: 0.45, monthly: 0
    },
    {
      id: "vinted", name: "Vinted (US, seller pays no fee)", verified: false,
      source: "https://www.vinted.com/help/222-selling-fees", // buyer pays the protection fee; seller fee per third-party blogs
      listingFee: 0, paymentPct: 0, paymentFixed: 0, monthly: 0
    }
  ]
};
