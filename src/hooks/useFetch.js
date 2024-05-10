import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchData() {
        setIsLoading(true);
        setError("");
        try {
          const response = await fetch(url, { signal: controller.signal });
          if (!response.ok) {
            throw new Error("Something went wrong with fetching pokemons");
          }
          const data = await response.json();
          setData(data);
          setError("");
        } catch (err) {
          if (err.name !== "AbortError") {
            console.log(err.message);
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      fetchData();

      return function () {
        controller.abort();
      };
    },
    [url]
  );

  return { data, isLoading, error };
}
