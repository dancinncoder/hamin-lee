import { useMemo, useState } from "react";
import { translations } from "./translations";
import { LanguageContext } from "./languageContext";

export default function LanguageProvider({ children }) {
  const [lang, setLang] = useState(0);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: (key) => translations[key]?.[lang] ?? "",
    }),
    [lang],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}
