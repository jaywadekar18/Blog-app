"use client";
import React, { useContext, createContext, useEffect, useState } from "react";

const ThemeContext = createContext({} as c);

type Params = {
  children: React.ReactNode;
};
type c = {
  theme: string;
  setTheme: any;
};
export function ThemeProvider({ children }: Params) {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
}

export function Context() {
  return useContext(ThemeContext);
}
