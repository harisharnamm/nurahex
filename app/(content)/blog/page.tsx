import Link from "next/link"
import Image from "next/image"
import { CardGlass } from "@/components/shared/card-glass"
import { ArrowRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// This would normally come from a CMS or API
const blogPosts = [
  {
    id: "ai-implementation-guide",
    title: "The Complete Guide to AI Implementation",
    excerpt: "Learn how to successfully implement AI in your business with our step-by-step guide.",
    date: "May 15, 2023",
    readTime: "8 min read",
    author: "Dr. Alex Chen",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["AI Implementation", "Business"],
  },
  {
    id: "llm-explained",
    title: "Large Language Models Explained",
    excerpt: "A deep dive into how large language models work and how they can be used in business applications.",
    date: "June 2, 2023",
    readTime: "12 min read",
    author: "Dr. Maya Patel",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["LLM", "Technical"],
  },
  {
    id: "ai-roi-calculation",
    title: "Calculating ROI for AI Projects",
    excerpt: "How to measure the return on investment for your AI initiatives and make data-driven decisions.",
    date: "July 10, 2023",
    readTime: "6 min read",
    author: "Sarah Johnson",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["ROI", "Business"],
  },
  {
    id: "ethical-ai-development",
    title: "Ethical Considerations in AI Development",
    excerpt: "Exploring the ethical implications of AI and how to develop responsible AI solutions.",
    date: "August 5, 2023",
    readTime: "10 min read",
    author: "Dr. Alex Chen",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Ethics", "AI Development"],
  },
  {
    id: "ai-for-customer-support",
    title: "Transforming Customer Support with AI",
    excerpt: "How AI is revolutionizing customer support and improving customer satisfaction.",
    date: "September 12, 2023",
    readTime: "7 min read",
    author: "Michael Chen",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Customer Support", "Case Study"],
  },
  {
    id: "future-of-ai",
    title: "The Future of AI: Trends to Watch",
    excerpt: "Exploring the emerging trends in AI and what they mean for businesses in the coming years.",
    date: "October 20, 2023",
    readTime: "9 min read",
    author: "Dr. Maya Patel",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Trends", "Future"],
  },
]

export default function BlogPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-bg-dark">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              NurahexAI <span className="text-primary">Blog</span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Insights, guides, and news from the world of AI implementation.
            </p>
            <div className="relative max-w-xl mx-auto">
              <Input
                type="text"
                placeholder="Search articles..."
                className="bg-white/5 border-white/10 text-white pl-10 pr-4 py-2 rounded-full"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50" />
            </div>
          </div>
        </div>
      </section>

      {/* Tags Section */}
      <section className="py-8 bg-bg-dark/90 border-y border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {["All", "AI Implementation", "Business", "Technical", "Ethics", "Case Study", "Trends"].map(
              (tag, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className={`rounded-full px-4 py-2 text-sm ${
                    index === 0 ? "bg-primary text-primary-foreground" : "bg-white/5 hover:bg-white/10"
                  }`}
                >
                  {tag}
                </Button>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-bg-dark">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link href={`/blog/${post.id}`} key={post.id}>
                <CardGlass className="h-full overflow-hidden group">
                  <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-dark to-transparent"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="text-xs bg-white/10 px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{post.title}</h3>
                    <p className="text-white/70 line-clamp-2">{post.excerpt}</p>
                    <div className="flex justify-between items-center pt-4 text-sm text-white/60">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center pt-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Read article</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </CardGlass>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-white/80 mb-6">
              Subscribe to our newsletter for the latest insights and news from the world of AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <Input type="email" placeholder="Your email" className="bg-white/5 border-white/10 text-white" />
              <Button variant="ghost" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
