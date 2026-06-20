import { useLanguage } from "../useLanguage";
import Reveal from "./Reveal";

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact">
      <div className="sec-label mono">{t("contactLabel")}</div>
      <Reveal as="h3">{t("contactHeading")}</Reveal>
      <Reveal as="p" className="lead">
        {t("contactBody")}
      </Reveal>
      <Reveal className="contact-block">
        <a className="contact-link" href="mailto:haminlee.official@gmail.com">
          Email ↗
        </a>
        <a
          className="contact-link"
          href="https://www.linkedin.com/in/hamin-lee-40317a199/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn ↗
        </a>
        <a
          className="contact-link"
          href="https://github.com/dancinncoder"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub ↗
        </a>
      </Reveal>
    </section>
  );
}
