import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Heart, Shield, Sprout, Award, CheckCircle2, CreditCard } from "lucide-react";
import { toast } from "sonner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { openMailDraft, saveClientSubmission } from "@/lib/client-actions";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — Power Resilience Across Africa | ADREF" },
      { name: "description", content: "Your gift funds disaster response, clean water, climate action, and education. 100% transparent. Tax-deductible." },
      { property: "og:title", content: "Donate to ADREF" },
      { property: "og:description", content: "Your gift funds disaster response, clean water, and education across Africa." },
    ],
  }),
  component: DonatePage,
});

const tiers = [
  { amount: 25, label: "Seedling", icon: Sprout, impact: "Plants 50 indigenous trees" },
  { amount: 75, label: "Wellspring", icon: Heart, impact: "Provides clean water to a family for a year" },
  { amount: 150, label: "Guardian", icon: Shield, impact: "Funds emergency kit for 5 displaced families" },
  { amount: 500, label: "Champion", icon: Award, impact: "Sponsors a child's full year of schooling" },
];

const trust = [
  "100% transparent — every dollar tracked publicly",
  "Tax-deductible in 14+ countries",
  "Independently audited annually",
  "98¢ of every dollar reaches programs",
];

function DonatePage() {
  const [tier, setTier] = useState(75);
  const [custom, setCustom] = useState("");
  const [freq, setFreq] = useState<"once" | "monthly">("once");

  const amount = custom ? parseInt(custom, 10) || 0 : tier;

  const handleDonate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (amount < 1) {
      toast.error("Please choose an amount");
      return;
    }
    const formData = new FormData(e.currentTarget);
    const donorName = String(formData.get("name") ?? "").trim();
    const donorEmail = String(formData.get("email") ?? "").trim();

    saveClientSubmission("adref:donation-intents", {
      donorName,
      donorEmail,
      amount,
      frequency: freq,
    });

    openMailDraft({
      to: "donate@adref.org",
      subject: `Donation pledge: $${amount} ${freq === "monthly" ? "monthly" : "one-time"}`,
      body: `Donor name: ${donorName}\nDonor email: ${donorEmail}\nAmount: $${amount}\nFrequency: ${freq}`,
    });

    toast.success(`Thank you for your $${amount} ${freq} gift!`, {
      description: "Your email app was opened with a pre-filled donation draft.",
    });

    e.currentTarget.reset();
    setCustom("");
    setTier(75);
    setFreq("once");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Donate"
          title={<>Your gift becomes <em className="italic text-primary">someone's tomorrow</em>.</>}
          subtitle="Choose a tier or set your own. 100% of one-time gifts go directly to programs — operations are funded by core grants."
        />

        <section className="container mx-auto px-4 py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            {/* Tiers + form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl bg-card border border-border p-8 md:p-10 shadow-warm"
            >
              {/* Frequency */}
              <div className="inline-flex rounded-full bg-muted p-1">
                {(["once", "monthly"] as const).map((f) => (
                  <button
                    key={f}
                    onClick={() => setFreq(f)}
                    className={`px-5 py-2 rounded-full text-sm font-semibold capitalize transition-all ${
                      freq === f ? "bg-card shadow-soft text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {f === "once" ? "One-time" : "Monthly"}
                  </button>
                ))}
              </div>

              <h3 className="mt-8 font-display text-2xl font-semibold">Choose your impact</h3>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {tiers.map((t) => {
                  const active = tier === t.amount && !custom;
                  return (
                    <button
                      key={t.amount}
                      onClick={() => { setTier(t.amount); setCustom(""); }}
                      className={`relative text-left rounded-2xl border-2 p-5 transition-all ${
                        active
                          ? "border-primary bg-primary/5 shadow-warm"
                          : "border-border hover:border-primary/40"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <span className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${active ? "bg-gradient-warm text-primary-foreground" : "bg-accent text-accent-foreground"}`}>
                          <t.icon className="h-5 w-5" />
                        </span>
                        <span className="font-display text-2xl font-semibold">${t.amount}</span>
                      </div>
                      <div className="mt-4">
                        <div className="font-semibold text-sm">{t.label}</div>
                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{t.impact}</p>
                      </div>
                      {active && (
                        <CheckCircle2 className="absolute top-3 right-3 h-4 w-4 text-primary" />
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="mt-5">
                <label className="block text-sm font-semibold mb-2">Or enter custom amount</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                  <input
                    type="number"
                    min="1"
                    placeholder="Amount in USD"
                    value={custom}
                    onChange={(e) => setCustom(e.target.value)}
                    className="w-full pl-8 pr-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                  />
                </div>
              </div>

              <form onSubmit={handleDonate} className="mt-8 pt-8 border-t border-border space-y-4">
                <h4 className="font-display text-lg font-semibold">Your details</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input name="name" required placeholder="Full name" className="px-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" />
                  <input name="email" required type="email" placeholder="Email" className="px-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-warm px-6 py-4 text-base font-semibold text-primary-foreground shadow-warm transition-all hover:shadow-glow hover:scale-[1.02]"
                >
                  <CreditCard className="h-4 w-4" />
                  Give ${amount || 0} {freq === "monthly" ? "/ month" : "now"}
                </button>
                <p className="text-xs text-center text-muted-foreground">
                  Secure checkout · Cancel anytime · Receipt emailed instantly
                </p>
              </form>
            </motion.div>

            {/* Trust */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-3xl bg-secondary text-secondary-foreground p-8 shadow-warm relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-glow opacity-40" />
                <div className="relative">
                  <h4 className="font-display text-2xl font-semibold">Why trust ADREF</h4>
                  <ul className="mt-5 space-y-3">
                    {trust.map((t) => (
                      <li key={t} className="flex gap-3 text-sm">
                        <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary-glow shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="rounded-3xl bg-sand p-8"
              >
                <p className="font-display text-xl text-sand-foreground italic leading-relaxed">
                  "Every gift is a vote for a more resilient Africa. Thank you for standing with us."
                </p>
                <div className="mt-4 text-sm text-muted-foreground">
                  — Dr. Wanjiru Kamau, Executive Director
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Other ways */}
        <section className="bg-sand py-20">
          <div className="container mx-auto px-4">
            <SectionHeader eyebrow="Other ways to give" title={<>Beyond a one-time <em className="italic text-primary">gift</em></>} />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              {[
                { t: "Corporate partnership", d: "Match employee giving, sponsor a program, or co-create campaigns." },
                { t: "Legacy giving", d: "Include ADREF in your will and create generational impact." },
                { t: "In-kind donations", d: "Equipment, expertise, services — we welcome non-cash contributions." },
              ].map((x) => (
                <div key={x.t} className="rounded-3xl bg-card border border-border p-7 shadow-soft">
                  <h5 className="font-display text-lg font-semibold">{x.t}</h5>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{x.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
