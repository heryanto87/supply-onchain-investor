import { Icon } from "@/components/ui/icon";
import { StatsCards } from "@/components/admin/overview/stats-cards";
import { ActivityList } from "@/components/admin/overview/activity-list";
import { getActivities, getOverviewStats } from "@/lib/api/overview";

export default async function AdminOverviewPage() {
  // Server Component: Fetch data on the server
  const [stats, activities] = await Promise.all([
    getOverviewStats(),
    getActivities(),
  ]);

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
        <StatsCards stats={stats} />
        <ActivityList activities={activities} />
      </div>
    </main>
  );
}
