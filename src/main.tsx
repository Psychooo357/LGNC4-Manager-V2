
import { createRoot } from "react-dom/client";

import "./styles/global.css";

import App from "./App";
import { LeagueProvider } from "./context/LeagueContext";

createRoot(document.getElementById("root")!).render(
  <LeagueProvider>
    <App />
  </LeagueProvider>
);