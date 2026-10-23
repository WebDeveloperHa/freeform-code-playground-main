import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { IconChevronDown, IconClose, IconMenu } from "./icons";

const NAV_LINKS = [
  { label: "How it works", href: "#how-it-works" },
  { label: "For providers", href: "#waitlist" },
  { label: "About", href: "#about" },
];

const LANGUAGES = ["EN", "FR", "DE", "ES"];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang] = useState("EN");
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <a href="#top" aria-label="Loqelo home">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="inline-flex items-center gap-1 text-sm font-semibold text-ink/80 transition hover:text-ink"
              aria-expanded={langOpen}
            >
              {lang}
              <IconChevronDown className="h-4 w-4" />
            </button>
            {langOpen && (
              <div className="absolute top-full left-0 mt-2 w-24 overflow-hidden rounded-xl border border-border bg-card py-1 shadow-lg">
                {LANGUAGES.map((l) => (
                  <button
                    key={l}
                    onClick={() => {
                      setLang(l);
                      setLangOpen(false);
                    }}
                    className={`block w-full px-4 py-2 text-left text-sm font-semibold transition hover:bg-mint-soft ${
                      l === lang ? "text-teal-deep" : "text-ink/80"
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            )}
          </div>
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-ink/80 transition hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#waitlist"
            className="hidden rounded-full bg-teal px-5 py-2.5 text-sm font-bold text-primary-foreground transition hover:bg-teal-deep sm:inline-flex"
          >
            Join the waitlist
          </a>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <IconClose className="h-6 w-6" />
            ) : (
              <IconMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-border/60 bg-cream px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-semibold text-ink/80 transition hover:bg-mint-soft"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#waitlist"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex justify-center rounded-full bg-teal px-5 py-3 text-sm font-bold text-primary-foreground transition hover:bg-teal-deep"
            >
              Join the waitlist
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
