export type ApprovalRequestType =
  | "ADD_ASSET"
  | "CLOSE_VAULT"
  | "CASH_OUT"
  | "FUND_RELEASE"
  | "OTHER";

export type ApprovalRequestStatus = "PENDING" | "APPROVED" | "REJECTED" | "EXPIRED" | "CANCELED";

export type ProgressBadgeVariant = "pending" | "in-progress" | "critical" | "waiting";

export type ApprovalRequest = {
  id: string;
  type: ApprovalRequestType;
  status: ApprovalRequestStatus;
  title: string; // e.g., "Request: Add Tradeable Asset"
  subtext: string; // e.g., "Trader John adding 50 Tons Coffee"
  vault: string; // Vault name
  created: string; // Formatted date
  lastUpdated?: string; // For monitoring section
  progress: {
    current: number;
    required: number;
  };
  progressBadge: {
    variant: ProgressBadgeVariant;
    label: string; // e.g., "Pending Your Sign", "1/3 Signed", "Critical"
  };
  progressColor: "accent" | "info" | "danger" | "neutral-400";
  initiatedBy?: string; // For inbox requests
  targetVault?: string; // For monitoring section
  canSign: boolean; // Whether admin can sign this request
  isInitiatedByAdmin?: boolean; // For monitoring section
  hasAdminSigned?: boolean; // Whether admin has already signed (for monitoring section)
};

