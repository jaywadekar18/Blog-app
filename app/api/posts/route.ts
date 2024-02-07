import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    // const { slug, title, desc, img, catSlug, userEmail } = await req.json();
    const body = await req.json();
    const { slug, title, desc, img, catSlug, userEmail } = body;
    console.log(body);
    const c = await prisma.post.create({
      data: {
        slug,
        title,
        desc,
        img,
        catSlug,
        userEmail,
      },
    });
    console.log(c);
    return new NextResponse(
      JSON.stringify({
        message: "Post Craeted successfully",
        status: 200,
      })
    );
  } catch (err) {
    return new NextResponse(
      JSON.stringify({
        message: err,
        status: 500,
      })
    );
  }
};
export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page");
  const pageNumber = page ? parseInt(page) : 1;
  const cat = searchParams.get("cat");
  const POSTS_IN_ONE_PAGE = 2;
  try {
    const [posts, totalNoOfPosts] = await prisma.$transaction([
      prisma.post.findMany({
        where: { ...(cat && { catSlug: cat }) },
        take: POSTS_IN_ONE_PAGE,
        skip: POSTS_IN_ONE_PAGE * (pageNumber - 1),
      }),
      prisma.post.count({ where: { ...(cat && { catSlug: cat }) } }),
    ]);
    const maxNoOfPages = Math.ceil(totalNoOfPosts / POSTS_IN_ONE_PAGE);
    return new NextResponse(
      JSON.stringify({
        posts,
        hasNext: pageNumber < maxNoOfPages,
        status: 200,
      })
    );
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!", status: 500 })
    );
  }
};
