import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const ContactSection = () => {
  const { t } = useTranslation();

  const items = [
    {
      icon: Mail,
      label: t("contact.email"),
      value: "felipe_a.almeida@outlook.com",
      href: "mailto:felipe_a.almeida@outlook.com",
    },
    {
      icon: Phone,
      label: t("contact.phone"),
      value: "+55 (19) 99672-2050",
      href: "tel:+5519996722050",
    },
    {
      icon: MapPin,
      label: t("contact.location"),
      value: t("contact.locationValue"),
      href: undefined as string | undefined,
    },
    {
      icon: ExternalLink,
      label: t("contact.linkedin"),
      value: t("contact.linkedinValue"),
      href: "https://linkedin.com/in/felipe-almeida-37b991159",
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            {t("contact.titlePrefix")}{" "}
            <span className="text-gradient">{t("contact.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground mb-10">{t("contact.subtitle")}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="grid sm:grid-cols-2 gap-4"
        >
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="bg-card border border-border rounded-xl p-5 flex items-center gap-4 hover:border-primary/40 transition"
              >
                <Icon className="text-primary shrink-0" size={20} />
                <div className="text-left min-w-0">
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-sm font-medium hover:text-primary transition truncate block"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium truncate">{item.value}</p>
                  )}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
