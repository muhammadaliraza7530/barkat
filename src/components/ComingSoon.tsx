import { Link } from "@tanstack/react-router";
import { ArrowLeft, Building2, HardHat } from "lucide-react";
import { site } from "@/lib/site-data";

export function ComingSoon({ page }: { page: string }) {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden px-5 pb-16 pt-28 lg:px-8">
      <div className="grid-backdrop absolute inset-0 -z-20 opacity-60" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-gradient-to-t from-primary/10 to-transparent" />

      <div className="mx-auto w-full max-w-5xl text-center">
        <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-primary/25 bg-card/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-primary backdrop-blur">
          <span className="size-2 animate-pulse rounded-full bg-primary" />
          {page} page
        </div>

        <img
          src={site.logo}
          alt="Barkat Engineering construction company logo"
          className="mx-auto mt-8 w-full max-w-[290px] rounded-md bg-card object-contain p-3 shadow-xl sm:max-w-[360px]"
        />

        <div className="mt-9 flex items-center justify-center gap-3 text-primary">
          <Building2 className="size-5" />
          <span className="h-px w-12 bg-primary/40" />
          <HardHat className="size-5" />
        </div>

        <h1 className="mt-5 text-4xl font-extrabold uppercase sm:text-6xl lg:text-7xl">Coming Soon</h1>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          We are building something exceptional. This page will be ready soon.
        </p>

        <Link
          to="/"
          className="sheen-on-hover mt-9 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-accent"
        >
          <ArrowLeft className="size-4" /> Back to home
        </Link>
      </div>
    </section>
  );
}