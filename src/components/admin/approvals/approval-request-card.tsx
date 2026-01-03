"use client";

import type { ApprovalRequest } from "@/types/approval";
import { ProgressBadge } from "./progress-badge";

type ApprovalRequestCardProps = {
  request: ApprovalRequest;
  onReview: (request: ApprovalRequest) => void;
  showActionButton?: boolean;
};

export function ApprovalRequestCard({
  request,
  onReview,
  showActionButton = true,
}: ApprovalRequestCardProps) {
  const progressPercentage =
    (request.progress.current / request.progress.required) * 100;

  const progressColorMap: Record<
    ApprovalRequest["progressColor"],
    string
  > = {
    accent: "bg-accent",
    info: "bg-info",
    danger: "bg-danger",
    "neutral-400": "bg-neutral-400",
  };

  return (
    <div
      className="bg-neutral-50 border border-neutral-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
      onClick={() => onReview(request)}
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-bold text-neutral-900">{request.title}</h3>
        <ProgressBadge
          variant={request.progressBadge.variant}
          label={request.progressBadge.label}
        />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-xs text-neutral-600 mb-3">
        <div>
          <span className="font-medium">Subtext:</span> {request.subtext}
        </div>
        <div>
          <span className="font-medium">
            {request.isInitiatedByAdmin ? "Target Vault:" : "Vault:"}
          </span>{" "}
          {request.isInitiatedByAdmin ? request.targetVault : request.vault}
        </div>
        <div>
          <span className="font-medium">
            {request.isInitiatedByAdmin ? "Last Updated:" : "Created:"}
          </span>{" "}
          {request.isInitiatedByAdmin
            ? request.lastUpdated
            : request.created}
        </div>
        <div>
          <span className="font-medium">Progress:</span>{" "}
          {request.progress.current} of {request.progress.required} signed
        </div>
      </div>
      <div className="h-1 bg-neutral-200 rounded-full overflow-hidden mb-4">
        <div
          className={`h-full ${progressColorMap[request.progressColor]}`}
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      {showActionButton && (
        <div className="text-right">
          {request.canSign ? (
            <button
              className="bg-primary text-white hover:bg-primary/90 transition-colors text-sm font-bold px-4 py-2 rounded-lg"
              onClick={(e) => {
                e.stopPropagation();
                onReview(request);
              }}
            >
              Review & Sign
            </button>
          ) : (
            <button
              className="bg-neutral-200 text-neutral-600 cursor-not-allowed text-sm font-bold px-4 py-2 rounded-lg"
              disabled
            >
              Pending External
            </button>
          )}
        </div>
      )}
      {!showActionButton && request.isInitiatedByAdmin && (
        <div className="text-right">
          {!request.hasAdminSigned ? (
            <button
              className="bg-primary text-white hover:bg-primary/90 transition-colors text-sm font-bold px-4 py-2 rounded-lg"
              onClick={(e) => {
                e.stopPropagation();
                onReview(request);
              }}
            >
              Sign Now
            </button>
          ) : (
            <button
              className="bg-neutral-200 text-neutral-600 cursor-not-allowed text-sm font-bold px-4 py-2 rounded-lg"
              disabled
            >
              Pending External
            </button>
          )}
        </div>
      )}
    </div>
  );
}

