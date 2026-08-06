import {Footer} from "../components/footer";
import { Bubble } from "../components/bubble/bubble";
import { Bubble2 } from "../components/bubble/bubble2";
import ListMovie from "../assets/img/listFilm.png";

export default function Home() {
  return (
    <div className="min-h-screen w-full text-white">
      <section className="relative w-full overflow-hidden bg-linear-to-b from-slate-900 to-slate-700 text-white">
        {/* 1. Ornamen Bubble di background */}
        {/* <Bubble />
        <Bubble2 /> */}

        {/* 2. Container Utama dengan z-10 agar selalu di atas Bubble */}
        <div className="relative z-10 mx-auto min-h-screen max-w-7xl px-6">
          <div className="flex min-h-screen flex-col items-center justify-center gap-8 md:flex-row md:justify-between">
            {/* Teks Hero */}
            <div className="text-center md:text-left">
              <h1 className="flex flex-col gap-2 text-xl md:text-2xl">
                Welcome
                <span className="text-3xl font-extrabold tracking-wide md:text-6xl">
                  WatWat{" "}
                  <span className="bg-linear-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
                    MOVIE
                  </span>
                </span>
              </h1>
              <p className="mt-4 text-slate-300">
                Search your favorite movie with enjoyable
              </p>
            </div>

            {/* Ilustrasi Gambar */}
            <div className="w-full max-w-md">
              <img
                src={""}
                alt="Movie Illustration"
                className="rotate h-auto w-full object-cover shadow-2xl shadow-yellow-500/10"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto min-h-dvh max-w-7xl">
          <div>
            <ul>
              <li className="text-2xl text-slate-800">Bonbon</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
