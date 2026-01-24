"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className=" px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About LawDesk
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Empowering legal professionals across Africa with modern
              technology
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Our Mission
              </h2>
              <p className="text-muted-foreground mb-4">
                We believe that legal professionals deserve better tools.
                LawDesk was founded to solve the real problems lawyers face
                every day: managing cases, tracking deadlines, organizing
                documents, and staying on top of their practice.
              </p>
              <p className="text-muted-foreground">
                By combining modern technology with deep understanding of legal
                workflows, we're building the case management system that
                lawyers actually want to use.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg p-12 h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">
                  October, 2025
                </div>
                <p className="text-muted-foreground">Founded in Kenya</p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Simplicity",
                  description:
                    "We believe great software should be intuitive and easy to use, not complex.",
                },
                {
                  title: "Reliability",
                  description:
                    "Lawyers depend on us. We take security, uptime, and data protection seriously.",
                },
                {
                  title: "Accessibility",
                  description:
                    "Legal tech should be affordable and accessible to all lawyers, regardless of firm size.",
                },
              ].map((value, idx) => (
                <div key={idx} className="border border-border rounded-lg p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="bg-muted/50 rounded-lg p-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Our Team
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
              LawDesk is built by a solo student developer with the aim to
              provide an affordable, easy to use and reliable case managment
              system. This isn't designed to be a complex system with a lot of
              features but rather a simple and effective system that gets the
              job done. And easy to integrate with other systems.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
