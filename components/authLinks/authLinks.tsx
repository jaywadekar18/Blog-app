"use client";

import { ROUTES } from "@/constants/routes";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function AuthLinks() {
  const { update, data, status } = useSession();
  const path = usePathname();
  return (
    <>
      {status === "authenticated" ? (
        <>
          <li>
            <Link
              className={
                path === ROUTES.CREATENEWBLOG ? "activeNavlink" : undefined
              }
              href={ROUTES.CREATENEWBLOG}
            >
              Write A New blog
            </Link>
          </li>
          <li>
            <button onClick={() => signOut()}>Logout</button>
          </li>
        </>
      ) : (
        <li>
          <Link
            className={path === ROUTES.LOGIN ? "activeNavlink" : undefined}
            href={ROUTES.LOGIN}
          >
            Login
          </Link>
        </li>
      )}
    </>
  );
}

export default AuthLinks;
