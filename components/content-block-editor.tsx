"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowDown, ArrowUp, FileImage, LinkIcon, Plus, Trash, Type, Video } from "lucide-react"
import { Timeline } from "./timeline"
import { PlusCircle, Clock } from "lucide-react"

type BlockType = "text" | "image" | "video" | "link" | "timeline"

interface ContentBlock {
  id: string
  type: BlockType
  content: {
    text?: string
    title?: string
    url?: string
    alt?: string
    timelineItems?: any[]
  }
}

export default function ContentBlockEditor() {
  const [blocks, setBlocks] = useState<ContentBlock[]>([
    {
      id: "1",
      type: "text",
      content: {
        title: "About My Work",
        text: "I specialize in creating responsive web applications with modern JavaScript frameworks. My approach focuses on user experience and performance optimization.",
      },
    },
    {
      id: "2",
      type: "image",
      content: {
        title: "Project Screenshot",
        url: "/placeholder.svg?height=300&width=500",
        alt: "A screenshot of my recent project",
      },
    },
  ])

  const addBlock = (type: BlockType) => {
    const newBlock: ContentBlock = {
      id: Date.now().toString(),
      type,
      content: {},
    }
    setBlocks([...blocks, newBlock])
  }

  const removeBlock = (id: string) => {
    setBlocks(blocks.filter((block) => block.id !== id))
  }

  const moveBlockUp = (index: number) => {
    if (index === 0) return
    const newBlocks = [...blocks]
    const temp = newBlocks[index]
    newBlocks[index] = newBlocks[index - 1]
    newBlocks[index - 1] = temp
    setBlocks(newBlocks)
  }

  const moveBlockDown = (index: number) => {
    if (index === blocks.length - 1) return
    const newBlocks = [...blocks]
    const temp = newBlocks[index]
    newBlocks[index] = newBlocks[index + 1]
    newBlocks[index + 1] = temp
    setBlocks(newBlocks)
  }

  const updateBlockContent = (id: string, content: Partial<ContentBlock["content"]>) => {
    setBlocks(
      blocks.map((block) => (block.id === id ? { ...block, content: { ...block.content, ...content } } : block)),
    )
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Content Blocks</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Add and arrange content blocks to build your website.</p>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" onClick={() => addBlock("text")} className="flex items-center gap-2">
                <Type className="h-4 w-4" />
                Add Text
              </Button>
              <Button variant="outline" size="sm" onClick={() => addBlock("image")} className="flex items-center gap-2">
                <FileImage className="h-4 w-4" />
                Add Image
              </Button>
              <Button variant="outline" size="sm" onClick={() => addBlock("video")} className="flex items-center gap-2">
                <Video className="h-4 w-4" />
                Add Video
              </Button>
              <Button variant="outline" size="sm" onClick={() => addBlock("link")} className="flex items-center gap-2">
                <LinkIcon className="h-4 w-4" />
                Add Link
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => addBlock("timeline")}
                className="flex items-center gap-2"
              >
                <Clock className="h-4 w-4" />
                Add Timeline
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {blocks.length === 0 ? (
          <div className="flex h-32 flex-col items-center justify-center rounded-lg border border-dashed">
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <Plus className="h-8 w-8 text-muted-foreground" />
              <div className="text-sm font-medium text-muted-foreground">
                No content blocks yet. Add your first block above.
              </div>
            </div>
          </div>
        ) : (
          blocks.map((block, index) => (
            <Card key={block.id} className="relative">
              <div className="absolute right-4 top-4 flex items-center gap-2">
                <Button variant="ghost" size="icon" onClick={() => moveBlockUp(index)} disabled={index === 0}>
                  <ArrowUp className="h-4 w-4" />
                  <span className="sr-only">Move up</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => moveBlockDown(index)}
                  disabled={index === blocks.length - 1}
                >
                  <ArrowDown className="h-4 w-4" />
                  <span className="sr-only">Move down</span>
                </Button>
                <Button variant="ghost" size="icon" onClick={() => removeBlock(block.id)}>
                  <Trash className="h-4 w-4" />
                  <span className="sr-only">Delete</span>
                </Button>
              </div>
              <CardHeader>
                <div className="flex items-center gap-2">
                  {block.type === "text" && <Type className="h-5 w-5" />}
                  {block.type === "image" && <FileImage className="h-5 w-5" />}
                  {block.type === "video" && <Video className="h-5 w-5" />}
                  {block.type === "link" && <LinkIcon className="h-5 w-5" />}
                  {block.type === "timeline" && <Clock className="h-5 w-5" />}
                  <CardTitle className="capitalize">{block.type} Block</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor={`${block.id}-title`}>Title</Label>
                    <Input
                      id={`${block.id}-title`}
                      value={block.content.title || ""}
                      onChange={(e) => updateBlockContent(block.id, { title: e.target.value })}
                      placeholder="Enter a title (optional)"
                    />
                  </div>

                  {block.type === "text" && (
                    <div className="space-y-2">
                      <Label htmlFor={`${block.id}-text`}>Text Content</Label>
                      <Textarea
                        id={`${block.id}-text`}
                        value={block.content.text || ""}
                        onChange={(e) => updateBlockContent(block.id, { text: e.target.value })}
                        placeholder="Enter your text content"
                        rows={5}
                      />
                    </div>
                  )}

                  {block.type === "image" && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor={`${block.id}-url`}>Image URL</Label>
                        <Input
                          id={`${block.id}-url`}
                          value={block.content.url || ""}
                          onChange={(e) => updateBlockContent(block.id, { url: e.target.value })}
                          placeholder="Enter image URL or upload"
                        />
                        <Button variant="outline" size="sm" className="mt-2">
                          Upload Image
                        </Button>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`${block.id}-alt`}>Alt Text</Label>
                        <Input
                          id={`${block.id}-alt`}
                          value={block.content.alt || ""}
                          onChange={(e) => updateBlockContent(block.id, { alt: e.target.value })}
                          placeholder="Describe the image for accessibility"
                        />
                      </div>
                      {block.content.url && (
                        <div className="mt-4 rounded-lg border bg-muted/40 p-2">
                          <p className="mb-2 text-xs text-muted-foreground">Preview:</p>
                          <img
                            src={block.content.url || "/placeholder.svg"}
                            alt={block.content.alt || "Preview"}
                            className="max-h-[200px] rounded object-contain"
                          />
                        </div>
                      )}
                    </>
                  )}

                  {block.type === "video" && (
                    <div className="space-y-2">
                      <Label htmlFor={`${block.id}-url`}>Video URL</Label>
                      <Input
                        id={`${block.id}-url`}
                        value={block.content.url || ""}
                        onChange={(e) => updateBlockContent(block.id, { url: e.target.value })}
                        placeholder="Enter YouTube or Vimeo URL"
                      />
                      <p className="text-xs text-muted-foreground">
                        Supports YouTube, Vimeo, and other video embedding services.
                      </p>
                    </div>
                  )}

                  {block.type === "link" && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor={`${block.id}-text`}>Link Text</Label>
                        <Input
                          id={`${block.id}-text`}
                          value={block.content.text || ""}
                          onChange={(e) => updateBlockContent(block.id, { text: e.target.value })}
                          placeholder="Enter link text"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`${block.id}-url`}>URL</Label>
                        <Input
                          id={`${block.id}-url`}
                          value={block.content.url || ""}
                          onChange={(e) => updateBlockContent(block.id, { url: e.target.value })}
                          placeholder="Enter URL"
                        />
                      </div>
                    </>
                  )}

                  {block.type === "timeline" && (
                    <>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <Label>Timeline Items</Label>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              const timelineItems = block.content.timelineItems || []
                              const newItem = {
                                id: Date.now().toString(),
                                date: "",
                                title: "",
                                description: "",
                              }
                              updateBlockContent(block.id, {
                                timelineItems: [...timelineItems, newItem],
                              })
                            }}
                            className="flex items-center gap-2"
                          >
                            <PlusCircle className="h-4 w-4" />
                            Add Item
                          </Button>
                        </div>

                        {(block.content.timelineItems || []).length === 0 ? (
                          <div className="flex h-24 flex-col items-center justify-center rounded-lg border border-dashed">
                            <p className="text-sm text-muted-foreground">No timeline items yet. Add your first item.</p>
                          </div>
                        ) : (
                          <div className="space-y-4">
                            {(block.content.timelineItems || []).map((item: any, itemIndex: number) => (
                              <Card key={item.id} className="relative">
                                <CardContent className="p-4">
                                  <div className="absolute right-2 top-2">
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      onClick={() => {
                                        const timelineItems = [...(block.content.timelineItems || [])]
                                        timelineItems.splice(itemIndex, 1)
                                        updateBlockContent(block.id, { timelineItems })
                                      }}
                                    >
                                      <Trash className="h-4 w-4" />
                                      <span className="sr-only">Delete</span>
                                    </Button>
                                  </div>
                                  <div className="space-y-3 pt-2">
                                    <div className="grid grid-cols-2 gap-3">
                                      <div className="space-y-1">
                                        <Label htmlFor={`${item.id}-date`}>Date</Label>
                                        <Input
                                          id={`${item.id}-date`}
                                          value={item.date || ""}
                                          onChange={(e) => {
                                            const timelineItems = [...(block.content.timelineItems || [])]
                                            timelineItems[itemIndex] = {
                                              ...timelineItems[itemIndex],
                                              date: e.target.value,
                                            }
                                            updateBlockContent(block.id, { timelineItems })
                                          }}
                                          placeholder="e.g., Jan 2023"
                                        />
                                      </div>
                                      <div className="space-y-1">
                                        <Label htmlFor={`${item.id}-title`}>Title</Label>
                                        <Input
                                          id={`${item.id}-title`}
                                          value={item.title || ""}
                                          onChange={(e) => {
                                            const timelineItems = [...(block.content.timelineItems || [])]
                                            timelineItems[itemIndex] = {
                                              ...timelineItems[itemIndex],
                                              title: e.target.value,
                                            }
                                            updateBlockContent(block.id, { timelineItems })
                                          }}
                                          placeholder="Event title"
                                        />
                                      </div>
                                    </div>
                                    <div className="space-y-1">
                                      <Label htmlFor={`${item.id}-description`}>Description</Label>
                                      <Textarea
                                        id={`${item.id}-description`}
                                        value={item.description || ""}
                                        onChange={(e) => {
                                          const timelineItems = [...(block.content.timelineItems || [])]
                                          timelineItems[itemIndex] = {
                                            ...timelineItems[itemIndex],
                                            description: e.target.value,
                                          }
                                          updateBlockContent(block.id, { timelineItems })
                                        }}
                                        placeholder="Describe this milestone"
                                        rows={3}
                                      />
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        )}

                        {(block.content.timelineItems || []).length > 0 && (
                          <div className="mt-4 rounded-lg border bg-muted/40 p-4">
                            <p className="mb-2 text-xs text-muted-foreground">Preview:</p>
                            <Timeline
                              title={block.content.title || "My Journey"}
                              items={(block.content.timelineItems || []).map((item: any) => ({
                                id: item.id,
                                date: item.date || "",
                                title: item.title || "",
                                description: item.description || "",
                              }))}
                            />
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
