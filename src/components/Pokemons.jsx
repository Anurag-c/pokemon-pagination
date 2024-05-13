import { usePagination } from "../hooks/usePagination";
import PaginationFooter from "./PaginationFooter";
import PokemonList from "./PokemonList";

function Pokemons({ limit }) {
  const { data, isLoading, error, page, nextPage, prevPage } = usePagination(
    "https://pokeapi.co/api/v2/pokemon",
    limit
  );

  // Derived state
  const results = data && data.results ? data.results : [];
  const count = data && data.count ? data.count : 0;
  const pokemonList = results.sort((a, b) => a.name.localeCompare(b.name));
  const start = results.length === 0 ? 0 : (page - 1) * limit + 1;
  const end = results.length === 0 ? 0 : page * limit;

  return (
    <div>
      <PokemonList
        error={error}
        isLoading={isLoading}
        pokemonList={pokemonList}
      />

      {!error && (
        <PaginationFooter
          start={start}
          end={end}
          count={count}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      )}
    </div>
  );
}

export default Pokemons;
