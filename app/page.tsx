import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Lightbulb, Rocket, SmilePlus, Database, Brain, MousePointerClick, Check, Minus } from "lucide-react"
import Logo from "@/components/ui/logo"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
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
        <section className="py-40 md:py-40">
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
                <div className="relative w-full max-w-[500px] aspect-video overflow-hidden rounded-xl border border-border/50 bg-muted/50 shadow-xl">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <div className="col-span-1 md:col-span-2 lg:col-span-2 p-6 rounded-xl border bg-background/50 backdrop-blur relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 transform translate-y-1 group-hover:translate-y-0 transition-transform"></div>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="relative w-full md:w-1/2 aspect-[4/3] rounded-lg overflow-hidden">
                    <Image
                      src="/insights-dashboard.png"
                      alt="AI-powered insights dashboard"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 space-y-4">
                    <h3 className="text-2xl font-bold">Instant Insights</h3>
                    <p className="text-muted-foreground text-lg">
                      Uncover hidden patterns and opportunities in your business data without waiting for reports or analysts. Our AI analyzes your data in real-time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-span-1 p-6 rounded-xl border bg-background/50 backdrop-blur relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 transform translate-y-1 group-hover:translate-y-0 transition-transform"></div>
                <div className="space-y-4">
                  <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/proactive-actions.png"
                      alt="AI recommendations and actions"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">Proactive Actions</h3>
                  <p className="text-muted-foreground">
                    Get AI-recommended actions tailored to your business goals, not just data visualizations.
                  </p>
                </div>
              </div>

              <div className="col-span-1 md:col-span-2 lg:col-span-3 p-6 rounded-xl border bg-background/50 backdrop-blur relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 transform translate-y-1 group-hover:translate-y-0 transition-transform"></div>
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="md:w-2/3 space-y-4">
                    <h3 className="text-2xl font-bold">Dead Simple Interface</h3>
                    <p className="text-muted-foreground text-lg">
                      No complex dashboards or SQL queries. Just ask questions in plain English and get answers instantly. Our natural language interface makes data analysis accessible to everyone on your team.
                    </p>
                  </div>
                  <div className="relative w-full md:w-1/3 aspect-video rounded-lg overflow-hidden">
                    <Image
                      src="/simple-interface.png"
                      alt="Simple natural language interface"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-16 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">How Mithrandir Works</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Three simple steps to transform your business decision-making
                </p>
              </div>
            </div>
            <div className="grid gap-12 mt-12 lg:grid-cols-2">
              <div className="space-y-16">
                <div className="group flex gap-6 items-start transition-all duration-300 hover:translate-x-2">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Database className="w-6 h-6" />
                      <h3 className="text-2xl font-bold">Connect Your Data</h3>
                    </div>
                    <p className="text-muted-foreground text-lg">
                      Securely connect your business tools and data sources with just a few clicks.
                    </p>
                    <div className="relative w-full rounded-lg overflow-hidden">
                      <Image
                        src="/providers.png"
                        alt="Data sources"
                        width={346}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="group flex gap-6 items-start transition-all duration-300 hover:translate-x-2">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Brain className="w-6 h-6" />
                      <h3 className="text-2xl font-bold">AI Finds Insights</h3>
                    </div>
                    <p className="text-muted-foreground text-lg">
                      Our AI analyzes your data in real-time, identifying trends and opportunities.
                    </p>
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      {['Revenue Growth', 'Cost Savings', 'Performance', 'Customer Trends'].map((insight) => (
                        <div key={insight} className="flex items-center gap-2">
                          <Check className="w-5 h-5 text-green-500" />
                          <span className="text-sm">{insight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="group flex gap-6 items-start transition-all duration-300 hover:translate-x-2">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <MousePointerClick className="w-6 h-6" />
                      <h3 className="text-2xl font-bold">Take Action</h3>
                    </div>
                    <p className="text-muted-foreground text-lg">
                      Transform insights into results with one-click automated actions.
                    </p>
                    <div className="flex gap-3 pt-2">
                      <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black text-white hover:opacity-90 transition-opacity text-sm">
                        <MousePointerClick className="w-4 h-4" />
                        Optimize Pricing
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 rounded-lg border hover:bg-muted transition-colors text-sm">
                        <MousePointerClick className="w-4 h-4" />
                        Adjust Inventory
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative flex items-center justify-center lg:h-full">
                <div className="relative w-full max-w-[500px] aspect-square overflow-hidden rounded-xl border bg-background/50 backdrop-blur shadow-xl">
                  <Image
                    src="/report-view.png"
                    alt="AI Insight Example"
                    fill
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


        <section id="pricing" className="py-32">
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
                <div className="absolute top-0 left-0 right-0 h-1 bg-black"></div>
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
                <div className="absolute top-0 left-0 right-0 h-1 bg-black"></div>
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
                <div className="absolute top-0 left-0 right-0 h-1 bg-black"></div>
                <div className="absolute -right-12 -top-12 bg-black w-24 h-24 rotate-45"></div>
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
                <Button className="mt-6 bg-black hover:opacity-90 transition-opacity">
                  Get Started
                </Button>
              </div>

              {/* Enterprise Tier */}
              <div className="flex flex-col p-6 bg-background rounded-lg border border-border/50 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-black"></div>
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
                <Button className="mt-6" variant="outline">
                  Contact sales
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-64 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Transform Your Business?</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Join the businesses already making smarter decisions with Mithrandir.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-white/90"
                >
                  Get Started Free
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-black text-white hover:text-white hover:bg-gray-900 transition-opacity"
                >
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

