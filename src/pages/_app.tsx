import type { AppProps } from "next/app";
import "../../styles/global.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "tailwindcss/tailwind.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default App;
