import React from "react"
import { Box, Tag, TagLabel } from "@chakra-ui/react"

const Badge = (props) => {
    return (
        <Tag
            px="5"
            py="3"
            borderRadius="full"
            border="1px solid"
            borderColor="bluegreen.200"
            backgroundColor="white"
        >
            <Box fontSize="md" pr="2">
                <i className={props.icon}></i>
            </Box>
            <TagLabel fontSize="lg" fontWeight={400}>
                {props.children}
            </TagLabel>
        </Tag>
    )
}

export default Badge
