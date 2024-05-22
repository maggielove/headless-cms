import Head from "next/head";
import { GetStaticProps } from "next";
import ListLayout from "../components/list-layout";
import { getAllPostsForHome } from "../lib/api";

export default function Index({ allPosts, preview }) {

  return (
    <ListLayout preview={preview} posts={allPosts} />
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
};
