import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import React from "react";
import classes from "./header.module.css";
import ThemeToggler from "../themeToggler/themeToggler";
import AuthLinks from "../authLinks/authLinks";
function Header() {
  return (
    <div>
      <ul className={classes.navLinks}>
        <li>
          <ThemeToggler />
        </li>
        <li>
          <Link href={ROUTES.HOME}>Home</Link>
        </li>
        <li>
          <Link href={ROUTES.BLOGS}>Blogs</Link>
        </li>
        <AuthLinks />
      </ul>
    </div>
  );
}

export default Header;
