import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navHrefs = [
  { href: "#about", labelKey: "nav.about" as const },
  { href: "#skills", labelKey: "nav.skills" as const },
  { href: "#experience", labelKey: "nav.experience" as const },
  { href: "#education", labelKey: "nav.education" as const },
  { href: "#contact", labelKey: "nav.contact" as const },
];

const langOptions = [
  { code: "pt-BR" as const, region: "BR", lang: "PT", labelKey: "nav.langPt" as const },
  { code: "en" as const, region: "US", lang: "EN", labelKey: "nav.langEn" as const },
];

const LanguageToggle = () => {
  const { t, i18n } = useTranslation();
  const active = i18n.resolvedLanguage ?? i18n.language;

  return (
    <div className="flex items-center gap-2 shrink-0" role="group" aria-label={t("nav.language")}>
      {langOptions.map((opt) => (
        <button
          key={opt.code}
          type="button"
          onClick={() => void i18n.changeLanguage(opt.code)}
          aria-label={t(opt.labelKey)}
          aria-pressed={active === opt.code}
          className={cn(
            "inline-flex items-center rounded-lg px-2.5 py-1.5 font-heading transition-colors border",
            active === opt.code
              ? "text-primary bg-primary/10 border-primary/40"
              : "text-muted-foreground border-transparent hover:text-foreground hover:bg-muted/50"
          )}
        >
          <span className="inline-flex items-baseline gap-1 select-none" aria-hidden>
            <span className="text-sm font-bold leading-none tracking-tight">{opt.region}</span>
            <span className="text-[0.65rem] font-semibold uppercase leading-none opacity-90">
              {opt.lang}
            </span>
          </span>
        </button>
      ))}
    </div>
  );
};

const Navbar = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : ""
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="font-heading text-lg font-bold text-primary">
          FA<span className="text-foreground">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navHrefs.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {t(l.labelKey)}
            </a>
          ))}
          <LanguageToggle />
        </div>

        <div className="flex md:hidden items-center gap-4">
          <LanguageToggle />
          <button
            type="button"
            className="text-foreground"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border px-6 pb-6 space-y-4"
        >
          {navHrefs.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {t(l.labelKey)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
