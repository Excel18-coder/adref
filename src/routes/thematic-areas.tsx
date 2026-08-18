import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import { thematicHeroArt, galleryArtwork } from "@/lib/artwork";

export const Route = createFileRoute("/thematic-areas")({
  head: () => ({
    meta: [
      { title: "Thematic Areas - African Aid Foundation" },
      { name: "description", content: "Explore African Aid Foundation thematic areas across disaster management, climate action, food security, education, and more." },
      { property: "og:title", content: "African Aid Foundation Thematic Areas" },
      { property: "og:description", content: "Explore African Aid Foundation thematic areas across disaster management, climate action, food security, education, and more." },
    ],
  }),
  component: ThematicAreasPage,
});

const thematicAreas = [
  {
    id: "disaster-management",
    title: "Disaster Management",
    description:
      "Preparedness, response, and recovery programs that help communities anticipate hazards, protect livelihoods, and rebuild quickly after shocks.",
    image: galleryArtwork("Disaster Response", "#2f5d4b", "#1d2a2e", "#d78d4c"),
  },
  {
    id: "emergencies",
    title: "Emergencies",
    description:
      "Rapid, coordinated relief for floods, droughts, and displacement - focused on dignity, protection, and immediate life-saving assistance.",
    image: galleryArtwork("Emergency Relief", "#4d705c", "#1f2a2d", "#d38e4a"),
  },
  {
    id: "climate-change-action",
    title: "Climate Change Action",
    description:
      "Climate-smart adaptation and mitigation work, including early warning systems, resilient agriculture, and community-led climate solutions.",
    image: galleryArtwork("Climate Action", "#2d5d4a", "#23342d", "#d0a05d"),
  },
  {
    id: "food-security",
    title: "Food Security",
    description:
      "Sustainable food systems that improve nutrition, support smallholder farmers, and safeguard communities from hunger and price shocks.",
    image: galleryArtwork("Food Security", "#5f7f42", "#2a352a", "#d89248"),
  },
  {
    id: "peace-building-security",
    title: "Peace Building & Security",
    description:
      "Conflict-sensitive programming that strengthens social cohesion, protects vulnerable groups, and supports peaceful local solutions.",
    image: galleryArtwork("Peace & Security", "#375b50", "#1f2b2a", "#d3a467"),
  },
  {
    id: "education-community-empowerment",
    title: "Education & Community Empowerment",
    description:
      "Education access, youth leadership, and community capacity building that creates long-term resilience and opportunity.",
    image: galleryArtwork("Education", "#496f63", "#1b2d36", "#d98a52"),
  },
  {
    id: "global-partnership",
    title: "Global Partnership",
    description:
      "Strategic collaborations with governments, NGOs, and the private sector to scale impact across Africa and beyond.",
    image: galleryArtwork("Partnership", "#5d7b5d", "#1f2c1d", "#c98d4a"),
  },
  {
    id: "humanitarian-support",
    title: "Humanitarian Support",
    description:
      "Protection, shelter, and essential services for displaced and crisis-affected populations - grounded in humanity and accountability.",
    image: galleryArtwork("Care Support", "#3d6a4a", "#1a2828", "#d38d4c"),
  },
  {
    id: "gender-inclusivity",
    title: "Gender Inclusivity",
    description:
      "Gender-responsive programming that centers women and girls, addresses barriers, and promotes equitable participation.",
    image: galleryArtwork("Inclusion", "#6a8060", "#283028", "#d0a15d"),
  },
  {
    id: "water-sanitation",
    title: "Water Sanitation",
    description:
      "Safe water access, sanitation, and hygiene promotion that reduces disease risk and strengthens community health.",
    image: galleryArtwork("Water Access", "#246a59", "#1d2d2d", "#d48d50"),
  },
  {
    id: "renewable-energy",
    title: "Renewable Energy",
    description:
      "Clean energy solutions for schools, clinics, and communities to improve services and reduce reliance on fossil fuels.",
    image: galleryArtwork("Energy", "#47564a", "#212a1f", "#d9a669"),
  },
  {
    id: "environmental-conservation",
    title: "Environmental Conservation",
    description:
      "Ecosystem restoration and conservation initiatives that protect biodiversity while sustaining local livelihoods.",
    image: galleryArtwork("Conservation", "#2d5643", "#1c2b29", "#c28e48"),
  },
] as const;

function ThematicAreasPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Thematic Areas"
          title={<>Our focus areas for <em className="italic text-primary">resilience</em>.</>}
          subtitle="Explore the thematic areas that guide our work across disaster risk reduction, humanitarian response, and long-term community development."
        />

        <section className="container mx-auto px-4 py-16 md:py-24">
          <SectionHeader
            eyebrow="Explore"
            title="Click each thematic area"
            subtitle="Each thematic area includes a short overview and a supporting image."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10"
          >
            <Accordion type="single" collapsible defaultValue={thematicAreas[0].id} className="space-y-4">
              {thematicAreas.map((area) => (
                <AccordionItem key={area.id} value={area.id} className="rounded-3xl border border-border bg-card px-5 md:px-6 shadow-soft">
                  <AccordionTrigger className="py-5 text-left font-display text-lg md:text-xl">
                    {area.title}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="grid gap-6 md:grid-cols-[1.2fr_1fr] items-center">
                      <div>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                          {area.description}
                        </p>
                      </div>
                      <div className="overflow-hidden rounded-2xl border border-border">
                        <img
                          src={area.image}
                          alt={`${area.title} supporting visual`}
                          className="h-56 w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
