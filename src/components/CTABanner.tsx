import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTABanner() {
  return (
    <section className="container mx-auto px-4 py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-warm shadow-warm grain"
      >
        <div className="absolute inset-0 bg-gradient-glow opacity-40" />
        <div className="relative px-8 py-16 md:px-16 md:py-24 text-center">
          <h2 className="font-display text-4xl md:text-6xl font-semibold text-primary-foreground text-balance max-w-3xl mx-auto leading-[1.05]">
            Join us in making a difference.
          </h2>
          <p className="mt-5 text-lg text-primary-foreground/90 max-w-xl mx-auto">
            Every contribution sparks resilience. Every volunteer hour rebuilds hope.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/donate"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background shadow-soft transition-all hover:scale-105"
            >
              Donate Now <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/volunteer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary-foreground/40 bg-primary-foreground/10 backdrop-blur px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/20"
            >
              Volunteer With Us
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
