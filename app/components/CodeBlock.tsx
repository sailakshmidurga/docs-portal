"use client";

import { useState } from "react";

export default function CodeBlock({ children }: { children: string }) {
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    await navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div data-testid="code-block" className="relative">
      <button
        data-testid="copy-code-button"
        onClick={copyCode}
        className="absolute right-2 top-2 text-sm border px-2 py-1"
      >
        {copied ? "Copied!" : "Copy"}
      </button>

      <pre className="overflow-x-auto p-4 bg-gray-100 dark:bg-gray-800">
        <code>{children}</code>
      </pre>
    </div>
  );
}
