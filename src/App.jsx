import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pokemons from "./components/Pokemons";

export default function App() {
  return (
    <div>
      <header className="text-center p-4 flex flex-col items-center">
        <img src="logo.png" alt="Pokémon" className="w-48 my-2" />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pokemons limit={10} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
