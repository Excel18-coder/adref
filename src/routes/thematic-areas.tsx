import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import disasterImg from "@/assets/program-disaster.jpg";
import climateImg from "@/assets/program-climate.jpg";
import foodImg from "@/assets/program-food.jpg";
import waterImg from "@/assets/program-water.jpg";
import educationImg from "@/assets/program-education.jpg";
import genderImg from "@/assets/program-gender.jpg";
import communityImg from "@/assets/hero-community.jpg";
import villageImg from "@/assets/about-village.jpg";
import thematicHeroImg from "@/assets/hero-thematic.jpeg";

export const Route = createFileRoute("/thematic-areas")({
  head: () => ({
    meta: [
      { title: "Thematic Areas - ADREF" },
      { name: "description", content: "Explore ADREF thematic areas across disaster management, climate action, food security, education, and more." },
      { property: "og:title", content: "ADREF Thematic Areas" },
      { property: "og:description", content: "Explore ADREF thematic areas across disaster management, climate action, food security, education, and more." },
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
    image: disasterImg,
  },
  {
    id: "emergencies",
    title: "Emergencies",
    description:
      "Rapid, coordinated relief for floods, droughts, and displacement - focused on dignity, protection, and immediate life-saving assistance.",
    image: communityImg,
  },
  {
    id: "climate-change-action",
    title: "Climate Change Action",
    description:
      "Climate-smart adaptation and mitigation work, including early warning systems, resilient agriculture, and community-led climate solutions.",
    image: climateImg,
  },
  {
    id: "food-security",
    title: "Food Security",
    description:
      "Sustainable food systems that improve nutrition, support smallholder farmers, and safeguard communities from hunger and price shocks.",
    image: foodImg,
  },
  {
    id: "peace-building-security",
    title: "Peace Building & Security",
    description:
      "Conflict-sensitive programming that strengthens social cohesion, protects vulnerable groups, and supports peaceful local solutions.",
    image: villageImg,
  },
  {
    id: "education-community-empowerment",
    title: "Education & Community Empowerment",
    description:
      "Education access, youth leadership, and community capacity building that creates long-term resilience and opportunity.",
    image: educationImg,
  },
  {
    id: "global-partnership",
    title: "Global Partnership",
    description:
      "Strategic collaborations with governments, NGOs, and the private sector to scale impact across Africa and beyond.",
    image: communityImg,
  },
  {
    id: "humanitarian-support",
    title: "Humanitarian Support",
    description:
      "Protection, shelter, and essential services for displaced and crisis-affected populations - grounded in humanity and accountability.",
    image: disasterImg,
  },
  {
    id: "gender-inclusivity",
    title: "Gender Inclusivity",
    description:
      "Gender-responsive programming that centers women and girls, addresses barriers, and promotes equitable participation.",
    image: genderImg,
  },
  {
    id: "water-sanitation",
    title: "Water Sanitation",
    description:
      "Safe water access, sanitation, and hygiene promotion that reduces disease risk and strengthens community health.",
    image: waterImg,
  },
  {
    id: "renewable-energy",
    title: "Renewable Energy",
    description:
      "Clean energy solutions for schools, clinics, and communities to improve services and reduce reliance on fossil fuels.",
    image: climateImg,
  },
  {
    id: "environmental-conservation",
    title: "Environmental Conservation",
    description:
      "Ecosystem restoration and conservation initiatives that protect biodiversity while sustaining local livelihoods.",
    image: villageImg,
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
          subtitle="Explore the thematic areas that guide ADREF programs across disaster risk reduction, humanitarian response, and long-term community development."
          image={thematicHeroImg}
          imageAlt="Community gathering showcasing ADREF focus areas"
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
