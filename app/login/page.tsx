"use client";
import { signIn, useSession } from "next-auth/react";
import classes from "./login.module.css";
import { useRouter } from "next/navigation";
export default function Login() {
  const { status, data, update } = useSession();

  console.log(status, data, update);
  const router = useRouter();

  if (status === "loading") {
    return <div className={classes.loading}>Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }
  return (
    <>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <div
            className={classes.socialButton}
            onClick={() => signIn("google")}
          >
            Sign in with Google
          </div>
        </div>
      </div>
    </>
  );
}
