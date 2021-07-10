import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head></Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
				<script src="https://kit.fontawesome.com/f0e3875af3.js" crossOrigin="anonymous"></script>
            </Html>
        )
    }
}

export default MyDocument
