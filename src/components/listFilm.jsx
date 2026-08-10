import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeroFilm from "../assets/img/heroFilm.png";

export function ListFilm() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  
  // 1. STATE UNTUK KATA KUNCI PENCARIAN
  const [searchQuery, setSearchQuery] = useState("");

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const BASE_URL = import.meta.env.VITE_BASE_URL || "https://api.themoviedb.org/3";

  // 2. FUNGSI FETCH YANG MENDUKUNG SEARCH & POPULAR
  const fetchMovies = async (page, query = "") => {
    setIsLoading(true);
    try {
      // Tentukan URL: Jika ada query gunakan search, jika tidak gunakan popular
      let endpoint = "";
      if (query.trim() !== "") {
        endpoint = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=id-ID&query=${encodeURIComponent(query)}&page=${page}`;
      } else {
        endpoint = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=id-ID&page=${page}`;
      }

      const response = await fetch(endpoint);
      const data = await response.json();

      if (data.results) {
        setMovies(data.results);
        setTotalPages(data.total_pages > 500 ? 500 : data.total_pages);
      }
    } catch (error) {
      console.log("Gagal mengambil data film:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // 3. TRIGGER OTOMATIS SAAT PAGE ATAU SEARCH BERUBAH
  useEffect(() => {
    // Beri debounce tipis agar API tidak dipanggil di setiap ketikan huruf secara berlebihan
    const timeoutId = setTimeout(() => {
      fetchMovies(currentPage, searchQuery);
    }, 400);

    return () => clearTimeout(timeoutId);
  }, [currentPage, searchQuery]);

  // Handler saat user mengetik di search bar
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset kembali ke halaman 1 saat mulai mencari
  };

  // Handler Pagination
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full">
      {/* 4. FORM SEARCH BAR */}
      <form onSubmit={(e) => e.preventDefault()} className="mt-30 flex justify-center">
        <div className="relative w-80 md:w-96">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Cari judul film..."
            className="w-full rounded-full border border-white/10 bg-white/10 px-5 py-3 pr-10 text-white placeholder-slate-400 backdrop-blur-md transition-all focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/50"
          />
          {/* Tombol Clear Search (Silang X) jika ada teks */}
          {searchQuery && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setCurrentPage(1);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
            >
              ✕
            </button>
          )}
        </div>
      </form>

      {/* STATUS LOADING */}
      {isLoading ? (
        <div className="flex min-h-[300px] items-center justify-center">
          <p className="animate-pulse text-lg font-bold text-yellow-400">
            {searchQuery ? `Mencari "${searchQuery}"...` : "Sedang Memuat Data Film..."}
          </p>
        </div>
      ) : movies.length === 0 ? (
        /* JIKA HASIL CARI KOSONG */
        <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
          <p className="text-xl text-slate-300">Film "{searchQuery}" tidak ditemukan.</p>
          <button
            onClick={() => setSearchQuery("")}
            className="mt-4 rounded-lg bg-yellow-400 px-4 py-2 font-bold text-slate-950"
          >
            Reset Pencarian
          </button>
        </div>
      ) : (
        <>
          {/* GRID CARD FILM */}
          <div className="mx-auto mt-10 mb-10 grid w-full grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-lg bg-slate-800/80 text-white shadow-lg backdrop-blur-sm transition-all hover:-translate-y-1"
              >
                {/* Poster */}
                <div className="relative aspect-3/4 w-full overflow-hidden rounded-t-lg bg-slate-900">
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : HeroFilm
                    }
                    alt={movie.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />

                  {/* Tombol Detail */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 backdrop-blur-xs transition-opacity duration-300 group-hover:opacity-100">
                    <Link
                      to={`/detail/${movie.id}`}
                      className="flex cursor-pointer items-center gap-2 rounded-full bg-yellow-400 px-4 py-2 text-sm font-bold text-slate-950 shadow-xl transition-transform duration-200 hover:scale-110 active:scale-95"
                    >
                      Detail
                    </Link>
                  </div>
                </div>

                {/* Info Film */}
                <div className="p-3">
                  <h2 className="text-sm font-bold line-clamp-1 group-hover:text-yellow-400">
                    {movie.title}
                  </h2>
                  <p className="mt-1 flex items-center gap-1 text-xs text-yellow-400">
                    <span>⭐</span>{" "}
                    {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"} / 10
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* PAGINATION */}
          {totalPages > 1 && (
            <div className="mt-8 mb-16 flex items-center justify-center gap-4">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="rounded-lg bg-slate-800 px-4 py-2 text-sm font-semibold text-white transition hover:bg-yellow-400 hover:text-slate-950 disabled:cursor-not-allowed disabled:opacity-40"
              >
                ← Prev
              </button>

              <span className="text-sm text-slate-300">
                Halaman <span className="font-bold text-yellow-400">{currentPage}</span> dari {totalPages}
              </span>

              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="rounded-lg bg-slate-800 px-4 py-2 text-sm font-semibold text-white transition hover:bg-yellow-400 hover:text-slate-950 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next →
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}