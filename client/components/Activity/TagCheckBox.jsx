import React from "react";
import { Box, Center, useCheckbox, HStack } from "@chakra-ui/react";
import { Briefcase } from 'react-feather'


function TagCheckBox(props) {
  const { getInputProps, getCheckboxProps } = useCheckbox(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (

    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        border="1px"
        borderColor="#B8DFD8"
        borderRightRadius="20"
        borderLeftRadius="20"
        _checked={{
          bg: "#B8DFD8",
          // color: "white",
          borderColor: "#B8DFD8",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={2}
        py={1}
      >
        <Center>
          <HStack>
            <Box><Briefcase /></Box>
            <Box>{props.children}</Box>
          </HStack>
        </Center>
      </Box>
    </Box>

  );
}

export default TagCheckBox;
