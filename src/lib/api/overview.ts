import type { Activity, OverviewStats } from "@/types/overview";
import { MOCK_ACTIVITIES, MOCK_OVERVIEW_STATS } from "@/data/mock-overview";

export async function getActivities(): Promise<Activity[]> {
  // TODO: Replace with actual API call
  return Promise.resolve(MOCK_ACTIVITIES);
}

export async function getOverviewStats(): Promise<OverviewStats> {
  // TODO: Replace with actual API call
  return Promise.resolve(MOCK_OVERVIEW_STATS);
}

