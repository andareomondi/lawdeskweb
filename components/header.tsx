"use client";

import { Button } from "@/components/ui/button";
import { BetaModal } from "@/components/beta-modal";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [modalOpen, setModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 relative rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 p-1 group-hover:shadow-lg transition-all">
              <img
                src="/logo.png"
                alt="LawDesk Logo"
                width={40}
                height={40}
                className="w-full h-full"
              />
            </div>
            <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              LawDesk
            </span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-accent/50 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="/features"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Features
            </a>
            <a
              href="/pricing"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Pricing
            </a>
            <a
              href="/contact"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Contact
            </a>
            <Button
              size="sm"
              onClick={() => setModalOpen(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              Join Beta
            </Button>
          </nav>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="px-4 pb-4 pt-2 space-y-2 border-t border-border/50 bg-background/95 backdrop-blur-sm">
            <a
              href="/features"
              className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-all duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="/pricing"
              className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-all duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="/contact"
              className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-all duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button
              size="sm"
              onClick={() => {
                setModalOpen(true);
                setMobileMenuOpen(false);
              }}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold mt-2"
            >
              Join Beta
            </Button>
          </nav>
        </div>
      </header>

      <BetaModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  );
}
