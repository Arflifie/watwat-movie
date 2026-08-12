// src/pages/DetailFilm.jsx
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Footer } from "../components/footer";

export default function DetailFilm() {
  // 1. Ambil ID film dari URL browser (misal: /detail/550 -> id = 550)
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const BASE_URL =
    import.meta.env.VITE_BASE_URL || "https://api.themoviedb.org/3";

  // 2. Fetch data detail spesifik berdasarkan ID
  useEffect(() => {
    const fetchDetail = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=id-ID`,
        );
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Gagal mengambil detail film:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDetail();
    window.scrollTo(0, 0); // Scroll otomatis ke paling atas saat halaman dibuka
  }, [id, API_KEY, BASE_URL]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-900 text-yellow-400">
        <p className="animate-pulse text-xl font-bold">Memuat Detail Film...</p>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-white">
        <p className="text-xl">Film tidak ditemukan.</p>
        <Link
          to="/katalog"
          className="mt-4 rounded-lg bg-yellow-400 px-4 py-2 font-bold text-slate-950"
        >
          Kembali ke Katalog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-slate-900 text-white">
      {/* 1. HERO BACKDROP BANNER */}
      <div className="relative h-100 w-full md:h-125">
        <img
          src={
            movie.backdrop_path
              ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
              : `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          }
          alt={movie.title}
          className="h-full w-full object-cover opacity-30"
        />
        {/* Gradient Overlay Gelap */}
        <div className="bg-linier-to-t absolute inset-0 from-slate-900 via-slate-900/60 to-transparent" />

        {/* Tombol Back */}
        <div className="absolute top-6 left-6 z-20 mt-20">
          <Link
            to="/katalog"
            className="flex items-center gap-2 rounded-full bg-black/50 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-yellow-400 hover:text-slate-950"
          >
            Kembali
          </Link>
        </div>
      </div>

      {/* 2. KONTEN DETAIL FILM */}
      <div className="relative z-10 mx-auto -mt-40 max-w-6xl px-6 pb-20">
        <div className="flex flex-col gap-8 md:flex-row">
          {/* Poster Kiri */}
          <div className="w-full shrink-0 md:w-72">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full rounded-2xl shadow-2xl ring-1 ring-white/10"
            />
          </div>

          {/* Info Kanan */}
          <div className="flex flex-1 flex-col justify-end">
            <h1 className="text-3xl font-extrabold text-white md:text-5xl">
              {movie.title}
            </h1>

            {movie.tagline && (
              <p className="mt-2 text-lg text-slate-400 italic">
                "{movie.tagline}"
              </p>
            )}

            {/* Info Badge (Rating, Tahun Rilis, Durasi) */}
            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
              <span className="flex items-center gap-1 rounded-md bg-yellow-400/20 px-3 py-1 font-bold text-yellow-400">
                ⭐ {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}{" "}
                / 10
              </span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-300">
                {movie.release_date?.split("-")[0]}
              </span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-300">{movie.runtime} Menit</span>
            </div>

            {/* List Genre */}
            <div className="mt-4 flex flex-wrap gap-2">
              {movie.genres?.map((genre) => (
                <span
                  key={genre.id}
                  className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300 ring-1 ring-white/10"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            {/* Sinopsis / Overview */}
            <div className="mt-6">
              <h2 className="text-xl font-bold text-yellow-400">Sinopsis</h2>
              <p className="mt-2 leading-relaxed text-slate-300">
                {movie.overview ||
                  "Belum ada sinopsis berbahasa Indonesia untuk film ini."}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
