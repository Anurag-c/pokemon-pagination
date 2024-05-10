import { useSearchParams } from "react-router-dom";
import { useFetch } from "./useFetch";

export function usePagination(apiUrl, limit) {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const url = `${apiUrl}?limit=${limit}&offset=${(page - 1) * limit}`;
  const { data, isLoading, error } = useFetch(url);

  function nextPage() {
    const next = data.next !== null ? page + 1 : page;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev = page === 1 ? page : page - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  return { data, isLoading, error, page, nextPage, prevPage };
}
