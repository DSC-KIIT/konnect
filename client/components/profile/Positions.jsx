import React from "react"
import { Box, VStack, HStack, Spacer, Text, Image } from "@chakra-ui/react"

const PositionCard = ({ imgURL, designation, org, startDate, endDate }) => {
    return (
        <Box
            border="1px solid"
            borderColor="bluegreen.200"
            w="100%"
            borderRadius="lg"
            p="4"
        >
            <HStack>
                <Box mr="6">
                    <Image
                        src={imgURL}
                        borderRadius="full"
                        boxSize="50"
                    ></Image>
                </Box>

                <div>
                    <VStack align="flex-start" spacing="0px">
                        <Text fontSize="lg" fontWeight={700}>
                            {designation}
                        </Text>
                        <Text fontSize="sm">{org}</Text>
                    </VStack>
                </div>

                <Spacer></Spacer>

                <Text fontSize="lg">
                    {startDate} - {endDate}
                </Text>
            </HStack>
        </Box>
    )
}

const Positions = ({ data }) => {
    return (
        <VStack my="3">
            {data.map((x) => (
                <PositionCard
                    imgURL="https://picsum.photos/200/200"
                    designation="Web Team Lead"
                    org="DSC KIIT"
                    startDate="Jun 21"
                    endDate="Present"
                ></PositionCard>
            ))}
        </VStack>
    )
}

export default Positions
