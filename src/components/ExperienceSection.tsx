import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

type Job = {
  title: string;
  company: string;
  period: string;
  points: string[];
};

const ExperienceSection = () => {
  const { t } = useTranslation();
  const jobs = t("experience.jobs", { returnObjects: true }) as Job[];

  return (
    <section id="experience" className="section-padding">
      <div className="container max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl font-bold text-center mb-14"
        >
          {t("experience.titlePrefix")}{" "}
          <span className="text-gradient">{t("experience.titleHighlight")}</span>
        </motion.h2>

        <div className="relative border-l-2 border-border pl-8 space-y-12">
          {jobs.map((job, i) => (
            <motion.div
              key={`${job.company}-${job.period}-${i}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-background" />
              <p className="text-primary text-xs font-heading tracking-wider uppercase mb-1">
                {job.period}
              </p>
              <h3 className="font-heading font-bold text-lg">{job.title}</h3>
              <p className="text-muted-foreground text-sm mb-3">{job.company}</p>
              <ul className="space-y-1.5">
                {job.points.map((p, j) => (
                  <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
