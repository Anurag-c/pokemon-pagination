import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import PaginationFooter from "./PaginationFooter";
import PokemonList from "./PokemonList";

function PokemonsLimited({ limit, pageLimit }) {
  const { data, isLoading, error } = useFetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const maxPages = Math.ceil(limit / pageLimit);

  const results = data && data.results ? data.results : [];
  const count = results.length;
  const pokemonList = results.sort((a, b) => a.name.localeCompare(b.name));
  const start = page > maxPages ? 0 : (page - 1) * pageLimit + 1;
  const end = page > maxPages ? 0 : page * pageLimit;

  function nextPage() {
    const next = page === maxPages ? page : page + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev = page === 1 ? page : page - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  return (
    <div>
      <PokemonList
        error={error}
        isLoading={isLoading}
        pokemonList={pokemonList.slice(start - 1, end)}
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

export default PokemonsLimited;
