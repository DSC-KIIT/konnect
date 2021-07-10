import React from "react"

import { Tag, TagLabel, HStack } from "@chakra-ui/react"

const BranchYear = ({year, branch}) => {
    return (
        <HStack>
            <Tag backgroundColor="bluegreen.100" fontSize="md" fontWeight={500} borderRadius="lg" p="2">
				<TagLabel>{year}</TagLabel>
			</Tag>

            <Tag backgroundColor="bluegreen.100" fontSize="md" fontWeight={500} borderRadius="lg" p="2">
				<TagLabel>{branch}</TagLabel>
			</Tag>
        </HStack>
    )
}

export default BranchYear
