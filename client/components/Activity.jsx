import React from "react"
import { Box, Image,HStack ,Text} from "@chakra-ui/react"

const Activity = () => {
    return (
        <>
            <Box borderRightRadius="5"
                borderLeftRadius="5"
                maxW="md"
                m="2vw"
                border="1px"
                borderColor="#B8DFD8"
                overflow="hidden"
                p="1vw">
                <HStack spacing="1vw">
                    <Box><Image
                        borderRadius="50%"
                        boxSize="2.5rem"
                        src="https://bit.ly/sage-adebayo"
                        alt="Segun Adebayo"
                    /></Box>
                    <Box>
                        aditya meharia
                    </Box>
                    <Box>
                        @sdgdfgdgjo
                    </Box>
                </HStack>
                <br/>
                16th June,2014
                <Text fontWeight="bold">Started Working on Notion Tools</Text>
                <br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consequatur necessitatibus esse, quisquam officiis quod nesciunt dolor, harum dicta culpa magni voluptatibus velit est alias amet earum, molestias quae corrupti.
            </Box>
        </>
    )
}

export default Activity