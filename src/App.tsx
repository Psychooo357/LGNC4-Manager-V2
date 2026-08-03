import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Ranking from "./pages/Ranking";
import Players from "./pages/Players";
import Fixtures from "./pages/Fixtures";
import Stats from "./pages/Stats";
import Admin from "./pages/Admin";
import MatchPage from "./pages/MatchPage";



export default function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classement" element={<Ranking />} />
        <Route path="/joueurs" element={<Players />} />
        <Route path="/journees" element={<Fixtures />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/match/:id" element={<MatchPage />} />
      </Routes>
    </BrowserRouter>
  );
}