import { usePagination } from "../hooks/usePagination";
import PaginationFooter from "./PaginationFooter";

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
      <div className="flex flex-col items-center justify-center">
        {error && <p className="text-red-500 text-center">Error: {error}</p>}

        {!error && isLoading && (
          <p className="text-gray-400 text-center">Loading...</p>
        )}

        {!error && !isLoading && pokemonList?.length === 0 && (
          <p className="text-gray-500 text-center">No Pokemon found.</p>
        )}

        {!error && !isLoading && pokemonList?.length > 0 && (
          <ul className="grid grid-cols-1 md:grid-cols-2">
            {pokemonList.map((pokemon) => (
              <li
                key={pokemon.name}
                className="uppercase tracking-widest text-yellow-500 font-mono font-semibold bg-gray-800 rounded-lg shadow-lg m-4 p-4 flex justify-between items-center"
              >
                <span>{pokemon.name}</span>
                <a
                  href={pokemon.url}
                  className="ml-4 text-cyan-300 hover:text-cyan-500 transition-colors duration-200 py-1 px-3 bg-gray-700 hover:bg-gray-700 rounded"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

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
