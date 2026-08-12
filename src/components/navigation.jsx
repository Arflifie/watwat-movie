import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/react.svg";
import ProfilPhoto from "../assets/img/profil-default.jpg";
import Home from "../pages/home";
import Katalog from "../pages/katalog";
import Profil from "../pages/profil";
import DetailFilm from "../pages/detailFilm";

export default function Navigation() {
  const [Show, setShow] = useState(false);

  const buttonToggle = () => setShow((prev) => !prev);

  const closeMenu = () => setShow(false);

  return (
    <>
      {/* DESKTOP NAVIGATION */}

      <header className="fixed top-0 left-0 z-50 w-full bg-slate-900">
        <div className="mx-auto hidden w-full max-w-7xl items-center justify-between text-white md:flex">
          <p className="text-md text-white">
            WatWat {""}
            <span className="bg-linear-to-r from-yellow-400 to-amber-500 bg-clip-text font-bold text-transparent">
              MOVIE
            </span>
          </p>
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
      </header>

      {/* MOBILE NAVIGATION */}

      <header className="fixed top-0 left-0 z-50 w-full bg-slate-900 md:hidden">
        {/* 2. BARIS UTAMA (Beri z-30 agar SELALU di paling depan) */}
        <div className="relative z-30 flex w-full items-center justify-between bg-slate-900 px-4 py-3 shadow-md">
          <p className="text-md text-white">
            WatWat {""}
            <span className="bg-linear-to-r from-yellow-400 to-amber-500 bg-clip-text font-bold text-transparent">
              MOVIE
            </span>
          </p>

          <button
            onClick={buttonToggle}
            className="cursor-pointer transition-all duration-300 focus:outline-none active:scale-90"
          >
            <i
              className={`${Show ? "fa-solid fa-xmark text-xl" : "fa-solid fa-bars-staggered text-xl"} text-white`}
            ></i>
          </button>
        </div>

        {/* 3. MENU DROPDOWN (Gunakan z-20 agar PASTI di bawah baris utama) */}
        <div
          className={`absolute top-full left-0 z-20 w-full bg-slate-900/95 px-4 py-6 shadow-2xl backdrop-blur-md transition-all duration-300 ease-in-out ${
            Show
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-full opacity-0"
          }`}
        >
          <nav className="flex flex-col items-center justify-center gap-4 py-3 text-white">
            <Link
              to="/"
              onClick={buttonToggle}
              className="w-full rounded-md py-2 text-center transition-all hover:bg-white/10 hover:text-yellow-400"
            >
              Home
            </Link>
            <Link
              to="/katalog"
              onClick={buttonToggle}
              className="w-full rounded-md py-2 text-center transition-all hover:bg-white/10 hover:text-yellow-400"
            >
              Katalog
            </Link>
            <Link
              to="/profil"
              onClick={buttonToggle}
              className="w-full rounded-md py-2 text-center transition-all hover:bg-white/10 hover:text-yellow-400"
            >
              Profil
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
