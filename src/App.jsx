import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pokemons from "./components/Pokemons";
import PokemonsLimited from "./components/PokemonsLimited";

export default function App() {
  return (
    <div>
      <header className="text-center p-4 flex flex-col items-center">
        <img src="logo.png" alt="Pokémon" className="w-48 my-2" />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pokemons limit={10} />} />
          <Route path="/limited" element={<PokemonsLimited limit={151} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
