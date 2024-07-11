import { Box, Button, Flex, Text, VStack } from "@chakra-ui/react";

const CV = () => {
  return (
    <Flex
      w={"40vw"}
      h={"80vh"}
      bg={"#F0F0F0"}
      border={"1px solid #000000"}
      borderRadius={50}
      boxShadow={"0 8px 16px rgba(0, 0, 0, 0.1)"}
      justifyContent={"center"}
    >
      <Text fontSize={"xxx-large"} fontWeight={800}>
        Mustafa AmanUllah
      </Text>
    </Flex>
  );
};

export default CV;
