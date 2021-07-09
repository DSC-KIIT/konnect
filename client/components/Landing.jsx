import React, { useState } from "react"
// import Image from "next/image"
import { Flex, Box, Heading, Text, Button, Image } from "@chakra-ui/react"
import { useRouter } from 'next/router'
import landingGraphicDesktop from "../public/landing-desktop.svg"
import landingGraphicMobile from "../public/landing.svg"
import {useGoogleLogin} from 'react-google-login';

const Landing = () => {
    let [loading, setLoading] = useState(true)
    const router = useRouter()

    const checkIfSignedUp=async(email)=>{
        router.push('/signup')
    }

    const clientId =
        '795020868226-esnbl4ke1vtg4ijgsihbj7qmsdgdid1r.apps.googleusercontent.com';

    const onSuccess = async (res) => {
        checkIfSignedUp(res.profileObj.email)
    };

    const onFailure = (res) => {
        console.log('Login failed: res:', res);
    };

    const onAutoLoadFinished = (res) => {
        if (res == false) {
            checkIfSignedUp(res.profileObj.email)
        }
    }

    const { signIn } = useGoogleLogin({
        onFailure,
        onSuccess,
        clientId,
        onAutoLoadFinished,
        hostedDomain: "kiit.ac.in",
        isSignedIn: true,
    })

    return (
        <Box h="100vh" overflow="hidden">
            <Flex direction="column" w="100%" alignItems="center" p="6" pb="0">
                <Heading size="3xl" fontWeight={700} mt="14" mb="5">
                    konnect
                </Heading>
                <Text align="center" fontSize="2xl" mt={["0", "3"]}>
                    an exclusive student network for students of KIIT
                </Text>
                <Text align="center" fontSize={["xl", "2xl"]} mt={["16", "0"]}>
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
                    <Image
                        src={landingGraphicDesktop}
                        layout="responsive"
                    ></Image>
                </Box>

                <Box w="100%" display={{ xl: "none" }}>
                    <Image
                        src={landingGraphicMobile}
                        layout="responsive"
                    ></Image>
                </Box>
            </Flex>
        </Box>
    )
}

export default Landing
