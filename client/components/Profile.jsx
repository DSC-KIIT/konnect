import React from "react"
import Badge from "./generic/Badge"
import { Box, Text } from "@chakra-ui/react"

import BranchYear from "./profile/BranchYear"
import NameAndInfo from "./profile/NameAndInfo"
import Socials from "./profile/Socials"
import TagBox from "./profile/TagBox"
import Bio from "./profile/Bio"
import Positions from "./profile/Positions"
import Activity from "./profile/Activity"

const Profile = () => {
    return (
        <div>
            <BranchYear year="third year" branch="CSE"></BranchYear>
            <NameAndInfo
                name="Biswaroop Bhattacharjee"
                username="biswabot"
                info="Backend Engineering Intern @ Atlan"
                pronouns="he/him"
                location="Mumbai/India"
            ></NameAndInfo>
            <Socials
                list={[
                    "https://github.com/junaidrahim",
                    "https://twitter.com/junaidrahim31",
                    "https://dribbble.com/shots/15508454-Dance-Trainer",
                    "junaidrahim.me",
                ]}
            ></Socials>
            <TagBox tags={[]}></TagBox>
            <Bio>
                jsfkjsndfkjsndfjsfnkdjn <br></br> asdasdasdasd
            </Bio>

            <Text fontSize="lg" fontWeight={700}>
                POSITIONS
            </Text>
            <Positions data={['a', 'b', 'c']}></Positions>
            
			<Text fontSize="lg" fontWeight={700}>
                ACTIVITY
            </Text>
			<Activity data={[1,2,3]}></Activity>
        </div>
    )
}

export default Profile
