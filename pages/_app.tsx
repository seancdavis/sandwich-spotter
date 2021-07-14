import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { client } from "../utils/fauna-client";

import "../styles/globals.css";
import "../styles/pages/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <div className="font-body text-black">
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  );
}
export default MyApp;
