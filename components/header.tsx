"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-4xl transition-all duration-300 rounded-2xl ${isScrolled ? "glass" : "bg-transparent"}`}
    >
      <div className="flex items-center justify-between px-6 py-3">
        <Link
          href="/"
          className={`flex items-center rounded-full transition-all duration-300 ${!isScrolled ? "bg-white/90 px-4 py-2 shadow-lg" : ""}`}
          aria-label="Koivu – Home"
        >
          <Image
            src="/koviuImages/logo.png"
            alt="Koivu"
            width={120}
            height={36}
            className="h-8 w-auto md:h-9"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/why-monitoring"
            className={`link-hover-green text-sm font-medium transition-colors duration-300 ${!isScrolled ? "text-white hover:text-[#2ECC71]" : "text-[#333333]/80"}`}
          >
            Why Monitoring
          </Link>
          <Link
            href="/why-beta-client"
            className={`link-hover-green text-sm font-medium transition-colors duration-300 ${!isScrolled ? "text-white hover:text-[#2ECC71]" : "text-[#333333]/80"}`}
          >
            Why Beta Client
          </Link>
          <Link
            href="#technology"
            className={`link-hover-green text-sm font-medium transition-colors duration-300 ${!isScrolled ? "text-white hover:text-[#2ECC71]" : "text-[#333333]/80"}`}
          >
            How It Works
          </Link>
          <Link
            href="/#accessories"
            className={`link-hover-green text-sm font-medium transition-colors duration-300 ${!isScrolled ? "text-white hover:text-[#2ECC71]" : "text-[#333333]/80"}`}
          >
            Products
          </Link>
          <Link
            href="#about"
            className={`link-hover-green text-sm font-medium transition-colors duration-300 ${!isScrolled ? "text-white hover:text-[#2ECC71]" : "text-[#333333]/80"}`}
          >
            Contact
          </Link>
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="#reserve"
            className="btn-koivu-green"
          >
            Start a 1-Month Pilot
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden transition-colors duration-300 ${!isScrolled ? "text-white" : "text-[#183153]"}`}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="glass border-t border-white/20 px-6 py-8 md:hidden rounded-b-2xl mt-0">
          <nav className="flex flex-col gap-6">
            <Link href="/why-monitoring" className="link-hover-green text-lg font-medium text-[#333333]" onClick={() => setIsMenuOpen(false)}>Why Monitoring</Link>
            <Link href="/why-beta-client" className="link-hover-green text-lg font-medium text-[#333333]" onClick={() => setIsMenuOpen(false)}>Why Beta Client</Link>
            <Link href="#technology" className="link-hover-green text-lg font-medium text-[#333333]" onClick={() => setIsMenuOpen(false)}>How It Works</Link>
            <Link href="/#accessories" className="link-hover-green text-lg font-medium text-[#333333]" onClick={() => setIsMenuOpen(false)}>Products</Link>
            <Link href="#about" className="link-hover-green text-lg font-medium text-[#333333]" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <Link
              href="#reserve"
              className="btn-koivu-green mt-4 block text-center py-3"
              onClick={() => setIsMenuOpen(false)}
            >
              Start a 1-Month Pilot
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
