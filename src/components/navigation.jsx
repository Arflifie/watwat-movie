import { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Logo from "../assets/react.svg";
import ProfilPhoto from "../assets/img/profil-default.jpg";
import Home from "../pages/home";
import Katalog from "../pages/katalog";
import Profil from "../pages/profil";

export default function Navigation() {
  return (
    <>
      {/* DESKTOP NAVIGATION */}

      <div className="bg-slate-900 w-full top-0 left-0 z-50 fixed">
        <div className="mx-auto hidden w-full max-w-7xl items-center justify-between md:flex text-white">
          <img src={Logo} alt="test" width="30px" />
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
          <div>
            <img
              src={ProfilPhoto}
              alt="Foto Profil"
              className="md h-9 w-9 rounded-full bg-white"
            />
          </div>
        </div>
      </div>

      {/* MOBILE NAVIGATION */}

      <div className="fixed top-0 left-0 z-50 mx-auto flex w-full max-w-7xl items-center justify-between bg-slate-900 px-4 py-3 shadow-2xl md:hidden">
        <div>
          <img src={Logo} alt="test" width="30px" className="block" />
        </div>

        <div>
          <img
            src={ProfilPhoto}
            alt="Foto Profil"
            className="md block h-9 w-9 rounded-full bg-white"
          />
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/katalog" element={<Katalog />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
    </>
  );
}
