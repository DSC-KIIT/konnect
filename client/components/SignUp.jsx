import React, { useState } from "react"
import { User, Edit3, Book, Heart, MapPin, CheckCircle } from "react-feather"
import {
    FormControl,
    Input,
    Heading,
    Box,
    Text,
    Image,
    InputGroup,
    InputLeftElement,
    Icon,
    Button,
    SimpleGrid,
    Center,
    Flex,
} from "@chakra-ui/react"

import { useGoogleLogin } from "react-google-login"
import signUpGraphic from "../public/signup.svg"
import signUpGraphicMobile from "../public/signup_mobile.svg"

const SignUp = () => {
    let [email, setEmail] = useState("")
    const clientId =
        "795020868226-esnbl4ke1vtg4ijgsihbj7qmsdgdid1r.apps.googleusercontent.com"

    const onSuccess = (res) => {
        console.log(res)
        setEmail(res.profileObj.email)
        // refreshTokenSetup(res);
        console.log(res)
    }

    const onAutoLoadFinished = (res) => {
        console.log(res)
        if (res == false) {
        }
    }

    useGoogleLogin({
        onSuccess,
        onAutoLoadFinished,
        clientId,
        isSignedIn: true,
        cookiePolicy: "single_host_origin",
    })

    return (
        <Box h="100vh" overflow="hidden">
            <Flex direction="row">
                <Box w="50%">
                    <Heading size="2xl" fontWeight={700} mt="14" ml="16" mb="4">
                        konnect
                    </Heading>

                    <Text
                        display={["none", "none", "none", "block"]}
                        fontSize="2xl"
                        ml="16"
                        color="gray.200"
                    >
                        Thank you for Signing Up. <br></br>
                        We'll get you setup real quick
                    </Text>

                    <Box display={["none", "none", "none", "block"]}>
                        <Image
                            boxSize="100%"
                            display={["none", "none", "none", "block"]}
                            src={signUpGraphic}
                        ></Image>
                    </Box>

                    <Box>
                        <Image
                            display={["none", "block", "block", "none"]}
                            src={signUpGraphicMobile}
                        ></Image>
                    </Box>
                </Box>

                <Box w="50%">
                    <Flex
                        justifyContent="space-around"
                        alignItems="center"
                        direction="column"
                        h="100vh"
                        p="10"
                    >
                        <Box w="55%">
                            <Text fontSize="xl" mt="5" color="gray.300">
                                Setting up your profile
                            </Text>

                            <Text
                                display={["none", "none", "none", "block"]}
                                fontSize="4xl"
                                fontWeight={700}
                            >
                                Getting Started
                            </Text>

                            <Text
                                fontSize="xl"
                                fontWeight={700}
                                color="gray.300"
                                my="3"
                            >
                                <Icon as={CheckCircle} />
                                &nbsp; {email}
                            </Text>

                            <FormControl mt="7" id="username">
                                <InputGroup mb="5">
                                    <InputLeftElement
                                        children={
                                            <Icon
                                                as={Edit3}
                                                color="gray.300"
                                                fontSize="xl"
                                            />
                                        }
                                    />
                                    <Input
                                        border="1px solid"
                                        borderColor="bluegreen.200"
                                        placeholder="Pick a Username"
                                        isRequired
                                    />
                                </InputGroup>

                                <InputGroup mb="5">
                                    <InputLeftElement
                                        children={
                                            <Icon
                                                as={User}
                                                color="gray.300"
                                                fontSize="xl"
                                            />
                                        }
                                    />
                                    <Input
                                        border="1px solid"
                                        borderColor="bluegreen.200"
                                        placeholder="Your Name"
                                        color="gray.300"
                                        isRequired
                                    />
                                </InputGroup>

                                <InputGroup mb="5">
                                    <InputLeftElement
                                        children={
                                            <Icon
                                                as={Book}
                                                color="gray.300"
                                                fontSize="xl"
                                            />
                                        }
                                    />
                                    <Input
                                        border="1px solid"
                                        borderColor="bluegreen.200"
                                        placeholder="Enter your Branch / Course"
                                        isRequired
                                    />
                                </InputGroup>

                                <InputGroup mb="5">
                                    <InputLeftElement
                                        children={
                                            <Icon
                                                as={Heart}
                                                color="gray.300"
                                                fontSize="xl"
                                            />
                                        }
                                    />
                                    <Input
                                        border="1px solid"
                                        borderColor="bluegreen.200"
                                        placeholder="Pronouns"
                                        isRequired
                                    />
                                </InputGroup>

                                <InputGroup mb="7">
                                    <InputLeftElement
                                        children={
                                            <Icon
                                                as={MapPin}
                                                color="gray.300"
                                                fontSize="xl"
                                            />
                                        }
                                    />
                                    <Input
                                        border="1px solid"
                                        borderColor="bluegreen.200"
                                        placeholder="Location"
                                        isRequired
                                    />
                                </InputGroup>
                            </FormControl>

                            <Button
                                px="8"
                                py="6"
                                borderRadius="xl"
                                fontSize="xl"
                                fontWeight={400}
                                backgroundColor="orange"
                                _hover={{
                                    bg: "orange",
                                }}
                                _active={{ bg: "orange" }}
                                color="white"
                            >
                                Let's Go
                            </Button>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}

export default SignUp
