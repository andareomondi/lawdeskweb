"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function CallbackPage() {
  const searchParams = useSearchParams()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const success = searchParams.get("success") === "true"
  const type = searchParams.get("type")
  const error = searchParams.get("error")
  const description = searchParams.get("description")

  if (!mounted) {
    return null
  }

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {success ? (
          <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-8 space-y-6 shadow-lg">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center animate-in fade-in scale-in duration-500">
                  <svg
                    className="w-8 h-8 text-green-600 dark:text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>

              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-green-900 dark:text-green-100">Email Verified!</h1>
                <p className="text-green-800 dark:text-green-200">
                  {type === "signup"
                    ? "Your email has been successfully verified. Welcome to LawDesk!"
                    : "Your email has been successfully verified."}
                </p>
              </div>

              <div className="bg-white dark:bg-black/20 rounded-lg p-4 space-y-2 text-left">
                <p className="text-sm font-semibold text-foreground">What's next?</p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                    <span>Check your email for exclusive beta access details</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                    <span>Download the LawDesk app or access it online</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                    <span>Start managing your cases more efficiently</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-3">
              <Link href="/" className="block">
                <Button className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 text-white font-semibold py-6">
                  Return to Home
                </Button>
              </Link>
              <p className="text-xs text-center text-muted-foreground">
                Questions? Contact our support team at shadrackandare@gmail.com
              </p>
            </div>
          </Card>
        ) : (
          <Card className="border-2 border-red-200 dark:border-red-800 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 p-8 space-y-6 shadow-lg">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center animate-in fade-in scale-in duration-500">
                  <svg
                    className="w-8 h-8 text-red-600 dark:text-red-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </div>

              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-red-900 dark:text-red-100">Verification Failed</h1>
                <p className="text-red-800 dark:text-red-200">
                  {error === "invalid_request"
                    ? "The verification link is invalid or has expired."
                    : error === "verification_failed"
                      ? "We couldn't verify your email. Please try again."
                      : description || "An error occurred during verification."}
                </p>
              </div>

              <div className="bg-white dark:bg-black/20 rounded-lg p-4 text-left">
                <p className="text-sm font-semibold text-foreground mb-2">What you can do:</p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 dark:text-red-400">•</span>
                    <span>Check that the link hasn't expired (links expire after 24 hours)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 dark:text-red-400">•</span>
                    <span>Request a new verification email</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 dark:text-red-400">•</span>
                    <span>Contact our support team for assistance</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-3">
              <Link href="/" className="block">
                <Button className="w-full bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600 text-white font-semibold py-6">
                  Return to Home
                </Button>
              </Link>
              <p className="text-xs text-center text-muted-foreground">
                Need help? Email shadrackandare@gmail.com or visit our support page
              </p>
            </div>
          </Card>
        )}
      </div>
    </main>
  )
}
