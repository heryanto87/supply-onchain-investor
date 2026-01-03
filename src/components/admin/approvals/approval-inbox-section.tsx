"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/icon";
import { ApprovalFilters } from "./approval-filters";
import { ApprovalRequestCard } from "./approval-request-card";
import type { ApprovalRequest } from "@/types/approval";

type ApprovalInboxSectionProps = {
  requests: ApprovalRequest[];
  onReview: (request: ApprovalRequest) => void;
};

export function ApprovalInboxSection({
  requests,
  onReview,
}: ApprovalInboxSectionProps) {
  const [requestType, setRequestType] = useState("All Request Types");
  const [vault, setVault] = useState("All Vaults");
  const [status, setStatus] = useState("Pending");

  // Filter requests based on current filters
  const filteredRequests = requests.filter((req) => {
    if (requestType !== "All Request Types") {
      const typeMap: Record<string, ApprovalRequest["type"]> = {
        "Add Tradeable Asset": "ADD_ASSET",
        "Close Vault": "CLOSE_VAULT",
        "Cash Out": "CASH_OUT",
      };
      const expectedType = typeMap[requestType];
      if (expectedType && req.type !== expectedType) return false;
    }

    if (vault !== "All Vaults" && req.vault !== vault) return false;

    if (status === "Signed" && req.status !== "APPROVED") return false;
    if (status === "Rejected" && req.status !== "REJECTED") return false;
    if (status === "Pending" && req.status !== "PENDING") return false;

    return true;
  });

  return (
    <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-soft flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-bold text-neutral-900 flex items-center gap-2">
          <Icon name="inbox" className="text-primary text-[24px]" />
          Admin Approval Hub{" "}
          <span className="text-neutral-500 font-medium text-sm">(Inbox)</span>
        </h2>
        <p className="text-sm text-neutral-600 mt-1">
          Requests waiting for your sign. Immediate action required.
        </p>
      </div>

      <ApprovalFilters
        requestType={requestType}
        vault={vault}
        status={status}
        onRequestTypeChange={setRequestType}
        onVaultChange={setVault}
        onStatusChange={setStatus}
      />

      <div className="flex flex-col gap-4">
        {filteredRequests.length === 0 ? (
          <p className="text-center text-neutral-500 py-8 text-sm">
            No requests found matching your filters.
          </p>
        ) : (
          filteredRequests.map((request) => (
            <ApprovalRequestCard
              key={request.id}
              request={request}
              onReview={onReview}
            />
          ))
        )}
      </div>
    </div>
  );
}

