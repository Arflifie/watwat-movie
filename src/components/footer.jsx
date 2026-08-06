export function Footer() {
  return (
    <div className="h-80 w-full bg-slate-800">
      <div className="mx-auto w-full max-w-7xl px-6 py-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <div>
            <p className="flex flex-col gap-2">
              <span className="text-xl font-extrabold tracking-wide md:text-3xl">
                WatWat{" "}
                <span className="bg-linear-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
                  MOVIE
                </span>
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-2xl text-slate-500">Movie</h3>
            <ul className="flex flex-col gap-2 text-slate-300">
              <li>Film Favorite</li>
              <li>Rekomendasi Film</li>
              <li>Film Terbaru</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl text-slate-500">Services</h3>
            <ul className="flex flex-col gap-2 ">
              <li>Listing Film</li>
              <li>Rating</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl text-slate-500">Contact</h3>
            <ul className="flex flex-col gap-2">
              <li>Contact</li>
              <li>About</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
