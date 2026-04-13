import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowDown, Mail } from "lucide-react";
import felipePhoto from "@/assets/profile_photo.png";

const LinkedInIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen flex items-center section-padding pt-24">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary font-heading text-sm tracking-widest uppercase mb-4">
              {t("hero.eyebrow")}
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Felipe{" "}
              <span className="text-gradient">Almeida</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-lg mb-8 leading-relaxed">
              {t("hero.intro")}
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading text-sm font-medium hover:brightness-110 transition"
              >
                {t("hero.cta")}
              </a>
              <a
                href="https://linkedin.com/in/felipe-almeida-37b991159"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition"
                aria-label={t("hero.linkedinAria")}
              >
                <LinkedInIcon size={18} />
              </a>
              <a
                href="mailto:felipe_a.almeida@outlook.com"
                className="p-3 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition"
                aria-label={t("hero.emailAria")}
              >
                <Mail size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden glow border-2 border-primary/20">
              <img
                src={felipePhoto}
                alt={t("hero.photoAlt")}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center mt-16"
        >
          <a
            href="#about"
            className="text-muted-foreground hover:text-primary transition animate-bounce"
            aria-label={t("hero.scrollToAbout")}
          >
            <ArrowDown size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
