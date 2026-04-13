import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Code2, Bot, Database } from "lucide-react";

const highlightIcons = [Code2, Bot, Database];

const AboutSection = () => {
  const { t } = useTranslation();
  const highlights = t("about.highlights", { returnObjects: true }) as {
    label: string;
    desc: string;
  }[];

  return (
    <section id="about" className="section-padding">
      <div className="container max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            {t("about.titlePrefix")}{" "}
            <span className="text-gradient">{t("about.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-12">{t("about.body")}</p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {highlights.map((h, i) => {
            const Icon = highlightIcons[i] ?? Code2;
            return (
              <motion.div
                key={`${h.label}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition group"
              >
                <Icon className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" size={28} />
                <h3 className="font-heading font-semibold mb-1">{h.label}</h3>
                <p className="text-muted-foreground text-sm">{h.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
