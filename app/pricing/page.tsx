"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Check } from "lucide-react"

export default function PricingPage() {
  const plans = [
    {
      name: "Beta",
      price: "Free",
      period: "/month",
      description: "Perfect for testers",
      features: [
        "5 cases",
        "Document management",
        "5 Document Upload",
        "Mobile app access",
        "Basic calender",
      ],
      cta: "Start Free Trial",
      highlighted: false,
    },
    {
      name: "Professional",
      price: "Ksh 999",
      period: "/month",
      description: "Perfect for solo practitioners",
      features: [
        "Unlimited cases",
        "Advanced document management",
        "Smart calendar",
        "Automated reminders & notifications",
        "Custom workflows",
        "Advanced search & filters",
      ],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large firms & organizations",
      features: [
        "Everything in Professional",
        "Unlimited team members",
        "AI case analysis & planning",
        "Advanced security & compliance",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom integrations",
        "On-premise deployment option",
      ],
      cta: "Coming soon",
      highlighted: false,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main >
        {/* Hero Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your legal practice. All plans include a 14-day free trial.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 border transition-all duration-300 ${plan.highlighted
                  ? "border-primary bg-primary/5 ring-2 ring-primary/20 scale-105"
                  : "border-border bg-card hover:border-primary/50"
                  }`}
              >
                {plan.highlighted && (
                  <div className="mb-4 inline-block px-3 py-1 bg-primary/20 text-primary text-sm font-semibold rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>
                <button
                  className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all duration-200 ${plan.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-muted text-foreground hover:bg-muted/80"
                    }`}
                >
                  {plan.cta}
                </button>
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="mt-20 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "Can I change plans anytime?",
                  a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.",
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept all major mobile money payments (M-Pesa, Airtel Money).",
                },
                {
                  q: "Is there a setup fee?",
                  a: "No, there are no setup fees or hidden charges. You only pay the monthly subscription amount.",
                },
                {
                  q: "Do you offer annual billing discounts?",
                  a: "Yes, annual billing comes with a 20% discount compared to monthly billing. Contact shadrackandare@gmail.com for further details",
                },
              ].map((item, idx) => (
                <div key={idx} className="border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
                  <p className="text-muted-foreground text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
