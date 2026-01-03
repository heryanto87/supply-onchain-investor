import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

type Activity = {
  id: string;
  type: "vault" | "user" | "approval" | "transaction";
  title: string;
  description: string;
  timestamp: string;
  status?: "pending" | "completed" | "rejected";
  icon: string;
};

const MOCK_ACTIVITIES: Activity[] = [
  {
    id: "1",
    type: "vault",
    title: "New Vault Created",
    description: "Gayo Coffee Harvest 2024 by Trader Budi Santoso",
    timestamp: "2 hours ago",
    status: "completed",
    icon: "account_balance",
  },
  {
    id: "2",
    type: "approval",
    title: "Fund Release Request",
    description: "IDRP 50M for Vault Alpha - Waiting for Admin Signature",
    timestamp: "5 hours ago",
    status: "pending",
    icon: "payments",
  },
  {
    id: "3",
    type: "user",
    title: "New Investor Registered",
    description: "Bob Investor completed KYC verification",
    timestamp: "1 day ago",
    status: "completed",
    icon: "person_add",
  },
  {
    id: "4",
    type: "vault",
    title: "Vault Status Updated",
    description: "Robusta Coffee Harvest moved to ACTIVE status",
    timestamp: "2 days ago",
    status: "completed",
    icon: "update",
  },
  {
    id: "5",
    type: "approval",
    title: "Add Asset Request",
    description: "Trader requesting to add Cocoa Beans to Vault Beta",
    timestamp: "3 days ago",
    status: "pending",
    icon: "add_circle",
  },
  {
    id: "6",
    type: "transaction",
    title: "Large Investment",
    description: "IDRP 120M investment in Gayo Coffee Harvest 2024",
    timestamp: "4 days ago",
    status: "completed",
    icon: "trending_up",
  },
];

function StatsCard({
  title,
  value,
  subtitle,
  icon,
  trend,
  buttonLabel,
  buttonHref,
}: {
  title: string;
  value: string;
  subtitle?: string;
  icon: string;
  trend?: { value: string; isPositive: boolean };
  buttonLabel?: string;
  buttonHref?: string;
}) {
  return (
    <div className="bg-primary text-white rounded-2xl p-6 lg:p-10 shadow-soft flex flex-col justify-between items-start gap-6 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-80 h-80 bg-accent opacity-10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="flex items-center justify-between w-full relative z-10">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-white/10">
            <Icon name={icon} className="text-[24px] text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">{title}</h2>
            {subtitle && (
              <p className="text-xs font-medium text-white/60">{subtitle}</p>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start relative z-10 w-full">
        <p className="text-sm font-medium mb-1 opacity-80">Number of Vaults</p>
        <div className="flex items-baseline flex-wrap">
          <span className="text-4xl font-extrabold tracking-tight text-white">
            {value}
          </span>
        </div>
        {trend && (
          <p className="text-xs mt-2 font-medium flex items-center gap-1 text-white/80">
            <span
              className={`font-bold flex items-center ${
                trend.isPositive ? "text-success" : "text-danger"
              }`}
            >
              <Icon
                name={trend.isPositive ? "arrow_upward" : "arrow_downward"}
                className="text-[14px]"
              />{" "}
              {trend.value}
            </span>
            vs last month
          </p>
        )}
      </div>
      {buttonLabel && (
        <div className="w-full pt-6 border-t border-white/10 relative z-10">
          {buttonHref ? (
            <Link href={buttonHref}>
              <Button
                variant="outline-white"
                size="lg"
                className="w-full rounded-xl"
              >
                {buttonLabel}
              </Button>
            </Link>
          ) : (
            <Button
              variant="outline-white"
              size="lg"
              className="w-full rounded-xl"
            >
              {buttonLabel}
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

function ActivityList({ activities }: { activities: Activity[] }) {
  const getStatusColor = (status?: string) => {
    switch (status) {
      case "pending":
        return "bg-warning/10 text-warning";
      case "completed":
        return "bg-success/10 text-success";
      case "rejected":
        return "bg-danger/10 text-danger";
      default:
        return "bg-neutral-100 text-neutral-600";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "vault":
        return "account_balance";
      case "user":
        return "group";
      case "approval":
        return "fact_check";
      case "transaction":
        return "payments";
      default:
        return "info";
    }
  };

  return (
    <div className="flex flex-col gap-4 bg-white border border-neutral-200 rounded-2xl p-6 shadow-soft flex-1">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
          <Icon name="history" className="text-primary text-[20px]" />
          Recent Activity
        </h2>
        <Button variant="ghost" size="sm">
          View All
        </Button>
      </div>
      <div className="flex flex-col gap-3 overflow-y-auto pr-1 max-h-[500px]">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-center justify-between p-3 rounded-lg bg-neutral-50 border border-neutral-100 hover:bg-neutral-100 transition-colors"
          >
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="size-8 rounded-full bg-primary/5 text-primary flex items-center justify-center shrink-0">
                <Icon name={getTypeIcon(activity.type)} className="text-[16px]" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-neutral-900 truncate">
                  {activity.title}
                </p>
                <p className="text-xs text-neutral-600 truncate">
                  {activity.description}
                </p>
                <p className="text-[10px] text-neutral-500 mt-1">
                  {activity.timestamp}
                </p>
              </div>
            </div>
            {activity.status && (
              <span
                className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-semibold ring-1 ring-inset ${getStatusColor(
                  activity.status,
                )} shrink-0 ml-2`}
              >
                {activity.status.charAt(0).toUpperCase() +
                  activity.status.slice(1)}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AdminOverviewPage() {
  return (
    <main className="flex-1 w-full px-4 md:px-8 py-8 flex flex-col gap-8 overflow-hidden">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-neutral-900">Overview</h1>
        <div className="lg:hidden flex items-center gap-2">
          <button className="flex items-center gap-2 text-sm font-bold text-neutral-600 hover:text-primary">
            <Icon name="menu" />
            Menu
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-6 lg:gap-8">
        {/* Hero Stats Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <StatsCard
            title="Total Active Vaults"
            value="24"
            subtitle="Currently operational vaults"
            icon="account_balance"
            trend={{ value: "+3", isPositive: true }}
            buttonLabel="Manage Vaults"
            buttonHref="/admin/vaults"
          />
          <StatsCard
            title="Total Registered Users"
            value="1,240"
            subtitle="Platform users"
            icon="trending_up"
            trend={{ value: "+12%", isPositive: true }}
            buttonLabel="View Users"
            buttonHref="/admin/users"
          />
        </div>

        {/* Activity List */}
        <ActivityList activities={MOCK_ACTIVITIES} />
      </div>
    </main>
  );
}
