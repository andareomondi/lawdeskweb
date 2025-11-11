"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { createClient } from "@/lib/supabase/clientSupabase"

export function BetaModal({ open, onOpenChange }) {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
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

    // Reset after 3 seconds and close modal
    setTimeout(() => {
      setSubmitted(false)
      onOpenChange(false)
    }, 3000)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] border-2 border-primary/30 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-3xl font-bold text-center">
            Join the LawDesk Beta
          </DialogTitle>
          <DialogDescription className="text-center text-base pt-2">
            Be the first to experience the future of case management
          </DialogDescription>
        </DialogHeader>

        <div className="pt-4">
          {submitted ? (
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-300">
              <p className="text-lg font-bold text-green-800 dark:text-green-200 text-center">
                ✓ Welcome to the LawDesk family!
              </p>
              <p className="text-sm text-green-700 dark:text-green-300 text-center">
                Check your email for exclusive beta access and next steps.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="space-y-3">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && email) {
                      handleSubmit()
                    }
                  }}
                  className="bg-background border-2 border-border focus:border-primary h-12 text-base"
                />
                <Button
                  onClick={handleSubmit}
                  disabled={loading || !email}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-base font-semibold py-6 rounded-lg shadow-lg hover:shadow-xl transition-all h-12"
                >
                  {loading ? "Joining..." : "Join Beta"}
                </Button>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                No spam, just updates about LawDesk.
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
