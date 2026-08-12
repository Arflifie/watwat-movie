import { Footer } from "../components/footer";
import { ListFilm } from "../components/listFilm";

export default function Katalog() {
  return (
    <div className="min-h-screen w-full text-white">
      <section className="relative w-full overflow-hidden bg-linear-to-b from-slate-900 to-slate-700 text-white"> 
        <div className="mx-auto min-h-screen max-w-7xl px-6">
         <ListFilm />
        </div>
      </section>
     
      <Footer />
    </div>
  );
}
