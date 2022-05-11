import "../../styles/globals.css";
import "../../styles/common.scss";
import "../../styles/typography.scss";
import "../../styles/button.scss";
import type { AppProps } from "next/app";
import { Header } from "../components/common/Header";
import { Footer } from "../components/common/Footer";
import { CartProvider } from "../providers/cart";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </CartProvider>
  );
}

export default MyApp;
