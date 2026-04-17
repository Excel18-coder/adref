import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Compass, Eye, Heart, Globe, Users, Sparkles } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { CTABanner } from "@/components/CTABanner";
import villageImg from "@/assets/about-village.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ADREF — Our Story, Mission & Team" },
      { name: "description", content: "Founded in 2014, ADREF is led by African humanitarians serving 32 nations. Discover our mission, values, history, and team." },
      { property: "og:title", content: "About ADREF — Our Story, Mission & Team" },
      { property: "og:description", content: "Founded in 2014, ADREF is led by African humanitarians serving 32 nations." },
      { property: "og:image", content: villageImg },
      { name: "twitter:image", content: villageImg },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Heart, title: "Dignity first", text: "Every interaction honors the agency and worth of the communities we serve." },
  { icon: Users, title: "Community-led", text: "Local leaders define problems and lead solutions — we resource, never impose." },
  { icon: Globe, title: "Pan-African", text: "Africans solving African challenges, with global solidarity as our amplifier." },
  { icon: Sparkles, title: "Radical transparency", text: "Every dollar, every outcome, every lesson — published openly, always." },
];

const timeline = [
  { year: "2014", title: "Founded in Nairobi", text: "Twelve African humanitarians convene after the East African drought." },
  { year: "2016", title: "First emergency response", text: "Coordinated flood relief reaching 14,000 displaced families in Malawi." },
  { year: "2018", title: "Climate program launches", text: "Tree-planting and climate-smart farming roll out in 6 nations." },
  { year: "2020", title: "Pandemic mobilization", text: "PPE, food parcels, and remote learning for 80,000 children during COVID-19." },
  { year: "2022", title: "Women's leadership fund", text: "$3.2M deployed to 5,400 women entrepreneurs across the Sahel." },
  { year: "2024", title: "32 nations, one decade", text: "1.2M trees, 210 wells, 12,800 children in school. The work continues." },
];

const team = [
  { name: "Dr. Wanjiru Kamau", role: "Executive Director", bio: "Public health veteran, 20+ years across East Africa." },
  { name: "Samuel Adekunle", role: "Head of Programs", bio: "Former WFP coordinator. Specialist in disaster response." },
  { name: "Fatima Diallo", role: "Climate Lead", bio: "Climate scientist & community organizer from Mali." },
  { name: "Joshua Mensah", role: "Director of Partnerships", bio: "Built coalitions across UN agencies and African Union." },
];

function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="About us"
          title={<>A decade of <em className="italic text-primary">listening</em>, resourcing, and rising.</>}
          subtitle="ADREF is led by Africans, for Africans — building durable resilience with the communities most exposed to crisis."
        />

        {/* MISSION VISION */}
        <section className="container mx-auto px-4 py-20 md:py-28">
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { icon: Compass, label: "Mission", text: "To stand alongside African communities facing crisis — strengthening their capacity to respond, recover, and lead lasting change." },
              { icon: Eye, label: "Vision", text: "An Africa where every community has the resources, voice, and resilience to thrive — even in the face of disaster and climate change." },
            ].map((c) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden rounded-3xl bg-card border border-border p-10 shadow-soft"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-warm text-primary-foreground shadow-warm">
                  <c.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-3xl font-semibold tracking-tight">{c.label}</h3>
                <p className="mt-3 text-lg text-muted-foreground leading-relaxed">{c.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* VALUES */}
        <section className="bg-sand py-24 md:py-28">
          <div className="container mx-auto px-4">
            <SectionHeader eyebrow="Core values" title={<>What guides every <em className="italic text-primary">decision</em></>} />
            <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-3xl bg-card border border-border p-6 shadow-soft hover:-translate-y-1 transition-all"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <v.icon className="h-5 w-5" />
                  </span>
                  <h4 className="mt-4 font-display text-lg font-semibold">{v.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="container mx-auto px-4 py-24 md:py-32">
          <SectionHeader eyebrow="Our journey" title={<>A decade in <em className="italic text-primary">motion</em></>} />
          <div className="mt-16 max-w-3xl mx-auto relative">
            <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-[2px] bg-gradient-to-b from-primary via-primary/40 to-transparent" />
            {timeline.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`relative pl-12 md:pl-0 mb-10 md:mb-14 md:grid md:grid-cols-2 md:gap-10 ${
                  i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-2 h-4 w-4 rounded-full bg-primary ring-4 ring-background shadow-warm" />
                <div className={i % 2 === 0 ? "md:text-right md:pr-10" : "md:pl-10"}>
                  <div className="font-display text-4xl font-semibold text-primary">{t.year}</div>
                  <h4 className="mt-1 font-display text-xl font-semibold">{t.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.text}</p>
                </div>
                <div />
              </motion.div>
            ))}
          </div>
        </section>

        {/* TEAM */}
        <section className="bg-sand py-24 md:py-28">
          <div className="container mx-auto px-4">
            <SectionHeader eyebrow="Our people" title={<>Led by those who've <em className="italic text-primary">lived it</em></>} />
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((m, i) => (
                <motion.div
                  key={m.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group rounded-3xl bg-card border border-border p-6 shadow-soft hover:shadow-warm transition-all"
                >
                  <div className="aspect-square rounded-2xl bg-gradient-warm grain relative overflow-hidden flex items-end justify-center text-primary-foreground/95">
                    <span className="font-display text-5xl font-semibold mb-4 opacity-90">
                      {m.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <h4 className="mt-5 font-display text-lg font-semibold">{m.name}</h4>
                  <p className="text-xs uppercase tracking-widest text-primary mt-1">{m.role}</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-semibold hover:scale-105 transition-all">
                Join our team
              </Link>
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
