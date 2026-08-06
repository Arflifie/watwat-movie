import { Link, Route, Routes } from "react-router-dom";
import Logo from '../assets/react.svg'
import Home from "../pages/home";
import Katalog from "../pages/katalog";
import Profil from "../pages/profil";

export default function Navigation() {
  return (
    <div className="bg-slate-800 text-white shadow-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <img src={Logo} alt="test" width="30px"/>
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
        
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/katalog" element={<Katalog />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
    </div>
  );
}
