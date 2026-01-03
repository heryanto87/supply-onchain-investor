"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/icon";
import type { Activity } from "@/types/overview";

type ActivityListProps = {
  activities: Activity[];
};

function getStatusColor(status: Activity["status"]): string {
  switch (status) {
    case "success":
      return "text-accent";
    case "new":
      return "text-primary";
    case "pending":
      return "text-warning";
    default:
      return "text-neutral-600";
  }
}

function getIconBg(bg: Activity["iconBg"]): string {
  switch (bg) {
    case "accent":
      return "bg-accent/10 text-accent";
    case "primary":
      return "bg-primary/5 text-primary";
    case "warning":
      return "bg-warning/10 text-warning";
    default:
      return "bg-neutral-100 text-neutral-600";
  }
}

export function ActivityList({ activities }: ActivityListProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredActivities = activities.filter((activity) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      activity.title.toLowerCase().includes(query) ||
      activity.date.toLowerCase().includes(query)
    );
  });

  return (
    <div className="flex flex-col gap-4 bg-white border border-neutral-200 rounded-2xl p-6 shadow-soft flex-1">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
          <Icon name="history" className="text-primary text-[20px]" />
          Recent System Activity
        </h2>
      </div>
      <div className="relative">
        <Icon
          name="search"
          className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 text-[18px]"
        />
        <input
          className="block w-full rounded-lg border-neutral-200 bg-neutral-50 py-2 pl-9 pr-4 text-xs font-medium text-neutral-900 focus:border-primary focus:ring-primary placeholder:text-neutral-400"
          placeholder="Filter activity..."
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-3 overflow-y-auto pr-1 max-h-[500px]">
        {filteredActivities.length === 0 ? (
          <p className="text-center text-neutral-500 py-8 text-sm">
            No activities found.
          </p>
        ) : (
          filteredActivities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center justify-between p-3 rounded-lg bg-neutral-50 border border-neutral-100 hover:bg-neutral-100 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`size-8 rounded-full flex items-center justify-center shrink-0 ${getIconBg(
                    activity.iconBg,
                  )}`}
                >
                  <Icon name={activity.icon} className="text-[16px]" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-neutral-900 truncate">
                    {activity.title}
                  </p>
                  <p className="text-[10px] text-neutral-600">{activity.date}</p>
                </div>
              </div>
              <span
                className={`text-xs font-bold whitespace-nowrap ${getStatusColor(
                  activity.status,
                )}`}
              >
                {activity.status.charAt(0).toUpperCase() +
                  activity.status.slice(1)}
              </span>
            </div>
          ))
        )}
      </div>
      <button className="mt-auto text-xs font-bold text-primary hover:text-primary/80 transition-colors w-full text-center py-2 border border-dashed border-neutral-300 rounded-lg">
        View All Activity
      </button>
    </div>
  );
}

