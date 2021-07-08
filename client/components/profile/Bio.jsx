import React from "react"
import { Text } from "@chakra-ui/react"

const Bio = (props) => {
    return (
        <Text fontSize="lg" fontWeight={400} py="5" color="gray.200">
            {props.children}
        </Text>
    )
}

export default Bio
