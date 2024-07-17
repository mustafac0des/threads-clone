import {
  Box,
  Container,
  Image,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Input,
  Stack,
  Button,
  Text,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThreads } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const AuthPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginIsDisabled = !username || !password;

  const [newName, setNewName] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newConfirmPassword, setNewConfirmPassword] = useState("");

  const signupIsDisabled =
    !newUsername || !newPassword || !newConfirmPassword || !newName;

  function loginUser() {
    // login user
  }

  function signUpUser() {
    if (newName < 3 || newName > 15) {
      return;
    }

    if (password.length < 8) {
      return;
    }

    if (password !== newConfirmPassword) {
      return;
    }

    // call made to server_site with parameters
  }

  return (
    <Container minW={"full"} centerContent>
      <Box>
        <Image
          src={
            "https://static.cdninstagram.com/rsrc.php/v3/yU/r/7LVg0KiH0gH.png"
          }
        />
      </Box>
      <Box
        mt={[-2, -5, -7, -10]}
        mb={[2, 5, 7, 10]}
        fontSize={[20, 40, 60, 70]}
      >
        <FontAwesomeIcon icon={faThreads} />
      </Box>
      <Tabs
        w={["90%", "80%", 350, 400, 450]}
        h={"40vh"}
        isFitted
        variant={"enclosed"}
      >
        <TabList>
          <Tab color={"#FFFFFF"} fontSize={[10, 12, 15, 17]}>
            Log in
          </Tab>
          <Tab color={"#FFFFFF"} fontSize={[10, 12, 15, 17]}>
            Sign up
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Stack spacing={2}>
              <Input
                placeholder={"Username*"}
                borderRadius={[10, 12, 15]}
                bgColor={"#1E1E1E"}
                size={["sm", "md", "lg"]}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                placeholder={"Password*"}
                borderRadius={[10, 12, 15]}
                bgColor={"#1E1E1E"}
                size={["sm", "md", "lg"]}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                borderRadius={[10, 12, 15]}
                bgColor={"#FFFFFF"}
                color={"#1E1E1E"}
                size={["sm", "md", "lg"]}
                isDisabled={loginIsDisabled}
                onClick={loginUser}
              >
                Log in
              </Button>
            </Stack>
          </TabPanel>
          <TabPanel>
            <Stack spacing={2}>
              <Input
                placeholder={"Name*"}
                borderRadius={[10, 12, 15]}
                bgColor={"#1E1E1E"}
                size={["sm", "md", "lg"]}
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
              <Input
                placeholder={"Username*"}
                borderRadius={[10, 12, 15]}
                bgColor={"#1E1E1E"}
                size={["sm", "md", "lg"]}
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
              />
              <Input
                placeholder={"Password*"}
                borderRadius={[10, 12, 15]}
                bgColor={"#1E1E1E"}
                size={["sm", "md", "lg"]}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <Input
                placeholder={"Confirm password*"}
                borderRadius={[10, 12, 15]}
                bgColor={"#1E1E1E"}
                size={["sm", "md", "lg"]}
                value={newConfirmPassword}
                onChange={(e) => setNewConfirmPassword(e.target.value)}
              />
              <Button
                borderRadius={[10, 12, 15]}
                bgColor={"#FFFFFF"}
                color={"#1E1E1E"}
                size={["sm", "md", "lg"]}
                isDisabled={signupIsDisabled}
                onClick={signUpUser}
              >
                Sign up
              </Button>
            </Stack>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Text fontSize={[10, 15]}>Threads Clone by Mustafa</Text>
    </Container>
  );
};

export default AuthPage;
