"use client"

import { SiteHeader } from "@/components/site-header"
import { Card } from "@/components/ui/card"
import {
  BookOpen,
  Signal,
  Newspaper,
  LineChart,
  BarChart,
  BookOpenCheck,
  HeadphonesIcon,
  Wallet
} from "lucide-react"

const services = [
  {
    icon: BookOpen,
    title: "Crypto Education",
    description: "Comprehensive curriculum from basic to advanced concepts",
    access: "All Plans"
  },
  {
    icon: Signal,
    title: "Crypto Signals",
    description: "Real-time trading signals with detailed analysis",
    access: "All Plans"
  },
  {
    icon: Newspaper,
    title: "Crypto News & Guide",
    description: "Latest market news and detailed trading guides",
    access: "All Plans"
  },
  {
    icon: LineChart,
    title: "Analysis Tools",
    description: "Professional-grade technical analysis tools",
    access: "Standard+"
  },
  {
    icon: BarChart,
    title: "Technical Analysis",
    description: "In-depth technical analysis resources and training",
    access: "Standard+"
  },
  {
    icon: BookOpenCheck,
    title: "Fundamental Analysis",
    description: "Project evaluation and market research training",
    access: "Premium+"
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock customer support and assistance",
    access: "All Plans"
  },
  {
    icon: Wallet,
    title: "Stipend Program",
    description: "Monthly stipends for eligible premium plans",
    access: "Premium+"
  }
]

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        <div className="bg-primary py-16 text-primary-foreground">
          <div className="container text-center">
            <h1 className="mb-4 text-4xl font-bold">Our Services</h1>
            <p className="text-lg">
              Comprehensive crypto education and trading resources
            </p>
          </div>
        </div>

        <div className="container py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service) => (
              <Card key={service.title} className="p-6">
                <service.icon className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {service.description}
                </p>
                <div className="mt-auto">
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {service.access}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}