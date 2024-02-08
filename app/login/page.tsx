"use client";
import { signIn, useSession } from "next-auth/react";
import classes from "./login.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
export default function Login() {
  const { status, data, update } = useSession();
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
            <Image src="/google.png" alt="google logo" width={20} height={20} />
            &nbsp;Sign in with Google
          </div>
        </div>
      </div>
    </>
  );
}
