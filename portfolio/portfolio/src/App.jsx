import { Container, Flex, Box, Image } from "@chakra-ui/react";

import CV from "./components/CV.jsx";

function App() {
  return (
    <Container maxW={1024} centerContent>
      <Flex h={"100vh"} alignItems={"center"}>
        <Box>
          <Image
            h={"90vh"}
            ml={50}
            border={"1px solid #000000"}
            borderRadius={15}
            src="https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </Box>
        <Box position={"absolute"} left={"40%"}>
          <CV />
        </Box>
      </Flex>
    </Container>
  );
}

export default App;
