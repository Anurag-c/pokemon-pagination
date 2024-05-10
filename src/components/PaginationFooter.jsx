function PaginationFooter({ start, end, count, prevPage, nextPage }) {
  return (
    <div className="flex flex-col items-center m-4">
      <span className="text-sm text-gray-700 dark:text-gray-400">
        Showing{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {start}
        </span>{" "}
        to{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {end}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {count}
        </span>{" "}
        Entries
      </span>
      <div className="inline-flex mt-2 xs:mt-0 ">
        <button
          onClick={prevPage}
          disabled={start === 1}
          className="disabled:opacity-50 flex items-center justify-center px-3 h-8 text-md font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          &larr; Prev
        </button>
        <button
          onClick={nextPage}
          disabled={end >= count}
          className="disabled:opacity-50 flex items-center justify-center px-3 h-8 text-md font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
}

export default PaginationFooter;
