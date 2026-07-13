import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ExternalLink } from "lucide-react";

type ProjectItem = { title: string; description: string };

const projects = [
  {
    id: "audio2chords",
    image: "/projects/audio2chords.png",
    url: "https://audio2chords.netlify.app",
  },
  {
    id: "mimika",
    image: "/projects/mimika.png",
    url: "https://mimika.com.br",
  },
  {
    id: "hr-servicos-prediais",
    image: "/projects/hrservicosprediais.webp",
    url: "https://hrservicosprediais.com.br",
  },
];

const ProjectsSection = () => {
  const { t } = useTranslation();
  const items = t("projects.items", { returnObjects: true }) as ProjectItem[];

  return (
    <section id="projects" className="section-padding">
      <div className="container max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl font-bold text-center mb-14"
        >
          {t("projects.titlePrefix")}{" "}
          <span className="text-gradient">{t("projects.titleHighlight")}</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => {
            const item = items[i];
            return (
              <motion.a
                key={p.id}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 transition flex flex-col"
              >
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={p.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                    {item.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-primary text-sm font-heading">
                    {t("projects.viewSite")}
                    <ExternalLink size={14} />
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
