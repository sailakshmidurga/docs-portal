"use client";

import { useEffect, useState } from "react";

export default function TableOfContents() {
  const [headings, setHeadings] = useState<
    { id: string; text: string }[]
  >([]);

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll("article h2")
    );

    const newHeadings = elements.map((el, index) => {
      if (!el.id) {
        el.id = `heading-${index}`;
      }

      return {
        id: el.id,
        text: el.textContent || "",
      };
    });

    setHeadings(newHeadings);
  }, []);

  if (headings.length === 0) return null;

  return (
    <aside className="w-60 border-l pl-4">
      <h3 className="font-bold mb-2">On this page</h3>
      <ul className="space-y-2">
        {headings.map((heading, index) => (
          <li key={heading.id + index}>
            <a
              href={`#${heading.id}`}
              className="text-blue-600 hover:underline"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
