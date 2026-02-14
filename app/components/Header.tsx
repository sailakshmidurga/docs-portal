"use client";

import { usePathname, useRouter } from "next/navigation";
import VersionSelector from "./VersionSelector";
import ThemeToggle from "./ThemeToggle";
import Search from "./Search";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const isDocsPage = pathname.includes("/docs/");

  const changeLang = (lang: string) => {
    const parts = pathname.split("/");

    // If not on docs page, redirect to default docs route
    if (parts.length < 5) {
      router.push(`/${lang}/docs/v1/introduction`);
      return;
    }

    parts[1] = lang; // change locale
    router.push(parts.join("/"));
  };

  return (
    <header className="h-14 border-b flex items-center px-4 bg-white dark:bg-gray-900 dark:text-white">
      {/* Logo / Title */}
      <h1
        className="font-bold cursor-pointer"
        onClick={() => router.push("/")}
      >
        Docs Portal
      </h1>

      {/* Right Controls */}
      {isDocsPage && (
        <div className="ml-auto flex gap-3 items-center">
          {/* Search */}
          <Search />

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Language Switcher */}
          <select
            data-testid="language-switcher"
            onChange={(e) => changeLang(e.target.value)}
            className="border px-2 py-1 rounded dark:bg-gray-800 dark:border-gray-600"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
          </select>

          {/* Version Selector */}
          <VersionSelector />
        </div>
      )}
    </header>
  );
}