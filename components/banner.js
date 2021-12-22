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

const Banner = () => {
  return (
    <>
      <Box>
        <Box
          p="8"
          rounded="lg"
          bg="white"
          height="50vh"
          m="0 auto"
          maxW="7xl"
          shadow="lg"
        >
          <HStack>
            <VStack alignItems="start" justifyContent="start" spacing="4">
              <Heading>Analytics</Heading>
              <Box>
                <Text>Netlify Analytics is available for $9/month/site</Text>
              </Box>
              <Box w="lg" textAlign="left">
                <Text textColor="gray.600">
                  Get a deeper understanding of your site via privacy-sensitive
                  analytics with no performance penalty. Without any extra
                  configuration, Netlify's server-side solution lets you monitor
                  and find trends in pageviews, visitors, sources, and more.
                </Text>
              </Box>
              <Box>
                <Text textColor="teal" fontWeight="semibold">
                  Learn more about analytics in docs
                </Text>
              </Box>
              <Box>
                <Button colorScheme="teal">
                  Enable Analytics for 9$/month
                </Button>
              </Box>
            </VStack>
            <Spacer />
            <Box w="50%">
              <Image
                w="full"
                src="https://cdn.discordapp.com/attachments/725914863225798656/923116587148537866/svg3e.png"
                alt="image"
              />
            </Box>
          </HStack>
        </Box>
      </Box>
    </>
  );
};
export default Banner;
