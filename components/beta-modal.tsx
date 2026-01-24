"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { createClient } from "@/lib/supabase/clientSupabase";
import { CheckCircle2, Sparkles } from "lucide-react";

export function BetaModal({ open, onOpenChange }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const supabase = createClient();

    try {
      const { error } = await supabase.from("beta").insert({ email });
      if (error) {
        console.error("Error subscribing to beta:", error);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }

    setSubmitted(true);
    setEmail("");
    setLoading(false);

    // Reset after 3 seconds and close modal
    setTimeout(() => {
      setSubmitted(false);
      onOpenChange(false);
    }, 3000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-w-[calc(100vw-2rem)]  border-2 border-primary/30 bg-gradient-to-br from-primary/5 via-background to-accent/5  rounded-xl ">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-center px-2">
            Join the LawDesk Beta
          </DialogTitle>
          <DialogDescription className="text-center text-sm sm:text-base pt-2 px-2">
            Be the first to experience the future of case management
          </DialogDescription>
        </DialogHeader>

        <div className="pt-4 px-2 sm:px-0">
          {submitted ? (
            <div className="relative overflow-hidden bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-2 border-green-200 dark:border-green-800 rounded-lg p-4 sm:p-6 space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* Sparkle animation background */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <Sparkles className="absolute top-2 right-2 w-4 h-4 text-green-400 animate-pulse" />
                <Sparkles className="absolute bottom-3 left-3 w-3 h-3 text-emerald-400 animate-pulse delay-150" />
                <Sparkles className="absolute top-1/2 right-8 w-3 h-3 text-green-300 animate-pulse delay-300" />
              </div>

              {/* Success icon with animation */}
              <div className="flex justify-center mb-2">
                <div className="relative">
                  <CheckCircle2 className="w-12 h-12 sm:w-16 sm:h-16 text-green-600 dark:text-green-400 animate-in zoom-in duration-500" />
                  <div className="absolute inset-0 bg-green-400/30 rounded-full animate-ping" />
                </div>
              </div>

              <p className="text-base sm:text-lg font-bold text-green-800 dark:text-green-200 text-center relative z-10">
                Welcome to the LawDesk family!
              </p>
              <p className="text-xs sm:text-sm text-green-700 dark:text-green-300 text-center relative z-10">
                Check your email for exclusive beta access and next steps.
              </p>

              {/* Progress bar */}
              <div className="w-full h-1 bg-green-200 dark:bg-green-900 rounded-full overflow-hidden mt-4">
                <div className="h-full bg-green-500 dark:bg-green-400 animate-[slideOut_3s_ease-in-out]" />
              </div>
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
                    if (e.key === "Enter" && email) {
                      handleSubmit();
                    }
                  }}
                  className="bg-background border-2 border-border focus:border-primary h-11 sm:h-12 text-sm sm:text-base transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                />
                <Button
                  onClick={handleSubmit}
                  disabled={loading || !email}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base font-semibold py-5 sm:py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-11 sm:h-12 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Joining...
                    </span>
                  ) : (
                    "Join Beta"
                  )}
                </Button>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground text-center px-2">
                No spam, just updates about LawDesk.
              </p>
            </div>
          )}
        </div>
      </DialogContent>

      <style jsx global>{`
        @keyframes slideOut {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }
      `}</style>
    </Dialog>
  );
}
