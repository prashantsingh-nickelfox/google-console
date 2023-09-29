import App from "@/components/App";
import "./globals.css";
import { Inter } from "next/font/google";
import { StoreProvider } from "@/redux/StoreProvider";
import Head from "next/head"; // Import Head from Next.js

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "google-site-verification",
  description: "bulnV3xetCkwxyl18K79PDQnrh0FWzAjyMyPHAMHfwU",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="google-site-verification"
          content="bulnV3xetCkwxyl18K79PDQnrh0FWzAjyMyPHAMHfwU"
        />
        <meta property="og:title" content="Code Venkey Samples" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://kvkirthy.github.io/code-samples/assets/dino.png"
        />
        <meta
          property="og:url"
          content="https://kvkirthy.github.io/code-sample/"
        ></meta>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={inter.className}>
        <StoreProvider>
          <App>{children}</App>
        </StoreProvider>
      </body>
    </html>
  );
}
