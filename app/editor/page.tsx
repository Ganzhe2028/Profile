"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import DashboardHeader from "@/components/dashboard-header"
import ContentBlockEditor from "@/components/content-block-editor"
import { ArrowLeft, Eye, Save } from "lucide-react"

export default function EditorPage() {
  const router = useRouter()
  const [isSaving, setIsSaving] = useState(false)
  const [profile, setProfile] = useState({
    name: "John Doe",
    title: "Software Developer",
    bio: "I'm a software developer with 5 years of experience in web development. I specialize in React, Node.js, and TypeScript.",
    email: "john@example.com",
    location: "San Francisco, CA",
    github: "johndoe",
    twitter: "johndoe",
    linkedin: "johndoe",
  })

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProfile((prev) => ({ ...prev, [name]: value }))
  }

  const checkContentChanges = useCallback(() => {
    // 在实际应用中，这里会比较新旧内容
    // 通知仪表板内容已更改
    localStorage.setItem("contentChanged", "true")

    // 如果设置了自动部署，则触发部署
    const autoDeploy = localStorage.getItem("autoDeploy") !== "false"
    if (autoDeploy) {
      // 模拟自动部署
      setIsSaving(true)
      setTimeout(() => {
        setIsSaving(false)
        // 显示部署成功消息
        alert("Content saved and deployed successfully!")
      }, 1500)
    } else {
      // 仅保存
      setIsSaving(true)
      setTimeout(() => {
        setIsSaving(false)
        alert("Content saved successfully! Go to dashboard to deploy changes.")
      }, 1500)
    }
  }, [])

  const handleSave = () => {
    setIsSaving(true)

    // 检测内容变更并处理部署
    checkContentChanges()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <div className="border-b">
        <div className="container flex h-14 items-center px-4 md:px-6">
          <Button variant="ghost" size="icon" onClick={() => router.push("/dashboard")}>
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Button>
          <div className="ml-4">
            <h1 className="text-lg font-semibold">Website Editor</h1>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <a href="/preview" target="_blank" className="flex items-center gap-2" rel="noreferrer">
                <Eye className="h-4 w-4" />
                Preview
              </a>
            </Button>
            <Button size="sm" onClick={handleSave} disabled={isSaving} className="flex items-center gap-2">
              <Save className="h-4 w-4" />
              {isSaving ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </div>
      </div>
      <main className="flex-1 p-4 md:p-6">
        <div className="mx-auto max-w-6xl space-y-6">
          <Tabs defaultValue="profile">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="content">Content</TabsTrigger>
              <TabsTrigger value="appearance">Appearance</TabsTrigger>
            </TabsList>
            <TabsContent value="profile" className="space-y-4">
              <Card className="p-6">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold">Personal Information</h2>
                    <p className="text-sm text-muted-foreground">
                      Update your personal information that will be displayed on your website.
                    </p>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" value={profile.name} onChange={handleProfileChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="title">Professional Title</Label>
                      <Input id="title" name="title" value={profile.title} onChange={handleProfileChange} />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea id="bio" name="bio" rows={4} value={profile.bio} onChange={handleProfileChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={profile.email}
                        onChange={handleProfileChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input id="location" name="location" value={profile.location} onChange={handleProfileChange} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Social Links</h3>
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="space-y-2">
                        <Label htmlFor="github">GitHub</Label>
                        <Input id="github" name="github" value={profile.github} onChange={handleProfileChange} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="twitter">Twitter</Label>
                        <Input id="twitter" name="twitter" value={profile.twitter} onChange={handleProfileChange} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="linkedin">LinkedIn</Label>
                        <Input id="linkedin" name="linkedin" value={profile.linkedin} onChange={handleProfileChange} />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
            <TabsContent value="content" className="space-y-4">
              <ContentBlockEditor />
            </TabsContent>
            <TabsContent value="appearance" className="space-y-4">
              <Card className="p-6">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold">Theme Settings</h2>
                    <p className="text-sm text-muted-foreground">Customize the appearance of your website.</p>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">Color Scheme</h3>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="flex flex-col items-center gap-1">
                          <div className="h-12 w-12 rounded-full bg-blue-500 ring-2 ring-offset-2 ring-blue-500" />
                          <span className="text-xs">Blue</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <div className="h-12 w-12 rounded-full bg-green-500" />
                          <span className="text-xs">Green</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <div className="h-12 w-12 rounded-full bg-purple-500" />
                          <span className="text-xs">Purple</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <div className="h-12 w-12 rounded-full bg-red-500" />
                          <span className="text-xs">Red</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <div className="h-12 w-12 rounded-full bg-amber-500" />
                          <span className="text-xs">Amber</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <div className="h-12 w-12 rounded-full bg-slate-800" />
                          <span className="text-xs">Dark</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">Layout</h3>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col items-center gap-1">
                          <div className="h-20 w-32 rounded border bg-muted p-2">
                            <div className="h-2 w-full rounded bg-muted-foreground/30" />
                            <div className="mt-2 h-12 w-full rounded bg-muted-foreground/20" />
                          </div>
                          <span className="text-xs">Standard</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <div className="h-20 w-32 rounded border bg-muted p-2">
                            <div className="h-2 w-full rounded bg-muted-foreground/30" />
                            <div className="mt-2 grid grid-cols-2 gap-1">
                              <div className="h-12 rounded bg-muted-foreground/20" />
                              <div className="h-12 rounded bg-muted-foreground/20" />
                            </div>
                          </div>
                          <span className="text-xs">Split</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">Typography</h3>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col items-center gap-1">
                          <div className="flex h-12 w-full items-center justify-center rounded border bg-muted font-serif">
                            Aa
                          </div>
                          <span className="text-xs">Serif</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <div className="flex h-12 w-full items-center justify-center rounded border bg-muted font-sans ring-2 ring-offset-2 ring-blue-500">
                            Aa
                          </div>
                          <span className="text-xs">Sans-serif</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">Effects</h3>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col items-center gap-1">
                          <div className="flex h-12 w-full items-center justify-center rounded border bg-muted shadow-md ring-2 ring-offset-2 ring-blue-500">
                            Shadow
                          </div>
                          <span className="text-xs">Shadows</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <div className="flex h-12 w-full items-center justify-center rounded border bg-muted">
                            Flat
                          </div>
                          <span className="text-xs">Flat</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
