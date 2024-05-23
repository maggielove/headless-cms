import { GetStaticProps } from "next";
import { getCategoryPosts } from "../lib/api";
import ListLayout from "../components/list-layout";

export default function Fiction({ posts, preview }) {
  return (
    <ListLayout categoryTitle="Fiction" posts={posts} preview={preview} />
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getCategoryPosts("fiction");

  return {
    props: { posts }
  };
};
