import { GetStaticProps } from "next";
import Layout from "./layout";
import HeroPost from "./hero-post";
import MoreStories from "./more-stories";
import Container from "./container";
import Head from "next/head";

export default function ListLayout({ categoryTitle = null, preview, posts : { edges } }) {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);

  return (
    <Layout preview={preview}>
      <Head>
        <title>Faultline</title>
      </Head>
      <Container>
        {categoryTitle &&
          <h2 className="mb-8 text-7xl text-yellow-600 font-bold">{categoryTitle}</h2>}
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.featuredImage}
            date={heroPost.date}
            author={heroPost.author}
            guestAuthor={heroPost.guestAuthor}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
  );
}
