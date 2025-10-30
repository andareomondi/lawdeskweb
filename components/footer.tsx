"use client"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background to-muted/30 border-t border-border/50 py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-foreground">LawDesk</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Modern case management for legal professionals across Africa
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-200 text-sm font-semibold"
              >
                𝕏
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-200 text-sm font-semibold"
              >
                in
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-200 text-sm font-semibold"
              >
                ⚙
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide">Product</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#features"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#upcoming"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Roadmap
                </a>
              </li>
              <li>
                <a
                  href="/pricing"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="/security"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Security
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/privacy"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 LawDesk. All rights reserved. Built for African lawyers.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
              Status
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
              Changelog
            </a>
            <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
