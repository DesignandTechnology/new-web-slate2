import { PageHeader } from "@/components/page-header"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        title="Over Ons"
        description="Leer meer over onze Design & Technology afdeling"
        bannerImage="/collaborative-innovation-hub.png"
      />

      <div className="container py-12">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-primary md:text-3xl">Onze Filosofie</h2>
            <div className="mt-4 space-y-4">
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
              <p className="text-muted-foreground">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
              <p className="text-muted-foreground">
                Onze benadering van Design & Technology onderwijs is gericht op het ontwikkelen van creatieve
                probleemoplossers die hun technische kennis kunnen toepassen op uitdagingen uit de praktijk.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/bustling-design-tech-space.png"
                alt="Design en Technology klaslokaal"
                width={600}
                height={400}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-primary md:text-3xl">Ons Team</h2>
          <p className="mt-4 text-muted-foreground">
            Ons toegewijde team van Design & Technology specialisten brengt een schat aan ervaring en passie mee om de
            volgende generatie ontwerpers en ingenieurs te inspireren.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={`/inspiring-educator.png?height=300&width=300&query=teacher portrait ${i}`}
                    alt={`Teamlid ${i}`}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">Docent Naam</h3>
                  <p className="text-sm text-muted-foreground">Design & Technology Specialist</p>
                  <p className="mt-2 text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-primary md:text-3xl">Onze Faciliteiten</h2>
          <p className="mt-4 text-muted-foreground">
            We zijn trots op onze state-of-the-art faciliteiten die leerlingen de tools en omgeving bieden die ze nodig
            hebben om uit te blinken in Design & Technology.
          </p>

          <div className="mt-8">
            <div className="aspect-video overflow-hidden rounded-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Onze Faciliteiten"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="aspect-video"
              ></iframe>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div>
                <h3 className="text-lg font-bold">Ontwerpstudio</h3>
                <p className="mt-2 text-muted-foreground">
                  Uitgerust met tekenborden, digitale ontwerptools en samenwerkingsruimtes.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold">Werkplaats</h3>
                <p className="mt-2 text-muted-foreground">
                  Beschikt over verschillende gereedschappen en apparatuur voor het werken met hout, metaal en
                  kunststoffen.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold">Digitaal Lab</h3>
                <p className="mt-2 text-muted-foreground">
                  Inclusief 3D-printers, lasersnijders en computer-aided design software.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
