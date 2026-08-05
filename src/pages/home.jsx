import { Bubble } from "../components/bubble/bubble";
import { Bubble2 } from "../components/bubble/bubble2";

export default function Home() {
  return (
    <div className="min-h-screen w-full text-white">
      <Bubble />
      <Bubble2 />
      <section className="w-full bg-slate-800">
        <div className="mx-auto min-h-dvh max-w-7xl">
          <div className="flex min-h-screen flex-col items-center justify-center md:flex-row md:justify-between">
            <div>
              <h1 className="flex flex-col gap-2 text-center md:text-left md:text-2xl">
                Welcome
                <span className="text-2xl md:text-6xl">
                  WatWat{" "}
                  <span className="font-bold text-yellow-400">MOVIE</span>
                </span>
              </h1>
              <p className="mt-4">Search your favorite movie with enjoyable</p>
            </div>

            <img src={""} alt="ilustrasi" />
          </div>
        </div>
      </section>

      <section className="w-full bg-gray-400">
        <div className="mx-auto min-h-dvh max-w-7xl">test</div>
      </section>
    </div>
  );
}
