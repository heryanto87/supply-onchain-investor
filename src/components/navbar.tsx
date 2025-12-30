"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

import { Icon } from "@/components/ui/icon";

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const isLoginPage = pathname === "/login";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <Link href="/homepage" className="flex items-center gap-2">
              <div className="size-8 rounded bg-primary flex items-center justify-center text-accent">
                <span className="material-symbols-outlined text-2xl">eco</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-primary">APLX</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <Link className="text-sm font-semibold text-neutral-500 hover:text-primary transition-colors" href="#">Vault</Link>
            <div className="relative group">
              <Link className="text-sm font-semibold text-neutral-400 cursor-not-allowed flex items-center gap-1" href="#">
                Marketplace
                <span className="bg-neutral-100 text-neutral-500 text-[10px] px-1.5 py-0.5 rounded border border-neutral-200 font-bold uppercase">Soon</span>
              </Link>
            </div>
            <Link className="text-sm font-semibold text-neutral-500 hover:text-primary transition-colors" href="#">How it Works</Link>
          </div>

          <div className="flex items-center gap-4">
            {!isLoginPage && (
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 border border-neutral-200">
                <span className="size-2 rounded-full bg-accent animate-pulse"></span>
                <span className="text-xs font-semibold text-neutral-800">IDRP: 1.00 IDR</span>
              </div>
            )}
            <button 
              className="hidden sm:flex items-center justify-center px-5 h-10 rounded-lg bg-primary hover:bg-neutral-800 text-white font-bold text-sm transition-all shadow-sm"
              onClick={() => router.push(isLoginPage ? "#" : "/login")}
            >
              {isLoginPage ? "Help" : "Connect Wallet"}
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-neutral-600 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Icon name={isMobileMenuOpen ? "close" : "menu"} className="text-2xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white px-4 py-6 shadow-lg h-screen overflow-y-auto">
          <nav className="flex flex-col gap-6">
            <Link className="text-lg font-semibold text-neutral-600 hover:text-primary transition-colors" href="#" onClick={() => setIsMobileMenuOpen(false)}>Vault</Link>
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-neutral-400 cursor-not-allowed">Marketplace</span>
              <span className="bg-neutral-100 text-neutral-500 text-xs px-2 py-1 rounded border border-neutral-200 font-bold uppercase">Soon</span>
            </div>
            <Link className="text-lg font-semibold text-neutral-600 hover:text-primary transition-colors" href="#" onClick={() => setIsMobileMenuOpen(false)}>How it Works</Link>
            <hr className="border-neutral-100" />
            {!isLoginPage && (
              <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-neutral-50 border border-neutral-100">
                <span className="text-sm font-semibold text-neutral-600">Exchange Rate</span>
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-accent animate-pulse"></span>
                  <span className="text-sm font-bold text-neutral-800">IDRP: 1.00 IDR</span>
                </div>
              </div>
            )}
            <button 
              className="w-full py-3 rounded-lg bg-primary text-white font-bold text-base shadow-sm"
              onClick={() => {
                router.push(isLoginPage ? "#" : "/login");
                setIsMobileMenuOpen(false);
              }}
            >
              {isLoginPage ? "Help" : "Connect Wallet"}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
