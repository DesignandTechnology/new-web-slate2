import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function CurriculumPage() {
  return (
    <div>
      <PageHeader
        title="Curriculum Overzicht"
        description="Onze uitgebreide aanpak van Design & Technology onderwijs"
      />

      <div className="container py-12">
        <p className="mb-8 text-lg text-muted-foreground">
          Ons Design & Technology curriculum is ontworpen om creatieve, technische en praktische expertise te
          ontwikkelen die nodig is om dagelijkse taken met vertrouwen uit te voeren en succesvol deel te nemen aan een
          steeds technologischere wereld.
        </p>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overzicht</TabsTrigger>
            <TabsTrigger value="skills">Kernvaardigheden</TabsTrigger>
            <TabsTrigger value="progression">Voortgang</TabsTrigger>
            <TabsTrigger value="assessment">Beoordeling</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Curriculum Doelen</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Ontwikkelen van creatieve, technische en praktische expertise</li>
                    <li>Opbouwen en toepassen van kennis, begrip en vaardigheden</li>
                    <li>Evalueren en testen van ideeën en producten</li>
                    <li>Begrijpen van voeding en leren koken</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Kernprincipes</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Gebruikersgerichte ontwerp</li>
                    <li>Innovatie en creativiteit</li>
                    <li>Authentieke probleemoplossing</li>
                    <li>Duurzaam en ethisch ontwerp</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Curriculum Structuur</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="p-2 text-left">Jaargroep</th>
                          <th className="p-2 text-left">Periode 1</th>
                          <th className="p-2 text-left">Periode 2</th>
                          <th className="p-2 text-left">Periode 3</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-2 font-medium">Jaar 1</td>
                          <td className="p-2">Materialen</td>
                          <td className="p-2">Basis Ontwerp</td>
                          <td className="p-2">Eenvoudige Mechanismen</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium">Jaar 2</td>
                          <td className="p-2">Structuren</td>
                          <td className="p-2">Voedingstechnologie</td>
                          <td className="p-2">Textiel</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium">Jaar 3</td>
                          <td className="p-2">Mechanische Systemen</td>
                          <td className="p-2">Digitaal Ontwerp</td>
                          <td className="p-2">Productanalyse</td>
                        </tr>
                        <tr>
                          <td className="p-2 font-medium">Jaar 4</td>
                          <td className="p-2">Elektrische Systemen</td>
                          <td className="p-2">Duurzaam Ontwerp</td>
                          <td className="p-2">Geavanceerde Projecten</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="skills" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Technische Vaardigheden</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Meten en aftekenen</li>
                    <li>Snijden en vormen van materialen</li>
                    <li>Verbinden en monteren</li>
                    <li>Gebruik van mechanische componenten</li>
                    <li>Basis elektronica</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Ontwerpvaardigheden</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Onderzoek en verkenning</li>
                    <li>Ideeën genereren</li>
                    <li>Ontwikkelen en communiceren van ontwerpen</li>
                    <li>Testen en evalueren</li>
                    <li>Iteratief ontwerpproces</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Sociale Vaardigheden</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Probleemoplossing</li>
                    <li>Kritisch denken</li>
                    <li>Creativiteit</li>
                    <li>Samenwerking</li>
                    <li>Communicatie</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Kennisgebieden</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Materialen en hun eigenschappen</li>
                    <li>Structuren en mechanismen</li>
                    <li>Elektrische systemen</li>
                    <li>Voeding en voedsel</li>
                    <li>Textiel en stoffen</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="progression" className="mt-6">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Vaardigheidsprogressie</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/skills-progression-framework.png"
                    alt="Vaardigheidsprogressie grafiek"
                    width={800}
                    height={400}
                    className="mx-auto h-auto w-full max-w-3xl rounded-md"
                  />
                  <p className="mt-4 text-muted-foreground">
                    Ons curriculum is ontworpen om vaardigheden progressief op te bouwen over jaargroepen, waarbij elke
                    module voortbouwt op eerdere kennis en nieuwe concepten introduceert op een passend niveau.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Leertraject</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-md bg-secondary/20 p-4">
                      <h3 className="font-bold">Jaar 1: Basis</h3>
                      <p className="text-muted-foreground">
                        Introductie tot basismaterialen, gereedschappen en eenvoudige ontwerpprocessen. Focus op het
                        ontwikkelen van fijne motoriek en basistechnieken.
                      </p>
                    </div>

                    <div className="rounded-md bg-secondary/30 p-4">
                      <h3 className="font-bold">Jaar 2: Verkenning</h3>
                      <p className="text-muted-foreground">
                        Uitbreiding van kennis over materialen en technieken. Introductie tot structuren,
                        voedingstechnologie en textiel.
                      </p>
                    </div>

                    <div className="rounded-md bg-secondary/40 p-4">
                      <h3 className="font-bold">Jaar 3: Ontwikkeling</h3>
                      <p className="text-muted-foreground">
                        Complexere mechanische systemen en introductie tot digitaal ontwerp. Focus op het ontwikkelen
                        van analytische vaardigheden door productevaluatie.
                      </p>
                    </div>

                    <div className="rounded-md bg-secondary/50 p-4">
                      <h3 className="font-bold">Jaar 4: Beheersing</h3>
                      <p className="text-muted-foreground">
                        Geavanceerde concepten waaronder elektrische systemen en duurzaam ontwerp. Culmineert in
                        complexe, multi-materiaal projecten die beheersing van vaardigheden demonstreren.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="assessment" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Beoordelingsaanpak</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Onze beoordelingsaanpak is voornamelijk formatief, gericht op het ontwerpproces en de
                    eindresultaten. We gebruiken een combinatie van docentbeoordeling, zelfbeoordeling en feedback van
                    medeleerlingen.
                  </p>
                  <div className="mt-4 space-y-2">
                    <h4 className="font-medium">We beoordelen:</h4>
                    <ul className="ml-6 list-disc space-y-1">
                      <li>Technische vaardigheden en uitvoering</li>
                      <li>Ontwerpontwikkeling en creativiteit</li>
                      <li>Probleemoplossende aanpak</li>
                      <li>Kennis en begrip</li>
                      <li>Evaluatie en reflectie</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Beoordelingsmethoden</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>
                      <span className="font-medium">Ontwerpportfolio's:</span> Documentatie van het ontwerpproces
                    </li>
                    <li>
                      <span className="font-medium">Praktische resultaten:</span> Eindproducten en prototypes
                    </li>
                    <li>
                      <span className="font-medium">Kenniscontroles:</span> Quizzen en discussies
                    </li>
                    <li>
                      <span className="font-medium">Zelfevaluatie:</span> Reflectie op eigen werk
                    </li>
                    <li>
                      <span className="font-medium">Peer feedback:</span> Constructieve kritiek van medeleerlingen
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Succescriteria</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="p-2 text-left">Vaardigheidsgebied</th>
                          <th className="p-2 text-left">Beginnend</th>
                          <th className="p-2 text-left">Ontwikkelend</th>
                          <th className="p-2 text-left">Gevorderd</th>
                          <th className="p-2 text-left">Uitblinkend</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-2 font-medium">Ontwerpen</td>
                          <td className="p-2">Basis ideeën met ondersteuning</td>
                          <td className="p-2">Zelfstandige ideeën</td>
                          <td className="p-2">Gedetailleerde ontwerpen</td>
                          <td className="p-2">Innovatieve oplossingen</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium">Maken</td>
                          <td className="p-2">Basistechnieken</td>
                          <td className="p-2">Groeiende nauwkeurigheid</td>
                          <td className="p-2">Precieze uitvoering</td>
                          <td className="p-2">Geavanceerde technieken</td>
                        </tr>
                        <tr>
                          <td className="p-2 font-medium">Evalueren</td>
                          <td className="p-2">Eenvoudige opmerkingen</td>
                          <td className="p-2">Identificeert sterke/zwakke punten</td>
                          <td className="p-2">Gedetailleerde evaluatie</td>
                          <td className="p-2">Kritische analyse</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
