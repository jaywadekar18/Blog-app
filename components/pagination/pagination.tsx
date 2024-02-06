"use client";

import React from "react";
import styles from "./pagination.module.css";
import { useRouter } from "next/navigation";
type param = {
  page: number;
  hasPrev: boolean;
  hasNext: boolean;
};
const Pagination = ({ page = 1, hasPrev, hasNext }: param) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => router.push(`?page=${page - 1}`)}
      >
        Previous
      </button>
      <button
        disabled={!hasNext}
        className={styles.button}
        onClick={() => router.push(`?page=${page + 1}`)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
