import "../../styles/globals.css";
import "../../styles/common.scss";
import "../../styles/typography.scss";
import "../../styles/button.scss";
import type { AppProps } from "next/app";
import { Header } from "../components/common/Header";
import { Footer } from "../components/common/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
