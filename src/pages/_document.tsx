import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <script defer src="/your-path-to-fontawesome/js/brands.js"></script>
          <script defer src="/your-path-to-fontawesome/js/solid.js"></script>
          <script
            defer
            src="/your-path-to-fontawesome/js/fontawesome.js"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
