import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { Github, Linkedin, Mail, MapPin, Twitter } from "lucide-react"
import { Timeline } from "@/components/timeline"

export default function PreviewPage() {
  return (
    <div className="min-h-screen bg-muted/40">
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="font-bold">John Doe</div>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="text-sm font-medium">
              About
            </a>
            <a href="#projects" className="text-sm font-medium">
              Projects
            </a>
            <a href="#blog" className="text-sm font-medium">
              Blog
            </a>
            <a href="#contact" className="text-sm font-medium">
              Contact
            </a>
          </nav>
          <Button size="sm">Contact Me</Button>
        </div>
      </header>
      <main>
        <section id="hero" className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_450px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">John Doe</h1>
                  <p className="text-xl text-muted-foreground">Software Developer</p>
                </div>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  I&apos;m a software developer with 5 years of experience in web development. I specialize in React,
                  Node.js, and TypeScript.
                </p>
                <div className="flex gap-4">
                  <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon">
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </a>
                  <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </a>
                  <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </a>
                  <a href="mailto:john@example.com">
                    <Button variant="outline" size="icon">
                      <Mail className="h-4 w-4" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  San Francisco, CA
                </div>
              </div>
              <div className="mx-auto flex w-full max-w-[400px] items-center justify-center lg:justify-end">
                <div className="relative aspect-square w-full max-w-[300px] overflow-hidden rounded-full border-4 border-background bg-muted md:max-w-[350px]">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="John Doe"
                    width={400}
                    height={400}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
              <p className="text-muted-foreground md:text-xl">
                I&apos;m passionate about creating elegant solutions to complex problems. With a background in computer
                science and years of industry experience, I bring a unique perspective to every project.
              </p>
            </div>
            <div className="mx-auto mt-12 max-w-4xl">
              <Tabs defaultValue="skills">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="skills">Skills</TabsTrigger>
                  <TabsTrigger value="experience">Experience</TabsTrigger>
                  <TabsTrigger value="education">Education</TabsTrigger>
                </TabsList>
                <TabsContent value="skills" className="mt-6 space-y-4">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                      <CardContent className="p-4">
                        <h3 className="font-semibold">Frontend</h3>
                        <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                          <li>React</li>
                          <li>Next.js</li>
                          <li>TypeScript</li>
                          <li>Tailwind CSS</li>
                          <li>HTML/CSS</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <h3 className="font-semibold">Backend</h3>
                        <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                          <li>Node.js</li>
                          <li>Express</li>
                          <li>PostgreSQL</li>
                          <li>MongoDB</li>
                          <li>REST APIs</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <h3 className="font-semibold">Tools</h3>
                        <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                          <li>Git</li>
                          <li>Docker</li>
                          <li>AWS</li>
                          <li>CI/CD</li>
                          <li>Vercel</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="experience" className="mt-6 space-y-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold">Senior Developer at Tech Co</h3>
                          <span className="text-sm text-muted-foreground">2021 - Present</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Led the development of a React-based dashboard application. Implemented CI/CD pipelines and
                          mentored junior developers.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold">Web Developer at Startup Inc</h3>
                          <span className="text-sm text-muted-foreground">2018 - 2021</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Developed and maintained multiple client websites. Worked with React, Node.js, and MongoDB.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="education" className="mt-6 space-y-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold">Master of Computer Science</h3>
                          <span className="text-sm text-muted-foreground">2016 - 2018</span>
                        </div>
                        <p className="text-sm text-muted-foreground">University of Technology</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold">Bachelor of Science in Computer Science</h3>
                          <span className="text-sm text-muted-foreground">2012 - 2016</span>
                        </div>
                        <p className="text-sm text-muted-foreground">State University</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section id="projects" className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h2>
              <p className="text-muted-foreground md:text-xl">Here are some of the projects I&apos;ve worked on.</p>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Project 1"
                    width={400}
                    height={200}
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold">E-commerce Platform</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    A full-stack e-commerce platform built with React, Node.js, and MongoDB.
                  </p>
                  <div className="mt-4 flex gap-2">
                    <Button variant="outline" size="sm">
                      View Demo
                    </Button>
                    <Button variant="outline" size="sm">
                      GitHub
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Project 2"
                    width={400}
                    height={200}
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold">Task Management App</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    A task management application with drag-and-drop functionality.
                  </p>
                  <div className="mt-4 flex gap-2">
                    <Button variant="outline" size="sm">
                      View Demo
                    </Button>
                    <Button variant="outline" size="sm">
                      GitHub
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="timeline" className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Journey</h2>
              <p className="text-muted-foreground md:text-xl">Key milestones in my professional development.</p>
            </div>
            <div className="mx-auto mt-12 max-w-4xl">
              <Timeline
                items={[
                  {
                    id: "1",
                    date: "2018",
                    title: "Started Learning Web Development",
                    description: "Began my journey into web development with HTML, CSS, and JavaScript.",
                  },
                  {
                    id: "2",
                    date: "2019",
                    title: "First Developer Role",
                    description: "Joined a startup as a junior developer working on frontend applications.",
                  },
                  {
                    id: "3",
                    date: "2021",
                    title: "Senior Developer Position",
                    description: "Promoted to senior developer, leading a team of frontend engineers.",
                  },
                  {
                    id: "4",
                    date: "2023",
                    title: "Launched Personal Projects",
                    description: "Created and launched several successful side projects and open-source contributions.",
                  },
                ]}
              />
            </div>
          </div>
        </section>

        <section id="blog" className="py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Blog</h2>
              <p className="text-muted-foreground md:text-xl">Thoughts, ideas, and insights on web development.</p>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Getting Started with React Hooks</h3>
                    <p className="text-sm text-muted-foreground">May 15, 2023</p>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    React Hooks have revolutionized how we write React components. In this post, I share my experience
                    and best practices.
                  </p>
                  <Button variant="link" className="mt-4 px-0">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Me</h2>
              <p className="text-muted-foreground md:text-xl">
                Feel free to reach out if you have any questions or want to work together.
              </p>
            </div>
            <div className="mx-auto mt-12 max-w-lg">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Mail className="h-5 w-5 text-muted-foreground" />
                      <a href="mailto:john@example.com" className="text-muted-foreground hover:text-foreground">
                        john@example.com
                      </a>
                    </div>
                    <div className="flex items-center gap-4">
                      <MapPin className="h-5 w-5 text-muted-foreground" />
                      <span className="text-muted-foreground">San Francisco, CA</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Github className="h-5 w-5 text-muted-foreground" />
                      <a
                        href="https://github.com/johndoe"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        github.com/johndoe
                      </a>
                    </div>
                    <div className="flex items-center gap-4">
                      <Twitter className="h-5 w-5 text-muted-foreground" />
                      <a
                        href="https://twitter.com/johndoe"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        twitter.com/johndoe
                      </a>
                    </div>
                    <div className="flex items-center gap-4">
                      <Linkedin className="h-5 w-5 text-muted-foreground" />
                      <a
                        href="https://linkedin.com/in/johndoe"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        linkedin.com/in/johndoe
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </a>
            <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
            </a>
            <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
