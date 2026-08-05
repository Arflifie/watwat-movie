import { Link, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Katalog from "../pages/katalog";
import Profil from "../pages/profil";

export default function Navigation() {
  return (
    <div className="text-white bg-slate-800">
      <nav className="flex items-center justify-center gap-10 py-3">
        <Link
          to="/"
          className="active:shadow-2 rounded-md px-4 py-1 transition-all duration-100 hover:bg-gray-50/10 active:scale-95"
        >
          Home
        </Link>
        <Link
          to="/katalog"
          className="active:shadow-2 rounded-md px-4 py-1 transition-all duration-100 hover:bg-gray-50/10 active:scale-95"
        >
          Katalog
        </Link>
        <Link
          to="/profil"
          className="active:shadow-2 rounded-md px-4 py-1 transition-all duration-100 hover:bg-gray-50/10 active:scale-95"
        >
          Profil
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/katalog" element={<Katalog />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
    </div>
  );
}
