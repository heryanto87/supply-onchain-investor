"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";

export function Navbar() {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <Container className="flex h-20 items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/homepage" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center text-primary">
              <svg
                className="h-8 w-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2L2 7V17L12 22L22 17V7L12 2ZM12 4.5L19.5 8.25L12 12L4.5 8.25L12 4.5ZM4 15.5V9.5L11 13V19L4 15.5ZM13 19V13L20 9.5V15.5L13 19Z"></path>
                <circle cx="12" cy="12" r="2"></circle>
              </svg>
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-900 uppercase">
              APLX
            </span>
          </Link>
        </div>

        <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-10 md:flex">
          {!isLoginPage ? (
            <>
              <Link
                className="relative py-2 text-base text-gray-500 transition-colors hover:text-slate-900 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:rounded-t-sm after:bg-primary after:content-[''] after:transition-all after:duration-300 hover:after:w-full"
                href="#"
              >
                How It Works
              </Link>
              <Link
                className="relative py-2 text-base text-gray-500 transition-colors hover:text-slate-900 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:rounded-t-sm after:bg-primary after:content-[''] after:transition-all after:duration-300 hover:after:w-full"
                href="#"
              >
                Marketplace
              </Link>
              <Link
                className="relative py-2 text-base text-gray-500 transition-colors hover:text-slate-900 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:rounded-t-sm after:bg-primary after:content-[''] after:transition-all after:duration-300 hover:after:w-full"
                href="#"
              >
                Vaults
              </Link>
            </>
          ) : (
            <Link
              className="relative py-2 text-base text-gray-500 transition-colors hover:text-slate-900 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:rounded-t-sm after:bg-primary after:content-[''] after:transition-all after:duration-300 hover:after:w-full"
              href="/homepage"
            >
              Back to Home
            </Link>
          )}
        </nav>

        <div className="flex items-center gap-4">
          {!isLoginPage ? (
            <Button className="hidden px-6 shadow-lg shadow-primary/30 md:flex">
              <Icon name="arrow_forward" className="text-xl" />
              Continue
            </Button>
          ) : (
            <Button className="hidden px-6 shadow-lg shadow-primary/30 md:flex">
              Sign Up
            </Button>
          )}

          <Button
            variant="ghost"
            className="p-2 text-slate-900 md:hidden"
            aria-label="Open menu"
          >
            <Icon name="menu" />
          </Button>
        </div>
      </Container>
    </header>
  );
}
