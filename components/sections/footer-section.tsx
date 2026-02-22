"use client";

import Link from "next/link";

const footerLinks = {
  quick: [
    { label: "How It Works", href: "#technology" },
    { label: "Products", href: "#accessories" },
    { label: "Partners", href: "#gallery" },
    { label: "Contact", href: "#about" },
  ],
};

export function FooterSection() {
  return (
    <footer className="bg-[#183153] text-white">
      <div className="border-t border-white/10 px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Link
              href="#hero"
              className="font-display text-xl font-semibold text-white"
            >
              Koivu
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
              Continuous End-to-End Payment Verification. Keeping Swiss Banking & Fintech transactions running smoothly, <span className="text-[#2ECC71] font-medium">24/7</span>.
            </p>
            <p className="mt-4 text-sm text-white/80">
              <a href="mailto:info@koivu.ch" className="link-hover-green text-white/80 inline-block">info@koivu.ch</a>
              <span className="mx-2">·</span>
              Koivu GmbH, CH-9016 St. Gallen
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
              Quick links
            </h4>
            <ul className="space-y-3">
              {footerLinks.quick.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="link-hover-green text-sm text-white/70"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} Koivu GmbH. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="link-hover-green text-xs text-white/60"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="link-hover-green text-xs text-white/60"
            >
              Imprint
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
