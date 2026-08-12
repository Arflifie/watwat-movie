import { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import HeroFilm from "../assets/img/heroFilm.png";

export function ListFilm() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;;
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const fetchMovies = async (page) => {
    setIsLoading(true);
    try {
      const response = await fetch("BASE_URL");
      const data = await response.json();

      if (data.results) {
        setMovies(data.results);
        setTotalPages(data.total_pages > 500 ? 500 : data.total_pages);
      }
    } catch (error) {
      console.log("Gagal mengambil data film", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(currentPage);
  }, [currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" }); // Auto-scroll ke atas saat ganti page
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  return (
    <>
      <form action="#">
        <div className="mt-30 flex items-center justify-center">
          <label htmlFor="Search"></label>
          <input
            type="text"
            placeholder="Cari Film...."
            className="w-100 rounded-4xl bg-white/20 px-3 py-2 text-white focus:outline-none"
          />
        </div>
      </form>

      {/* CARD FILM */}
      <div className="mx-auto mt-15 mb-15 grid w-full grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6">
        {/* 1 */}
        <div className="relative h-auto rounded-lg bg-white/20">
          <div className="group relative aspect-3/4 overflow-hidden rounded-t-lg">
            <img
              src={HeroFilm}
              alt="cover-movie"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 backdrop-blur-xs transition-opacity duration-300 group-hover:opacity-100">
              <button className="flex cursor-pointer items-center gap-2 rounded-full bg-yellow-400 px-5 py-2.5 font-bold text-slate-950 shadow-xl transition-transform duration-200 hover:scale-110 active:scale-95">
                Detail
              </button>
            </div>
          </div>
          <div className="px-2 py-2">
            <h2 className="text-lg">Judul Film</h2>
            <p className="mt-2 text-sm">Rating:</p>
          </div>
        </div>
        {/* 2 */}
        <div className="relative h-auto rounded-lg bg-white/20">
          <div className="group relative aspect-3/4 overflow-hidden rounded-t-lg">
            <img
              src={HeroFilm}
              alt="cover-movie"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 backdrop-blur-xs transition-opacity duration-300 group-hover:opacity-100">
              <button className="flex cursor-pointer items-center gap-2 rounded-full bg-yellow-400 px-5 py-2.5 font-bold text-slate-950 shadow-xl transition-transform duration-200 hover:scale-110 active:scale-95">
                Detail
              </button>
            </div>
          </div>
          <div className="px-2 py-2">
            <h2 className="text-lg">Judul Film</h2>
            <p className="mt-2 text-sm">Rating:</p>
          </div>
        </div>
        {/* 3 */}
        <div className="relative h-auto rounded-lg bg-white/20">
          <div className="group relative aspect-3/4 overflow-hidden rounded-t-lg">
            <img
              src={HeroFilm}
              alt="cover-movie"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 backdrop-blur-xs transition-opacity duration-300 group-hover:opacity-100">
              <button className="flex cursor-pointer items-center gap-2 rounded-full bg-yellow-400 px-5 py-2.5 font-bold text-slate-950 shadow-xl transition-transform duration-200 hover:scale-110 active:scale-95">
                Detail
              </button>
            </div>
          </div>
          <div className="px-2 py-2">
            <h2 className="text-lg">Judul Film</h2>
            <p className="mt-2 text-sm">Rating:</p>
          </div>
        </div>
        {/* 4 */}
        <div className="relative h-auto rounded-lg bg-white/20">
          <div className="group relative aspect-3/4 overflow-hidden rounded-t-lg">
            <img
              src={HeroFilm}
              alt="cover-movie"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 backdrop-blur-xs transition-opacity duration-300 group-hover:opacity-100">
              <button className="flex cursor-pointer items-center gap-2 rounded-full bg-yellow-400 px-5 py-2.5 font-bold text-slate-950 shadow-xl transition-transform duration-200 hover:scale-110 active:scale-95">
                Detail
              </button>
            </div>
          </div>
          <div className="px-2 py-2">
            <h2 className="text-lg">Judul Film</h2>
            <p className="mt-2 text-sm">Rating:</p>
          </div>
        </div>
        {/* 5 */}
        <div className="relative h-auto rounded-lg bg-white/20">
          <div className="group relative aspect-3/4 overflow-hidden rounded-t-lg">
            <img
              src={HeroFilm}
              alt="cover-movie"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 backdrop-blur-xs transition-opacity duration-300 group-hover:opacity-100">
              <button className="flex cursor-pointer items-center gap-2 rounded-full bg-yellow-400 px-5 py-2.5 font-bold text-slate-950 shadow-xl transition-transform duration-200 hover:scale-110 active:scale-95">
                Detail
              </button>
            </div>
          </div>
          <div className="px-2 py-2">
            <h2 className="text-lg">Judul Film</h2>
            <p className="mt-2 text-sm">Rating:</p>
          </div>
        </div>
        {/* 6 */}
        <div className="relative h-auto rounded-lg bg-white/20">
          <div className="group relative aspect-3/4 overflow-hidden rounded-t-lg">
            <img
              src={HeroFilm}
              alt="cover-movie"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 backdrop-blur-xs transition-opacity duration-300 group-hover:opacity-100">
              <button className="flex cursor-pointer items-center gap-2 rounded-full bg-yellow-400 px-5 py-2.5 font-bold text-slate-950 shadow-xl transition-transform duration-200 hover:scale-110 active:scale-95">
                Detail
              </button>
            </div>
          </div>
          <div className="px-2 py-2">
            <h2 className="text-lg">Judul Film</h2>
            <p className="mt-2 text-sm">Rating:</p>
          </div>
        </div>
        {/* 7 */}
        <div className="relative h-auto rounded-lg bg-white/20">
          <div className="group relative aspect-3/4 overflow-hidden rounded-t-lg">
            <img
              src={HeroFilm}
              alt="cover-movie"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 backdrop-blur-xs transition-opacity duration-300 group-hover:opacity-100">
              <button className="flex cursor-pointer items-center gap-2 rounded-full bg-yellow-400 px-5 py-2.5 font-bold text-slate-950 shadow-xl transition-transform duration-200 hover:scale-110 active:scale-95">
                Detail
              </button>
            </div>
          </div>
          <div className="px-2 py-2">
            <h2 className="text-lg">Judul Film</h2>
            <p className="mt-2 text-sm">Rating:</p>
          </div>
        </div>
        {/* closing Card */}
      </div>
    </>
  );
}
