import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface ContentSectionProps {
  title: string
  content: string
  imageSrc: string
  imageAlt: string
  videoSrc?: string
  reverse?: boolean
}

export function ContentSection({ title, content, imageSrc, imageAlt, videoSrc, reverse = false }: ContentSectionProps) {
  return (
    <div className="py-12">
      <div className={`container grid gap-8 md:grid-cols-2 ${reverse ? "md:grid-flow-dense" : ""}`}>
        <div className={reverse ? "md:col-start-2" : ""}>
          <h2 className="text-2xl font-bold text-primary md:text-3xl">{title}</h2>
          <div className="mt-4 space-y-4">
            <p className="text-muted-foreground">{content}</p>
          </div>

          {videoSrc && (
            <Card className="mt-6">
              <CardContent className="p-0">
                <div className="aspect-video overflow-hidden rounded-md">
                  <iframe
                    width="100%"
                    height="100%"
                    src={videoSrc}
                    title="Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="aspect-video"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <div className={reverse ? "md:col-start-1" : ""}>
          <div className="overflow-hidden rounded-lg">
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={imageAlt}
              width={600}
              height={400}
              className="h-auto w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
