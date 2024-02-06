import React from "react";
import classes from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";
import { Category } from "@/constants/consts";
const getData = async () => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/categories`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CategoryList = async () => {
  const data = await getData();
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Popular Categories</h1>
      <div className={classes.categories}>
        {data?.categories?.map((item: Category) => (
          <Link
            href={`/blogs?cat=${item.slug}`}
            className={`${classes.category} ${classes[item.slug]}`}
            key={item.id}
          >
            {item.img && (
              <Image
                src={item.img}
                alt="category image"
                width={32}
                height={32}
                className={classes.image}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
