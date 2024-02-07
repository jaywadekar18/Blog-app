"use client";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import React from "react";
import classes from "./header.module.css";
import ThemeToggler from "../themeToggler/themeToggler";
import AuthLinks from "../authLinks/authLinks";
import { usePathname } from "next/navigation";
import { Lobster } from "next/font/google";
const lobster = Lobster({ weight: ["400"], subsets: ["vietnamese"] });
function Header() {
  const path = usePathname();
  return (
    <div className={classes.header}>
      <span className={classes.logo} style={{ fontFamily: lobster.className }}>
        EchoBlog
      </span>
      <ul className={classes.navLinks}>
        <li>
          <ThemeToggler />
        </li>
        <li>
          <Link
            className={path === ROUTES.HOME ? "activeNavlink" : undefined}
            href={ROUTES.HOME}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={path === ROUTES.BLOGS ? "activeNavlink" : undefined}
            href={ROUTES.BLOGS}
          >
            Blogs
          </Link>
        </li>
        <AuthLinks />
      </ul>
    </div>
  );
}

export default Header;
