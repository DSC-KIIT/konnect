import React from "react"
import * as Icon from "react-feather"
import { HStack } from "@chakra-ui/layout"

const getSocialsFromList = (socialLinks) => {
    const ICON_SIZE = 28

    const domainMap = {
        twitter: <Icon.Twitter size={ICON_SIZE}></Icon.Twitter>,
        github: <Icon.GitHub size={ICON_SIZE}></Icon.GitHub>,
        instagram: <Icon.Instagram size={ICON_SIZE}></Icon.Instagram>,
        facebook: <Icon.Facebook size={ICON_SIZE}></Icon.Facebook>,
        linkedin: <Icon.Linkedin size={ICON_SIZE}></Icon.Linkedin>,
        youtube: <Icon.Youtube size={ICON_SIZE}></Icon.Youtube>,
        spotify: <Icon.Headphones size={ICON_SIZE}></Icon.Headphones>,
        soundcloud: <Icon.Headphones size={ICON_SIZE}></Icon.Headphones>,
        dribbble: <Icon.Dribbble size={ICON_SIZE}></Icon.Dribbble>,
        twitch: <Icon.Twitch size={ICON_SIZE}></Icon.Twitch>,
        behance: <Icon.PenTool size={ICON_SIZE}></Icon.PenTool>,
    }

    return socialLinks.map((link) => {
        for (const domain in domainMap) {
            if (link.includes(domain)) {
                return {
                    url: link,
                    icon: domainMap[domain],
                }
            }
        }

        return {
            url: link,
            icon: <Icon.Link size={ICON_SIZE}></Icon.Link>,
        }
    })
}

const Socials = ({ list }) => {
    const socialsData = getSocialsFromList(list)

    return (
        <HStack spacing="3">
            {socialsData.map((x) => {
                return <a href={x["url"]}>{x.icon}</a>
            })}
        </HStack>
    )
}

export default Socials
