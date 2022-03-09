import Head from "next/head";
import Header from "./Header";
import { useWordPressContext } from "../components/WordPressProvider";

export default function Layout({ children }) {
  const { data } = useWordPressContext();

  return (
    <div className="container m-auto my-8 space-y-8">
      <Head>
        <title>{data?.generalSettings?.title}</title>
        <meta name="description" content={data?.generalSettings?.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
    </div>
  );
}
