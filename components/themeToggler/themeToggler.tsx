"use client";
import { Context } from "@/context/themeContext";
import React from "react";

function ThemeToggler() {
  const { theme, setTheme } = Context();
  function handleThemeChange() {
    setTheme((th: string) => (th === "dark" ? "light" : "dark"));
  }
  return (
    <div className={theme}>
      {theme}
      <button onClick={handleThemeChange}>{theme}</button>
    </div>
  );
}

export default ThemeToggler;
