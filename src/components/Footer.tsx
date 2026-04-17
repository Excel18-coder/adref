import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import logoMark from "@/assets/adref-logo.svg";

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/adref", label: "ADREF on Facebook" },
  { icon: Instagram, href: "https://instagram.com/adref", label: "ADREF on Instagram" },
  { icon: Twitter, href: "https://x.com/adref_org", label: "ADREF on X" },
  { icon: Linkedin, href: "https://linkedin.com/company/adref", label: "ADREF on LinkedIn" },
] as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-secondary text-secondary-foreground">
      <div className="absolute inset-0 bg-gradient-glow opacity-40 pointer-events-none" />
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <img src={logoMark} alt="ADREF logo" width={40} height={40} className="h-10 w-10 rounded-full" />
              <span className="font-display text-xl font-bold">ADREF</span>
            </Link>
            <p className="mt-4 text-sm text-secondary-foreground/80 leading-relaxed">
              Africa Disaster Management & Resilience Foundation — building
              resilient communities through humanitarian action and climate justice.
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              {[
                { to: "/about" as const, l: "About Us" },
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
              <li><Link to="/volunteer" className="hover:text-primary-glow">Become a Volunteer</Link></li>
              <li><Link to="/contact" className="hover:text-primary-glow">Partner with Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary-glow">Newsletter</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold mb-4">Reach Us</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/80">
              <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> Nairobi, Kenya · Pan-African operations</li>
              <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0" /> hello@adref.org</li>
              <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0" /> +254 700 000 000</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-4 justify-between text-xs text-secondary-foreground/60">
          <p>© {new Date().getFullYear()} ADREF. All rights reserved.</p>
          <p>Built with purpose · Designed for impact</p>
        </div>
      </div>
    </footer>
  );
}
