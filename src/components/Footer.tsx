import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-border py-8 px-6 text-center">
      <p className="text-muted-foreground text-sm">
        {t("footer.credit", { year: new Date().getFullYear() })}
      </p>
    </footer>
  );
};

export default Footer;
