import React from "react"

import { VStack, Text, Heading } from "@chakra-ui/react"

const NameAndInfo = ({ name, username, info, pronouns, location }) => {
    return (
        <VStack align="left" my="3">
            <Heading fontSize="3xl">{name}</Heading>
			
			<Text>@{username}</Text>
			<Text>{info} • {pronouns} • {location}</Text>
        </VStack>
    )
}

export default NameAndInfo
