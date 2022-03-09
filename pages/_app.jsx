import { ApolloProvider } from "@apollo/client";
import WordPressProvider from "../src/components/WordPressProvider";
import { client } from "./api/wordpressClient";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <WordPressProvider>
        <Component {...pageProps} />
      </WordPressProvider>
    </ApolloProvider>
  );
}

export default MyApp;
