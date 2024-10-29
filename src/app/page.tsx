"use client"
import { useTheme } from "@/context/theme";
import Card from "../components/Card";
import ThemeButton from "../components/ThemeButton";
import { useEffect } from "react";

export default function Home() {
  const { themeMode } = useTheme()

  useEffect(() => {
    document.querySelector('html')?.classList.remove("light", "dark")
    document.querySelector('html')?.classList.add(themeMode)
    console.log("Current theme:", themeMode);
  }, [themeMode])

  return (
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeButton />
        </div>

        <div className="w-full max-w-sm mx-auto">
          <Card />
        </div>
      </div>
    </div>
  );
}
