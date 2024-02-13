"use client";
import { Context } from "@/context/themeContext";
import React from "react";
import Image from "next/image";
import classes from "./themeToggler.module.css";
function ThemeToggler() {
  const { theme, setTheme } = Context();
  function handleThemeChange() {
    setTheme((th: string) => (th === "dark" ? "light" : "dark"));
  }
  return (
    <div
      className={classes.toggleContainer}
      onClick={handleThemeChange}
      style={
        theme === "dark"
          ? { backgroundColor: "white" }
          : { backgroundColor: "#0f172a" }
      }
    >
      <Image src="/moon.png" alt="" width={14} height={14} />
      <div
        className={classes.ball}
        style={
          theme === "dark"
            ? { left: 1, background: "#0f172a" }
            : { right: 1, background: "white" }
        }
      ></div>
      <Image src="/sun.png" alt="" width={14} height={14} />
    </div>
  );
}

export default ThemeToggler;
