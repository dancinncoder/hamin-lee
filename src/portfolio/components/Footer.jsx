import { useLanguage } from "../useLanguage";

export default function Footer() {
  const { t } = useLanguage();

  return <footer className="mono">{t("footer")}</footer>;
}
