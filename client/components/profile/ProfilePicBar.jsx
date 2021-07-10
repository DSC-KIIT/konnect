import React from "react"

import {
    HStack,
    VStack,
    Box,
    Button,
    Text,
    Image,
    Spacer,
} from "@chakra-ui/react"

const ProfilePicBar = ({ follower, following }) => {
    return (
        <HStack mb="10">
            <Image
                src="https://picsum.photos/200/200"
                boxSize="100px"
                borderRadius="full"
            ></Image>

            <Spacer></Spacer>

            <HStack>
                <VStack spacing="0px" mr="8">
                    <Text fontSize="2xl" fontWeight={500}>
                        {follower}
                    </Text>
                    <Text>followers</Text>
                </VStack>

                <VStack spacing="0px">
                    <Text fontSize="2xl" fontWeight={500}>
                        {following}
                    </Text>
                    <Text>following</Text>
                </VStack>
            </HStack>

            <Spacer></Spacer>

            <VStack>
                <Button variant="outline" borderColor="bluegreen.200" w="100%">
                    follow
                </Button>
                <Button variant="outline" borderColor="bluegreen.200" w="100%">
                    edit profile
                </Button>
            </VStack>
        </HStack>
    )
}

export default ProfilePicBar
