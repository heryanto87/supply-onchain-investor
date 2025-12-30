import Image from "next/image";
import React from "react";

import { GraphChartSVG, UnderlineSVG } from "@/components/illustrations";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Section } from "@/components/ui/section";

export function Hero() {
  return (
    <Section className="relative overflow-hidden lg:h-[800px] flex items-center bg-white py-0">
      <Image
        src="https://images.unsplash.com/photo-1611095973763-414019e72400?q=80&w=2942&auto=format&fit=crop"
        alt="Abstract coffee beans background texture"
        fill
        className="object-cover object-center mix-blend-multiply opacity-10"
        priority
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-white via-white/95 to-white/40"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
      <Container className="relative z-10 w-full py-20 lg:py-0">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center w-fit rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary mb-8 backdrop-blur-sm">
              <span className="mr-2 h-2 w-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(97,186,33,0.8)]"></span>
              Platform Live v2.0
            </div>
            <h1 className="text-5xl font-black tracking-tight text-slate-900 sm:text-7xl lg:text-7xl leading-[1.1] mb-6">
              Invest in the <br />
              <span className="text-primary relative inline-block">
                Future of Coffee
                <UnderlineSVG className="absolute -bottom-2 left-0 w-full h-3 text-primary/30" />
              </span>
            </h1>
            <p className="mt-4 text-xl leading-8 text-slate-600 max-w-2xl font-light">
              Unlock yields from real-world commodities. Secure, asset-backed
              lending and trading strategies powered by the{" "}
              <strong className="text-slate-900 font-semibold">
                IDRP stablecoin
              </strong>
              .
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button
                size="lg"
                className="font-bold hover:shadow-lg transition-all shadow-[0_0_20px_rgba(97,186,33,0.3)] group"
              >
                Start Investing
                <Icon
                  name="arrow_forward"
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="font-medium shadow-sm"
              >
                <Icon name="play_circle" className="text-primary" />
                How it works
              </Button>
            </div>
            <div className="mt-12 flex items-center gap-8 border-t border-gray-200 pt-8">
              <div>
                <p className="text-3xl font-bold text-slate-900">12.5%</p>
                <p className="text-sm text-gray-500">Avg. APY</p>
              </div>
              <div className="w-px h-10 bg-gray-200"></div>
              <div>
                <p className="text-3xl font-bold text-slate-900">$42.5M</p>
                <p className="text-sm text-gray-500">Assets Locked</p>
              </div>
              <div className="w-px h-10 bg-gray-200"></div>
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-300 flex items-center justify-center overflow-hidden">
                  <Icon name="person" className="text-gray-500 text-lg" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-400 flex items-center justify-center overflow-hidden">
                  <Icon name="person" className="text-gray-600 text-lg" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-500 flex items-center justify-center text-xs font-bold text-white">
                  +2k
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="relative z-10 transform lg:rotate-y-[-12deg] lg:rotate-x-[5deg] transition-transform duration-500 hover:rotate-0 perspective-1000">
              <div className="relative rounded-2xl bg-white/80 backdrop-blur-xl border border-gray-200 p-6 shadow-2xl">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Portfolio Overview
                    </h3>
                    <p className="text-xs text-slate-500">
                      Real-time asset performance
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></span>
                  </div>
                </div>
                <div className="h-48 w-full bg-gradient-to-b from-primary/5 to-transparent rounded-lg border border-primary/10 relative overflow-hidden mb-6 group">
                  <GraphChartSVG className="absolute bottom-0 left-0 w-full h-full" />
                  <div className="absolute top-[20%] right-[10%] w-3 h-3 bg-white rounded-full shadow-[0_0_10px_#61ba21] z-10 border border-primary"></div>
                  <div className="absolute top-[10%] right-[15%] bg-white border border-gray-200 px-3 py-1 rounded text-xs text-primary font-bold shadow-lg">
                    +14.2%
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="paid" className="text-primary text-lg" />
                      <span className="text-xs text-slate-500">
                        Total Yield
                      </span>
                    </div>
                    <p className="text-xl font-bold text-slate-900">
                      4,285 IDRP
                    </p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="security" className="text-blue-500 text-lg" />
                      <span className="text-xs text-slate-500">Coverage</span>
                    </div>
                    <p className="text-xl font-bold text-slate-900">
                      100% SRG
                    </p>
                  </div>
                </div>
                <div className="mt-4 bg-slate-50 rounded-xl p-3 border border-gray-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white shadow-sm border border-gray-100 flex items-center justify-center">
                      <Icon name="inventory_2" className="text-slate-400" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        Arabica Spot Vault
                      </p>
                      <p className="text-xs text-slate-500">
                        Auto-compounding
                      </p>
                    </div>
                  </div>
                  <span className="text-primary font-bold text-sm">
                    Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}