import Link from "next/link";
import { Icon } from "@/components/ui/icon";

type StatsCardProps = {
  title: string;
  value: string;
  subtitle?: string;
  icon: string;
  badge?: string;
  label: string;
  buttonLabel?: string;
  buttonHref?: string;
};

export function StatsCard({
  title,
  value,
  subtitle,
  icon,
  badge,
  label,
  buttonLabel,
  buttonHref,
}: StatsCardProps) {
  return (
    <div className="bg-primary text-white rounded-2xl p-6 lg:p-10 shadow-soft flex flex-col justify-between items-start gap-6 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-80 h-80 bg-accent opacity-10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="flex items-center justify-between w-full relative z-10">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/10 rounded-lg">
            <Icon name={icon} className="text-white text-[24px]" />
          </div>
          <div>
            <h2 className="text-lg font-bold">{title}</h2>
            {subtitle && (
              <p className="text-xs text-white/60 font-medium">{subtitle}</p>
            )}
          </div>
        </div>
        {badge && (
          <span className="bg-white/10 text-white text-xs font-bold px-2 py-1 rounded">
            {badge}
          </span>
        )}
      </div>
      <div className="flex flex-col items-start relative z-10 w-full">
        <p className="text-sm opacity-80 font-medium mb-1">{label}</p>
        <span className="text-4xl font-extrabold tracking-tight">{value}</span>
      </div>
      {buttonLabel && (
        <div className="w-full pt-6 border-t border-white/10 relative z-10 flex flex-wrap gap-4">
          {buttonHref ? (
            <Link href={buttonHref}>
              <button className="bg-primary border border-white/20 text-white hover:bg-white/5 transition-colors text-base font-bold px-8 py-3 rounded-xl flex items-center justify-center gap-2 flex-1 sm:flex-none">
                <span>{buttonLabel}</span>
                <Icon name="arrow_forward" className="text-[20px]" />
              </button>
            </Link>
          ) : (
            <button className="bg-primary border border-white/20 text-white hover:bg-white/5 transition-colors text-base font-bold px-8 py-3 rounded-xl flex items-center justify-center gap-2 flex-1 sm:flex-none">
              <span>{buttonLabel}</span>
              <Icon name="arrow_forward" className="text-[20px]" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}

