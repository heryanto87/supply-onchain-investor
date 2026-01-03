"use client";

import { Icon } from "@/components/ui/icon";
import { ApprovalRequestCard } from "./approval-request-card";
import type { ApprovalRequest } from "@/types/approval";

type ApprovalMonitoringSectionProps = {
  requests: ApprovalRequest[];
  onReview: (request: ApprovalRequest) => void;
};

export function ApprovalMonitoringSection({
  requests,
  onReview,
}: ApprovalMonitoringSectionProps) {
  return (
    <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-soft flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-bold text-neutral-900 flex items-center gap-2">
          <Icon name="track_changes" className="text-accent text-[24px]" />
          Admin Initiated Actions{" "}
          <span className="text-neutral-500 font-medium text-sm">(Monitoring)</span>
        </h2>
        <p className="text-sm text-neutral-600 mt-1">
          Requests you initiated, tracking progress and accountability.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {requests.length === 0 ? (
          <p className="text-center text-neutral-500 py-8 text-sm">
            No initiated requests found.
          </p>
        ) : (
          requests.map((request) => (
            <ApprovalRequestCard
              key={request.id}
              request={request}
              onReview={onReview}
              showActionButton={false}
            />
          ))
        )}
      </div>
    </div>
  );
}

