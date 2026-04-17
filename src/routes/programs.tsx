import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTABanner } from "@/components/CTABanner";
import { programs } from "@/lib/programs";
import disasterImg from "@/assets/program-disaster.jpg";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — Disaster, Climate, Food, Water, Gender, Education | ADREF" },
      { name: "description", content: "Six interconnected programs delivering disaster relief, climate action, food security, water access, gender equity, and education across Africa." },
      { property: "og:title", content: "ADREF Programs" },
      { property: "og:description", content: "Six interconnected programs delivering measurable resilience across Africa." },
      { property: "og:image", content: disasterImg },
      { name: "twitter:image", content: disasterImg },
    ],
  }),
  component: ProgramsPage,
});

function ProgramsPage() {
  const [open, setOpen] = useState<string | null>(programs[0].slug);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Programs"
          title={<>Six pillars. One <em className="italic text-primary">resilient</em> continent.</>}
          subtitle="Each program is designed to reinforce the others. Climate work strengthens food security. Education unlocks gender equity. Together, they build durable change."
        />

        <section className="container mx-auto px-4 py-20 md:py-28">
          <div className="grid gap-16 md:gap-24">
            {programs.map((p, i) => (
              <motion.article
                key={p.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
                className={`grid gap-10 lg:grid-cols-2 lg:gap-16 items-center ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative group">
                  <div className="overflow-hidden rounded-3xl shadow-warm">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      width={1280}
                      height={896}
                    />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-2xl px-5 py-3 shadow-warm">
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">Impact</div>
                    <div className="font-display text-lg font-semibold text-primary">{p.stats}</div>
                  </div>
                </div>

                <div>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-warm text-primary-foreground shadow-warm">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <h2 className="mt-5 font-display text-4xl md:text-5xl font-semibold tracking-tight text-balance">
                    {p.title}
                  </h2>
                  <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                    {p.short}
                  </p>

                  <button
                    onClick={() => setOpen(open === p.slug ? null : p.slug)}
                    className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary"
                  >
                    {open === p.slug ? "Hide details" : "Read more"}
                    <ChevronDown className={`h-4 w-4 transition-transform ${open === p.slug ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {open === p.slug && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 text-muted-foreground leading-relaxed">
                          {p.long}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
