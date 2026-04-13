import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

type SkillCategory = { title: string; items: string[] };

const SkillsSection = () => {
  const { t } = useTranslation();
  const categories = t("skills.categories", { returnObjects: true }) as SkillCategory[];

  return (
    <section id="skills" className="section-padding bg-card/50">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl font-bold text-center mb-14"
        >
          {t("skills.titlePrefix")}{" "}
          <span className="text-gradient">{t("skills.titleHighlight")}</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-background border border-border rounded-xl p-6"
            >
              <h3 className="font-heading font-semibold text-primary mb-4 text-sm tracking-wider uppercase">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((s) => (
                  <span
                    key={s}
                    className="text-xs bg-secondary text-secondary-foreground px-3 py-1.5 rounded-md"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
