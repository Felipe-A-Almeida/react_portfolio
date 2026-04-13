import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { GraduationCap } from "lucide-react";

type Degree = { degree: string; school: string; period: string };
type LangRow = { lang: string; level: string };

const EducationSection = () => {
  const { t } = useTranslation();
  const education = t("education.degrees", { returnObjects: true }) as Degree[];
  const languages = t("education.languages", { returnObjects: true }) as LangRow[];

  return (
    <section id="education" className="section-padding bg-card/50">
      <div className="container max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl font-bold text-center mb-14"
        >
          {t("education.titlePrefix")}{" "}
          <span className="text-gradient">{t("education.titleHighlight")}</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {education.map((e, i) => (
            <motion.div
              key={e.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background border border-border rounded-xl p-6"
            >
              <GraduationCap className="text-primary mb-3" size={24} />
              <h3 className="font-heading font-semibold mb-1">{e.degree}</h3>
              <p className="text-muted-foreground text-sm">{e.school}</p>
              <p className="text-primary text-xs font-heading mt-2">{e.period}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-6">
          {languages.map((l) => (
            <div key={l.lang} className="text-center">
              <p className="font-heading font-semibold">{l.lang}</p>
              <p className="text-muted-foreground text-sm">{l.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
