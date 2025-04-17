import { PageHeader } from "@/components/page-header"
import { ContentSection } from "@/components/content-section"

export default function Year2Page() {
  return (
    <div>
      <PageHeader
        title="Jaar 2 Curriculum"
        description="Voortbouwen op kernprincipes en uitbreiding van ontwerpvaardigheden"
      />

      <ContentSection
        title="Verkennen van Structuren"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        imageSrc="/placeholder.svg?key=b8wu2"
        imageAlt="Kinderen bouwen structuren"
        videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ"
      />

      <ContentSection
        title="Voedingstechnologie"
        content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        imageSrc="/placeholder.svg?key=341fp"
        imageAlt="Kinderen in kookles"
        reverse={true}
      />

      <ContentSection
        title="Textiel en Materialen"
        content="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imageSrc="/placeholder.svg?key=s8bdf"
        imageAlt="Kinderen werken met textiel"
        videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ"
      />
    </div>
  )
}
