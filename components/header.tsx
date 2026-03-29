"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Начало" },
  { href: "/about", label: "За нас" },
  { href: "/workshops", label: "Работилници" },
  { href: "/animators", label: "Аниматори" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-[#4a7c4a]" style={{ fontFamily: 'cursive' }}>gEko</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[#4a7c4a]",
                  pathname === item.href
                    ? "text-[#4a7c4a] font-semibold"
                    : "text-foreground/80"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/workshops"
              className="inline-flex items-center justify-center rounded-full bg-[#c8d96f] px-6 py-2.5 text-sm font-semibold text-[#1a2e1a] hover:bg-[#b8c95f] transition-colors"
            >
              Запиши се
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-[#4a7c4a] py-2",
                    pathname === item.href
                      ? "text-[#4a7c4a] font-semibold"
                      : "text-foreground/80"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/workshops"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center rounded-full bg-[#c8d96f] px-6 py-2.5 text-sm font-semibold text-[#1a2e1a] hover:bg-[#b8c95f] transition-colors w-fit"
              >
                Запиши се
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
