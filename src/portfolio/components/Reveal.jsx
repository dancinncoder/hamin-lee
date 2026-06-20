import { useReveal } from "../hooks/useReveal";

export default function Reveal({ as: Tag = "div", className = "", children }) {
  const { ref, visible } = useReveal();

  return (
    <Tag ref={ref} className={`reveal${visible ? " in" : ""} ${className}`.trim()}>
      {children}
    </Tag>
  );
}
