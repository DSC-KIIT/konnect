import React from "react"
import {
    Box,
    Text,
    HStack,
    VStack,
    Spacer,
    Button,
    Collapse,
    useDisclosure,
} from "@chakra-ui/react"

import { ChevronDown, ChevronUp } from "react-feather"

const ActivityCard = ({ title, date, emoji, children }) => {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <Box
            border="1px solid"
            borderColor="bluegreen.200"
            w="100%"
            borderRadius="lg"
            p="4"
            onClick={onToggle}
            mb="3"
        >
            <HStack>
                <Box mr="3">
                    <Text fontSize="3xl">{emoji}</Text>
                </Box>

                <div>
                    <VStack align="flex-start" spacing="0px">
                        <Text fontSize="sm" fontWeight={700}>
                            {date}
                        </Text>
                        <Text fontSize="lg">{title}</Text>
                    </VStack>
                </div>

                <Spacer></Spacer>

                <div>
                    {isOpen ? (
                        <ChevronUp></ChevronUp>
                    ) : (
                        <ChevronDown></ChevronDown>
                    )}
                </div>
            </HStack>
            <Collapse in={isOpen} animateOpacity>
                <Box m="3">{children}</Box>
            </Collapse>
        </Box>
    )
}

const Activity = ({ data }) => {
    return (
        <Box my="3">
            {data.map((x) => (
                <ActivityCard
                    title="Started working on Notion Tools"
                    date="June 16th, 2021"
                    emoji="🍎"
                >
                    djasndkajndakjndksjdnkajndkasjndkajsdnaksjdnakjsdnkasjdnaksjdn
                </ActivityCard>
            ))}
        </Box>
    )
}

export default Activity
