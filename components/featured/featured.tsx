"use client";
import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Featured = () => {
  const { status, data, update } = useSession();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>
          {status === "authenticated" && (
            <p style={{ margin: 0 }}>Hey {data?.user?.name},</p>
          )}
        </b>
        Discover, Create, Share: Your Ultimate Blogging Experience
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image priority src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Dive into a diverse array of topics, from travel and fashion to
            culture and food!.
          </h1>
          <p className={styles.postDesc}>
            Immerse yourself in a flood of insights and knowledge, where every
            blog post offers a fresh perspective on the world around us.
          </p>
          <Link href="/blogs">
            <button className={styles.button}>See Blogs</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
