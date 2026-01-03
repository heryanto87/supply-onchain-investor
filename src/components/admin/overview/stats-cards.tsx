import { StatsCard } from "./stats-card";
import type { OverviewStats } from "@/types/overview";

type StatsCardsProps = {
  stats: OverviewStats;
};

export function StatsCards({ stats }: StatsCardsProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
      <StatsCard
        title="Total Active Vaults"
        value={stats.totalActiveVaults.toString()}
        subtitle="Currently operational vaults"
        icon="account_balance"
        badge="Active"
        label="Number of Vaults"
        buttonLabel="Manage Vaults"
        buttonHref="/admin/vaults"
      />
      <StatsCard
        title="Total Registered Users"
        value={stats.totalRegisteredUsers.toLocaleString()}
        subtitle="Platform users"
        icon="group"
        badge="Investors"
        label="Total Users"
        buttonLabel="View Users"
        buttonHref="/admin/users"
      />
    </div>
  );
}

