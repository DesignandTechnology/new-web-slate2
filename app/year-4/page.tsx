import { PageHeader } from "@/components/page-header"
import { ContentSection } from "@/components/content-section"

export default function Year4Page() {
  return (
    <div>
      <PageHeader
        title="Jaar 4 Curriculum"
        description="Geavanceerde projecten en concepten voor onze oudere leerlingen"
      />

      <ContentSection
        title="Elektrische Systemen"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        imageSrc="/placeholder.svg?height=400&width=600&query=electrical systems for children"
        imageAlt="Elektrische systemen voor kinderen"
        videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ"
      />

      <ContentSection
        title="Duurzaam Ontwerp"
        content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        imageSrc="/placeholder.svg?height=400&width=600&query=sustainable design for children"
        imageAlt="Duurzaam ontwerp voor kinderen"
        reverse={true}
      />

      <ContentSection
        title="Geavanceerde Projecten"
        content="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imageSrc="/placeholder.svg?height=400&width=600&query=advanced design projects for children"
        imageAlt="Geavanceerde ontwerpprojecten voor kinderen"
        videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ"
      />
    </div>
  )
}
