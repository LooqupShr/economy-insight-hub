import { cn } from "@/lib/utils";

interface ProgressRingProps {
  value: number;
  target: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
  label?: string;
  subLabel?: string;
}

export const ProgressRing = ({
  value,
  target,
  size = 120,
  strokeWidth = 8,
  className,
  label,
  subLabel
}: ProgressRingProps) => {
  const percentage = Math.min((value / target) * 100, 100);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="relative">
        <svg
          width={size}
          height={size}
          className="transform -rotate-90"
        >
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="hsl(var(--muted))"
            strokeWidth={strokeWidth}
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="url(#progressGradient)"
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-out"
          />
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--finance-primary))" />
              <stop offset="100%" stopColor="hsl(var(--finance-secondary))" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-2xl font-bold text-finance-primary">
            {value.toFixed(1)}%
          </span>
          <span className="text-xs text-muted-foreground">
            of {target}% target
          </span>
        </div>
      </div>
      
      {(label || subLabel) && (
        <div className="mt-3 text-center">
          {label && (
            <p className="text-sm font-medium text-foreground">{label}</p>
          )}
          {subLabel && (
            <p className="text-xs text-muted-foreground">{subLabel}</p>
          )}
        </div>
      )}
    </div>
  );
};