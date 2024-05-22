import { GetStaticProps } from "next";
import { getCategoryPosts } from "../lib/api";
import ListLayout from "../components/list-layout";

export default function Poetry({ posts }) {
  return (
    <ListLayout categoryTitle="Poetry" posts={posts} />
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getCategoryPosts("poetry");

  return {
    props: { posts }
  };
};
