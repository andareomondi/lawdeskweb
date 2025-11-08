"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { createClient } from "@/lib/supabase/clientSupabase"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const supabase = createClient()
    try {
      const { error } = await supabase.from("beta").insert({ email })
      if (error) {
        console.error("Error subscribing to beta:", error)
      }
    } catch (error) {
      console.error("Unexpected error:", error)
    }

    
    setSubmitted(true)
    setEmail("")
    setLoading(false)

    // Reset after 3 seconds
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="newsletter" className="py-15 md:py-22 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 via-background to-accent/5 p-8 md:p-12 shadow-xl">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
                Ready to Transform Your Practice?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground text-balance leading-relaxed">
                Join hundreds of legal professionals getting early access to LawDesk. Be the first to experience the
                future of case management.
              </p>
            </div>

            {submitted ? (
              /* Enhanced success message with better styling */
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-300">
                <p className="text-lg font-bold text-green-800 dark:text-green-200">✓ Welcome to the LawDesk family!</p>
                <p className="text-sm text-green-700 dark:text-green-300">
                  Check your email for exclusive beta access and next steps.
                </p>
              </div>
            ) : (
              /* Enhanced form with better styling and layout */
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 bg-background border-2 border-border focus:border-primary h-12 text-base"
                  />
                  <Button
                    type="submit"
                    disabled={loading}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground whitespace-nowrap text-base font-semibold px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all h-12"
                  >
                    {loading ? "Joining..." : "Join Beta"}
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  No spam, just updates about LawDesk.
                </p>
              </form>
            )}
          </div>
        </Card>
      </div>
    </section>
  )
}
