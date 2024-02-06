"use client";
import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import { useSession } from "next-auth/react";

const Featured = () => {
  const { status, data, update } = useSession();
  console.log(data?.user);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>
          {status === "authenticated" && <span>Hey {data?.user?.name} .</span>}
        </b>
        Discover, Create, Share: Your Ultimate Blogging Experience
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image priority src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet alim consectetur adipisicing elit.
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;