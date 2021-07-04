import React from "react"
import Badge from "./generic/Badge"
import { Box } from "@chakra-ui/react"

import BranchYear from "./profile/BranchYear"
import NameAndInfo from "./profile/NameAndInfo"

const Profile = () => {
    return (
        <div>
            <BranchYear year="third year" branch="CSE"></BranchYear>
            <NameAndInfo
                name="Biswaroop Bhattacharjee"
                username="riswaboop"
                info="Backend Engineering Intern @ Atlan"
				pronouns="he/him"
				location="Mumbai/India"
            ></NameAndInfo>
        </div>
    )
}

export default Profile
