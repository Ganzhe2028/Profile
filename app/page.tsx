import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Edit, Globe, Rocket } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg">
            <Globe className="h-6 w-6" />
            <span>ProfileSite</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Create Your Personal Website in Minutes
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Build your profile, add content, and deploy with a single click. No coding required.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/signup">
                    <Button size="lg" className="gap-2">
                      Get Started <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/examples">
                    <Button size="lg" variant="outline">
                      View Examples
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[500px] aspect-square overflow-hidden rounded-xl border bg-muted/50 p-4 shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-purple-500/20" />
                  <div className="relative h-full w-full rounded-lg bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-4 border-b pb-4">
                      <div className="h-12 w-12 rounded-full bg-gray-100" />
                      <div>
                        <div className="h-4 w-32 rounded bg-gray-100" />
                        <div className="mt-1 h-3 w-24 rounded bg-gray-100" />
                      </div>
                    </div>
                    <div className="mt-4 space-y-3">
                      <div className="h-4 w-full rounded bg-gray-100" />
                      <div className="h-4 w-5/6 rounded bg-gray-100" />
                      <div className="h-4 w-4/6 rounded bg-gray-100" />
                    </div>
                    <div className="mt-6 h-32 rounded bg-gray-100" />
                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <div className="h-24 rounded bg-gray-100" />
                      <div className="h-24 rounded bg-gray-100" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Create your personal website in three simple steps
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Edit className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">1. Create Your Profile</h3>
                <p className="text-center text-muted-foreground">
                  Add your personal information, skills, and a brief introduction about yourself.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Edit className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">2. Add Content</h3>
                <p className="text-center text-muted-foreground">
                  Easily add text, images, links, and videos to showcase your work and experience.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Rocket className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">3. Deploy</h3>
                <p className="text-center text-muted-foreground">
                  Click the deploy button and your personal website will be live in seconds.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8 md:py-12">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-2 font-bold text-lg">
              <Globe className="h-6 w-6" />
              <span>ProfileSite</span>
            </div>
            <p className="text-sm text-muted-foreground">Create and deploy your personal website with ease.</p>
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:gap-8">
            <div className="space-y-2">
              <h4 className="font-medium">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    Examples
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t py-6 md:py-8">
          <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-muted-foreground md:text-left">
              © {new Date().getFullYear()} ProfileSite. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Terms
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
