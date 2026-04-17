import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { openMailDraft, saveClientSubmission } from "@/lib/client-actions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact ADREF — Get in Touch" },
      { name: "description", content: "Reach ADREF for partnerships, press inquiries, or general questions. Offices in Nairobi with operations across Africa." },
      { property: "og:title", content: "Contact ADREF" },
      { property: "og:description", content: "Reach ADREF for partnerships, press, or general inquiries." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Name required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  subject: z.string().trim().min(2, "Subject required").max(150),
  message: z.string().trim().min(10, "10+ characters please").max(2000),
});

type FormData = z.infer<typeof schema>;

function ContactPage() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 700));
    saveClientSubmission("adref:contact-submissions", data);
    openMailDraft({
      to: "hello@adref.org",
      subject: `Contact inquiry: ${data.subject}`,
      body: `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`,
    });
    toast.success("Message prepared", {
      description: "Your email app was opened with a pre-filled draft.",
    });
    reset();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Contact"
          title={<>Let's <em className="italic text-primary">talk</em>.</>}
          subtitle="Partner inquiries, press, or just a hello — we read every message."
        />

        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {[
                { icon: Mail, label: "Email", value: "hello@adref.org", sub: "Partners: partners@adref.org" },
                { icon: Phone, label: "Phone", value: "+254 700 000 000", sub: "Mon–Fri · 9:00–18:00 EAT" },
                { icon: MapPin, label: "Headquarters", value: "Westlands, Nairobi, Kenya", sub: "Field offices in 32 countries" },
              ].map((c) => (
                <div key={c.label} className="rounded-3xl bg-card border border-border p-6 shadow-soft flex gap-4">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-warm text-primary-foreground shadow-warm">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</div>
                    <div className="font-semibold mt-1">{c.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{c.sub}</div>
                  </div>
                </div>
              ))}

              {/* Map */}
              <div className="rounded-3xl overflow-hidden border border-border shadow-soft">
                <iframe
                  title="ADREF Nairobi office"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=36.7800%2C-1.2700%2C36.8200%2C-1.2400&layer=mapnik&marker=-1.2550%2C36.8000"
                  className="w-full h-72 border-0"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl bg-card border border-border p-8 md:p-10 shadow-warm"
            >
              <h3 className="font-display text-3xl font-semibold tracking-tight">Send a message</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Name" error={errors.name?.message}>
                    <input {...register("name")} className="cinput" placeholder="Your name" />
                  </Field>
                  <Field label="Email" error={errors.email?.message}>
                    <input type="email" {...register("email")} className="cinput" placeholder="you@example.com" />
                  </Field>
                </div>
                <Field label="Subject" error={errors.subject?.message}>
                  <input {...register("subject")} className="cinput" placeholder="Partnership inquiry" />
                </Field>
                <Field label="Message" error={errors.message?.message}>
                  <textarea {...register("message")} rows={6} className="cinput resize-none" placeholder="Tell us how we can help..." />
                </Field>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-warm px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-warm transition-all hover:shadow-glow hover:scale-105 disabled:opacity-60"
                >
                  {isSubmitting ? "Sending..." : (<>Send message <Send className="h-4 w-4" /></>)}
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .cinput {
          width: 100%;
          background: var(--background);
          border: 1px solid var(--border);
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          color: var(--foreground);
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .cinput:focus {
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
