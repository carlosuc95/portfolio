import { Heading, HStack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

export function Work() {
  return (
    <HStack>
      <motion.div
        whileTap={{ scale: 0.9 }}
        animate={{
          x: 0,
        }}
      >
        <Heading as="h1">Carlos Rubio DEV</Heading>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ y: 100, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        <Text>
          Hi! I'm Carlos, i am a Sotfware Engineer, I'm from Chile, Santiago
        </Text>
      </motion.div>
    </HStack>
  );
}
