"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, Lock, Eye, Server } from "lucide-react"

export default function SecurityPage() {
  const features = [
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "All data is encrypted in transit and at rest using industry-standard AES-256 encryption.",
    },
    {
      icon: Shield,
      title: "Role-Based Access Control",
      description: "Granular permissions ensure team members only access the data they need.",
    },
    {
      icon: Eye,
      title: "Audit Logs",
      description: "Complete audit trails of all user actions for compliance and security monitoring.",
    },
    {
      icon: Server,
      title: "Secure Infrastructure",
      description: "Hosted on enterprise-grade servers with 99.99% uptime SLA and DDoS protection.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Security & Compliance</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your data security is our top priority. LawDesk meets the highest standards for legal data protection.
            </p>
          </div>

          {/* Security Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div
                  key={idx}
                  className="border border-border rounded-lg p-8 hover:border-primary/50 transition-colors"
                >
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              )
            })}
          </div>

          {/* Compliance Section */}
          <div className="bg-muted/50 rounded-lg p-12 mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">Compliance & Certifications</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-foreground mb-3">Standards</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ ISO 27001 Certified</li>
                  <li>✓ GDPR Compliant</li>
                  <li>✓ SOC 2 Type II</li>
                  <li>✓ HIPAA Compatible</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">Data Protection</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ Data centers in Africa</li>
                  <li>✓ Regular security audits</li>
                  <li>✓ Penetration testing</li>
                  <li>✓ Incident response plan</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Data Privacy */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">Your Data, Your Control</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                We believe your data belongs to you. You have complete control over your information and can export or
                delete it at any time.
              </p>
              <p>
                LawDesk never sells your data to third parties. We only use your information to provide and improve our
                service.
              </p>
              <p>For detailed information about how we handle your data, please review our Privacy Policy.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
