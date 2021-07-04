import { ChakraProvider, extendTheme } from "@chakra-ui/react"

import "@fontsource/inter/100.css"
import "@fontsource/inter/200.css"
import "@fontsource/inter/300.css"
import "@fontsource/inter/400.css"
import "@fontsource/inter/500.css"
import "@fontsource/inter/600.css"
import "@fontsource/inter/700.css"
import "@fontsource/inter/800.css"
import "@fontsource/inter/900.css"

import "../styles/global.css"

const theme = extendTheme({
	fonts: {
		heading: "Inter",
		body: "Inter"
	},
	colors: {
		orange: "#F38704",
		gray: {
			100: "#B0BEC5",
			200: "#78909C",
			300: "#455A64",
		},
		black: "#000000",
		white: "#ffffff",
		bluegreen: {
			100: "#E8F6EF",
			200: "#B8DFD8"
		}
	}
})

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default MyApp
