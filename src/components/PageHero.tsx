import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
  image?: string;
  imageAlt?: string;
}) {
  const hasImage = Boolean(image);
  return (
    <section
      className={`relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-gradient-earth ${
        hasImage ? "text-white" : ""
      }`}
    >
      {hasImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={image}
            alt={imageAlt ?? ""}
            className="h-full w-full object-cover"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute inset-0 bg-black/35" />
        </div>
      )}
      {!hasImage && <div className="absolute inset-0 bg-gradient-glow opacity-60 pointer-events-none" />}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="max-w-3xl"
        >
          <span
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-widest ${
              hasImage
                ? "border-white/30 bg-white/10 text-white"
                : "border-primary/30 bg-primary/5 text-primary"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full animate-pulse ${
                hasImage ? "bg-white" : "bg-primary"
              }`}
            />
            {eyebrow}
          </span>
          <h1
            className={`mt-5 font-display text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-balance ${
              hasImage ? "text-white" : ""
            }`}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className={`mt-6 text-lg md:text-xl text-pretty max-w-2xl leading-relaxed ${
                hasImage ? "text-white/85" : "text-muted-foreground"
              }`}
            >
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </motion.div>
      </div>
    </section>
  );
}
