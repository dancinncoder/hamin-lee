import { useLanguage } from "../useLanguage";
import Reveal from "./Reveal";

export default function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <section id="projects">
      <div className="sec-label mono">{t("projLabel")}</div>
      <Reveal as="h3">{t("projHeading")}</Reveal>
      <Reveal className="projects">
        <div className="proj-card">
          <a
            href="https://tubetime-ebon.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="proj-tag mono">{t("proj1Tag")}</span>
            <h4>TubeTime</h4>
            <p>{t("proj1Body")}</p>
          </a>
        </div>
        <div className="proj-card">
          <a>
            <span className="proj-tag mono">{t("proj2Tag")}</span>
            <h4>CometEmoji</h4>
            <p>{t("proj2Body")}</p>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
