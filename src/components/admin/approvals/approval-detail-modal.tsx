"use client";

import { Icon } from "@/components/ui/icon";
import type { ApprovalRequest } from "@/types/approval";

type ApprovalDetailModalProps = {
  request: ApprovalRequest | null;
  isOpen: boolean;
  onClose: () => void;
  onApprove: (request: ApprovalRequest) => void;
  onReject: (request: ApprovalRequest) => void;
};

export function ApprovalDetailModal({
  request,
  isOpen,
  onClose,
  onApprove,
  onReject,
}: ApprovalDetailModalProps) {
  if (!isOpen || !request) return null;

  const formatRequestType = (type: ApprovalRequest["type"]): string => {
    const typeMap: Record<ApprovalRequest["type"], string> = {
      ADD_ASSET: "Add Tradeable Asset",
      CLOSE_VAULT: "Close Vault",
      CASH_OUT: "Cash Out",
      FUND_RELEASE: "Fund Release",
      OTHER: "Other",
    };
    return typeMap[type] ?? type;
  };

  const formatStatus = (status: ApprovalRequest["status"]): string => {
    return status.charAt(0) + status.slice(1).toLowerCase();
  };

  return (
    <div
      className="fixed inset-0 bg-neutral-900/50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-8 flex flex-col gap-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center pb-4 border-b border-neutral-100">
          <h2 className="text-2xl font-bold text-neutral-900">
            Multisig Request Detail
          </h2>
          <button
            className="text-neutral-400 hover:text-neutral-600 transition-colors"
            onClick={onClose}
            aria-label="Close modal"
          >
            <Icon name="close" />
          </button>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-bold text-neutral-900">Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            <div>
              <span className="font-semibold text-neutral-600">Request Type:</span>{" "}
              <span className="text-neutral-900">{formatRequestType(request.type)}</span>
            </div>
            <div>
              <span className="font-semibold text-neutral-600">Initiator:</span>{" "}
              <span className="text-neutral-900">
                {request.initiatedBy ?? "You (Admin)"}
              </span>
            </div>
            <div>
              <span className="font-semibold text-neutral-600">Vault:</span>{" "}
              <span className="text-neutral-900">
                {request.vault} {request.isInitiatedByAdmin ? "" : "(0xabc123...)"}
              </span>
            </div>
            <div>
              <span className="font-semibold text-neutral-600">Status:</span>{" "}
              <span className="text-info font-bold">{formatStatus(request.status)}</span>
            </div>
          </div>
        </div>

        <div className="border border-neutral-200 rounded-xl p-5 flex flex-col gap-4">
          <h3 className="text-lg font-bold text-neutral-900">Action Details</h3>
          <div className="text-neutral-700">
            <p className="mb-2">{request.subtext}</p>
            <p className="text-sm text-neutral-600 font-mono bg-neutral-50 p-3 rounded-lg overflow-x-auto">
              {JSON.stringify(
                {
                  type: request.type,
                  vaultId: request.vault,
                  subtext: request.subtext,
                },
                null,
                2,
              )}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-bold text-neutral-900">Approval Progress</h3>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-neutral-600 text-sm">Required Signatures:</span>
            <span className="font-bold text-neutral-900">
              {request.progress.current} of {request.progress.required}
            </span>
          </div>
          <ul className="flex flex-col gap-3">
            {/* Mock signature list - in real app, this would come from API */}
            <li className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Icon name="check_circle" className="text-success text-[20px]" />
                <div className="font-semibold text-neutral-900">
                  Admin <span className="text-xs font-medium text-neutral-500">(You)</span>
                </div>
              </div>
              <span className="text-xs text-neutral-600">
                {request.progress.current > 0 ? "Jan 20, 10:45 AM" : "Pending"}
              </span>
            </li>
            <li className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Icon name="schedule" className="text-info text-[20px]" />
                <div className="font-semibold text-neutral-900">Signer B</div>
              </div>
              <span className="text-xs text-neutral-600">Pending</span>
            </li>
            <li className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Icon name="schedule" className="text-info text-[20px]" />
                <div className="font-semibold text-neutral-900">Signer C</div>
              </div>
              <span className="text-xs text-neutral-600">Pending</span>
            </li>
          </ul>
        </div>

        {request.type === "ADD_ASSET" && (
          <div className="border border-red-200 bg-red-50 rounded-xl p-5 flex flex-col gap-4">
            <h3 className="text-lg font-bold text-danger flex items-center gap-2">
              <Icon name="warning" className="text-[24px]" />
              Risk & Context
            </h3>
            <div className="text-neutral-700 text-sm">
              <p className="mb-2">
                <span className="font-semibold">Asset Risk Note:</span> This asset is
                subject to commodity market volatility, geopolitical risks, and
                climate-related supply disruptions.
              </p>
              <p className="mb-2">
                <span className="font-semibold">Vault Impact Summary:</span> Adding this
                asset will increase diversification but also introduce exposure to
                commodity-specific risks.
              </p>
              <p>
                <span className="font-semibold">Liquidity Warning:</span> Futures
                contracts may have lower liquidity compared to major financial
                instruments.
              </p>
            </div>
          </div>
        )}

        {request.canSign && (
          <div className="flex justify-end gap-3 pt-4 border-t border-neutral-100">
            <button
              className="bg-danger/10 text-danger hover:bg-danger/20 transition-colors text-sm font-bold px-5 py-2.5 rounded-lg"
              onClick={() => onReject(request)}
            >
              Reject
            </button>
            <button
              className="bg-primary text-white hover:bg-primary/90 transition-colors text-sm font-bold px-5 py-2.5 rounded-lg"
              onClick={() => onApprove(request)}
            >
              Approve
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

