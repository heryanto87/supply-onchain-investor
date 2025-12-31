import Link from "next/link";
import React from "react";
import { type Metadata } from "next";
import { NavbarInvestor } from "@/components/navbar-investor";
import { SidebarInvestor } from "@/components/sidebar-investor";

export const metadata: Metadata = {
    title: "Investor Dashboard | APLX",
    description: "Manage your commodity investments and wallet.",
};

export default function InvestorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="bg-white text-neutral-900 min-h-screen flex flex-col antialiased selection:bg-accent selection:text-white">
            {/* Header */}
            <NavbarInvestor />

            {/* Main Layout */}
            <div className="flex flex-1 w-full max-w-[1600px] mx-auto">
                {/* Sidebar */}
                <SidebarInvestor />

                {/* Page Content */}
                {children}
            </div>

            {/* Footer */}
            <footer className="border-t border-neutral-100 bg-white py-10 mt-auto">
                <div className="max-w-[1440px] mx-auto px-4 md:px-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-neutral-500">
                    <div>© 2024 APLX Platform. All rights reserved.</div>
                    <div className="flex gap-8">
                        <Link className="hover:text-primary transition-colors" href="#">
                            Privacy Policy
                        </Link>
                        <Link className="hover:text-primary transition-colors" href="#">
                            Terms of Use
                        </Link>
                        <Link className="hover:text-primary transition-colors" href="#">
                            Support
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
