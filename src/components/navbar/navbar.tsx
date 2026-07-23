"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

const LINKS: NavLink[] = [
  { label: "Home", href: "#Home" },
  { label: "Experience", href: "#Experience" },
  { label: "Projects", href: "#Projects" },
  { label: "Education", href: "#Education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() { 
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [active, setActive] = useState<string>("Home");
  const [hovered, setHovered] = useState<string | null>(null); 
  
  const navRef = useRef<HTMLElement | null>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const key = hovered ?? active;
    const el = navRef.current?.querySelector(`[data-label="${key}"]`) as HTMLElement; 
    if (el) {
      setIndicator({
        left: el.offsetLeft,
        width: el.offsetWidth,
        opacity: 1,
      });
    }
  }, [hovered, active]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background border-b border-transparent"
      }`}
    >
      {/* মোবাইল ও ট্যাবলেটে ডানে-বামে সুন্দর প্যাডিংয়ের জন্য px-6 রাখা হয়েছে */}
      <div className="mx-auto flex h-16  items-center justify-between">
        {/* Logo */}
        <Link
          href="#top"
          className="group flex items-center gap-2 font-semibold tracking-tight text-foreground"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-bold transition-transform duration-300 group-hover:-rotate-6">
            NR
          </span>
          <span className="text-[15px]">
            Nadimul<span className="text-primary"> </span>Rahib
          </span>
        </Link>

        {/* Desktop nav - 🔄 md:flex পরিবর্তন করে lg:flex করা হয়েছে */}
        <nav
          ref={navRef}
          onMouseLeave={() => setHovered(null)}
          className="relative hidden items-center gap-1 lg:flex"
        >
          {/* sliding indicator - 🔄 top-1/2 দিয়ে ভার্টিক্যালি সেন্টার করা হয়েছে */}
          <span
            className="pointer-events-none absolute top-1/2 h-8 rounded-full bg-secondary transition-all duration-300 ease-out -translate-y-1/2"
            style={{
              left: `${indicator.left}px`,    
              width: `${indicator.width}px`,  
              opacity: indicator.opacity,
            }}
          />
          {LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              data-label={link.label}
              onMouseEnter={() => setHovered(link.label)}
              onClick={() => setActive(link.label)}
              className={`relative z-10 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                active === link.label
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side: status + CTA - 🔄 md:flex পরিবর্তন করে lg:flex করা হয়েছে */}
        <div className="hidden items-center gap-4 lg:flex">
          <span className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for work
          </span>
          <Link
            href="#contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all duration-200 hover:opacity-90 hover:shadow-md"
          >
            Let&apos;s talk
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile toggle - 🔄 md:hidden পরিবর্তন করে lg:hidden করা হয়েছে যেন ট্যাবেও বাটনটি দেখায় */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-foreground lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile/Tablet menu - 🔄 md:hidden পরিবর্তন করে lg:hidden করা হয়েছে */}
      <div
        className={`overflow-hidden border-b border-border transition-[max-height] duration-300 ease-in-out lg:hidden ${
          open ? "max-h-85" : "max-h-0 border-b-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 pb-4 pt-2">
          {LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => {
                setActive(link.label);
                setOpen(false);
              }}
              className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                active === link.label
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground"
          >
            Let&apos;s talk
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
