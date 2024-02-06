export interface Category {
  id: string;
  slug: string;
  title: string;
  img?: string;
  Posts: Post[];
}

export interface Post {
  id: string;
  createdAt: string;
  slug: string;
  title: string;
  desc: string;
  img?: string;
  views: number;
  catSlug: string;
  cat: Category;
  userEmail: string;
  user: User;
  comments: Comment[];
}

export interface Comment {
  id: string;
  createdAt: string;
  desc: string;
  userEmail: string;
  user: User;
  postSlug: string;
  post: Post;
}
export interface User {
  id: string;
  name?: string;
  email: string;
  emailVerified?: string;
  image?: string;
  // accounts?   :   Account[],
  // sessions    :  Session[],
  Post: Post[];
  Comment: Comment[];
}
