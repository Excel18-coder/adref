import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-community.webp";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { Counter } from "@/components/Counter";
import { CTABanner } from "@/components/CTABanner";
import { programs } from "@/lib/programs";
import villageImg from "@/assets/about-village.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ADREF — Building Resilient African Communities" },
      {
        name: "description",
        content:
          "ADREF responds to disasters, fights climate change, and empowers communities across Africa. Donate, volunteer, or partner with us.",
      },
      { property: "og:title", content: "ADREF — Building Resilient African Communities" },
      {
        property: "og:description",
        content:
          "Disaster response, climate action, food security, and education across Africa.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

const stats = [
  { value: 10000, suffix: "+", label: "Lives directly impacted" },
  { value: 84, suffix: "", label: "Emergency responses" },
  { value: 1200000, suffix: "+", label: "Trees planted", short: "1.2M+" },
  { value: 32, suffix: "", label: "African nations served" },
];

const testimonials = [
  {
    quote:
      "ADREF didn't just bring food after the floods — they helped us rebuild our farms with seeds that resist drought. They listen first.",
    name: "Amara Okeke",
    role: "Farmer, Eastern Nigeria",
  },
  {
    quote:
      "When the school collapsed, we thought our children would never sit in a classroom again. Today, 240 of them are learning under a new roof.",
    name: "Joseph Mwangi",
    role: "Headteacher, Nakuru County",
  },
  {
    quote:
      "Our partnership with ADREF transformed how we deliver climate finance — community-led, measurable, deeply human.",
    name: "Dr. Ifeoma Adeyemi",
    role: "Director, Climate Resilience Fund",
  },
];

const partners = ["UN-OCHA", "WFP", "AFRICAN UNION", "OXFAM", "RED CROSS", "UNICEF"];

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* HERO */}
        <section className="relative min-h-screen flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImg}
              alt="African community standing together at golden hour"
              className="h-full w-full object-cover"
              decoding="async"
              fetchPriority="high"
              width={1920}
              height={1280}
            />
            <div className="absolute inset-0 bg-gradient-hero" />
          </div>

          <div className="container mx-auto px-4 pb-20 md:pb-32 pt-40 relative">
            <div className="max-w-3xl">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white"
              >
                <Sparkles className="h-3 w-3" /> Africa · Disaster · Resilience
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
                className="mt-5 font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-white leading-[0.95] tracking-tight text-balance"
              >
                When crisis strikes,{" "}
                <span className="italic text-primary-glow">
                  we rise together.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.25 }}
                className="mt-6 text-lg md:text-2xl text-white/85 max-w-2xl text-pretty leading-relaxed"
              >
                ADREF mobilizes disaster response, climate action, and
                community empowerment across Africa — with the people who live
                the change.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.4 }}
                className="mt-10 flex flex-col sm:flex-row gap-3"
              >
                <Link
                  to="/donate"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-warm px-8 py-4 text-base font-semibold text-primary-foreground shadow-warm transition-all hover:shadow-glow hover:scale-105"
                >
                  <Heart className="h-4 w-4" /> Donate Now
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/volunteer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 bg-white/10 backdrop-blur px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/20"
                >
                  Become a Volunteer
                </Link>
              </motion.div>
            </div>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-white/60">
            <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
            <div className="h-10 w-[1px] bg-gradient-to-b from-white/60 to-transparent animate-pulse" />
          </div>
        </section>

        {/* THEMATIC AREAS */}
        <section className="container mx-auto px-4 py-24 md:py-32">
          <SectionHeader
            eyebrow="What we do"
            title={<>Six pillars of <em className="font-display italic text-primary">resilience</em></>}
            subtitle="Every program is co-designed with local leaders. Every outcome is measurable. Every life matters."
          />

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.19, 1, 0.22, 1] }}
                className="group relative overflow-hidden rounded-3xl bg-card border border-border p-7 shadow-soft transition-all hover:shadow-warm hover:-translate-y-1"
              >
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-warm opacity-0 blur-3xl transition-opacity group-hover:opacity-30" />
                <div className="relative">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-warm text-primary-foreground shadow-warm">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {p.short}
                  </p>
                  <Link
                    to="/programs"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary group/link"
                  >
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* IMPACT */}
        <section className="relative overflow-hidden bg-secondary text-secondary-foreground py-24 md:py-32">
          <div className="absolute inset-0 bg-gradient-glow opacity-40 pointer-events-none" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary-glow/40 bg-primary-glow/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary-glow">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-glow animate-pulse" />
                Our impact
              </span>
              <h2 className="mt-4 font-display text-4xl md:text-6xl font-semibold tracking-tight text-balance">
                Numbers that translate to <em className="italic text-primary-glow">human lives</em>.
              </h2>
            </div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="border-l-2 border-primary-glow/40 pl-5"
                >
                  <div className="font-display text-5xl md:text-6xl font-semibold tracking-tight text-primary-glow">
                    {s.short ? s.short : <Counter value={s.value} suffix={s.suffix} />}
                  </div>
                  <p className="mt-3 text-sm text-secondary-foreground/80">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT PREVIEW */}
        <section className="container mx-auto px-4 py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-warm">
                <img
                  src={villageImg}
                  alt="Aerial view of African village"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                  width={1600}
                  height={1024}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden md:block bg-card rounded-2xl p-5 shadow-warm border border-border max-w-[220px]">
                <div className="font-display text-3xl font-semibold text-primary">2014</div>
                <p className="text-xs text-muted-foreground mt-1">Founded by African humanitarians, for African communities</p>
              </div>
            </motion.div>

            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                Our story
              </span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold tracking-tight text-balance">
                Born from <em className="italic text-primary">lived experience</em>, built for lasting change.
              </h2>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                ADREF was founded in 2014 by a group of African humanitarians,
                community organizers, and climate scientists who believed that
                the people closest to crisis must lead the response.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                A decade later, we operate in 32 countries — never as
                outsiders, always as partners. From flood relief in
                Mozambique to women's seed cooperatives in Niger, our work
                begins with listening.
              </p>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-semibold transition-all hover:scale-105"
              >
                Read our full story <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="bg-sand py-24 md:py-32">
          <div className="container mx-auto px-4">
            <SectionHeader
              eyebrow="Voices"
              title={<>From the people we <em className="italic text-primary">stand beside</em></>}
            />
            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {testimonials.map((t, i) => (
                <motion.figure
                  key={t.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="rounded-3xl bg-card border border-border p-7 shadow-soft hover:shadow-warm transition-all"
                >
                  <div className="font-display text-5xl text-primary leading-none">"</div>
                  <blockquote className="mt-2 text-sand-foreground leading-relaxed">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-6 pt-6 border-t border-border">
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground mt-1">{t.role}</div>
                  </figcaption>
                </motion.figure>
              ))}
            </div>

            <div className="mt-20 pt-12 border-t border-border">
              <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">
                In partnership with
              </p>
              <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
                {partners.map((p) => (
                  <div
                    key={p}
                    className="font-display text-lg md:text-xl font-semibold tracking-widest text-muted-foreground/60 hover:text-primary transition-colors"
                  >
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
