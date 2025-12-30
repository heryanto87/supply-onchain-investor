import React from "react";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";

export function ProductSection() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-white">
      <Container>
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          <div className="relative group rounded-2xl overflow-hidden border border-neutral-200 bg-primary text-white shadow-card hover:shadow-xl transition-all duration-300 lg:col-span-2">
            <div className="p-6 sm:p-8 lg:p-10 flex flex-col h-full relative z-10">
              <div className="mb-6 max-w-2xl">
                <span className="bg-accent/20 text-accent px-2 py-1 rounded text-xs font-bold uppercase tracking-wider mb-4 inline-block">Main Product</span>
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">The Vaults</h3>
                <p className="text-neutral-300 text-base sm:text-lg mb-8 leading-relaxed">Deposit IDRP into managed liquidity pools. Your capital is used to fund SRG-backed loans, earning you stable APY. Experience institutional-grade DeFi with real-world asset backing.</p>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-sm text-neutral-200 font-medium">
                      <Icon name="check_circle" className="text-accent text-xl shrink-0" />
                      Earn stable APY from lending
                    </li>
                    <li className="flex items-start gap-3 text-sm text-neutral-200 font-medium">
                      <Icon name="check_circle" className="text-accent text-xl shrink-0" />
                      Diversified across SRG assets
                    </li>
                  </ul>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-sm text-neutral-200 font-medium">
                      <Icon name="check_circle" className="text-accent text-xl shrink-0" />
                      Auto-compounding returns
                    </li>
                    <li className="flex items-start gap-3 text-sm text-neutral-200 font-medium">
                      <Icon name="check_circle" className="text-accent text-xl shrink-0" />
                      Instant liquidity options
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-auto">
                <button className="w-full sm:w-auto py-4 rounded-lg bg-accent hover:bg-accent-dark text-white font-bold transition-all flex justify-center items-center px-8 text-lg">
                  View Active Vaults
                  <Icon name="arrow_forward" className="ml-2" />
                </button>
              </div>
            </div>
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl z-0 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-2xl z-0 pointer-events-none"></div>
          </div>
          <div className="relative group rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-50 shadow-sm transition-all duration-300 lg:col-span-1 opacity-75 hover:opacity-100">
            <div className="p-6 sm:p-8 flex flex-col h-full relative z-10">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-neutral-200 text-neutral-500 px-2 py-1 rounded text-xs font-bold uppercase tracking-wider inline-block">Direct Ownership</span>
                  <span className="bg-neutral-800 text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide">Coming Soon</span>
                </div>
                <h3 className="text-2xl font-bold text-neutral-400 mb-4">The Marketplace</h3>
                <p className="text-neutral-500 mb-6 text-sm">Buy specific warehouse receipts (SRG) representing actual lots of coffee. You own the underlying asset and can trade or redeem it.</p>
                <ul className="space-y-4 mb-8 opacity-60">
                  <li className="flex items-start gap-3 text-sm text-neutral-600 font-medium">
                    <Icon name="check_circle" className="text-neutral-400 text-xl shrink-0" />
                    Direct ownership of commodity lots
                  </li>
                  <li className="flex items-start gap-3 text-sm text-neutral-600 font-medium">
                    <Icon name="check_circle" className="text-neutral-400 text-xl shrink-0" />
                    Tradeable on secondary market
                  </li>
                </ul>
              </div>
              <div className="mt-auto">
                <button className="w-full py-3 rounded-lg bg-neutral-200 border border-neutral-300 text-neutral-500 font-bold transition-all flex justify-center items-center px-6 cursor-not-allowed" disabled>
                  Notify Me
                  <Icon name="notifications" className="ml-2 text-base" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
