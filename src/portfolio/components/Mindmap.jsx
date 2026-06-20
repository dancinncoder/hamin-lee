import { useState } from "react";
import { useLanguage } from "../useLanguage";

const nodes = [
  {
    target: "frontend",
    cx: 130,
    cy: 120,
    r: 48,
    lines: [
      { key: "nodeFrontendL1", y: 115 },
      { key: "nodeFrontendL2", y: 129 },
    ],
  },
  {
    target: "marketing",
    cx: 350,
    cy: 120,
    r: 48,
    lines: [
      { key: "nodeMarketingL1", y: 115 },
      { key: "nodeMarketingL2", y: 129 },
    ],
  },
  {
    target: "projects",
    cx: 240,
    cy: 390,
    r: 48,
    lines: [
      { key: "nodeProjectsL1", y: 385 },
      { key: "nodeProjectsL2", y: 399 },
    ],
  },
];

function scrollToSection(id) {
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Mindmap() {
  const { t } = useLanguage();
  const [centerHovered, setCenterHovered] = useState(false);

  return (
    <div className="mindmap-wrap">
      <svg viewBox="0 0 480 480">
        <g>
          <path className="mm-line l1" d="M240,240 L130,120" />
          <path className="mm-line l2" d="M240,240 L350,120" />
          <path className="mm-line l3" d="M240,240 L240,390" />
        </g>

        {nodes.map(({ target, cx, cy, r, lines }) => (
          <g
            key={target}
            className="mm-node"
            role="button"
            tabIndex={0}
            onClick={() => scrollToSection(target)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                scrollToSection(target);
              }
            }}
          >
            <circle cx={cx} cy={cy} r={r} />
            {lines.map(({ key, y }) => (
              <text
                key={key}
                x={cx}
                y={y}
                textAnchor="middle"
                className="mm-label"
              >
                {t(key)}
              </text>
            ))}
          </g>
        ))}

        <g
          className="mm-center-wrap"
          onMouseEnter={() => setCenterHovered(true)}
          onMouseLeave={() => setCenterHovered(false)}
        >
          <g
            className={`mm-satellite-lines${centerHovered ? " revealed" : ""}`}
          >
            <path className="mm-satellite-line left" d="M240,240 L138,240" />
            <path className="mm-satellite-line right" d="M240,240 L343,240" />
            <path className="mm-satellite-line motis" d="M392,240 L392,341" />
          </g>

          <g
            className={`mm-satellite mm-satellite-left${
              centerHovered ? " revealed" : ""
            }`}
          >
            <circle cx="100" cy="240" r="38" />
            <text x="100" y="236" textAnchor="middle" className="mm-label">
              {t("mindmapHidden1")}
            </text>
            <text x="100" y="250" textAnchor="middle" className="mm-label">
              {t("mindmapHidden2")}
            </text>
          </g>

          <g
            className={`mm-satellite mm-satellite-right${
              centerHovered ? " revealed" : ""
            }`}
          >
            <circle cx="392" cy="240" r="49" />
            <text x="392" y="244" textAnchor="middle" className="mm-label">
              {t("mindmapHidden3")}
            </text>
          </g>

          <g
            className={`mm-satellite mm-satellite-motis${
              centerHovered ? " revealed" : ""
            }`}
          >
            <circle cx="392" cy="371" r="55" />
            <text x="392" y="360" textAnchor="middle" className="mm-label">
              {t("mindmapHidden4")}
            </text>
            <text x="392" y="374" textAnchor="middle" className="mm-label">
              {t("mindmapHidden5")}
            </text>
            <text x="392" y="388" textAnchor="middle" className="mm-label">
              {t("mindmapHidden6")}
            </text>
          </g>

          <g className="mm-node mm-center">
            <circle cx="240" cy="240" r="52" />
            <text x="240" y="243" textAnchor="middle" className="mm-label">
              HAMIN LEE
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
}
