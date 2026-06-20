import { useLanguage } from "../useLanguage";
import Reveal from "./Reveal";

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about">
      <div className="sec-label mono">{t("aboutLabel")}</div>
      <Reveal as="h3">{t("aboutHeading")}</Reveal>
      <Reveal as="p" className="lead">
        {t("aboutBody")} <br />
        <br />
        {t("aboutBody2")}
      </Reveal>
    </section>
  );
}
