import { PageHeader } from "@/components/page-header"
import { ContentSection } from "@/components/content-section"

export default function Year1Page() {
  return (
    <div>
      <PageHeader
        title="Jaar 1 Curriculum"
        description="Introductie tot Design & Technology voor onze jongste leerlingen"
        bannerImage="/placeholder.svg?key=7vbo5"
      />

      <ContentSection
        title="Introductie tot Materialen"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        imageSrc="/colorful-learning-tools.png"
        imageAlt="Kinderen leren over materialen"
        videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ"
      />

      <ContentSection
        title="Basis Ontwerpvaardigheden"
        content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        imageSrc="/placeholder.svg?key=h5pfu"
        imageAlt="Kinderen ontwerpen projecten"
        reverse={true}
      />

      <ContentSection
        title="Eenvoudige Mechanismen"
        content="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imageSrc="/gears-and-levers-fun.png"
        imageAlt="Eenvoudige mechanismen voor kinderen"
        videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ"
      />
    </div>
  )
}
