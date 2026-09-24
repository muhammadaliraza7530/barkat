import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { navLinks, site } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <img src={site.logo} alt="Barkat Engineering logo" className="h-16 w-32 rounded-md bg-card object-contain p-1" />
            <span className="text-sm font-bold uppercase tracking-[0.12em]">{site.name}</span>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            {site.tagline}. Building A Better Tomorrow Since 2016.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.16em]">
            {[
              { label: "Instagram", href: site.instagram },
              { label: "Facebook", href: site.facebook },
              { label: "YouTube", href: site.youtube },
              { label: "WhatsApp", href: site.whatsapp },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="reg-chip rounded-full border border-border px-4 py-2 text-muted-foreground"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.28em] text-primary">Explore</h3>
          <ul className="mt-5 space-y-3">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.28em] text-primary">Contact</h3>
          <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
              <div className="flex flex-col gap-1">
                <a href={`tel:${site.secondaryPhoneTel}`} className="hover:text-primary">
                  {site.secondaryPhone}
                </a>
                <a href={`tel:${site.phoneTel}`} className="hover:text-primary">
                  {site.phone}
                </a>
              </div>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
              <a href={`mailto:${site.email}`} className="break-all hover:text-primary">
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>{site.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        <p>
          © 2026 {site.name} Pvt. Ltd. | All Rights Reserved
        </p>
        <p className="mt-2 tracking-[0.14em] uppercase">
          CEO: Engr. Muhammad Ali
        </p>
      </div>
    </footer>
  );
}
