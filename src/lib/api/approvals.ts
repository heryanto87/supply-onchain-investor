import type { ApprovalRequest } from "@/types/approval";
import { MOCK_INBOX_REQUESTS, MOCK_INITIATED_REQUESTS } from "@/data/mock-approvals";

export type ApprovalFilters = {
  requestType?: string;
  vault?: string;
  status?: string;
};

export async function getInboxRequests(
  filters?: ApprovalFilters,
): Promise<ApprovalRequest[]> {
  // TODO: Replace with actual API call
  let requests = [...MOCK_INBOX_REQUESTS];

  if (filters?.requestType && filters.requestType !== "All Request Types") {
    const typeMap: Record<string, ApprovalRequest["type"]> = {
      "Add Tradeable Asset": "ADD_ASSET",
      "Close Vault": "CLOSE_VAULT",
      "Cash Out": "CASH_OUT",
    };
    const type = typeMap[filters.requestType];
    if (type) {
      requests = requests.filter((req) => req.type === type);
    }
  }

  if (filters?.vault && filters.vault !== "All Vaults") {
    requests = requests.filter((req) => req.vault === filters.vault);
  }

  if (filters?.status && filters.status !== "Pending") {
    const statusMap: Record<string, ApprovalRequest["status"]> = {
      Signed: "APPROVED",
      Rejected: "REJECTED",
    };
    const status = statusMap[filters.status];
    if (status) {
      requests = requests.filter((req) => req.status === status);
    }
  }

  return Promise.resolve(requests);
}

export async function getInitiatedRequests(): Promise<ApprovalRequest[]> {
  // TODO: Replace with actual API call
  return Promise.resolve([...MOCK_INITIATED_REQUESTS]);
}

