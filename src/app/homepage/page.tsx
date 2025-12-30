
import Link from "next/link";
import React from "react";
import { type Metadata } from "next";

import { Hero } from "@/components/homepage/hero";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "APLX - Invest in the Future of Coffee",
  description: "Secure, asset-backed lending and trading strategies powered by the IDRP stablecoin.",
};

export default function Homepage() {
  return (
    <div className="bg-white font-sans text-slate-900 overflow-x-hidden antialiased">
      <Navbar />

      <Hero />

      <div className="border-y border-gray-200 bg-gray-50">
        <Container className="py-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4 md:gap-8">
            <p className="text-sm font-medium text-slate-600">
              SRG — regulated by BAPPEBTI
            </p>
            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-300"></div>
            <p className="text-sm font-medium text-slate-600">
              CMA — private warehouse contract
            </p>
            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-300"></div>
            <p className="text-sm font-medium text-slate-600">
              Gudangin — warehouse management system
            </p>
          </div>
        </Container>
      </div>

      <Section className="bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Backed by Global Standards
            </h2>
            <p className="mt-4 text-lg text-slate-500">
              We prioritize the safety of your assets through industry-leading
              partnerships for insurance and collateral management.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="relative overflow-hidden p-8 shadow-lg hover:border-primary/50 transition-colors group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Icon name="security" className="text-9xl text-slate-900" />
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-500">
                  <Icon name="shield" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  SRG Insured
                </h3>
              </div>
              <p className="text-slate-600 mb-6">
                Assets are protected under comprehensive policies with top-tier
                reinsurance groups, ensuring coverage against physical loss or
                damage.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <Icon name="check_circle" className="text-primary text-base" />
                  Risk Mitigation
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <Icon name="check_circle" className="text-primary text-base" />
                  Standardized Coverage
                </li>
              </ul>
            </Card>
            <Card className="relative overflow-hidden p-8 shadow-lg hover:border-primary/50 transition-colors group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Icon name="warehouse" className="text-9xl text-slate-900" />
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-500">
                  <Icon name="inventory_2" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  CMA Verified
                </h3>
              </div>
              <p className="text-slate-600 mb-6">
                Collateral Management Agreements ensure all physical coffee
                inventory is inspected, verified, and securely warehoused by
                trusted third parties.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <Icon name="check_circle" className="text-primary text-base" />
                  Regular Audits
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <Icon name="check_circle" className="text-primary text-base" />
                  Quality Certification
                </li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="border-y border-gray-200 bg-gray-50">
        <Container>
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              How APLX Works
            </h2>
            <p className="mt-2 text-slate-500">
              From setup to security in four simple steps.
            </p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              <div className="group flex flex-col items-center text-center md:items-start md:text-left">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-white text-slate-700 shadow-md group-hover:border-primary transition-colors">
                  <Icon name="person_add" className="text-4xl" />
                </div>
                <h3 className="mt-6 text-lg font-bold text-slate-900">
                  1. Create account & custodial wallet
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  Sign up in seconds and connect your Web3 wallet to get
                  started.
                </p>
              </div>
              <div className="group flex flex-col items-center text-center md:items-start md:text-left">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-white text-slate-700 shadow-md group-hover:border-primary transition-colors">
                  <Icon name="badge" className="text-4xl" />
                </div>
                <h3 className="mt-6 text-lg font-bold text-slate-900">
                  2. Complete identity verification
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  Complete identity verification to access regulated investment
                  products.
                </p>
              </div>
              <div className="group flex flex-col items-center text-center md:items-start md:text-left">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-white text-slate-700 shadow-md group-hover:border-primary transition-colors">
                  <Icon name="currency_exchange" className="text-4xl" />
                </div>
                <h3 className="mt-6 text-lg font-bold text-slate-900">
                  3. Deposit IDR → receive IDRP
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  Convert funds to IDRP stablecoin, the fuel for the APLX
                  ecosystem.
                </p>
              </div>
              <div className="group flex flex-col items-center text-center md:items-start md:text-left">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-primary text-white shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
                  <Icon name="trending_up" className="text-4xl" />
                </div>
                <h3 className="mt-6 text-lg font-bold text-primary">
                  4. Invest using IDRP
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  Allocate IDRP to Marketplace loans or automated Vault
                  strategies.
                </p>
              </div>
            </div>
            <div className="mt-12 text-center md:text-left">
              <p className="text-sm font-medium text-slate-500 bg-white inline-block px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
                Supporting Note: IDRP is an IDR-pegged internal balance used
                within APLX.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Choose Your Strategy
              </h2>
              <p className="mt-2 text-slate-500">
                Two ways to grow your capital with coffee-backed assets.
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="flex flex-col rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-lg hover:shadow-xl hover:shadow-primary/5 transition-all">
              <div
                className="h-48 w-full bg-cover bg-center relative"
                aria-label="Hands holding fresh green coffee beans"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBEoMNJEbkWDcHRmbpVKGWBO4csGC_9Nz1yF-RkoMdG9Rh0-u1KMDwj_Ym_4w6lOJIRfFAEgdBvp80O9UdXoCRDqIXxOpBuYAbnE4oPxDRXJ5YqhTcUKUn-G1j6e5CCghNQCa6TawcGIz38_LcjQaeKQt1FaWl0FKsmRR2LnN_OePrMBPAFkAO-_poZS_WeX4VxhgRNBkMWX2HGETntGQDy0i4CLP0bgIzdq6uOsPNPGCwk1PH2yCD4SNLw2_3aQ-Bzy3NXslJWLiM')",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                  <span className="inline-flex items-center rounded-md bg-green-400/20 px-2 py-1 text-xs font-medium text-green-300 ring-1 ring-inset ring-green-400/30 mb-2">
                    Low Risk
                  </span>
                  <h3 className="text-2xl font-bold text-white">Marketplace</h3>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-slate-600 mb-6">
                  Directly fund specific coffee lots. You provide liquidity to
                  producers in exchange for fixed-interest repayments backed by
                  physical inventory.
                </p>
                <div className="mt-auto space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-sm text-slate-500">Target APY</span>
                    <span className="font-bold text-slate-900">8% - 12%</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-sm text-slate-500">Duration</span>
                    <span className="font-bold text-slate-900">
                      3 - 9 Months
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full mt-4 border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    Browse Marketplace
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-lg hover:shadow-xl hover:shadow-primary/5 transition-all">
              <div
                className="h-48 w-full bg-cover bg-center relative"
                aria-label="Abstract digital network trading visualization"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuACYm9bzXWEKPU8HJjfIT6IbEBs169h-_YyLIFS4vTL0fah8SEw7UpclBwwuIDJTD0lN5cT8QX4O07HbHta_uvfHPtIch1mrnKHOKjdFvs96gjjcnTrcEdNdUYgxFuelE1IzuB_ETEvA7YE10U_GV6B9uqzsWuir9a99pCpRTPBXy_qQ2Ul9tkA-SgaZaRHK_dXPm7xpnb4oDixLdKMSeT9_Q_ODPsN7HX-oFVjf8GEk74knHu5E_wVYVncUmLSiBS8jfEKLmsGrEM')",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                  <span className="inline-flex items-center rounded-md bg-purple-400/20 px-2 py-1 text-xs font-medium text-purple-300 ring-1 ring-inset ring-purple-400/30 mb-2">
                    Managed Strategy
                  </span>
                  <h3 className="text-2xl font-bold text-white">Vaults</h3>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-slate-600 mb-6">
                  Deposit IDRP into automated or trader-managed vaults. Capital
                  is deployed across multiple strategies to maximize yield while
                  hedging risk.
                </p>
                <div className="mt-auto space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-sm text-slate-500">Target APY</span>
                    <span className="font-bold text-slate-900">
                      12% - 18%
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-sm text-slate-500">Liquidity</span>
                    <span className="font-bold text-slate-900">
                      Monthly / Quarterly
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full mt-4 border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    View Vaults
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-50 border-t border-gray-200">
        <Container>
          <h3 className="text-xl font-bold text-slate-900 mb-8">
            Live Opportunities
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-5 hover:border-primary/50 hover:shadow-md cursor-pointer transition-all">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center">
                    <Icon name="agriculture" className="text-slate-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      Brazil Cerrado Lot #402
                    </h4>
                    <span className="text-xs text-slate-500">
                      Marketplace • Senior Debt
                    </span>
                  </div>
                </div>
                <span className="text-primary text-sm font-bold">
                  11.5% APY
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                <div
                  className="bg-primary h-1.5 rounded-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-slate-500">
                <span>$750k / $1M Filled</span>
                <span>24 Days left</span>
              </div>
            </Card>
            <Card className="p-5 hover:border-primary/50 hover:shadow-md cursor-pointer transition-all">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center">
                    <Icon name="candlestick_chart" className="text-slate-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      Alpha Origin Yield
                    </h4>
                    <span className="text-xs text-slate-500">
                      Vault • Quant Strategy
                    </span>
                  </div>
                </div>
                <span className="text-primary text-sm font-bold">
                  14.2% APY
                </span>
              </div>
              <div className="flex gap-2 mb-2">
                <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-600 text-[10px] font-medium border border-blue-100">
                  Auto-Compounding
                </span>
                <span className="px-2 py-0.5 rounded bg-orange-50 text-orange-600 text-[10px] font-medium border border-orange-100">
                  Med Risk
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-2">
                Current TVL: $2.4M
              </p>
            </Card>
            <Card className="p-5 hover:border-primary/50 hover:shadow-md cursor-pointer transition-all">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center">
                    <Icon name="agriculture" className="text-slate-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      Vietnam Robusta Batch A
                    </h4>
                    <span className="text-xs text-slate-500">
                      Marketplace • Trade Finance
                    </span>
                  </div>
                </div>
                <span className="text-primary text-sm font-bold">9.8% APY</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                <div
                  className="bg-primary h-1.5 rounded-full"
                  style={{ width: "30%" }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-slate-500">
                <span>$150k / $500k Filled</span>
                <span>45 Days left</span>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
        <Container>
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8">
              <div className="flex items-center gap-2 text-slate-900">
                <Icon name="coffee" className="text-primary" />
                <span className="text-xl font-bold">APLX</span>
              </div>
              <p className="text-sm leading-6 text-slate-500">
                Bridging the gap between real-world coffee commodities and
                decentralized finance. Secure, transparent, and profitable.
              </p>
              <div className="flex space-x-6">
                <a
                  className="text-slate-400 hover:text-slate-900"
                  href="#"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    aria-hidden="true"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a
                  className="text-slate-400 hover:text-slate-900"
                  href="#"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    aria-hidden="true"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-slate-900">
                    Platform
                  </h3>
                  <ul className="mt-6 space-y-4" role="list">
                    <li>
                      <Link
                        className="text-sm leading-6 text-slate-500 hover:text-primary"
                        href="#"
                      >
                        Marketplace
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-sm leading-6 text-slate-500 hover:text-primary"
                        href="#"
                      >
                        Vaults
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-sm leading-6 text-slate-500 hover:text-primary"
                        href="#"
                      >
                        Portfolio
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-sm leading-6 text-slate-500 hover:text-primary"
                        href="#"
                      >
                        IDRP Stablecoin
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-slate-900">
                    Company
                  </h3>
                  <ul className="mt-6 space-y-4" role="list">
                    <li>
                      <Link
                        className="text-sm leading-6 text-slate-500 hover:text-primary"
                        href="#"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-sm leading-6 text-slate-500 hover:text-primary"
                        href="#"
                      >
                        Partners
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-sm leading-6 text-slate-500 hover:text-primary"
                        href="#"
                      >
                        Legal
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-sm leading-6 text-slate-500 hover:text-primary"
                        href="#"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-slate-900">
                    Resources
                  </h3>
                  <ul className="mt-6 space-y-4" role="list">
                    <li>
                      <Link
                        className="text-sm leading-6 text-slate-500 hover:text-primary"
                        href="#"
                      >
                        Documentation
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-sm leading-6 text-slate-500 hover:text-primary"
                        href="#"
                      >
                        Risk Disclosure
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-sm leading-6 text-slate-500 hover:text-primary"
                        href="#"
                      >
                        Audits
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-gray-200 pt-8 sm:mt-20 lg:mt-24">
            <p className="text-xs leading-5 text-slate-500">
              © 2024 APLX Holdings. All rights reserved.
            </p>
            <p className="text-xs leading-5 text-slate-400 mt-2">
              Disclaimer: Investment in crypto assets and commodity-backed tokens
              involves risk. Past performance is not indicative of future results.
              Please read our full risk disclosure statement before investing.
              IDRP is a stablecoin pegged to the underlying value of assets in the
              APLX ecosystem.
            </p>
          </div>
        </Container>
      </footer>
    </div>
  );
}
