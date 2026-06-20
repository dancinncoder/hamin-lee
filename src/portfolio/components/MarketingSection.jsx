import { useLanguage } from "../useLanguage";
import Reveal from "./Reveal";

export default function MarketingSection() {
  const { t } = useLanguage();

  return (
    <section id="marketing">
      <div className="sec-label mono">{t("mkLabel")}</div>
      <Reveal as="h3">{t("mkHeading")}</Reveal>
      <Reveal as="p" className="lead">
        {t("mkBody")}
      </Reveal>
      <Reveal className="timeline">
        <div className="t-item">
          <div className="t-loc mono">
            <a
              href="https://www.zenly.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("mkItem1Loc")}
            </a>
          </div>
          <div className="t-dur">{t("mkItem1Dur")}</div>
        </div>
        <div className="t-item">
          <div className="t-loc mono">
            <a
              href="https://www.paloaltonetworks.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("mkItem2Loc")}
            </a>
          </div>
          <div className="t-dur">{t("mkItem2Dur")}</div>
        </div>
      </Reveal>
      <Reveal className="skill-row">
        <div className="skill-chip">{t("mkSkill1")}</div>
        <div className="skill-chip">{t("mkSkill2")}</div>
      </Reveal>
    </section>
  );
}
