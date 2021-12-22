import {
  Box,
  HStack,
  Text,
  Spacer,
  Button,
  Avatar,
  Divider,
  Heading
} from "@chakra-ui/react";
import { SiNetlify } from "react-icons/si";
import { FaAngleRight } from "react-icons/fa";
import { BiBell, BiAperture } from "react-icons/bi";
import React from "react";

function header() {
  return (
    <div>
      <Box bgColor="#0D1E25">
        <HStack m="0 auto" py="8" spacing="5" maxW="7xl">
          <Box textColor="teal">
            <SiNetlify fontSize="40" />
          </Box>
          <Box textColor="gray.400" fontSize="20">
            <Text>AJXcodes</Text>
          </Box>
          <Box textColor="gray.400">
            <FaAngleRight />
          </Box>
          <Box>
            <Text textColor="white" fontSize="20">
              frosty-darwin-797327
            </Text>
          </Box>
          <Spacer />
          <HStack spacing="8">
            <Button colorScheme="yellow">upgrade</Button>
            <Box fontSize="2xl" textColor="white">
              <BiBell />
            </Box>
            <Box fontSize="2xl" textColor="white">
              <BiAperture />
            </Box>
            <Box>
              <Avatar
                name="Dan Abrahmov"
                size="sm"
                src="https://bit.ly/dan-abramov"
              />
            </Box>
          </HStack>
        </HStack>
        <Box maxW="7xl" m="0 auto">
          <Divider />
        </Box>
      </Box>
    </div>
  );
}

export default header;
