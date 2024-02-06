import CardList from "@/components/cardList/cardList";

const getData = async (page: number, cat = "") => {
  const res = await fetch(
    `${process.env.URL}/api/posts?page=${page || 1}&cat=${cat}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};
export default async function Blogs({
  searchParams: { page, cat },
}: {
  searchParams: { page: string; cat: string };
}) {
  const currentPage = parseInt(page ?? 1);

  const { hasNext, posts } = await getData(currentPage, cat);
  return (
    <>
      <CardList
        page={currentPage}
        hasNext={hasNext}
        hasPrev={currentPage === 1 ? false : true}
        posts={posts}
        cat={cat}
      />
    </>
  );
}
