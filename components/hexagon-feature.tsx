import Link from "next/link"
import Image from "next/image"

interface HexagonFeatureProps {
  title: string
  description: string
  imageSrc: string
  href: string
  color?: string
}

export function HexagonFeature({ title, description, imageSrc, href, color = "bg-secondary" }: HexagonFeatureProps) {
  return (
    <Link href={href} className="block">
      <div className={`hexagon ${color} hover:shadow-lg`}>
        <div className="hexagon-content">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            width={60}
            height={60}
            className="mb-2 h-12 w-12 object-contain"
          />
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="mt-1 text-xs">{description}</p>
        </div>
      </div>
    </Link>
  )
}
