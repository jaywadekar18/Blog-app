import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  { params: { slug } }: { params: { slug: string } }
) => {
  try {
    const data = await prisma.post.findUnique({
      where: { slug },
      include: { user: true },
    });
    return new NextResponse(
      JSON.stringify({
        data,
        status: 200,
      })
    );
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!", status: 500 })
    );
  }
};
