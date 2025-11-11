"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: "📅",
    title: "Smart Calendar",
    description: "Visual court date tracking with urgent/expired case indicators",
    color: "from-blue-500/10 to-blue-600/10",
  },
  {
    icon: "📂",
    title: "Document Management",
    description: "Categorized document storage (Evidence, Contracts, Affidavits, etc.)",
    color: "from-purple-500/10 to-purple-600/10",
  },
  {
    icon: "⚖️",
    title: "Case Tracking",
    description: "Complete case lifecycle management with status tracking",
    color: "from-amber-500/10 to-amber-600/10",
  },
  {
    icon: "🔔",
    title: "Smart Reminders",
    description: "Automated notifications for upcoming court dates",
    color: "from-red-500/10 to-red-600/10",
  },
  {
    icon: "🔐",
    title: "Secure Authentication",
    description: "User accounts with profile management and data protection",
    color: "from-green-500/10 to-green-600/10",
  },
  {
    icon: "📊",
    title: "Dashboard Overview",
    description: "At-a-glance overview of cases and upcoming deadlines",
    color: "from-cyan-500/10 to-cyan-600/10",
  },
  {
    icon: "🔍",
    title: "Search & Filter",
    description: "Quick access to cases and documents with powerful search",
    color: "from-indigo-500/10 to-indigo-600/10",
  },
  {
    icon: "📱",
    title: "Mobile-First Design",
    description: "Optimized for lawyers on the go with responsive interface",
    color: "from-pink-500/10 to-pink-600/10",
  },
]

export function Features() {
  return (
    <section id="features" className="py-8 md:py-16 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
            Everything You Need
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Powerful features designed specifically for the African legal market
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-gradient-to-br ${feature.color} backdrop-blur-sm`}
            >
              <CardHeader>
                <div className="text-5xl mb-3">{feature.icon}</div>
                <CardTitle className="text-lg font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
