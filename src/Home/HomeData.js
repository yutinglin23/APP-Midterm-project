import React from "react";
import {
  Box,
  HStack,
  VStack,
  AspectRatio,
  Text,
  Image,
  Pressable,
} from "native-base";

const HomeData = (Home) => {
  return (
    <Box>
      <HStack>
        <Image />
        <Image />
      </HStack>
      <VStack>
        <Image />
        <Text></Text>
        <Text></Text>
        {/* <starbar></starbar> */}
      </VStack>
    </Box>
  );
};

export default HomeData;
