import React from "react";
import { type Metadata } from "next";

import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/homepage/hero";
import { TrustSection } from "@/components/homepage/trust-section";
import { ProductSection } from "@/components/homepage/product-section";
import { VaultOpportunities } from "@/components/homepage/vault-opportunities";
import { Footer } from "@/components/homepage/footer";

export const metadata: Metadata = {
  title: "APLX - Invest in the Future of Coffee",
  description: "Secure, asset-backed lending and trading strategies powered by the IDRP stablecoin.",
};

export default function Homepage() {
  return (
    <div className="bg-neutral-white font-sans text-neutral-black overflow-x-hidden antialiased">
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <ProductSection />
        <VaultOpportunities />
      </main>
      <Footer />
    </div>
  );
}
