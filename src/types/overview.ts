export type ActivityStatus = "success" | "new" | "pending";

export type ActivityIconBg = "accent" | "primary" | "warning";

export type Activity = {
  id: string;
  title: string;
  date: string;
  status: ActivityStatus;
  icon: string;
  iconBg: ActivityIconBg;
};

export type OverviewStats = {
  totalActiveVaults: number;
  totalRegisteredUsers: number;
};

