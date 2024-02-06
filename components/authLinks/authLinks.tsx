"use client";

import { ROUTES } from "@/constants/routes";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

function AuthLinks() {
  const { update, data, status } = useSession();
  return (
    <>
      {status === "authenticated" ? (
        <>
          <li>
            <button onClick={() => signOut()}>Logout</button>
          </li>

          <li>
            <Link href={ROUTES.CREATENEWBLOG}>Write A New blog</Link>
          </li>
        </>
      ) : (
        <li>
          <Link href={ROUTES.LOGIN}>Login</Link>
        </li>
      )}
    </>
  );
}

export default AuthLinks;
