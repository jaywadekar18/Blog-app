import React from "react";
import Pagination from "../pagination/pagination";
import classes from "./cardList.module.css";
import Card from "../card/card";
import { Post } from "@/constants/consts";

type Params = {
  posts: Post[];
  page: number;
  hasPrev: boolean;
  hasNext: boolean;
  cat: string;
};
function CardList({ posts, page, hasPrev, hasNext, cat }: Params) {
  return (
    <div>
      <h1 className={classes.title}>Recent {cat ?? ""} blogs</h1>
      <div className={classes.posts}>
        {posts?.map((item: Post) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
}

export default CardList;
