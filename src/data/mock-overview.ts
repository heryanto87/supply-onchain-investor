import type { Activity, OverviewStats } from "@/types/overview";

export const MOCK_ACTIVITIES: Activity[] = [
  {
    id: "1",
    title: "New User Registered",
    date: "Jan 18 • User ID: #001241",
    status: "success",
    icon: "person_add",
    iconBg: "accent",
  },
  {
    id: "2",
    title: "Vault Created",
    date: "Jan 17 • Vault ID: #VAULT0013",
    status: "new",
    icon: "account_balance",
    iconBg: "primary",
  },
  {
    id: "3",
    title: "Multisig Initiated",
    date: "Jan 16 • Approval ID: #APP0056",
    status: "pending",
    icon: "approval",
    iconBg: "warning",
  },
  {
    id: "4",
    title: "New User Registered",
    date: "Jan 15 • User ID: #001240",
    status: "success",
    icon: "person_add",
    iconBg: "accent",
  },
  {
    id: "5",
    title: "Vault Created",
    date: "Jan 14 • Vault ID: #VAULT0012",
    status: "new",
    icon: "account_balance",
    iconBg: "primary",
  },
];

export const MOCK_OVERVIEW_STATS: OverviewStats = {
  totalActiveVaults: 12,
  totalRegisteredUsers: 1240,
};

