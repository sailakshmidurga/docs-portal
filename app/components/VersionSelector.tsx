"use client";

import { usePathname, useRouter } from "next/navigation";

export default function VersionSelector() {
  const pathname = usePathname();
  const router = useRouter();

  // Show only on docs pages
  if (!pathname.includes("/docs/")) {
    return null;
  }

  const changeVersion = (version: string) => {
    const parts = pathname.split("/");
    parts[3] = version; // /en/docs/v1/introduction
    router.push(parts.join("/"));
  };

  return (
    <select
      data-testid="version-selector"
      onChange={(e) => changeVersion(e.target.value)}
      className="border px-2 py-1"
    >
      <option data-testid="version-option-v1" value="v1">v1</option>
      <option data-testid="version-option-v2" value="v2">v2</option>
      <option data-testid="version-option-v3" value="v3">v3</option>
    </select>
  );
}