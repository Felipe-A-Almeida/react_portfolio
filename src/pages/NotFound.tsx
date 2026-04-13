import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center px-6">
        <h1 className="mb-4 text-4xl font-bold">{t("notFound.title")}</h1>
        <p className="mb-4 text-xl text-muted-foreground">{t("notFound.message")}</p>
        <Link to="/" className="text-primary underline hover:text-primary/90">
          {t("notFound.back")}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
