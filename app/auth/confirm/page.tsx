'use client'

import { useEffect, useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { createBrowserClient } from '@supabase/ssr'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

function EmailConfirmContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [message, setMessage] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleEmailConfirmation = async () => {
      // Check for errors in URL (query params)
      const error = searchParams.get('error')
      const errorCode = searchParams.get('error_code')
      const errorDescription = searchParams.get('error_description')

      if (error) {
        setStatus('error')

        // Handle specific error cases
        if (errorCode === 'otp_expired') {
          setMessage('This verification link has expired. Please request a new one.')
        } else if (errorCode === 'otp_disabled') {
          setMessage('Email verification is not enabled.')
        } else {
          setMessage(errorDescription || 'Email verification failed. Please try again.')
        }
        return
      }

      // If no errors in URL, check for successful session
      try {
        const { data: { session }, error: sessionError } = await supabase.auth.getSession()

        if (sessionError) {
          setStatus('error')
          setMessage(sessionError.message)
          return
        }

        if (session) {
          setStatus('success')
          // No auto-redirect since this is just a placeholder
        } else {
          setStatus('error')
          setMessage('No session found. Please try signing in again.')
        }
      } catch (err) {
        setStatus('error')
        setMessage('An unexpected error occurred.')
      }
    }

    if (mounted) {
      handleEmailConfirmation()
    }
  }, [searchParams, supabase, mounted])

  if (!mounted) {
    return null
  }

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {status === 'loading' && (
          <Card className="p-8 space-y-6 shadow-lg">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                </div>
              </div>
              <p className="text-muted-foreground">Verifying your email...</p>
            </div>
          </Card>
        )}

        {status === 'success' && (
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
                  Your email has been successfully verified. You can now log in from the LawDesk app.
                </p>
              </div>

              <div className="bg-white dark:bg-black/20 rounded-lg p-4 space-y-2 text-left">
                <p className="text-sm font-semibold text-foreground">What's next?</p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                    <span>Open the LawDesk app on your device</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                    <span>Log in with your verified email</span>
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
                Questions? Contact our support team
              </p>
            </div>
          </Card>
        )}

        {status === 'error' && (
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
                <p className="text-red-800 dark:text-red-200">{message}</p>
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
                    <span>Request a new verification email from the app</span>
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
                Need help? Contact our support team
              </p>
            </div>
          </Card>
        )}
      </div>
    </main>
  )
}

export default function EmailConfirmPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <Card className="p-8 space-y-6 shadow-lg">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                </div>
              </div>
              <p className="text-muted-foreground">Loading...</p>
            </div>
          </Card>
        </div>
      </main>
    }>
      <EmailConfirmContent />
    </Suspense>
  )
}
