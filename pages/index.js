import { VStack } from "@chakra-ui/react";
import { Greeting } from "../components/homeScr/greeting";
import { Work } from "../components/homeScr/work";

export default function Home() {
  return (
    <VStack>
      <Greeting></Greeting>
      <Work></Work>;
    </VStack>
  );
}
