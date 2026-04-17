import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, HandHeart } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/impact", label: "Impact" },
  { to: "/volunteer", label: "Volunteer" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav
          className={`flex items-center justify-between rounded-full border border-border/60 px-4 py-2.5 transition-all duration-500 ${
            scrolled ? "glass-strong shadow-soft" : "glass"
          }`}
        >
          <Link to="/" className="flex items-center gap-2 group">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-warm text-primary-foreground shadow-warm transition-transform group-hover:rotate-12">
              <HandHeart className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-bold tracking-tight">
              ADREF
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeProps={{ className: "text-primary bg-accent/60" }}
                inactiveProps={{ className: "text-foreground/80 hover:text-primary hover:bg-accent/40" }}
                activeOptions={{ exact: l.to === "/" }}
                className="px-4 py-2 rounded-full text-sm font-medium transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              to="/donate"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-gradient-warm px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-warm transition-all hover:shadow-glow hover:scale-105"
            >
              Donate
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/60"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="lg:hidden mt-2 rounded-3xl glass-strong border border-border/60 p-4 shadow-soft animate-fade-in">
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  activeProps={{ className: "text-primary bg-accent/60" }}
                  inactiveProps={{ className: "text-foreground/80" }}
                  activeOptions={{ exact: l.to === "/" }}
                  className="px-4 py-3 rounded-2xl text-sm font-medium"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/donate"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-2xl bg-gradient-warm px-5 py-3 text-sm font-semibold text-primary-foreground shadow-warm"
              >
                Donate Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
