import { GetStaticProps } from "next";
import { getAboutPage } from "../lib/api";
import Layout from "../components/layout";
import styles from "./about.module.css";

export default function About({pages}) {
  const pageTitle = pages?.edges[0]?.node?.title;
  const pageContent = pages?.edges[0]?.node?.content;

  //TODO pass preview prop to Layout
  return (
    <Layout>
      <div className={styles.content}>
        <h2 className="text-2xl mb-8">{pageTitle}</h2>
        <div className="h-8 w-100 text-xl leading-6"
          dangerouslySetInnerHTML={{ __html: pages?.edges[0]?.node?.content }}>
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const pages = await getAboutPage();

  console.log(`pages~ `, pages);

  return {
    props: { pages }
  };
};
