import React, { useState } from "react"
import {
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Center,
} from "@chakra-ui/react"
import { useRouter } from "next/router"
import landingGraphicDesktop from "../public/landing-desktop.svg"
import landingGraphicMobile from "../public/landing.svg"
import { useGoogleLogin } from "react-google-login"
import Loader from "react-loader-spinner"

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const Landing = () => {
    let [loading, setLoading] = useState(true)
    const router = useRouter()

    const checkIfSignedUp = async (email) => {
        router.push("/signup")
    }

    const onAutoLoadFinished = (res) => {
        if (res == false) setLoading(false)
    }

    const clientId =
        "795020868226-esnbl4ke1vtg4ijgsihbj7qmsdgdid1r.apps.googleusercontent.com"

    const onSuccess = async (res) => {
        checkIfSignedUp(res.profileObj.email)
    }

    const onFailure = (res) => {
        setLoading(false)
        console.log(res)
        alert("Login Failed: " + res.error)
    }

    const { signIn } = useGoogleLogin({
        onFailure,
        onSuccess,
        onAutoLoadFinished,
        clientId,
        hostedDomain: "kiit.ac.in",
        isSignedIn: true,
    })

    return (
        <>
            {!loading ? (
                <Box h="100vh" overflow="hidden">
                    <Flex
                        direction="column"
                        w="100%"
                        alignItems="center"
                        p="6"
                        pb="0"
                    >
                        <Heading size="3xl" fontWeight={700} mt="14" mb="5">
                            konnect
                        </Heading>
                        <Text align="center" fontSize="2xl" mt={["0", "3"]}>
                            an exclusive student network for students of KIIT
                        </Text>
                        <Text
                            align="center"
                            fontSize={["xl", "2xl"]}
                            mt={["16", "0"]}
                        >
                            sign up with your university email
                        </Text>

                        <Flex mt="10" mb={["10", "0"]}>
                            <Button
                                mr="4"
                                px="10"
                                py="6"
                                fontSize="xl"
                                fontWeight={400}
                                backgroundColor="orange"
                                _hover={{
                                    bg: "orange",
                                }}
                                _active={{ bg: "orange" }}
                                color="white"
                                onClick={signIn}
                            >
                                Login / SignUp
                            </Button>
                        </Flex>

                        <Box
                            w="100%"
                            px={{ xl: "0%", "2xl": "15%" }}
                            display={["none", "none", "none", "block"]}
                        >
                            <Image src={landingGraphicDesktop}></Image>
                        </Box>

                        <Box w="100%" display={{ xl: "none" }}>
                            <Image src={landingGraphicMobile}></Image>
                        </Box>
                    </Flex>
                </Box>
            ) : (
                <Center mt="40vh">
                    <Loader
                        type="Puff"
                        color="orange"
                        height={100}
                        width={100}
                    />
                </Center>
            )}
        </>
    )
}

export default Landing
