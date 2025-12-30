import * as React from "react";

import { cn } from "@/lib/cn";

export type IconProps = Omit<React.HTMLAttributes<HTMLSpanElement>, "children"> & {
  name: string;
};

export function Icon({ name, className, ...props }: IconProps) {
  return (
    <span className={cn("material-symbols-outlined", className)} {...props}>
      {name}
    </span>
  );
}

