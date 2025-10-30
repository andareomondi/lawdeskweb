"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"

export default function BlogPage() {
  const posts = [
    {
      title: "5 Ways to Streamline Your Case Management",
      excerpt: "Learn practical tips to organize your cases more efficiently and save hours every week.",
      date: "January 15, 2025",
      author: "Sarah Kipchoge",
      category: "Productivity",
    },
    {
      title: "The Future of Legal Tech in Africa",
      excerpt: "Exploring how technology is transforming the legal industry across the African continent.",
      date: "January 10, 2025",
      author: "James Omondi",
      category: "Industry",
    },
    {
      title: "Document Management Best Practices",
      excerpt: "A comprehensive guide to organizing and managing legal documents effectively.",
      date: "January 5, 2025",
      author: "Grace Mwangi",
      category: "Tips",
    },
    {
      title: "Never Miss a Deadline Again",
      excerpt: "How to use LawDesk's reminder system to stay on top of all your court dates.",
      date: "December 28, 2024",
      author: "Peter Kariuki",
      category: "Features",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">LawDesk Blog</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tips, insights, and updates about legal tech and case management
            </p>
          </div>

          {/* Blog Posts */}
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post, idx) => (
              <article
                key={idx}
                className="border border-border rounded-lg p-8 hover:border-primary/50 transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">By {post.author}</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
