import React from "react";
import Image from "next/image";
import type { Metadata } from "next";

import { Navbar } from "@/components/navbar";
import { Icon } from "@/components/ui/icon";
import { LoginForm } from "./login-form";

export const metadata: Metadata = {
  title: "Login - APLX Investment Platform",
  description: "Secure login to your APLX custodial wallet and investment dashboard.",
};

export default function LoginPage() {
  return (
    <div className="bg-white font-sans text-slate-900 overflow-x-hidden antialiased flex flex-col min-h-screen pt-20">
      <Navbar />
      <div className="flex flex-col lg:flex-row flex-1 w-full">
        {/* Left Panel - Visuals */}
        <div className="hidden lg:block lg:w-[45%] relative bg-white p-10 min-h-[900px]">
          <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] shadow-2xl ring-1 ring-black/5">
            <div className="absolute inset-0 z-0">
              <Image
                alt="Close up of dark coffee beans with a superimposed digital financial graph mesh"
                className="object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzhp_lw6wSBvi4FXHzP5h3tCDnN63xU8FHyvJTmXdaBkb6_4cO1KosLnfiPCpZbIYFn9cl2mI9ImY9X4L0fKYO8wvx5L9sx5iIimvA_v3TFgYw6j7mbh7mMfOaiygsmWQ5GYoSkCcIbB9ne8udDFRMWmzZZwrC6Kf-rqRylO-Qs0hRx_PxHIl--NXFGH-Grh5zdNMvRa1QqM3xtvfKxXqGbufgKCjLetLVg3geLnYng7SU0_JDwhjeblQQMlduP2TjujceftZEjK0"
                fill
                priority
              />
              <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10"></div>
            </div>
            <div className="relative z-10 flex h-full flex-col justify-between p-12 xl:p-16">
              <div className="self-end rounded-xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-md shadow-xl max-w-xs transform translate-y-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary ring-1 ring-white/10">
                    <Icon name="coffee" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-300 font-medium tracking-wide uppercase">
                      Arabica Futures
                    </p>
                    <p className="text-white font-bold text-lg flex items-center gap-2">
                      +12.4%
                      <span className="bg-primary/20 text-primary text-[10px] px-1.5 py-0.5 rounded font-bold">
                        ▲ 24H
                      </span>
                    </p>
                  </div>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-3/4 shadow-[0_0_12px_rgba(95,197,22,0.8)]"></div>
                </div>
              </div>
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary mb-6 backdrop-blur-md shadow-lg shadow-black/10">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                  </span>
                  <span className="text-white drop-shadow-md tracking-wide">
                    Live Market Data
                  </span>
                </div>
                <h2 className="text-4xl font-extrabold leading-tight text-white lg:text-5xl drop-shadow-lg tracking-tight">
                  The future of <br />
                  <span className="text-primary">commodity assets</span>
                </h2>
                <p className="mt-6 max-w-md text-lg text-slate-200 font-medium leading-relaxed drop-shadow-md">
                  Join over 50,000 investors diversifying their portfolio with
                  high-yield coffee-backed securities.
                </p>
                <div className="mt-12 grid grid-cols-2 gap-8">
                  <div className="group flex flex-col gap-3">
                    <div className="h-12 w-12 rounded-full bg-white/10 border border-white/5 flex items-center justify-center backdrop-blur-md group-hover:bg-primary/20 transition-colors">
                      <Icon
                        name="account_balance_wallet"
                        className="text-2xl text-primary drop-shadow-md"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base drop-shadow-md">
                        Instant Wallet
                      </h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        Auto-generated custodial wallet upon registration.
                      </p>
                    </div>
                  </div>
                  <div className="group flex flex-col gap-3">
                    <div className="h-12 w-12 rounded-full bg-white/10 border border-white/5 flex items-center justify-center backdrop-blur-md group-hover:bg-primary/20 transition-colors">
                      <Icon
                        name="security"
                        className="text-2xl text-primary drop-shadow-md"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base drop-shadow-md">
                        Bank-Grade Security
                      </h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        256-bit encryption and cold storage assets.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px] pointer-events-none mix-blend-screen"></div>
          </div>
        </div>

        {/* Right Panel - Form */}
        <div className="flex w-full flex-col lg:flex-1 bg-white relative z-10 py-12 lg:py-0">
          <LoginForm />
          <div className="mt-auto w-full py-6 text-center text-xs text-slate-500 lg:px-20">
            © 2024 APLX Investment Platform. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}