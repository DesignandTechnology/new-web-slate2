import { PageHeader } from "@/components/page-header"
import { ContentSection } from "@/components/content-section"

export default function Year3Page() {
  return (
    <div>
      <PageHeader
        title="Jaar 3 Curriculum"
        description="Ontwikkelen van technische vaardigheden en verkennen van complexere concepten"
      />

      <ContentSection
        title="Mechanische Systemen"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        imageSrc="/placeholder.svg?height=400&width=600&query=mechanical systems for children"
        imageAlt="Mechanische systemen voor kinderen"
        videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ"
      />

      <ContentSection
        title="Digitaal Ontwerp"
        content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        imageSrc="/placeholder.svg?height=400&width=600&query=children digital design"
        imageAlt="Kinderen leren digitaal ontwerpen"
        reverse={true}
      />

      <ContentSection
        title="Productanalyse"
        content="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imageSrc="/placeholder.svg?height=400&width=600&query=product analysis for children"
        imageAlt="Productanalyse voor kinderen"
        videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ"
      />
    </div>
  )
}
