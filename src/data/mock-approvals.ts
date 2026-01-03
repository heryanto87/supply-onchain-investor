import type { ApprovalRequest } from "@/types/approval";

export const MOCK_INBOX_REQUESTS: ApprovalRequest[] = [
  {
    id: "1",
    type: "ADD_ASSET",
    status: "PENDING",
    title: "Request: Add Tradeable Asset",
    subtext: "Trader John adding 50 Tons Coffee",
    vault: "Vault Alpha",
    created: "Jan 22, 11:00 AM",
    progress: {
      current: 0,
      required: 3,
    },
    progressBadge: {
      variant: "pending",
      label: "Pending Your Sign",
    },
    progressColor: "accent",
    initiatedBy: "Trader John",
    canSign: true,
  },
  {
    id: "2",
    type: "CASH_OUT",
    status: "PENDING",
    title: "Request: Investor Cash Out",
    subtext: "Investor Jane requesting IDRP 50M",
    vault: "Vault Beta",
    created: "Jan 22, 09:30 AM",
    progress: {
      current: 1,
      required: 3,
    },
    progressBadge: {
      variant: "in-progress",
      label: "1/3 Signed",
    },
    progressColor: "info",
    initiatedBy: "Investor Jane",
    canSign: true,
  },
  {
    id: "3",
    type: "CLOSE_VAULT",
    status: "PENDING",
    title: "Request: Close Vault",
    subtext: "Initiated by Trader Mike",
    vault: "Vault Gamma",
    created: "Jan 21, 04:00 PM",
    progress: {
      current: 0,
      required: 3,
    },
    progressBadge: {
      variant: "critical",
      label: "Critical",
    },
    progressColor: "danger",
    initiatedBy: "Trader Mike",
    canSign: true,
  },
];

export const MOCK_INITIATED_REQUESTS: ApprovalRequest[] = [
  {
    id: "4",
    type: "CLOSE_VAULT",
    status: "PENDING",
    title: "Force Close: Vault Alpha",
    subtext: "Initiated by You (Admin)",
    targetVault: "Vault Alpha",
    vault: "Vault Alpha",
    created: "Jan 22, 11:30 AM",
    lastUpdated: "Jan 22, 11:30 AM",
    progress: {
      current: 0,
      required: 3,
    },
    progressBadge: {
      variant: "waiting",
      label: "Waiting for Trader Sign",
    },
    progressColor: "neutral-400",
    canSign: false,
    isInitiatedByAdmin: true,
    hasAdminSigned: false, // Admin hasn't signed yet
  },
  {
    id: "5",
    type: "ADD_ASSET",
    status: "PENDING",
    title: "Add Asset: Cocoa Beans to Vault Beta",
    subtext: "Initiated by You (Admin)",
    targetVault: "Vault Beta",
    vault: "Vault Beta",
    created: "Jan 22, 10:00 AM",
    lastUpdated: "Jan 22, 10:15 AM",
    progress: {
      current: 1,
      required: 3,
    },
    progressBadge: {
      variant: "in-progress",
      label: "1/3 Signed",
    },
    progressColor: "info",
    canSign: false,
    isInitiatedByAdmin: true,
    hasAdminSigned: true, // Admin has already signed
  },
];

