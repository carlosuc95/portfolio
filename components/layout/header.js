import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

function Header() {
  return (
    <Flex my={4} mx={20}>
      <Center>
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
        >
          <HStack>
            <Text>CR</Text>
            <Heading as="h6" size={"md"}>
              Carlos Rubio
            </Heading>
          </HStack>
        </motion.div>
      </Center>
      <Spacer />
      <Center>
        <Button mr={4}>Abouss</Button>
        <Button>Project</Button>
      </Center>
    </Flex>
  );
}

export default Header;
