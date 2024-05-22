import { GetStaticProps } from "next";
import { getCategoryPosts } from "../lib/api";
import ListLayout from "../components/list-layout";

export default function Interviews({ posts }) {
  return (
    <ListLayout categoryTitle="Interviews" posts={posts} />
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getCategoryPosts("interview");

  return {
    props: { posts }
  };
};
