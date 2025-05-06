import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'SEO Pricing Title',
 description: 'SEO Pricing description',
 keywords: ['pricing', 'precios']
};
export default function PricingPage() {
    return (
      <>
        <span className="text-7xl">Pricing Page</span>
      </>
    );
  }
  