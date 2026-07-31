// app/components/ui.tsx
// Shared building blocks used by the home page and every case-study page.
// These are server components (no interactivity), so no "use client" needed.

import Link from "next/link";
import type { ReactNode } from "react";

// The signature motif: a motorsport shift-light strip.
export function ShiftLights() {
  const lights = [
    "#22c55e", "#22c55e", "#22c55e",
    "#f59e0b", "#f59e0b",
    "#ff5a1f", "#ff2d2d", "#ff2d2d",
  ];
  return (
    <div className="flex gap-1.5" aria-hidden="true">
      {lights.map((c, i) => (
        <span
          key={i}
          className="shift-led h-1.5 w-4 rounded-sm"
          style={{ backgroundColor: c, animationDelay: `${i * 90}ms` }}
        />
      ))}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <ShiftLights />
      <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#ff5a1f]">
        {children}
      </span>
    </div>
  );
}

// A framed placeholder for photos. Replace <PhotoSlot .../> with an <img> once
// you've dropped the file into /public.
export function PhotoSlot({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={
        "flex items-center justify-center rounded-lg border border-dashed border-zinc-700 bg-zinc-900/60 " +
        className
      }
    >
      <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">{label}</span>
    </div>
  );
}

export function Gallery({ slots }: { slots: string[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {slots.map((s) => (
        <PhotoSlot key={s} label={s} className="aspect-[4/3] w-full" />
      ))}
    </div>
  );
}

export function SpecStrip({ items }: { items: [string, string][] }) {
  return (
    <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-zinc-800 bg-zinc-800 font-mono md:grid-cols-4">
      {items.map(([k, v]) => (
        <div key={k} className="bg-zinc-950 px-5 py-6">
          <dt className="text-[10px] uppercase tracking-widest text-zinc-500">{k}</dt>
          <dd className="mt-1 text-2xl font-semibold text-zinc-100">{v}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Bullets({ points }: { points: string[] }) {
  return (
    <ul className="space-y-2.5 text-sm leading-relaxed text-zinc-400">
      {points.map((p, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#ff5a1f]" />
          <span>{p}</span>
        </li>
      ))}
    </ul>
  );
}

export function ToolTags({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1.5 font-mono text-xs text-zinc-300"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

// A titled block used to structure the body of a case-study page.
export function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="border-t border-zinc-800/60 py-12">
      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
      <div className="mt-6">{children}</div>
    </div>
  );
}

// The frame for every detail page: nav, hero header, body, footer.
export function CaseStudyLayout({
  eyebrow,
  title,
  role,
  dates,
  loc,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  role?: string;
  dates?: string;
  loc?: string;
  intro?: string;
  children: ReactNode;
}) {
  const meta = [role, loc, dates].filter(Boolean).join("  ·  ");
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">
      <style>{`
        html { scroll-behavior: smooth; }
        .shift-led { opacity: 0.35; }
        @media (prefers-reduced-motion: no-preference) {
          .shift-led { animation: shift 2.4s ease-in-out infinite; }
        }
        @keyframes shift { 0%, 70%, 100% { opacity: 0.3; } 35% { opacity: 1; } }
      `}</style>

      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/85 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="font-mono text-xs uppercase tracking-widest text-zinc-400 transition-colors hover:text-[#ff5a1f]"
          >
            ← Elijah Akpan
          </Link>
          <a
            href="/resume.pdf"
            className="rounded-md border border-zinc-700 px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-zinc-200 transition-colors hover:border-[#ff5a1f] hover:text-[#ff5a1f]"
          >
            Résumé
          </a>
        </nav>
      </header>

      {/* HERO HEADER */}
      <section className="mx-auto max-w-5xl px-6 pb-8 pt-16 md:pt-20">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-tight md:text-6xl">
          {title}
        </h1>
        {meta && (
          <p className="mt-5 font-mono text-xs uppercase tracking-widest text-zinc-500">{meta}</p>
        )}
        {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">{intro}</p>}
      </section>

      {/* BODY */}
      <section className="mx-auto max-w-5xl px-6 pb-12">{children}</section>

      {/* FOOTER */}
      <footer className="mx-auto max-w-5xl px-6 pb-16">
        <div className="flex items-center justify-between border-t border-zinc-800/60 pt-6">
          <Link
            href="/"
            className="font-mono text-xs uppercase tracking-widest text-zinc-400 transition-colors hover:text-[#ff5a1f]"
          >
            ← Back to all work
          </Link>
          <ShiftLights />
        </div>
      </footer>
    </main>
  );
}
