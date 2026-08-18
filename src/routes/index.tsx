import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Sparkles } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { Counter } from "@/components/Counter";
import { CTABanner } from "@/components/CTABanner";
import { programs } from "@/lib/programs";
import { ImageCarousel } from "@/components/ImageCarousel";
import community01 from "@/assets/community/community-01.jpg";
import community02 from "@/assets/community/community-02.jpg";
import community03 from "@/assets/community/community-03.jpg";
import community04 from "@/assets/community/community-04.jpg";
import community05 from "@/assets/community/community-05.jpg";
import community06 from "@/assets/community/community-06.jpg";
import community07 from "@/assets/community/community-07.jpg";
import community08 from "@/assets/community/community-08.jpg";

const communityPhotos = [
  community01,
  community02,
  community03,
  community04,
  community05,
  community06,
  community07,
  community08,
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "African Aid Foundation — Relief, resilience, and recovery" },
      {
        name: "description",
        content:
          "African Aid Foundation helps communities prepare for crisis, recover from hardship, and build resilient futures across Africa.",
      },
      { property: "og:title", content: "African Aid Foundation — Relief, resilience, and recovery" },
      {
        property: "og:description",
        content:
          "Disaster response, climate action, food security, and community support across Africa.",
      },
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

const galleryImages = communityPhotos;

const testimonials = [
  {
    quote:
      "The support came at a critical moment. We were not just given aid — we were helped to rebuild with dignity and long-term resilience.",
    name: "Community Farmer",
    role: "Food security beneficiary",
  },
  {
    quote:
      "The response was immediate and practical. Families were supported with essentials, and the recovery plan helped us move forward with confidence.",
    name: "School Leader",
    role: "Education partner",
  },
  {
    quote:
      "What stood out most was the community-centered approach — practical, transparent, and focused on long-term recovery.",
    name: "Local Partner",
    role: "Climate resilience network",
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,164,96,0.35),_transparent_45%),linear-gradient(135deg,_rgba(14,64,49,0.9),_rgba(18,30,24,0.82))]" />
              <img src={communityPhotos[0]} alt="African aid foundation community outreach" className="absolute inset-0 h-full w-full object-cover opacity-60" />
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
                African Aid Foundation mobilizes disaster response, climate action, and
                community empowerment across Africa — helping families recover,
                adapt, and thrive.
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

        {/* GALLERY CAROUSEL */}
        <section className="container mx-auto px-4 py-24 md:py-32">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.28em] text-primary font-semibold">Photo story</span>
              <h2 className="mt-2 font-display text-4xl md:text-5xl font-semibold tracking-tight">
                Our work across Africa
              </h2>
            </div>
            <div className="hidden md:block text-sm text-muted-foreground max-w-md">
              Real communities, practical support, and the dignity of showing up when it matters most.
            </div>
          </div>

          <div className="editorial-photo-grid">
            <article className="editorial-photo-card editorial-photo-card--tall">
              <img src={galleryImages[0]} alt="Community aid and resilience" loading="lazy" decoding="async" />
              <div className="editorial-photo-caption">Relief</div>
            </article>
            <article className="editorial-photo-card">
              <img src={galleryImages[1]} alt="Water and sanitation access" loading="lazy" decoding="async" />
              <div className="editorial-photo-caption">Water</div>
            </article>
            <article className="editorial-photo-card">
              <img src={galleryImages[2]} alt="Food security outreach" loading="lazy" decoding="async" />
              <div className="editorial-photo-caption">Food</div>
            </article>
            <article className="editorial-photo-card editorial-photo-card--wide">
              <img src={galleryImages[3]} alt="Community climate resilience" loading="lazy" decoding="async" />
              <div className="editorial-photo-caption">Resilience</div>
            </article>
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
              <div className="relative overflow-hidden rounded-3xl shadow-warm bg-[linear-gradient(135deg,_rgba(218,125,63,0.23),_rgba(18,88,66,0.22)),radial-gradient(circle_at_20%_20%,_rgba(255,255,255,0.55),_transparent_20%),linear-gradient(135deg,_#f6efe6,_#dfead6)] p-6 md:p-8">
                <div className="rounded-[28px] border border-white/60 bg-white/10 p-6 backdrop-blur-sm">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-xs uppercase tracking-[0.3em] text-primary">Community</div>
                      <div className="mt-2 font-display text-3xl md:text-4xl font-semibold text-secondary">Resilience</div>
                    </div>
                    <div className="h-16 w-16 rounded-full border border-primary/40 bg-gradient-warm shadow-warm" />
                  </div>
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {Array.from({ length: 6 }).map((_, idx) => (
                      <div key={idx} className="h-20 rounded-2xl bg-white/20 border border-white/30" />
                    ))}
                  </div>
                </div>
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
                African Aid Foundation was created to meet communities where they are,
                with practical support, local leadership, and long-term investment in
                recovery and resilience.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We work alongside communities to respond to shocks, recover with dignity,
                and strengthen systems that keep families safe, food-secure, and prepared
                for the future.
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
