"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

export function NavbarInvestor() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-100 bg-white/80 backdrop-blur-md">
      <div className="w-full px-4 md:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="size-8 text-primary group-hover:scale-105 transition-transform">
              <svg
                className="w-full h-full"
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <span className="text-primary text-xl font-bold tracking-tight">
              APLX
            </span>
          </Link>
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              className="text-neutral-600 hover:text-primary transition-colors text-sm font-semibold"
              href="#"
            >
              Vault
            </Link>
            <Link
              className="text-primary text-sm font-bold"
              href="/investor/dashboard"
            >
              Dashboard
            </Link>
            <Link
              className="text-neutral-600 hover:text-primary transition-colors text-sm font-semibold"
              href="#"
            >
              Portfolio
            </Link>
            <Link
              className="text-neutral-600 hover:text-primary transition-colors text-sm font-semibold"
              href="#"
            >
              Wallet
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center bg-neutral-100 rounded-lg px-3 py-2 w-64 border border-transparent focus-within:border-neutral-300 focus-within:bg-white transition-all">
            <Icon name="search" className="text-neutral-400 text-[20px]" />
            <input
              className="bg-transparent border-none text-neutral-900 text-sm w-full focus:ring-0 p-0 pl-2 placeholder:text-neutral-400 font-medium focus:outline-none"
              placeholder="Search..."
              type="text"
              aria-label="Search"
            />
          </div>
          <Button>
            Connect Wallet
          </Button>
          <div className="relative size-9 rounded-full bg-neutral-100 border border-neutral-200 overflow-hidden shrink-0">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdeveb3CbjZl_QWzX4LrPRHEwGQ6gaWVmGcrXaxF7lnMicQx-GdWqPwXkkQ0nGUm4KQnMAQeP_nJaBBqTM3wr2EAIfz3wSnwbpzg6BjkxOtu7Ymn2MpXkbhYjdv6no5dH-EO4cQgCOtXIRfcOuozciBIfoRDFeFaF-gJe_DjVgz6W-IyLvtCrvmt2O2odt3iKVf_TFTCjJeBDOBYIaVtzxTlu_5qWBCSGhx56Y2y4LoncS55TAhFhMnC2iieGWBL3psiGRW6xBlpxv"
              alt="User Profile"
              fill
              className="object-cover"
              sizes="36px"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
