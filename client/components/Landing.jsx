import React from "react"
import Image from "next/image"
import { Flex, Box, Heading, Text, Button, Spacer } from "@chakra-ui/react"

import landingGraphicDesktop from "../public/landing-desktop.svg"
import landingGraphicMobile from "../public/landing.svg"

const Landing = () => {
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
                    >
                        Sign Up
                    </Button>
                    <Button
                        px="10"
                        fontSize="xl"
                        py="6"
                        fontWeight={400}
                        color="orange"
                        border="2px solid orange"
                        backgroundColor="white"
                        _hover={{ bg: "white" }}
                        _active={{ bg: "white" }}
                    >
                        Login
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
