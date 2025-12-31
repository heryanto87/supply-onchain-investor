"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/icon";

export function SidebarInvestor() {
    return (
        <aside className="hidden lg:flex flex-col w-64 border-r border-neutral-100 bg-white sticky top-16 h-[calc(100vh-4rem)] p-6 gap-2 shrink-0">
            <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2 px-3">
                Menu
            </p>
            <Link
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/5 text-primary font-bold text-sm transition-colors group"
                href="/investor/dashboard"
            >
                <Icon name="grid_view" className="text-[20px]" />
                Overview
            </Link>
            <Link
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral-600 hover:text-primary hover:bg-neutral-50 font-semibold text-sm transition-colors group"
                href="#"
            >
                <Icon
                    name="monetization_on"
                    className="text-[20px] text-neutral-400 group-hover:text-primary transition-colors"
                />
                Investment
            </Link>
            <Link
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral-600 hover:text-primary hover:bg-neutral-50 font-semibold text-sm transition-colors group"
                href="#"
            >
                <Icon
                    name="fact_check"
                    className="text-[20px] text-neutral-400 group-hover:text-primary transition-colors"
                />
                Approval
            </Link>
        </aside>
    );
}
