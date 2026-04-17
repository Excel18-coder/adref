import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, AreaChart, Area } from "recharts";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { Counter } from "@/components/Counter";
import { CTABanner } from "@/components/CTABanner";
import waterImg from "@/assets/program-water.jpg";
import foodImg from "@/assets/program-food.jpg";
import educationImg from "@/assets/program-education.jpg";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Impact — Lives Changed, Trees Planted, Wells Built | ADREF" },
      { name: "description", content: "Transparent data on ADREF's impact: 10,000+ lives, 1.2M trees, 210 wells. Read case studies and outcome reports." },
      { property: "og:title", content: "ADREF Impact" },
      { property: "og:description", content: "Transparent data on ADREF's impact across Africa." },
      { property: "og:image", content: waterImg },
      { name: "twitter:image", content: waterImg },
    ],
  }),
  component: ImpactPage,
});

const yearlyImpact = [
  { year: "2019", lives: 1200, trees: 80 },
  { year: "2020", lives: 2100, trees: 140 },
  { year: "2021", lives: 3400, trees: 220 },
  { year: "2022", lives: 5200, trees: 380 },
  { year: "2023", lives: 7600, trees: 620 },
  { year: "2024", lives: 10200, trees: 1200 },
];

const byProgram = [
  { name: "Disaster", value: 84 },
  { name: "Climate", value: 68 },
  { name: "Food", value: 320 },
  { name: "Water", value: 210 },
  { name: "Gender", value: 54 },
  { name: "Education", value: 128 },
];

const cases = [
  {
    img: waterImg,
    region: "Eastern Kenya",
    title: "From dry wells to thriving gardens",
    text: "12 boreholes transformed 4 villages, supporting 3,200 residents and reviving smallholder farming year-round.",
  },
  {
    img: foodImg,
    region: "Sahel · Niger",
    title: "Women-led seed cooperatives",
    text: "320 cooperatives produced 84 tons of drought-resistant grain — eliminating hunger gaps for 18,000 people.",
  },
  {
    img: educationImg,
    region: "Northern Mozambique",
    title: "Rebuilding after Cyclone Idai",
    text: "12 schools reconstructed; 4,100 children back in classrooms within 18 months of the disaster.",
  },
];

const stats = [
  { value: 10000, suffix: "+", label: "Lives directly impacted" },
  { value: 1200000, label: "Trees planted", short: "1.2M" },
  { value: 210, label: "Clean water wells installed" },
  { value: 32, label: "Countries reached" },
];

function ImpactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Impact"
          title={<>Outcomes you can <em className="italic text-primary">measure</em>, lives you can witness.</>}
          subtitle="Radical transparency is a value, not a slogan. Here's exactly what your support has built."
        />

        {/* Big stats */}
        <section className="container mx-auto px-4 py-20 md:py-28">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-3xl bg-card border border-border p-7 shadow-soft"
              >
                <div className="font-display text-5xl font-semibold text-primary">
                  {s.short ?? <Counter value={s.value} suffix={s.suffix} />}
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Charts */}
        <section className="bg-sand py-24 md:py-28">
          <div className="container mx-auto px-4">
            <SectionHeader eyebrow="Growth" title={<>A decade of <em className="italic text-primary">compounding</em> change</>} />
            <div className="mt-16 grid gap-8 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-3xl bg-card border border-border p-7 shadow-soft"
              >
                <h3 className="font-display text-xl font-semibold">Lives impacted per year</h3>
                <p className="text-xs text-muted-foreground mt-1">Cumulative direct beneficiaries</p>
                <div className="mt-6 h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={yearlyImpact}>
                      <defs>
                        <linearGradient id="livesGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="oklch(0.58 0.16 35)" stopOpacity={0.5} />
                          <stop offset="100%" stopColor="oklch(0.58 0.16 35)" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.88 0.02 70)" />
                      <XAxis dataKey="year" stroke="currentColor" fontSize={12} />
                      <YAxis stroke="currentColor" fontSize={12} />
                      <Tooltip
                        contentStyle={{
                          background: "var(--card)",
                          border: "1px solid var(--border)",
                          borderRadius: "12px",
                          color: "var(--foreground)",
                        }}
                      />
                      <Area type="monotone" dataKey="lives" stroke="oklch(0.58 0.16 35)" strokeWidth={3} fill="url(#livesGrad)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="rounded-3xl bg-card border border-border p-7 shadow-soft"
              >
                <h3 className="font-display text-xl font-semibold">Initiatives by program</h3>
                <p className="text-xs text-muted-foreground mt-1">Active community projects</p>
                <div className="mt-6 h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={byProgram}>
                      <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.88 0.02 70)" />
                      <XAxis dataKey="name" stroke="currentColor" fontSize={11} />
                      <YAxis stroke="currentColor" fontSize={12} />
                      <Tooltip
                        contentStyle={{
                          background: "var(--card)",
                          border: "1px solid var(--border)",
                          borderRadius: "12px",
                          color: "var(--foreground)",
                        }}
                      />
                      <Bar dataKey="value" fill="oklch(0.55 0.13 145)" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Case studies */}
        <section className="container mx-auto px-4 py-24 md:py-32">
          <SectionHeader eyebrow="Case studies" title={<>Stories behind the <em className="italic text-primary">numbers</em></>} />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {cases.map((c, i) => (
              <motion.article
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group overflow-hidden rounded-3xl bg-card border border-border shadow-soft hover:shadow-warm transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={c.img} alt={c.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-6">
                  <span className="text-xs uppercase tracking-widest text-primary font-semibold">{c.region}</span>
                  <h3 className="mt-2 font-display text-xl font-semibold leading-tight">{c.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.text}</p>
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
