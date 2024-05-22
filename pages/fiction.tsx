import { GetStaticProps } from "next";
import { getCategoryPosts } from "../lib/api";
import ListLayout from "../components/list-layout";

export default function Fiction({ posts }) {
  return (
    <ListLayout categoryTitle="Fiction" posts={posts} />
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getCategoryPosts("fiction");

  return {
    props: { posts }
  };
};
