import { useEffect, useState } from "react";
import { useLanguage } from "../useLanguage";
import Mindmap from "./Mindmap";

const NAME = "Hamin Lee";

export default function Hero() {
  const { t } = useLanguage();
  const [typedLength, setTypedLength] = useState(0);
  const taglineVisible = typedLength > NAME.length;

  useEffect(() => {
    if (typedLength > NAME.length) return;

    const timer = setTimeout(() => {
      setTypedLength((current) => current + 1);
    }, 85);

    return () => clearTimeout(timer);
  }, [typedLength]);

  const displayedName = NAME.slice(0, Math.min(typedLength, NAME.length));

  return (
    <section id="home" className="hero hero-section">
      <div className="hero-text">
        <div className="eyebrow mono">{t("heroEyebrow")}</div>
        <h1>
          {displayedName}
          <span className="cursor">&nbsp;</span>
        </h1>
        <h2>Technical Product Owner</h2>
        <p className={taglineVisible ? "show" : ""}>{t("heroTagline")}</p>
        <div className="stamp-badge mono">T.P.O.</div>
        <div className="scroll-cue">
          <div className="bar" />
          <span>{t("heroScroll")}</span>
        </div>
      </div>
      <Mindmap />
    </section>
  );
}
