import * as React from "react";

import { cn } from "@/lib/cn";

export type SectionProps = React.HTMLAttributes<HTMLElement> & {
  as?: "section" | "div";
};

export function Section({ as = "section", className, ...props }: SectionProps) {
  const Comp = as;
  return <Comp className={cn("py-20", className)} {...props} />;
}

