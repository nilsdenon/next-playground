import Head from "next/head";
import Layout from "../src/components/Layout";
import { client } from "./api/wordpressClient";
import { SINGLE_PAGE_QUERY } from "./api/queries";
import styles from "../styles/Home.module.css";

const Home = (page) => {
  const { title, content } = page;
  console.log(page.title);
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="mb-4 text-3xl">{title}</h1>
      </main>
    </Layout>
  );
};

export default Home;

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: SINGLE_PAGE_QUERY,
    variables: { slug: "homepage" },
  });

  return {
    props: {
      page: data?.page,
    },
  };
};
