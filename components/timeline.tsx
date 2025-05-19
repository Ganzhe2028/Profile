import { Card, CardContent } from "@/components/ui/card"

export interface TimelineItem {
  id: string
  date: string
  title: string
  description: string
}

interface TimelineProps {
  items: TimelineItem[]
  title?: string
}

export function Timeline({ items, title = "My Journey" }: TimelineProps) {
  return (
    <div className="space-y-6">
      {title && <h2 className="text-3xl font-bold tracking-tighter">{title}</h2>}
      <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-border md:ml-5">
        {items.map((item, index) => (
          <div key={item.id} className="relative flex flex-col gap-4 md:flex-row">
            <div className="flex items-center justify-center md:justify-start">
              <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow">
                <span className="text-sm font-medium">{index + 1}</span>
              </div>
            </div>
            <Card className="flex-1">
              <CardContent className="p-4 md:p-6">
                <div className="space-y-2">
                  <div className="flex flex-col justify-between gap-1 md:flex-row md:items-center">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <time className="text-sm text-muted-foreground">{item.date}</time>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
