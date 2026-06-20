import { useLanguage } from "../useLanguage";
import Noti from "../../assets/noti.png";

const links = [
  { href: "#home", key: "navHome" },
  { href: "#about", key: "navAbout" },
  { href: "#frontend", key: "navExperience" },
  { href: "#projects", key: "navProjects" },
  { href: "#contact", key: "navContact" },
];

export default function Nav({ onOpenPopup }) {
  const { lang, setLang, t } = useLanguage();

  return (
    <nav>
      <div className="logo">
        HL<span>.</span>
      </div>
      <ul className="nav-links">
        {links.map(({ href, key }) => (
          <li key={key}>
            <a href={href}>{t(key)}</a>
          </li>
        ))}
      </ul>

      <div className="nav-buttons-group">
        <a onClick={onOpenPopup}>
          <img src={Noti} />
        </a>
        <div className="lang-toggle">
          <button
            type="button"
            className={lang === 0 ? "active" : ""}
            onClick={() => setLang(0)}
          >
            EN
          </button>
          <button
            type="button"
            className={lang === 1 ? "active" : ""}
            onClick={() => setLang(1)}
          >
            FR
          </button>
        </div>
      </div>
    </nav>
  );
}
