import React, { useState } from "react"
import { User, Edit3, Book, Heart, MapPin, CheckCircle } from 'react-feather'
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
    Center
} from "@chakra-ui/react"
import { useGoogleLogin } from 'react-google-login';

import signUpGraphic from "../public/signup.svg"
import signUpGraphicMobile from "../public/signup_mobile.svg"

const SignUp = () => {
    let [loading, setLoading] = useState(true)
    let [email, setEmail] = useState("")
    const clientId =
        '795020868226-esnbl4ke1vtg4ijgsihbj7qmsdgdid1r.apps.googleusercontent.com';

    const onSuccess = (res) => {
        setLoading(false)
        setEmail(res.profileObj.email)
        // refreshTokenSetup(res);
        console.log(res);
    };

    const onAutoLoadFinished = (res) => {
        console.log(res)
        if (res == false) { }
    }

    useGoogleLogin({
        onSuccess,
        onAutoLoadFinished,
        clientId,
        isSignedIn: true,
        cookiePolicy: 'single_host_origin'
    });

    return (
        <Box h="100vh" overflow="hidden">
            <Center>
                <Heading size="3xl" fontWeight={700} mt="5vh" ml={["auto", "auto", "auto", "2.5vw"]} mr="auto">
                    konnect
                </Heading></Center>
            <Text display={["none", "none", "none", "block"]} fontSize="2xl" mt="2vh" ml="2.5vw">
                Thank you so much for Signing Up
            </Text>
            <Text display={["none", "none", "none", "block"]} fontSize="2xl" ml="2.5vw">
                We'll get you setup real quick
            </Text>
            <SimpleGrid minChildWidth="50vw">
                <Box display={["none", "none", "none", "block"]}>
                    <Image
                        boxSize="100%"
                        display={["none", "none", "none", "block"]}
                        src={signUpGraphic}
                    >
                    </Image>
                </Box>

                <Box ml="10vw" mr="10vw">
                    <Center>
                        <Text fontSize="1xl" mt="5" >
                            Setting up your profile
                        </Text>
                    </Center>
                    <Center>
                        <Text display={["none", "none", "none", "block"]} fontSize="4xl" fontWeight={700} >
                            Getting Started</Text>
                    </Center>
                    <Center>
                        <Text fontSize="1.7xl" fontWeight={700} >
                            <Icon as={CheckCircle} />&nbsp; {email}</Text>
                    </Center>
                    <FormControl mt="10" id="username" isRequired>
                        <InputGroup>
                            <InputLeftElement children={<Icon as={Edit3} />} />
                            <Input placeholder="Pick a Username" />
                        </InputGroup>
                    </FormControl>
                    <FormControl mt="5" id="name" isRequired>
                        <InputGroup>
                            <InputLeftElement children={<Icon as={User} />} />
                            <Input placeholder="Your Name" />
                        </InputGroup>
                    </FormControl>
                    <FormControl mt="5" id="branch" isRequired>
                        <InputGroup>
                            <InputLeftElement children={<Icon as={Book} />} />
                            <Input placeholder="Enter your Branch/Course" />
                        </InputGroup>
                    </FormControl>
                    <FormControl mt="5" id="pronoun" isRequired>
                        <InputGroup>
                            <InputLeftElement children={<Icon as={Heart} />} />
                            <Input placeholder="Pronouns" />
                        </InputGroup>
                    </FormControl>
                    <FormControl mt="5" id="location" isRequired>
                        <InputGroup>
                            <InputLeftElement children={<Icon as={MapPin} />} />
                            <Input placeholder="Location" />
                        </InputGroup>
                    </FormControl>
                    <Center>
                        <Button
                            mt="5"
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
                            Let's Go
                        </Button>
                    </Center>
                </Box>

            </SimpleGrid>
            <Box>
                <Image
                    display={["none", "block", "block", "none"]}
                    src={signUpGraphicMobile}
                ></Image>
            </Box>
        </Box>
    )
}

export default SignUp