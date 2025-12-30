import React from "react";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import Link from "next/link";

export function VaultOpportunities() {
  return (
    <section className="py-24 bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="mb-8 lg:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary">Live Vault Opportunities</h2>
            <p className="text-neutral-500 mt-2 text-sm sm:text-base">Participate in high-yield liquidity pools backed by coffee assets.</p>
          </div>
          <Link className="text-primary font-bold hover:text-accent transition-colors flex items-center gap-1 text-sm" href="#">
            View All Vaults <Icon name="chevron_right" className="text-lg" />
          </Link>
        </div>

        <div className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible pb-8">
          <div className="min-w-[280px] w-[85vw] sm:w-[350px] lg:w-auto lg:min-w-0 snap-center bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-soft transition-all relative flex flex-col group h-full">
            <div className="h-1.5 w-full bg-accent"></div>
            <div className="p-5 sm:p-6 flex flex-col h-full">
              <div className="flex items-center justify-between mb-5">
                <div className="size-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                  <Icon name="savings" className="text-xl" />
                </div>
                <span className="px-2.5 py-1 rounded-md bg-green-50 text-green-700 border border-green-100 text-[10px] font-bold uppercase tracking-wide">Senior Tranche</span>
              </div>
              <h4 className="font-bold text-primary text-xl mb-2">Alpha Yield Pool</h4>
              <p className="text-sm text-neutral-500 mb-6 leading-relaxed line-clamp-2">First-loss protected liquidity pool for SRG financing with priority repayment structure.</p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-neutral-50 rounded-lg p-3 border border-neutral-100">
                  <span className="text-[10px] font-bold uppercase text-neutral-400 block mb-1">Target APY</span>
                  <span className="text-xl font-bold text-accent">8.5%</span>
                </div>
                <div className="bg-neutral-50 rounded-lg p-3 border border-neutral-100">
                  <span className="text-[10px] font-bold uppercase text-neutral-400 block mb-1">Lock-up</span>
                  <span className="text-xl font-bold text-primary">30 Days</span>
                </div>
              </div>
              <div className="mt-auto pt-4 border-t border-neutral-50">
                <div className="flex justify-between text-xs text-neutral-500 font-medium mb-2">
                  <span>Progress</span>
                  <span className="text-primary font-bold">65% Filled</span>
                </div>
                <div className="w-full bg-neutral-100 rounded-full h-2 mb-2 overflow-hidden">
                  <div className="bg-accent h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: "65%" }}></div>
                </div>
                <div className="flex justify-between text-[10px] text-neutral-400 font-medium mb-5">
                  <span>$2.5M / $4.0M</span>
                  <span>142 Investors</span>
                </div>
                <button className="w-full py-2.5 rounded-lg bg-primary text-white text-sm font-bold hover:bg-neutral-800 transition-colors">
                  Deposit Now
                </button>
              </div>
            </div>
          </div>

          <div className="min-w-[280px] w-[85vw] sm:w-[350px] lg:w-auto lg:min-w-0 snap-center bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-soft transition-all relative flex flex-col group h-full">
            <div className="h-1.5 w-full bg-accent"></div>
            <div className="p-5 sm:p-6 flex flex-col h-full">
              <div className="flex items-center justify-between mb-5">
                <div className="size-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                  <Icon name="trending_up" className="text-xl" />
                </div>
                <span className="px-2.5 py-1 rounded-md bg-amber-50 text-amber-700 border border-amber-100 text-[10px] font-bold uppercase tracking-wide">Mezzanine</span>
              </div>
              <h4 className="font-bold text-primary text-xl mb-2">Growth Harvest Pool</h4>
              <p className="text-sm text-neutral-500 mb-6 leading-relaxed line-clamp-2">Higher yield pool for seasonal harvest financing, directly supporting coffee farmer collectives.</p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-neutral-50 rounded-lg p-3 border border-neutral-100">
                  <span className="text-[10px] font-bold uppercase text-neutral-400 block mb-1">Target APY</span>
                  <span className="text-xl font-bold text-accent">14.2%</span>
                </div>
                <div className="bg-neutral-50 rounded-lg p-3 border border-neutral-100">
                  <span className="text-[10px] font-bold uppercase text-neutral-400 block mb-1">Lock-up</span>
                  <span className="text-xl font-bold text-primary">90 Days</span>
                </div>
              </div>
              <div className="mt-auto pt-4 border-t border-neutral-50">
                <div className="flex justify-between text-xs text-neutral-500 font-medium mb-2">
                  <span>Progress</span>
                  <span className="text-primary font-bold">32% Filled</span>
                </div>
                <div className="w-full bg-neutral-100 rounded-full h-2 mb-2 overflow-hidden">
                  <div className="bg-accent h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: "32%" }}></div>
                </div>
                <div className="flex justify-between text-[10px] text-neutral-400 font-medium mb-5">
                  <span>TVL: 850M IDRP</span>
                  <span>Cap: 2.5B IDRP</span>
                </div>
                <button className="w-full py-3 rounded-lg bg-primary text-white text-sm font-bold hover:bg-neutral-800 transition-colors shadow-sm flex items-center justify-center gap-2">
                  Deposit IDRP
                  <Icon name="arrow_forward" className="text-base" />
                </button>
              </div>
            </div>
          </div>

          <div className="min-w-[280px] w-[85vw] sm:w-[350px] lg:w-auto lg:min-w-0 snap-center bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-soft transition-all relative flex flex-col group h-full">
            <div className="h-1.5 w-full bg-accent"></div>
            <div className="p-5 sm:p-6 flex flex-col h-full">
              <div className="flex items-center justify-between mb-5">
                <div className="size-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                  <Icon name="diamond" className="text-xl" />
                </div>
                <span className="px-2.5 py-1 rounded-md bg-purple-50 text-purple-700 border border-purple-100 text-[10px] font-bold uppercase tracking-wide">Specialty</span>
              </div>
              <h4 className="font-bold text-primary text-xl mb-2">Gayo Premium Pool</h4>
              <p className="text-sm text-neutral-500 mb-6 leading-relaxed line-clamp-2">Exclusive financing for export-grade Gayo Arabica coffee lots destined for European markets.</p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-neutral-50 rounded-lg p-3 border border-neutral-100">
                  <span className="text-[10px] font-bold uppercase text-neutral-400 block mb-1">Target APY</span>
                  <span className="text-xl font-bold text-accent">11.8%</span>
                </div>
                <div className="bg-neutral-50 rounded-lg p-3 border border-neutral-100">
                  <span className="text-[10px] font-bold uppercase text-neutral-400 block mb-1">Lock-up</span>
                  <span className="text-xl font-bold text-primary">60 Days</span>
                </div>
              </div>
              <div className="mt-auto pt-4 border-t border-neutral-50">
                <div className="flex justify-between text-xs text-neutral-500 font-medium mb-2">
                  <span>Progress</span>
                  <span className="text-primary font-bold">89% Filled</span>
                </div>
                <div className="w-full bg-neutral-100 rounded-full h-2 mb-2 overflow-hidden">
                  <div className="bg-accent h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: "89%" }}></div>
                </div>
                <div className="flex justify-between text-[10px] text-neutral-400 font-medium mb-5">
                  <span>TVL: 4.1B IDRP</span>
                  <span>Cap: 4.5B IDRP</span>
                </div>
                <button className="w-full py-3 rounded-lg bg-primary text-white text-sm font-bold hover:bg-neutral-800 transition-colors shadow-sm flex items-center justify-center gap-2">
                  Deposit IDRP
                  <Icon name="arrow_forward" className="text-base" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
