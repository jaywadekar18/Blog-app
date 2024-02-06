import React from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "./card.module.css";
import { Post } from "@/constants/consts";
function Card({ item }: { item: Post }) {
  return (
    <div>
      <div className={classes.container}>
        {item.img && (
          <div className={classes.imageContainer}>
            <Image src={item.img} alt="" fill className={classes.image} />
          </div>
        )}
        <div className={classes.textContainer}>
          <div className={classes.detail}>
            <span className={classes.date}>
              {item.createdAt.substring(0, 10)} -{" "}
            </span>
            <span className={classes.category}>{item.catSlug}</span>
          </div>
          <Link href={`/blogs/${item.slug}`}>
            <h1>{item.title}</h1>
          </Link>
          {/* <p className={classes.desc}>{item.desc.substring(0, 60)}</p> */}
          <div
            className={classes.desc}
            dangerouslySetInnerHTML={{ __html: item?.desc.substring(0, 60) }}
          />
          <Link href={`/blogs/${item.slug}`} className={classes.link}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
