"use client";

import { Badge } from "@/components/ui/badge";
import type { ProgressBadgeVariant } from "@/types/approval";

type ProgressBadgeProps = {
  variant: ProgressBadgeVariant;
  label: string;
  className?: string;
};

/**
 * Maps ProgressBadgeVariant to BadgeVariant
 * Uses existing Badge component for consistency
 * Note: We use custom styling to match the design (rounded-full, specific colors)
 */
const getBadgeVariant = (
  variant: ProgressBadgeVariant,
): "success" | "warning" | "danger" | "outline" => {
  switch (variant) {
    case "pending":
      return "success"; // Green/accent for pending
    case "in-progress":
      return "warning"; // Blue/Info for in-progress (1/3 Signed)
    case "critical":
      return "danger"; // Red for critical
    case "waiting":
      return "outline"; // Gray for waiting
    default:
      return "outline";
  }
};

export function ProgressBadge({
  variant,
  label,
  className,
}: ProgressBadgeProps) {
  return (
    <Badge
      variant={getBadgeVariant(variant)}
      className={`rounded-full ${className ?? ""}`}
    >
      {label}
    </Badge>
  );
}

