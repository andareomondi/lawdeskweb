"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"

export default function CareersPage() {
  const positions = [
    {
      title: "Senior Full-Stack Engineer",
      department: "Engineering",
      location: "Nairobi, Kenya",
      type: "Full-time",
    },
    {
      title: "Product Designer",
      department: "Design",
      location: "Nairobi, Kenya",
      type: "Full-time",
    },
    {
      title: "Legal Consultant",
      department: "Product",
      location: "Nairobi, Kenya",
      type: "Full-time",
    },
    {
      title: "Customer Success Manager",
      department: "Operations",
      location: "Nairobi, Kenya",
      type: "Full-time",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Join Our Team</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Help us transform legal tech in Africa. We're looking for talented individuals who are passionate about
              building great products.
            </p>
          </div>

          {/* Values Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Impact",
                description: "Your work directly impacts thousands of lawyers across Africa",
              },
              {
                title: "Growth",
                description: "We invest in your professional development and career growth",
              },
              {
                title: "Culture",
                description: "Work with a talented, collaborative team that values innovation",
              },
            ].map((value, idx) => (
              <div key={idx} className="border border-border rounded-lg p-8">
                <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>

          {/* Open Positions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Open Positions</h2>
            <div className="space-y-4">
              {positions.map((position, idx) => (
                <div
                  key={idx}
                  className="border border-border rounded-lg p-6 hover:border-primary/50 transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{position.title}</h3>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <span>{position.department}</span>
                      <span>•</span>
                      <span>{position.location}</span>
                      <span>•</span>
                      <span>{position.type}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-muted/50 rounded-lg p-12">
            <h2 className="text-2xl font-bold text-foreground mb-8">Why Join LawDesk?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-muted-foreground">Competitive salary and equity</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-muted-foreground">Health insurance coverage</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-muted-foreground">Remote-friendly work environment</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-muted-foreground">Professional development budget</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-muted-foreground">Flexible working hours</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-muted-foreground">Collaborative team culture</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
