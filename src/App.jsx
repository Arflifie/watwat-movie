import Navigation from "./components/navigation";
import {Routes, Route} from 'react-router-dom';

export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/katalog" element={<Katalog />} />
        <Route path="/detail/:id" element={<DetailFilm />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
    </>
  );
}
