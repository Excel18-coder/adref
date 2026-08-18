import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-secondary text-secondary-foreground">
      <div className="absolute inset-0 bg-gradient-glow opacity-40 pointer-events-none" />
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/95 font-display text-lg font-bold text-secondary shadow-glow ring-2 ring-white/70">
                A
              </span>
              <span className="font-display text-xl font-bold">African Aid Foundation</span>
            </Link>
            <p className="mt-4 text-sm text-secondary-foreground/80 leading-relaxed">
              Community-led relief, resilience, and long-term recovery for families across Africa.
            </p>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              {[
                { to: "/about" as const, l: "About Us" },
                { to: "/thematic-areas" as const, l: "Thematic Areas" },
                { to: "/programs" as const, l: "Our Programs" },
                { to: "/impact" as const, l: "Impact Stories" },
                { to: "/volunteer" as const, l: "Volunteer" },
              ].map((x) => (
                <li key={x.to}>
                  <Link to={x.to} className="hover:text-primary-glow transition-colors">
                    {x.l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold mb-4">Get Involved</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li><Link to="/donate" className="hover:text-primary-glow">Donate</Link></li>
              <li><Link to="/volunteer" className="hover:text-primary-glow">Volunteer</Link></li>
              <li><Link to="/contact" className="hover:text-primary-glow">Partner with Us</Link></li>
              <li><a href="mailto:hello@africanaidfoundation.org" className="hover:text-primary-glow">hello@africanaidfoundation.org</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-4 justify-between text-xs text-secondary-foreground/60">
          <p>© {new Date().getFullYear()} African Aid Foundation. All rights reserved.</p>
          <p>Driven by dignity · Built for impact</p>
        </div>
      </div>
    </footer>
  );
}
