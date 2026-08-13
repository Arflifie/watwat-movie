import Navigation from "./components/navigation";
import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/home";
import Katalog from "../src/pages/katalog";
import Profil from "../src/pages/profil";
import DetailFilm from "../src/pages/detailFilm";

export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/katalog" element={<Katalog />} />
        <Route path="/detail/:id" element={<DetailFilm />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
    </>
  );
}
