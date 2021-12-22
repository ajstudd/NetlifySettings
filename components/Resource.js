import React from "react";
import {
  Box,
  Button,
  Text,
  Image,
  Flex,
  HStack,
  VStack,
  Heading,
  Spacer
} from "@chakra-ui/react";
import { SiElasticstack, SiNetlify } from "react-icons/si";
function resource() {
  return (
    <div>
      <Box m="0 auto" maxW="7xl">
        <Box textAlign="left" py="10">
          <Text fontWeight="semibold" textColor="gray.800" fontSize="20">
            Resources
          </Text>
          <Text textColor="gray.600">Discover more about analytics</Text>
        </Box>
        <HStack spacing="8">
          <Box
            p="5"
            borderTop="8px"
            rounded="lg"
            shadow="lg"
            borderColor="teal"
            textAlign="left"
            width="2xl"
          >
            <Box>
              <Text fontWeight="semibold" textColor="gray.800" fontSize="20">
                Documentation
              </Text>
            </Box>
            <HStack>
              <VStack spacing="4">
                <Box>
                  <Text>Netlify Analytics is available for $9/month/site</Text>
                </Box>
                <Box>
                  <Text textAlign="left" textColor="teal" fontWeight="semibold">
                    Learn more about analytics in docs
                  </Text>
                </Box>
              </VStack>
              <Spacer />
              <Box fontSize="7xl">
                <SiElasticstack />
              </Box>
            </HStack>
          </Box>
          <Box
            p="5"
            borderTop="8px"
            rounded="lg"
            shadow="lg"
            borderColor="teal"
            textAlign="left"
            width="2xl"
          >
            <Box>
              <Text fontWeight="semibold" textColor="gray.800" fontSize="20">
                Documentation
              </Text>
            </Box>
            <HStack>
              <VStack spacing="4">
                <Box>
                  <Text>Netlify Analytics is available for $9/month/site</Text>
                </Box>

                <Box>
                  <Text textColor="teal" fontWeight="semibold">
                    Learn more about analytics in docs
                  </Text>
                </Box>
              </VStack>
              <Spacer />
              <Box fontSize="7xl">
                <SiNetlify />
              </Box>
            </HStack>
          </Box>
        </HStack>
      </Box>
    </div>
  );
}

export default resource;
