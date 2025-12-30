import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";

export function Hero() {
  return (
    <section className="relative pt-28 pb-16 lg:pt-40 lg:pb-32 overflow-hidden">
      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="max-w-3xl lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-600 text-xs font-bold mb-6">
              <Icon name="verified_user" className="text-base text-accent" />
              Powered by Gudangin WMS
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-primary">
              Real Assets.<br />
              <span className="text-neutral-400">Stable Returns.</span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-500 mb-8 sm:mb-10 max-w-lg leading-relaxed">
              Invest in commodity-backed coffee assets using SRG and CMA collateral.
              Secure, transparent, and settled in IDRP stablecoin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="flex items-center justify-center h-12 px-8 rounded-lg bg-accent text-white text-base font-bold hover:bg-accent-dark transition-all shadow-md shadow-accent/20 w-full sm:w-auto">
                Explore Vaults
                <Icon name="arrow_forward" className="ml-2 text-sm" />
              </button>
              <button className="flex items-center justify-center h-12 px-8 rounded-lg bg-neutral-50 border border-neutral-200 text-neutral-400 text-base font-bold cursor-not-allowed w-full sm:w-auto" disabled>
                Marketplace (Soon)
              </button>
            </div>
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-neutral-600 text-sm font-semibold">
              <div className="flex items-center gap-2">
                <Icon name="gavel" className="text-primary" />
                Regulated SRG
              </div>
              <div className="flex items-center gap-2">
                <Icon name="warehouse" className="text-primary" />
                Physically Audited
              </div>
              <div className="flex items-center gap-2">
                <Icon name="lock" className="text-primary" />
                Insured Custody
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-soft bg-neutral-100">
              <Image
                alt="Coffee drying process"
                className="object-cover opacity-90"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRUN8E-7hZUPXK2yVRfba0sOUZA2FWrlDbJFag3Pvhasxx9gbCPvtSnWHfnSnJubsn5zouW04K7lptY6uXtkWIw4QEjy9HusVcp2tVDEl9BhMAKMzqOaohhsEvSh9Qhj8Itgf9eFFSViAOP6HO-bwKvJxHmbPs5UhpimBfmu3ySpQCLS8tZDDR70piB4o07o1j4E_wAay16Wz4qqB0lO0miDJrIeWihMIoYUkjFe0HivF_P2Vxr2z4UWphSvbIubt8iNrZJbU_Ppcv"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-multiply z-10"></div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20 z-20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-neutral-500 font-bold uppercase tracking-wider mb-1">Current Yield</p>
                    <p className="text-2xl font-bold text-primary">12.4% <span className="text-sm font-normal text-neutral-400">APY</span></p>
                  </div>
                  <div className="h-10 w-px bg-neutral-200 mx-4"></div>
                  <div>
                    <p className="text-xs text-neutral-500 font-bold uppercase tracking-wider mb-1">Total Value Locked</p>
                    <p className="text-2xl font-bold text-primary">IDRP 42.5B</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 -top-10 -right-10 w-full h-full bg-accent/5 rounded-3xl"></div>
          </div>
        </div>
      </Container>
    </section>
  );
}
