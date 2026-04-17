import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ChevronDown, Heart, Globe, GraduationCap, Sparkles, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { openMailDraft, saveClientSubmission } from "@/lib/client-actions";

export const Route = createFileRoute("/volunteer")({
  head: () => ({
    meta: [
      { title: "Volunteer — Join the ADREF Movement" },
      { name: "description", content: "Apply to volunteer with ADREF. Field, remote, and skill-based opportunities across disaster response, climate action, and education." },
      { property: "og:title", content: "Volunteer with ADREF" },
      { property: "og:description", content: "Apply to volunteer with ADREF — field, remote, and skill-based opportunities." },
    ],
  }),
  component: VolunteerPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  country: z.string().trim().min(2, "Country is required").max(100),
  area: z.string().min(1, "Choose an area"),
  message: z.string().trim().min(10, "Tell us a bit more (10+ chars)").max(1000),
});

type FormData = z.infer<typeof schema>;

const benefits = [
  { icon: Heart, title: "Real impact", text: "Work directly with communities driving measurable, lasting change." },
  { icon: Globe, title: "Pan-African network", text: "Connect with leaders, scientists, and changemakers across 32 nations." },
  { icon: GraduationCap, title: "Skills & training", text: "Free workshops in humanitarian response, climate adaptation, and more." },
  { icon: Sparkles, title: "Lifetime community", text: "Join a global family of 8,000+ ADREF alumni and current volunteers." },
];

const faqs = [
  { q: "Do I need experience?", a: "No prior humanitarian experience is required for most roles. We provide full onboarding and training." },
  { q: "Are positions paid?", a: "Field placements include a stipend, accommodation, and travel. Remote skill-based roles are pro-bono." },
  { q: "How long is a placement?", a: "Field commitments range from 2 weeks (rapid response) to 12 months (program embeds). Remote roles are flexible." },
  { q: "Can I volunteer remotely?", a: "Yes! We welcome designers, engineers, translators, and storytellers contributing from anywhere." },
  { q: "What's the application process?", a: "Submit the form below, then a 30-min interview, reference checks, and onboarding. Typically 2–3 weeks total." },
];

function VolunteerPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 800));
    saveClientSubmission("adref:volunteer-submissions", data);
    openMailDraft({
      to: "volunteer@adref.org",
      subject: `Volunteer application: ${data.area}`,
      body: `Name: ${data.name}\nEmail: ${data.email}\nCountry: ${data.country}\nArea: ${data.area}\n\nMotivation:\n${data.message}`,
    });
    toast.success("Application received!", {
      description: "Your email app was opened with a pre-filled volunteer draft.",
    });
    reset();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Volunteer"
          title={<>Lend your <em className="italic text-primary">hands</em>, your skills, your voice.</>}
          subtitle="Whether you're a doctor, designer, teacher, or first-time changemaker — there's a place for you here."
        />

        {/* Benefits */}
        <section className="container mx-auto px-4 py-20">
          <SectionHeader eyebrow="Why volunteer" title={<>What you'll <em className="italic text-primary">gain</em></>} />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-3xl bg-card border border-border p-6 shadow-soft hover:-translate-y-1 transition-all"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <b.icon className="h-5 w-5" />
                </span>
                <h4 className="mt-4 font-display text-lg font-semibold">{b.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Form + FAQ */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl bg-card border border-border p-8 md:p-10 shadow-warm"
            >
              <h3 className="font-display text-3xl font-semibold tracking-tight">Apply now</h3>
              <p className="mt-2 text-sm text-muted-foreground">Takes about 3 minutes. We respond within 5 business days.</p>

              <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
                <Field label="Full name" error={errors.name?.message}>
                  <input {...register("name")} className="input" placeholder="Amara Okeke" />
                </Field>
                <Field label="Email" error={errors.email?.message}>
                  <input type="email" {...register("email")} className="input" placeholder="amara@example.com" />
                </Field>
                <Field label="Country" error={errors.country?.message}>
                  <input {...register("country")} className="input" placeholder="Kenya" />
                </Field>
                <Field label="Area of interest" error={errors.area?.message}>
                  <select {...register("area")} className="input">
                    <option value="">Select an area</option>
                    <option>Disaster Management</option>
                    <option>Climate Action</option>
                    <option>Food Security</option>
                    <option>Water & Sanitation</option>
                    <option>Gender Inclusivity</option>
                    <option>Education & Empowerment</option>
                    <option>Remote / Skills-based</option>
                  </select>
                </Field>
                <Field label="Why do you want to volunteer?" error={errors.message?.message}>
                  <textarea {...register("message")} rows={4} className="input resize-none" placeholder="Share what motivates you..." />
                </Field>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-warm px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-warm transition-all hover:shadow-glow hover:scale-[1.02] disabled:opacity-60"
                >
                  {isSubmitting ? "Submitting..." : "Submit application"}
                  {!isSubmitting && <CheckCircle2 className="h-4 w-4" />}
                </button>
              </form>
            </motion.div>

            {/* FAQ */}
            <div>
              <h3 className="font-display text-3xl font-semibold tracking-tight">Frequently asked</h3>
              <p className="mt-2 text-sm text-muted-foreground">Can't find your answer? <a href="mailto:volunteer@adref.org" className="text-primary font-semibold">Email us</a>.</p>
              <div className="mt-8 space-y-3">
                {faqs.map((f, i) => (
                  <div key={f.q} className="rounded-2xl bg-card border border-border overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="font-semibold">{f.q}</span>
                      <ChevronDown className={`h-4 w-4 shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence initial={false}>
                      {openFaq === i && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .input {
          width: 100%;
          background: var(--background);
          border: 1px solid var(--border);
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          color: var(--foreground);
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .input:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--primary) 20%, transparent);
        }
      `}</style>
    </div>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-2">{label}</label>
      {children}
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}
