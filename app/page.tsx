import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Lightbulb, Rocket, SmilePlus, Database, Brain, MousePointerClick, Check, Minus } from "lucide-react"
import Logo from "@/components/ui/logo"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between p-4">
          <div className="flex items-center gap-2 font-bold text-xl">
           <Logo></Logo>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-foreground/80">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-foreground/80">
              How It Works
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-foreground/80">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Sign In
            </Link>
            <Button className="black hover:opacity-90 transition-opacity">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-28 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Your business copilot for <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">smarter</span> decisions
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Turn data into action—no coding required. Mithrandir analyzes your business data and provides
                    actionable insights instantly.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="black hover:opacity-90 transition-opacity"
                  >
                    Get Started Free
                  </Button>
                  <Button size="lg" variant="outline">
                    See Demo
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[500px] aspect-video overflow-hidden rounded-xl border border-border/50 bg-muted/50">
                  <Image
                    src="/data-user.png?height=500&width=800"
                    alt="Mithrandir Dashboard"
                    width={800}
                    height={500}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-background/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section id="features" className="py-16 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Why Business Leaders Choose Mithrandir
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Outperforming traditional BI tools with AI-powered insights that drive real business outcomes.
                </p>
              </div>
            </div>
            <div className="grid gap-6 mt-8 md:grid-cols-3">
              <div className="flex flex-col p-6 space-y-4 rounded-lg border border-transparent bg-background relative overflow-hidden group">
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 transform translate-y-1 group-hover:translate-y-0 transition-transform"></div>
                <div className="p-2 rounded-full bg-muted w-10 h-10 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-foreground" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Instant Insights</h3>
                  <p className="text-muted-foreground">
                    Uncover hidden patterns and opportunities in your business data without waiting for reports or
                    analysts.
                  </p>
                </div>
              </div>
              <div className="flex flex-col p-6 space-y-4 rounded-lg border border-transparent bg-background relative overflow-hidden group">
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 transform translate-y-1 group-hover:translate-y-0 transition-transform"></div>
                <div className="p-2 rounded-full bg-muted w-10 h-10 flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-foreground" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Proactive Actions</h3>
                  <p className="text-muted-foreground">
                    Get AI-recommended actions tailored to your business goals, not just data visualizations.
                  </p>
                </div>
              </div>
              <div className="flex flex-col p-6 space-y-4 rounded-lg border border-transparent bg-background relative overflow-hidden group">
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 transform translate-y-1 group-hover:translate-y-0 transition-transform"></div>
                <div className="p-2 rounded-full bg-muted w-10 h-10 flex items-center justify-center">
                  <SmilePlus className="w-5 h-5 text-foreground" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Dead Simple</h3>
                  <p className="text-muted-foreground">
                    No complex dashboards or SQL queries. Just ask questions in plain English and get answers instantly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How Mithrandir Works</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Three simple steps to transform your business decision-making
                </p>
              </div>
            </div>
            <div className="grid gap-12 mt-8 lg:grid-cols-2">
              <div className="space-y-8">
                <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-black flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Database className="w-5 h-5" />
                      <h3 className="text-xl font-bold">Connect Your Data</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Securely connect your business tools and data sources with just a few clicks. Works with
                      QuickBooks, Shopify, Google Analytics, and more.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-black flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Brain className="w-5 h-5" />
                      <h3 className="text-xl font-bold">AI Finds Insights</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Our AI analyzes your data, identifies trends, anomalies, and opportunities that would take
                      analysts days to discover.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-black flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <MousePointerClick className="w-5 h-5" />
                      <h3 className="text-xl font-bold">Act in One Click</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Get actionable recommendations you can implement immediately, or automate actions directly from
                      Mithrandir.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[500px] aspect-square overflow-hidden rounded-xl border border-border/50 bg-muted/50">
                  <Image
                    src="/report-view.png?height=500&width=500"
                    alt="AI Insight Example"
                    width={500}
                    height={500}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-background/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-16 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Trusted by Forward-Thinking Businesses
                </h2>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-8 md:gap-12">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="relative group">
                  <div className="w-32 h-12 bg-muted/50 rounded flex items-center justify-center">
                    <span className="text-muted-foreground font-medium">LOGO {i}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
                </div>
              ))}
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-6 bg-background rounded-lg border border-border/50 relative">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"></div>
                  <blockquote className="text-muted-foreground">
                    "Mithrandir has transformed how we make decisions. We're seeing insights we never would have
                    discovered on our own."
                  </blockquote>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-muted"></div>
                    <div>
                      <p className="font-medium">Jane Smith</p>
                      <p className="text-sm text-muted-foreground">CEO, Example Company {i}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Simple, Transparent Pricing</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Choose the plan that's right for your business
                </p>
              </div>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {/* Free Tier */}
              <div className="flex flex-col p-6 bg-background rounded-lg border border-border/50 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-purple-500"></div>
                <h3 className="text-xl font-bold">Free</h3>
                <div className="mt-4 text-4xl font-bold">
                  $0<span className="text-base font-normal text-muted-foreground">/month</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">Unlimited insights, limited depth/data size</p>
                <ul className="mt-4 space-y-2 flex-1">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Basic insights</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Connect up to 2 data sources</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Limited data processing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Minus className="w-5 h-5 text-muted-foreground" />
                    <span className="text-muted-foreground">Advanced features</span>
                  </li>
                </ul>
                <Button className="mt-6" variant="outline">
                  Start Free
                </Button>
              </div>

              {/* Solo Tier */}
              <div className="flex flex-col p-6 bg-background rounded-lg border border-border/50 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-400"></div>
                <h3 className="text-xl font-bold">Solo</h3>
                <div className="mt-4 text-4xl font-bold">
                  $19<span className="text-base font-normal text-muted-foreground">/month</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">For entrepreneurs, full insights</p>
                <ul className="mt-4 space-y-2 flex-1">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Full insights depth</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Connect up to 5 data sources</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Weekly trend reports</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Basic action recommendations</span>
                  </li>
                </ul>
                <Button className="mt-6" variant="outline">
                  Get Started
                </Button>
              </div>

              {/* Pro Tier */}
              <div className="flex flex-col p-6 bg-background rounded-lg border border-border/50 relative overflow-hidden shadow-lg">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-red-500"></div>
                <div className="absolute -right-12 -top-12 bg-gradient-to-br from-pink-500 to-red-500 w-24 h-24 rotate-45"></div>
                <div className="absolute right-2 top-2 text-s font-bold text-white">🔥</div>
                <h3 className="text-xl font-bold">Pro</h3>
                <div className="mt-4 text-4xl font-bold">
                  $59<span className="text-base font-normal text-muted-foreground">/month</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">For growing teams, advanced features</p>
                <ul className="mt-4 space-y-2 flex-1">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Advanced insights & predictions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Connect unlimited data sources</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Daily trend reports</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Advanced action recommendations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Team collaboration features</span>
                  </li>
                </ul>
                <Button className="mt-6 bg-gradient-to-r from-pink-500 to-red-500 hover:opacity-90 transition-opacity">
                  Get Started
                </Button>
              </div>

              {/* Enterprise Tier */}
              <div className="flex flex-col p-6 bg-background rounded-lg border border-border/50 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-purple-400"></div>
                <h3 className="text-xl font-bold">Enterprise</h3>
                <div className="mt-4 text-4xl font-bold">
                  Custom
                </div>
                <p className="mt-2 text-sm text-muted-foreground">Compliance, dedicated infrastructure</p>
                <ul className="mt-4 space-y-2 flex-1">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Everything in Pro</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Dedicated infrastructure</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Custom integrations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>SOC 2 compliance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Dedicated account manager</span>
                  </li>
                </ul>
                <Button className="mt-6 bg-gradient-to-r from-red-500 to-purple-500 hover:opacity-90 transition-opacity">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Transform Your Business?</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Join the businesses already making smarter decisions with Mithrandir.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button
                  size="lg"
                  className="black hover:opacity-90 transition-opacity"
                >
                  Get Started Free
                </Button>
                <Button size="lg" variant="outline">
                  Schedule a Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-background">
        <div className="container flex flex-col gap-6 py-8 md:py-12">
          <div className="flex flex-col gap-6 md:flex-row md:justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold text-xl">
                {/* <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                  Mithrandir
                </span> */}
                <Logo></Logo>
              </div>
              <p className="text-sm text-muted-foreground max-w-[300px]">
                Your AI COO for smarter business decisions. Turn data into action—no coding required.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div className="space-y-3">
                <h4 className="text-sm font-medium">Company</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-medium">Product</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                      Integrations
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-medium">Resources</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                      Support
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Mithrandir. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

