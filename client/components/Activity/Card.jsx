import React from "react"
import { Box, Image, HStack, Text, Center } from "@chakra-ui/react"

const Card = ({ cardDetails }) => {
    return (
        <Center>
            <Box
                borderRightRadius="5"
                borderLeftRadius="5"
                maxW="xl"
                m="1vh"
                border="1px"
                borderColor="#B8DFD8"
                overflow="hidden"
                p="1vw">
                <HStack spacing="1vw">
                    <Box><Image
                        borderRadius="50%"
                        boxSize="40px"
                        src="https://bit.ly/sage-adebayo"
                        alt="Segun Adebayo"
                    /></Box>
                    <Box fontWeight="bold" >
                        {cardDetails.name}
                    </Box>
                    <Box>
                        @{cardDetails.username}
                    </Box>
                </HStack>
                <br />
                {cardDetails.date}
                <Text fontWeight="bold">{cardDetails.title}</Text>
                <br />
                {cardDetails.body}
            </Box>
        </Center>
    )
}

export default Card