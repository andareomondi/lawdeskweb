"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-muted/20 py-8 md:py-16 lg:py-24">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full w-fit">
                <span className="text-sm font-semibold text-primary">✨ Now in Beta</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground text-balance leading-tight">
                Justice Deserves Better Tools
              </h1>

              <p className="text-xl text-muted-foreground text-balance leading-relaxed max-w-lg">
                LawDesk is the case management system built for African lawyers. Track cases, manage deadlines, organize
                documents—all from your phone.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-base font-semibold px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Join the Beta
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base font-semibold px-8 py-6 rounded-lg border-2 bg-transparent"
              >
                See Demo
              </Button>
            </div>

            <div className="pt-8 space-y-3 border-t border-border">
              <p className="text-sm font-semibold text-foreground">Trusted by legal professionals</p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-lg">⚡</span>
                  <span className="text-sm text-muted-foreground">Lightning fast</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">🔒</span>
                  <span className="text-sm text-muted-foreground">Bank-level security</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">📱</span>
                  <span className="text-sm text-muted-foreground">Android tailored</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 md:h-full flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
            <div className="relative w-64 h-64 md:w-96 md:h-96 animate-bounce" style={{ animationDuration: "3s" }}>
              <Image
                src="/logo.png"
                alt="LawDesk Case Management"
                width={384}
                height={384}
                className="w-full h-full drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
