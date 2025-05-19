"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DashboardHeader from "@/components/dashboard-header"
import { Eye, FileEdit, Rocket } from "lucide-react"

export default function DashboardPage() {
  const [deployStatus, setDeployStatus] = useState<"idle" | "deploying" | "deployed">("idle")

  const handleDeploy = () => {
    setDeployStatus("deploying")

    // Simulate deployment process
    setTimeout(() => {
      setDeployStatus("deployed")
    }, 3000)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <main className="flex-1 p-4 md:p-6">
        <div className="mx-auto max-w-6xl space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">Manage your personal website</p>
            </div>
            <div className="flex items-center gap-2">
              <Link href="/editor">
                <Button variant="outline" className="gap-2">
                  <FileEdit className="h-4 w-4" />
                  Edit Website
                </Button>
              </Link>
              <Link href="/preview" target="_blank">
                <Button variant="outline" className="gap-2">
                  <Eye className="h-4 w-4" />
                  Preview
                </Button>
              </Link>
              <Button onClick={handleDeploy} disabled={deployStatus === "deploying"} className="gap-2">
                <Rocket className="h-4 w-4" />
                {deployStatus === "idle" && "Deploy Website"}
                {deployStatus === "deploying" && "Deploying..."}
                {deployStatus === "deployed" && "Deployed!"}
              </Button>
            </div>
          </div>

          <Tabs defaultValue="overview">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Website Status</CardTitle>
                    <CardDescription>Current status of your website</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <div
                        className={`h-3 w-3 rounded-full ${deployStatus === "deployed" ? "bg-green-500" : "bg-amber-500"}`}
                      />
                      <span className="font-medium">{deployStatus === "deployed" ? "Live" : "Not Deployed"}</span>
                    </div>
                    {deployStatus === "deployed" && (
                      <p className="mt-2 text-sm text-muted-foreground">Last deployed: Just now</p>
                    )}
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Content</CardTitle>
                    <CardDescription>Your website content</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Profile</span>
                        <span className="text-sm font-medium">Complete</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Projects</span>
                        <span className="text-sm font-medium">2 items</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Blog Posts</span>
                        <span className="text-sm font-medium">1 post</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Domain</CardTitle>
                    <CardDescription>Your website domain</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium">username.profilesite.app</p>
                    <p className="mt-2 text-sm text-muted-foreground">Connect a custom domain in settings</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your recent website activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <FileEdit className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Updated profile information</p>
                        <p className="text-sm text-muted-foreground">Just now</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <FileEdit className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Added new project</p>
                        <p className="text-sm text-muted-foreground">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <FileEdit className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Created account</p>
                        <p className="text-sm text-muted-foreground">1 day ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="analytics" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Website Analytics</CardTitle>
                  <CardDescription>View your website traffic and engagement</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px] flex items-center justify-center">
                  <p className="text-muted-foreground">Analytics will be available after deployment</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="settings" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Website Settings</CardTitle>
                  <CardDescription>Manage your website settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-medium">Custom Domain</h3>
                    <p className="text-sm text-muted-foreground">Connect your own domain to your website</p>
                    <Button variant="outline">Connect Domain</Button>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">SEO Settings</h3>
                    <p className="text-sm text-muted-foreground">Configure SEO settings for your website</p>
                    <Button variant="outline">Configure SEO</Button>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">Privacy</h3>
                    <p className="text-sm text-muted-foreground">Manage privacy settings for your website</p>
                    <Button variant="outline">Privacy Settings</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
