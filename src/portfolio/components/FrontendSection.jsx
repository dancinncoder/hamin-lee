import { useLanguage } from "../useLanguage";
import Reveal from "./Reveal";

export default function FrontendSection() {
  const { t } = useLanguage();

  return (
    <section id="frontend">
      <div className="sec-label mono">{t("feLabel")}</div>
      <Reveal as="h3">{t("feHeading")}</Reveal>
      <Reveal as="p" className="lead">
        {t("feBody")}
      </Reveal>
      <Reveal className="timeline">
        <div className="t-item">
          <div className="t-loc mono">
            <a
              href="https://yyt.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("feItem1Loc")}
            </a>
          </div>
          <div className="t-dur">{t("feItem1Dur")}</div>
        </div>
        <div className="t-item">
          <div className="t-loc mono">
            <a
              href="https://w3company.team/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("feItem2Loc")}
            </a>
          </div>
          <div className="t-dur">{t("feItem2Dur")}</div>
        </div>
      </Reveal>
    </section>
  );
}
