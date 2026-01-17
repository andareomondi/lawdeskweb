"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const upcomingFeatures = [
  {
    icon: "🤖",
    title: "AI Integration",
    description:
      "AI assistance to help plan, execute and conduct cases based on case documents",
    badge: "Upcoming",
  },
  {
    icon: "💬",
    title: "In-App Text Editor",
    description:
      "Create new text files for individual cases while brainstorming",
    badge: "Upcoming",
  },
];

export function UpcomingFeatures() {
  return (
    <section
      id="upcoming"
      className="py-8 md:py-16 bg-gradient-to-b from-background to-muted/50 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full w-fit mx-auto">
            <span className="text-sm font-semibold text-accent">
              🚀 Roadmap
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
            The Future is Bright
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            We're constantly innovating to bring you cutting-edge tools for your
            legal practice
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {upcomingFeatures.map((feature, index) => (
            <Card
              key={index}
              className="border border-border/50 bg-gradient-to-br from-card to-muted/20 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-primary/0 group-hover:from-accent/5 group-hover:to-primary/5 transition-all duration-300" />

              <CardHeader className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-6xl">{feature.icon}</div>
                  <span className="text-xs font-bold px-3 py-1 bg-accent/20 text-accent rounded-full">
                    {feature.badge}
                  </span>
                </div>
                <CardTitle className="text-2xl font-bold">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
