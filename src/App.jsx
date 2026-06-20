import { useState } from "react";
import Portfolio from "./portfolio/Portfolio";

function App() {
  const [popupBoolean, setPopupBoolean] = useState(false);
  return (
    <Portfolio popupBoolean={popupBoolean} setPopupBoolean={setPopupBoolean} />
  );
}

export default App;
