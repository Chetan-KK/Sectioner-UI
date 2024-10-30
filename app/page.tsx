"use client";

import Button from "@/components/sectioner/ui/button";
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
      <Button onClick={toggleTheme}>Toggle</Button>
      <Button href={"/docs/introduction"} variant="outline">
        docs
      </Button>
    </main>
  );
}
