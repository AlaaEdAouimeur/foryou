import "../../styles/globals.css";
import "../../styles/common.scss";
import "../../styles/typography.scss";
import "../../styles/button.scss";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
