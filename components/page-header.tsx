import Image from "next/image"

interface PageHeaderProps {
  title: string
  description?: string
  bannerImage?: string
}

export function PageHeader({ title, description, bannerImage }: PageHeaderProps) {
  return (
    <div className="relative">
      {/* Dynamic banner placeholder */}
      <div className="relative h-[200px] w-full overflow-hidden bg-gradient-to-r from-secondary/30 to-primary/20 md:h-[250px] lg:h-[300px]">
        {bannerImage ? (
          <Image src={bannerImage || "/placeholder.svg"} alt={`Banner for ${title}`} fill className="object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <div className="text-center">
              <div className="mb-2 text-sm text-muted-foreground">Dynamische Banner Placeholder</div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-muted-foreground"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                  <circle cx="9" cy="9" r="2"></circle>
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                </svg>
                <span className="text-muted-foreground">Banner afbeelding</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Content overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
        <div className="container">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">{title}</h1>
          {description && <p className="mt-4 max-w-3xl text-white/80 md:text-xl">{description}</p>}
        </div>
      </div>
    </div>
  )
}
