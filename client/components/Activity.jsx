import React, { useState } from "react"
import Card from "./Activity/Card"
import TagCheckBox from "./Activity/TagCheckBox"
import { useCheckboxGroup, HStack, SimpleGrid, Box, Center, Text, Button, Select } from "@chakra-ui/react"

const Activity = () => {
    let activityDetails = [{
        name: "Aditya Meharia",
        username: "adityameh",
        date: "16th June,2014",
        title: "sdfnsdjf sdgjfgdij sogjdfgdf sfgdf",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quis nesciunt temporibus enim aliquam error odio ut at amet! Qui nam vel laudantium sed unde officia iste nemo inventore voluptatum."
    }, {
        name: "Aditya Meharia",
        username: "adityameh",
        date: "16th June,2014",
        title: "sdfnsdjf sdgjfgdij sogjdfgdf sfgdf",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quis nesciunt temporibus enim aliquam error odio ut at amet! Qui nam vel laudantium sed unde officia iste nemo inventore voluptatum."
    }, {
        name: "Aditya Meharia",
        username: "adityameh",
        date: "16th June,2014",
        title: "sdfnsdjf sdgjfgdij sogjdfgdf sfgdf",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quis nesciunt temporibus enim aliquam error odio ut at amet! Qui nam vel laudantium sed unde officia iste nemo inventore voluptatum."
    }]

    const [checked, setChecked] = useState();
    const { getCheckboxProps } = useCheckboxGroup({
        onChange: setChecked
    });

    let branch = [
        "CSE", "IT", "ECE", "MECH"
    ]

    let year = ["1st", "2nd", "3rd", "4th"]

    let tags = ["test0", "test1", "test2", "test3", "test4", "test5", "test6", "test7", "test8", "test9", "test10", "test11", "test12", "test13", "test14", "test15", "test16"]

    return (
        <>
            <HStack paddingY={2}>
                {year.map((value) => {
                    const checkbox = getCheckboxProps({ value });
                    return (
                        <TagCheckBox key={value} {...checkbox}>
                            {value} year
                        </TagCheckBox>
                    );
                })}
            </HStack>
            <SimpleGrid mx="3vw" columns={3} spacingX="5vw">
                <Box pt="4vh">
                    {/* <Select placeholder="Select option">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </Select> */}
                    <Text fontSize="4xl" fontWeight="700" p="1vw">Filter By</Text>
                    <br />
                    <SimpleGrid columns={2} spacing="1vw">
                        {tags.map((value) => {
                            const checkbox = getCheckboxProps({ value });
                            return (
                                <TagCheckBox key={value} {...checkbox}>
                                    {value}
                                </TagCheckBox>
                            );
                        })}
                    </SimpleGrid>
                </Box>
                <Box>
                    {activityDetails.map((x) => (
                        <Card cardDetails={x}></Card>
                    ))}
                </Box>
                <Box>
                    <Center>
                        <Button
                            cursor="pointer"
                            border="1px"
                            borderRightRadius="20"
                            borderLeftRadius="20"
                            colorScheme="#B8DFD8"
                            variant="outline"
                            px="3vw"
                            py="2vh"
                            my="1vh">Post</Button>
                    </Center>
                    <Center>
                        <Button cursor="pointer"
                            border="1px"
                            borderRightRadius="20"
                            borderLeftRadius="20"
                            colorScheme="#B8DFD8"
                            variant="outline"
                            px="3vw"
                            py="2vh"
                            my="1vh">View Profile</Button>
                    </Center>
                </Box>
            </SimpleGrid>

        </>
    )
}

export default Activity