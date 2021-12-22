import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";

const menus = [
  {
    title: "Site overview"
  },
  {
    title: "Deploys"
  },
  {
    title: "Plugins"
  },
  {
    title: "Functions"
  },
  {
    title: "ldentity"
  },
  {
    title: "Forms"
  },
  {
    title: "Large Media"
  },
  {
    title: "Split Testing"
  },
  {
    title: "Analytics"
  },
  {
    title: "Site settings"
  }
];

const Menu = () => {
  const [active, setActive] = useState(0);
  return (
    <Box bgColor="#0D1E25" height="30vh">
      <HStack
        m="0 auto"
        py="5"
        flexFlow="wrap"
        spacing="4"
        fontWeight="bold"
        maxW="7xl"
      >
        {menus.map((m, idx) => {
          return (
            <Box
              textColor="gray.500"
              key={idx}
              onClick={() => {
                setActive(idx);
              }}
              cursor="pointer"
            >
              <Text textColor={active === idx ? "white" : ""}>{m.title}</Text>
            </Box>
          );
        })}
      </HStack>
    </Box>
  );
};
export default Menu;
