
import Link from "next/link"
import Image from "next/image"
import { HexagonFeature } from "@/components/hexagon-feature"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Lightbulb, Users } from "lucide-react"

const HomePage = () => {
  return (
    <div>
      {/* Hero Section with Dynamic Banner */}
      <section className="relative h-[400px] overflow-hidden md:h-[500px] lg:h-[600px]">
        {/* Dynamic Banner Background */}
        <div className="absolute inset-0">
          <Image src="/design-tech-hero-banner.png" alt="Design & Technology" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"></div>
        </div>

        {/* Hero Content */}
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">Design & Technology</h1>
          <p className="mt-4 max-w-2xl text-xl text-white/80">
            Inspireren van innovatie en creativiteit door praktijkgericht leren en probleemoplossing.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <Link href="/curriculum">
                Verken Curriculum
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-white bg-transparent text-white hover:bg-white/20"
            >
              <Link href="/about">Meer Informatie</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Year Groups Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-center text-3xl font-bold text-primary md:text-4xl">Jaargroepen</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Verken ons curriculum per jaargroep, elk afgestemd op het ontwikkelen van leeftijdsgeschikte vaardigheden en
            kennis.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            <HexagonFeature
              title="Jaar 1"
              description="Basisvaardigheden en concepten"
              imageSrc="/abstract-geometric-shapes.png"
              href="/year-1"
              color="bg-secondary"
            />
            <HexagonFeature
              title="Jaar 2"
              description="Voortbouwen op kernprincipes"
              imageSrc="/abstract-geometric-two.png"
              href="/year-2"
              color="bg-dnt-lightBlue"
            />
            <HexagonFeature
              title="Jaar 3"
              description="Ontwikkelen van technische vaardigheden"
              imageSrc="/abstract-number-three.png"
              href="/year-3"
              color="bg-accent/80"
            />
            <HexagonFeature
              title="Jaar 4"
              description="Geavanceerde projecten en concepten"
              imageSrc="/abstract-geometric-number-four.png"
              href="/year-4"
              color="bg-dnt-gray/30"
            />
          </div>
        </div>
      </section>

      {/* Features Section with Modern Buttons */}
      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="text-center text-3xl font-bold text-primary md:text-4xl">Waarom Design & Technology?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Ons curriculum ontwikkelt cruciale vaardigheden voor de toekomst.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {/* Modern Button 1 - Problem Solving */}
            <div className="modern-feature-card group">
              <Link href="/curriculum#problem-solving" className="block h-full">
                <div className="flex h-full flex-col rounded-lg bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="mb-6 flex items-center">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Lightbulb className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-primary">Probleemoplossing</h3>
                  </div>

                  <p className="flex-grow text-muted-foreground">
                    Ontwikkel kritisch denken door ontwerpuitdagingen en praktische projecten.
                  </p>

                  <div className="mt-6 flex items-center text-sm font-medium text-primary">
                    <span className="transition-all duration-300 group-hover:mr-2">Meer informatie</span>
                    <ArrowRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                  </div>

                  <div className="mt-4 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full"></div>
                </div>
              </Link>
            </div>

            {/* Modern Button 2 - Creativity */}
            <div className="modern-feature-card group">
              <Link href="/curriculum#creativity" className="block h-full">
                <div className="flex h-full flex-col rounded-lg bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="mb-6 flex items-center">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                      <BookOpen className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-accent">Creativiteit</h3>
                  </div>

                  <p className="flex-grow text-muted-foreground">
                    Uit ideeën en ontwikkel innovatieve oplossingen door ontwerp en maken.
                  </p>

                  <div className="mt-6 flex items-center text-sm font-medium text-accent">
                    <span className="transition-all duration-300 group-hover:mr-2">Meer informatie</span>
                    <ArrowRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                  </div>

                  <div className="mt-4 h-1 w-0 bg-accent transition-all duration-300 group-hover:w-full"></div>
                </div>
              </Link>
            </div>

            {/* Modern Button 3 - Collaboration */}
            <div className="modern-feature-card group">
              <Link href="/curriculum#collaboration" className="block h-full">
                <div className="flex h-full flex-col rounded-lg bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="mb-6 flex items-center">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-primary">Samenwerking</h3>
                  </div>

                  <p className="flex-grow text-muted-foreground">
                    Werk effectief samen in teams om complexe ontwerpuitdagingen aan te gaan.
                  </p>

                  <div className="mt-6 flex items-center text-sm font-medium text-primary">
                    <span className="transition-all duration-300 group-hover:mr-2">Meer informatie</span>
                    <ArrowRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                  </div>

                  <div className="mt-4 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full"></div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
