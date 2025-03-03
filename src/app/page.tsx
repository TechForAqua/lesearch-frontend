import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, ArrowRight, BookOpen, Clock, FileText } from "lucide-react"
import { ThemeToggle } from "@/components/themeToggle"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Navigation */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Search className="h-6 w-6 text-primary mr-2" />
                <span className="text-xl font-bold">LeSearch</span>
              </Link>
              <nav className="hidden md:ml-10 md:flex md:space-x-4 lg:space-x-8">
                <Link
                  href="#features"
                  className="text-sm lg:text-base text-accent-foreground hover:text-primary px-3 py-2 font-medium"
                >
                  Features
                </Link>
                <Link
                  href="#pricing"
                  className="text-sm lg:text-base text-accent-foreground hover:text-primary px-3 py-2 font-medium"
                >
                  Pricing
                </Link>
                <Link
                  href="#resources"
                  className="text-sm lg:text-base text-accent-foreground hover:text-primary px-3 py-2 font-medium"
                >
                  Resources
                </Link>
                <Link
                  href="#contact"
                  className="text-sm lg:text-base text-accent-foreground hover:text-primary px-3 py-2 font-medium"
                >
                  Contact Sales
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/login"
                className="hidden sm:inline-block text-sm lg:text-base text-accent-foreground hover:text-primary font-medium"
              >
                Log in
              </Link>
              <Button className="text-sm lg:text-base px-3 py-2 lg:px-4 lg:py-2">Get LeSearch free</Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12">
              <div className="inline-flex items-center px-2.5 py-1 mb-4 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                <span className="mr-1.5">⚡</span> Backed by top AI researchers
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6">
                LeSearch is AI for <span className="text-primary">smarter</span> research
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8">
                Find what you need instantly. LeSearch helps you understand complex information, extract key insights,
                and organize your research—all with less searching.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 text-base lg:text-lg">
                  Get LeSearch free
                </Button>
                <Button variant="outline" className="px-6 py-3 text-base lg:text-lg">
                  <span>Contact Sales</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 mt-12 lg:mt-0">
              <div className="bg-card rounded-lg shadow-xl overflow-hidden border border-border">
                <div className="p-1 bg-muted">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-muted-foreground/50"></div>
                    <div className="w-3 h-3 rounded-full bg-muted-foreground/50"></div>
                    <div className="w-3 h-3 rounded-full bg-muted-foreground/50"></div>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base sm:text-lg font-semibold text-card-foreground">
                      Understanding Quantum Computing
                    </h3>
                    <div className="flex space-x-3">
                      <Button
                        title="btn"
                        type="button"
                        className="text-muted-foreground bg-transparent hover:text-primary"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                        </svg>
                      </Button>
                      <Button
                        title="btn"
                        type="button"
                        className="text-muted-foreground bg-transparent hover:text-primary"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M5 4a1 1 0 011-1h8a1 1 0 011 1v1H5V4zM4 6a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1V7a1 1 0 00-1-1H4z" />
                        </svg>
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                        <span className="text-secondary-foreground font-medium">U</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-card-foreground bg-muted p-3 rounded-lg rounded-tl-none">
                          What are the key differences between quantum and classical computing?
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <span className="text-primary-foreground font-medium">L</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-card-foreground bg-secondary p-3 rounded-lg rounded-tl-none">
                          <span className="font-semibold block mb-1">Key differences:</span>
                          1. <span className="text-primary">Quantum bits (qubits)</span> can exist in multiple states
                          simultaneously due to superposition, while classical bits are binary (0 or 1).
                          <br />
                          2. <span className="text-primary">Quantum entanglement</span> allows qubits to be correlated
                          in ways impossible for classical bits.
                          <br />
                          3. <span className="text-primary">Quantum parallelism</span> enables certain calculations to
                          be performed exponentially faster than classical computers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 bg-muted border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-muted-foreground mb-8">
            Trusted by 10,000+ researchers and professionals
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8 items-center justify-items-center">
            {["MIT", "Stanford", "Harvard", "Google", "Microsoft", "Amazon"].map((logo) => (
              <div key={logo} className="text-muted-foreground font-semibold text-base sm:text-lg">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Research smarter, not harder
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
              LeSearch helps you find, understand, and organize information faster than ever before.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-6 sm:p-8 rounded-lg border border-border shadow-sm">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-6">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-card-foreground mb-3">Instant Document Analysis</h3>
              <p className="text-muted-foreground">
                Upload any document and get key insights, summaries, and answers to your questions in seconds.
              </p>
            </div>
            <div className="bg-card p-6 sm:p-8 rounded-lg border border-border shadow-sm">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-card-foreground mb-3">Smart Citation Generator</h3>
              <p className="text-muted-foreground">
                Automatically generate accurate citations in any format and keep track of your sources effortlessly.
              </p>
            </div>
            <div className="bg-card p-6 sm:p-8 rounded-lg border border-border shadow-sm">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-6">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-card-foreground mb-3">Time-Saving Search</h3>
              <p className="text-muted-foreground">
                Find exactly what you need across all your documents with our powerful semantic search engine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-secondary border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <svg
              className="h-8 w-8 sm:h-12 sm:w-12 text-primary mx-auto mb-6"
              fill="currentColor"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="text-lg sm:text-xl lg:text-2xl font-medium text-secondary-foreground mb-6">
              &quot;LeSearch has completely transformed how I approach research. What used to take me hours now takes
              minutes. It&apos;s like having a research assistant that never sleeps.&quot;
            </p>
            <div>
              <div className="font-medium text-secondary-foreground">Dr. Sarah Chen</div>
              <div className="text-sm text-secondary-foreground/70">
                Professor of Computer Science, Stanford University
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-2xl overflow-hidden shadow-xl">
            <div className="px-6 py-12 sm:p-12 md:flex md:items-center md:justify-between">
              <div className="md:w-2/3 mb-8 md:mb-0">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">
                  Ready to spend less time searching and more time discovering?
                </h2>
                <p className="text-primary-foreground/80 text-base lg:text-lg">
                  Join thousands of researchers who are already using LeSearch to accelerate their work.
                </p>
              </div>
              <div className="bg-card rounded-md hover:scale-95">
                <Button variant="secondary"  className="w-full md:w-auto px-6 py-3 text-base lg:text-lg font-medium">
                  Get started for free
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent text-accent-foreground py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-foreground font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-primary">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Roadmap
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-foreground font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-primary">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Guides
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-foreground font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-primary">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Partners
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-foreground font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-primary">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Licenses
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <Search className="h-6 w-6 text-primary mr-2" />
              <span className="text-xl font-bold text-foreground">LeSearch</span>
            </div>
            <div className="text-sm">© {new Date().getFullYear()} LeSearch. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

