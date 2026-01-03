"use client";

import { Icon } from "@/components/ui/icon";

type ApprovalFiltersProps = {
  requestType: string;
  vault: string;
  status: string;
  onRequestTypeChange: (value: string) => void;
  onVaultChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  vaultOptions?: string[];
};

export function ApprovalFilters({
  requestType,
  vault,
  status,
  onRequestTypeChange,
  onVaultChange,
  onStatusChange,
  vaultOptions = ["All Vaults", "Vault Alpha", "Vault Beta", "Vault Gamma"],
}: ApprovalFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <div className="relative flex-1">
        <Icon
          name="filter_alt"
          className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 text-[18px]"
        />
        <select
          className="block w-full rounded-lg border-neutral-200 bg-neutral-50 py-2 pl-9 pr-4 text-xs font-medium text-neutral-900 focus:border-primary focus:ring-primary"
          value={requestType}
          onChange={(e) => onRequestTypeChange(e.target.value)}
        >
          <option>All Request Types</option>
          <option>Add Tradeable Asset</option>
          <option>Close Vault</option>
          <option>Cash Out</option>
        </select>
      </div>
      <div className="relative flex-1">
        <Icon
          name="lock"
          className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 text-[18px]"
        />
        <select
          className="block w-full rounded-lg border-neutral-200 bg-neutral-50 py-2 pl-9 pr-4 text-xs font-medium text-neutral-900 focus:border-primary focus:ring-primary"
          value={vault}
          onChange={(e) => onVaultChange(e.target.value)}
        >
          {vaultOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="relative flex-1">
        <Icon
          name="visibility"
          className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 text-[18px]"
        />
        <select
          className="block w-full rounded-lg border-neutral-200 bg-neutral-50 py-2 pl-9 pr-4 text-xs font-medium text-neutral-900 focus:border-primary focus:ring-primary"
          value={status}
          onChange={(e) => onStatusChange(e.target.value)}
        >
          <option>Pending</option>
          <option>Signed</option>
          <option>Rejected</option>
        </select>
      </div>
    </div>
  );
}

