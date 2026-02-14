"use client";

import { useEffect, useState } from "react";

interface SearchResult {
  id: string;
  text: string;
}

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    // ONLY search inside article
    const article = document.querySelector("article");
    if (!article) return;

    const headings = Array.from(
      article.querySelectorAll("h1, h2, h3")
    ) as HTMLElement[];

    const matches = headings
      .filter((h) =>
        h.innerText.toLowerCase().includes(query.toLowerCase())
      )
      .map((h) => ({
        id: h.id,
        text: h.innerText,
      }));

    setResults(matches);
  }, [query]);

  return (
    <div className="relative">
      <input
        data-testid="search-input"
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border px-3 py-1 rounded"
      />

      {query && (
        <div
          data-testid="search-results"
          className="absolute bg-white border mt-2 w-64 p-2 rounded shadow"
        >
          {results.length === 0 ? (
            <div data-testid="search-no-results">
              No results found
            </div>
          ) : (
            results.map((r) => (
              <a
                key={r.id}
                href={`#${r.id}`}
                className="block py-1 hover:underline"
              >
                {r.text}
              </a>
            ))
          )}
        </div>
      )}
    </div>
  );
}