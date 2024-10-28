"use client";

import { useTheme } from "next-themes";
import Link from "next/link";

export default function Home() {
  const { setTheme, resolvedTheme } = useTheme();

  function toggleTheme() {
    if (resolvedTheme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={toggleTheme}>Toggle</button>
      <Link href={"/docs/introduction"}>docs</Link>
    </main>
  );
}
