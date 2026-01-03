"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/cn";

export function SidebarAdmin() {
  const pathname = usePathname();

  const getLinkClasses = (path: string) => {
    const isActive = pathname === path;
    return cn(
      "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors group",
      isActive
        ? "bg-primary/5 text-primary font-bold"
        : "text-neutral-600 hover:text-primary hover:bg-neutral-50 font-semibold",
    );
  };

  const getIconClasses = (path: string) => {
    const isActive = pathname === path;
    return cn(
      "text-[20px] transition-colors",
      isActive
        ? "text-primary"
        : "text-neutral-400 group-hover:text-primary",
    );
  };

  return (
    <aside className="hidden lg:flex flex-col w-64 border-r border-neutral-100 bg-white sticky top-16 h-[calc(100vh-4rem)] p-6 gap-2 shrink-0">
      <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2 px-3">
        Menu
      </p>
      <Link
        className={getLinkClasses("/admin")}
        href="/admin"
      >
        <Icon
          name="grid_view"
          className={getIconClasses("/admin")}
        />
        Overview
      </Link>
      <Link
        className={getLinkClasses("/admin/users")}
        href="/admin/users"
      >
        <Icon
          name="group"
          className={getIconClasses("/admin/users")}
        />
        User Management
      </Link>
      <Link
        className={getLinkClasses("/admin/vaults")}
        href="/admin/vaults"
      >
        <Icon
          name="account_balance"
          className={getIconClasses("/admin/vaults")}
        />
        Vault Management
      </Link>
      <Link
        className={getLinkClasses("/admin/approval")}
        href="/admin/approval"
      >
        <Icon
          name="fact_check"
          className={getIconClasses("/admin/approval")}
        />
        Approval Hub
      </Link>
    </aside>
  );
}

