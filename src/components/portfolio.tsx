import type { ReactNode } from "react";

export function ArrowButton({
  label,
  href,
  onClick,
}: {
  label: string;
  href?: string;
  onClick?: () => void;
}) {
  const classes =
    "glass-strong inline-flex size-11 shrink-0 items-center justify-center rounded-full text-primary transition-transform duration-300 hover:-translate-y-0.5 hover:text-primary";
  const icon = (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4">
      <path
        d="M7 17 17 7M9 7h8v8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  if (href) {
    return (
      <a href={href} className={classes} aria-label={label}>
        {icon}
      </a>
    );
  }
  return (
    <button type="button" className={classes} aria-label={label} onClick={onClick}>
      {icon}
    </button>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  tag,
}: {
  eyebrow: string;
  title: string;
  tag: string;
}) {
  return (
    <div className="mb-10 flex items-center justify-between gap-4 border-b border-border pb-5">
      <span className="eyebrow flex-1">{eyebrow}</span>
      <span className="font-display flex-1 text-center text-sm font-600 tracking-[0.2em] uppercase">
        {title}
      </span>
      <span className="eyebrow flex-1 text-right">{tag}</span>
    </div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="glass rounded-full px-3 py-1 text-xs text-muted-foreground">
      {children}
    </span>
  );
}

export function BrowserMockup({
  title,
  lines = 4,
  className = "",
  children,
}: {
  title: string;
  lines?: number;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <figure className={`glass overflow-hidden rounded-xl ${className}`}>
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="size-2.5 rounded-full bg-destructive/70" />
        <span className="size-2.5 rounded-full bg-amber/70" />
        <span className="size-2.5 rounded-full bg-primary/70" />
        <span className="ml-3 truncate text-xs text-muted-foreground">{title}</span>
      </div>
      <div className="space-y-3 p-4">
        {children ?? (
          <>
            <div className="h-16 rounded-lg bg-primary/10" />
            <div className="grid grid-cols-3 gap-2">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-8 rounded-md bg-foreground/5" />
              ))}
            </div>
            {Array.from({ length: lines }).map((_, i) => (
              <div
                key={i}
                className="h-2.5 rounded-full bg-foreground/8"
                style={{ width: `${95 - i * 13}%` }}
              />
            ))}
          </>
        )}
      </div>
      <figcaption className="sr-only">{title}</figcaption>
    </figure>
  );
}
