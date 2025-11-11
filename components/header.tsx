"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 relative rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 p-1 group-hover:shadow-lg transition-all">
            <Image
              src="/logo.png"
              alt="LawDesk Logo"
              width={40}
              height={40}
              className="w-full h-full"
            />
          </div>
          <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">LawDesk</span>
        </a>

        <nav className="flex md:hidden items-center gap-4">
          <a href="#newsletter">
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              Get Started
            </Button>
          </a>



        </nav>

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
          <a
            href="#newsletter"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              Join Beta
            </Button>
          </a>
        </nav>
      </div>
    </header >
  )
}
