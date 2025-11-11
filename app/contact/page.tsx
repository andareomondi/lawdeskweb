"use client"

import type React from "react"
import { createClient } from "@/lib/supabase/clientSupabase"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const supabase = createClient()
    try {
      const {error} = await supabase.from("inquiries").insert({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,})
      if (error) {
        console.error("Error submitting inquiry:", error)
      }
    } catch (error) {
      console.error("Unexpected error:", error)
    }

    setSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })
    setLoading(false)

    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main >
        {/* Hero Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Get in Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Mail,
                title: "Email",
                content: "shadrackandare@gmail.com",
                link: "mailto:shadrackandare@gmail.com",
              },
              {
                icon: Phone,
                title: "Phone",
                content: "+254 (0) 741 716 609",
                link: "tel:+254741716609",
              },
              {
                icon: MapPin,
                title: "Location",
                content: "Nairobi, Kenya",
                link: "https://maps.app.goo.gl/ykvEvfjkDH38SifF9",
              },
            ].map((contact, idx) => {
              const Icon = contact.icon
              return (
                <a
                  key={idx}
                  href={contact.link}
                  className="border border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors"
                >
                  <Icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">{contact.title}</h3>
                  <p className="text-muted-foreground">{contact.content}</p>
                </a>
              )
            })}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
          {submitted ? (
              /* Enhanced success message with better styling */
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-300">
                <p className="text-lg font-bold text-green-800 dark:text-green-200">✓Thank you for your feedback</p>
                <p className="text-sm text-green-700 dark:text-green-300">
                  We appreciate you reaching out to us. We'll get back to you shortly.
                </p>
              </div>
            ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                required
              />
              <textarea
                placeholder="Your Message"
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
              {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
