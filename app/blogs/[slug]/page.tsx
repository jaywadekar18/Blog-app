// import Menu from "@/components/Menu/Menu";
import { Post } from "@/constants/consts";
import classes from "./singlePost.module.css";
import Image from "next/image";
// import Comments from "@/components/comments/Comments";

const getData = async (slug: string) => {
  const res = await fetch(`${process.env.URL}/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const SinglePage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const { data }: { data: Post } = await getData(slug);

  return (
    <div className={classes.container}>
      <div className={classes.infoContainer}>
        <div className={classes.textContainer}>
          <h1 className={classes.title}>{data?.title}</h1>
          <div className={classes.user}>
            {data?.user?.image && (
              <div className={classes.userImageContainer}>
                <Image
                  src={data.user.image}
                  alt=""
                  fill
                  className={classes.avatar}
                />
              </div>
            )}
            <div className={classes.userTextContainer}>
              <span className={classes.username}>{data?.user.name}</span>
              <span className={classes.date}>01.01.2024</span>
            </div>
          </div>
        </div>
      </div>
      {data?.img && (
        <div className={classes.imageContainer}>
          <Image src={data.img} alt="" fill className={classes.image} />
        </div>
      )}
      <div className={classes.content}>
        <div className={classes.post}>
          <div
            className={classes.description}
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          />
          {/* <div className={classes.comment}>
            <Comments postSlug={slug}/>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
