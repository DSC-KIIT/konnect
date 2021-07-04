import { useRouter } from "next/router"
import { Box, Image, Flex } from "@chakra-ui/react"

import Profile from "../components/Profile"

const Cover = ({ color }) => {
    return (
        <Box position="relative">
            <Box w="100%" h={{ xl: "400px" }} backgroundColor={color}></Box>
        </Box>
    )
}

const ProfileContainer = (props) => {
    return (
        <Flex direction="column" w="100%" alignItems="center">
            <Box
                w="35vw"
                h="40rem"
                backgroundColor="white"
                position="relative"
                top="-10em"
                borderRadius="3xl"
				p="14"
            >
                {props.children}
            </Box>
        </Flex>
    )
}

export default function ProfilePage() {
    const router = useRouter()
    const { username } = router.query

    return (
        <div>
            <Cover color="bluegreen.200"></Cover>
            <ProfileContainer>
                <Profile></Profile>
            </ProfileContainer>
        </div>
    )
}
