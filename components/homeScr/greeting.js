import { Box, Spacer, Text } from "@chakra-ui/react";
import { FaTerminal } from "react-icons/fa";

export function Greeting() {
  return (
    <Box
      display={"flex"}
      bg={"gray.100"}
      w="100%"
      py={4}
      px={6}
      rounded="lg"
      color={"blackAlpha.700"}
      // justifyContent={"center"}
      alignItems={"center"}
    >
      <FaTerminal color="#68D391" />
      <Text fontWeight={"bold"} ml={2}>
        Hello! I am Carlos Rubio Software Engineer based in Chile
      </Text>
    </Box>
  );
}
