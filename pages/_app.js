import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import axios from "axios";
import NProgress from "nprogress";
import Router from "next/router";

import { motion, AnimatePresence } from "framer-motion";
const dev = process.env.NODE_ENV !== "production";

Router.onRouteChangeStart = (url) => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();

Router.onRouteChangeError = () => NProgress.done();

axios.defaults.baseURL = dev
  ? "https://jsonplaceholder.typicode.com"
  : "https://jsonplaceholder.typicode.com";

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <AnimatePresence>
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          exit="pageExit"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
            pageExit: {},
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
