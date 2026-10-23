export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <circle cx="20" cy="20" r="20" fill="var(--color-teal)" />
      <path
        d="M20 9.5a10.5 10.5 0 1 0 7.6 17.8"
        fill="none"
        stroke="var(--color-card)"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M25 25l6.5 6"
        stroke="var(--color-card)"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`}>
      <LogoMark className="w-8 h-8" />
      <span className="flex flex-col items-start leading-tight">
        <span className="text-xl font-extrabold tracking-tight text-ink">
          Loqelo
        </span>
        <span className="text-[10px] font-semibold text-muted-foreground">
          Everything your place needs.
        </span>
      </span>
    </span>
  );
}
