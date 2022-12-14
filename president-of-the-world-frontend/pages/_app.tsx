import "../styles/normalize.css"; // Next.js authorizes Normalize.css (Global CSS) to be imported ONLY from _app.js

import { ApolloProvider } from "@apollo/client";
import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { Provider as ReduxProvider } from "react-redux";

import Layout from "../Components/Layout";
import { useApollo } from "../lib/apolloClient";
import SEO from "../SEO/next-seo.config";
import store from "../store/store";

const App = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps);

  return (
    <ReduxProvider store={store}>
      <ApolloProvider client={apolloClient}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <DefaultSeo {...SEO} />
        <AnimatePresence initial={false} mode="wait">
          <Layout>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Component {...pageProps} />
          </Layout>
        </AnimatePresence>
      </ApolloProvider>
    </ReduxProvider>
  );
};

export default App;
