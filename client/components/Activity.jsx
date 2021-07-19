import React, { useState } from "react"
import Card from "./Activity/Card"
import TagCheckBox from "./Activity/TagCheckBox"
import { Filter, Briefcase, Plus } from 'react-feather'
import {
    useCheckboxGroup,
    HStack,
    SimpleGrid,
    Box,
    Center,
    Text,
    Button,
    Select,
    Grid,
    GridItem,
} from "@chakra-ui/react"

const Activity = () => {
    let activityDetails = [
        {
            name: "Aditya Meharia",
            username: "adityameh",
            date: "16th June,2014",
            title: "sdfnsdjf sdgjfgdij sogjdfgdf sfgdf",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quis nesciunt temporibus enim aliquam error odio ut at amet! Qui nam vel laudantium sed unde officia iste nemo inventore voluptatum.",
        },
        {
            name: "Aditya Meharia",
            username: "adityameh",
            date: "16th June,2014",
            title: "sdfnsdjf sdgjfgdij sogjdfgdf sfgdf",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quis nesciunt temporibus enim aliquam error odio ut at amet! Qui nam vel laudantium sed unde officia iste nemo inventore voluptatum.",
        },
        {
            name: "Aditya Meharia",
            username: "adityameh",
            date: "16th June,2014",
            title: "sdfnsdjf sdgjfgdij sogjdfgdf sfgdf",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quis nesciunt temporibus enim aliquam error odio ut at amet! Qui nam vel laudantium sed unde officia iste nemo inventore voluptatum.",
        },
        {
            name: "Aditya Meharia",
            username: "adityameh",
            date: "16th June,2014",
            title: "sdfnsdjf sdgjfgdij sogjdfgdf sfgdf",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quis nesciunt temporibus enim aliquam error odio ut at amet! Qui nam vel laudantium sed unde officia iste nemo inventore voluptatum.",
        },
        {
            name: "Aditya Meharia",
            username: "adityameh",
            date: "16th June,2014",
            title: "sdfnsdjf sdgjfgdij sogjdfgdf sfgdf",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quis nesciunt temporibus enim aliquam error odio ut at amet! Qui nam vel laudantium sed unde officia iste nemo inventore voluptatum.",
        },
    ]

    const [checked, setChecked] = useState()
    const { getCheckboxProps } = useCheckboxGroup({
        onChange: setChecked,
    })

    let branch = ["CSE", "IT", "ECE", "MECH"]

    let year = ["1st Year", "2nd Year", "3rd Year", "4th Year"]

    let suggestedPeople = ["aditya meharia", "aditya meharia", "aditya meharia", "aditya meharia",]

    let tags = [
        "intern1",
        "intern2",
        "intern3",
        "intern4",
        "intern5",
        "intern6",
    ]

    let filter = [
        "intern7",
        "intern8",
        "intern9",
    ]

    return (
        <Box px="10vw" py="5vh">
            <Grid
                templateColumns="repeat(4, 1fr)"
                gap={4}>


                <GridItem>
                    <Box >
                        <Text fontSize="3xl" fontWeight="700" p="1vh">
                            Trending Tags
                        </Text>

                        <SimpleGrid minChildWidth="110px" columns={3} spacing={3} >
                            {tags.map((value, i) => {
                                const checkbox = getCheckboxProps({ value })
                                return (
                                    <TagCheckBox key={i} {...checkbox}>
                                        {value}
                                    </TagCheckBox>
                                )
                            })}
                        </SimpleGrid>

                        <br />

                        <Text fontSize="3xl" fontWeight="700" p="1vh">
                            Suggested People
                        </Text>

                        <SimpleGrid minChildWidth="130px" columns={2} spacing={2} >
                            {suggestedPeople.map((s) => (
                                <Button
                                    cursor="pointer"
                                    border="1px"
                                    borderRightRadius="20"
                                    borderLeftRadius="20"
                                    borderColor="#B8DFD8"
                                    variant="outline"
                                    px="3vw"
                                    py="2vh"
                                    my="1vh"
                                >
                                    <Center>
                                        <HStack>
                                            <Box><Briefcase /></Box>
                                            <Box>{s}</Box>
                                        </HStack>
                                    </Center>
                                </Button>
                            ))}
                        </SimpleGrid>

                        <br />

                        <Text fontSize="3xl" fontWeight="700" p="1vh">
                            Recently Joined
                        </Text>

                        <SimpleGrid minChildWidth="130px" columns={2} spacing={2} >
                            {suggestedPeople.map((s) => (
                                <Button
                                    cursor="pointer"
                                    border="1px"
                                    borderRightRadius="20"
                                    borderLeftRadius="20"
                                    borderColor="#B8DFD8"
                                    variant="outline"
                                    px="3vw"
                                    py="2vh"
                                    my="1vh"
                                >
                                    <Center>
                                        <HStack>
                                            <Box><Briefcase /></Box>
                                            <Box>{s}</Box>
                                        </HStack>
                                    </Center>
                                </Button>
                            ))}
                        </SimpleGrid>

                    </Box>
                </GridItem>


                <GridItem colSpan={2}>
                    <Center>
                        <Box>
                            <HStack spacing="0.5vw">
                                <Box><Filter /></Box>
                                <Box fontSize="2xl"> Filter By</Box>
                                {filter.map((value, i) => {
                                    const checkbox = getCheckboxProps({ value })
                                    return (
                                        <TagCheckBox key={i} {...checkbox}>
                                            {value}
                                        </TagCheckBox>
                                    )
                                })}
                                <Box>
                                    <Plus />
                                </Box>
                            </HStack>
                        </Box>
                    </Center>

                    <br />

                    <Box>
                        {activityDetails.map((x, i) => (
                            <Card cardDetails={x} key={i}></Card>
                        ))}
                    </Box>

                </GridItem>


                <GridItem>

                    <Text fontSize="3xl" fontWeight="700" p="1vh">
                        By Year
                    </Text>

                    <SimpleGrid minChildWidth={115} columns={2} spacing={3} >
                        {year.map((value, i) => {
                            const checkbox = getCheckboxProps({ value })
                            return (
                                <TagCheckBox key={i} {...checkbox}>
                                    {value}
                                </TagCheckBox>
                            )
                        })}
                    </SimpleGrid>

                    <br />

                    <Text fontSize="3xl" fontWeight="700" p="1vh">
                        By Branch
                    </Text>
                    <Select placeholder="Select Branch">
                        {branch.map((b) => (
                            <option value={b}>{b}</option>
                        ))}
                    </Select>

                </GridItem>


            </Grid>
        </Box>
    )
}

export default Activity
