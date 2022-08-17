import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";
import Head from "next/head";
import Script from "next/script";
import { Scrollbars } from "react-custom-scrollbars";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Smartlist - Next-gen home inventory and personal finances</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
