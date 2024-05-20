import Document, { Html, Head, Main, NextScript } from "next/document";
import Image from "next/image";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Update the favicon link to the correct path */}
          <Image src="/image/favicon.ico" alt="Favicon" width={30} height={30} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
