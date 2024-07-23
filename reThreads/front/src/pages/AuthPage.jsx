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
  const [userInputs, setUserInputs] = useState({
    username: "",
    password: "",
  });

  const loginIsDisabled = !userInputs.username || !userInputs.password;

  const [newUserInputs, setNewUserInputs] = useState({
    name: "",
    username: "",
    password: "",
  });

  const [newConfirmPassword, setNewConfirmPassword] = useState("");

  const signupIsDisabled =
    !newUserInputs.username ||
    !newUserInputs.password ||
    !newConfirmPassword ||
    !newUserInputs.name;

  function signIn() {
    // login user
  }

  const signUp = async () => {
    if (newUserInputs.name.length < 3 || newUserInputs.name.length > 15) {
      return;
    }
    if (newUserInputs.password.length < 8) {
      return;
    }
    if (newUserInputs.password !== newConfirmPassword) {
      return;
    }

    try {
      const res = await fetch("/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUserInputs),
      });

      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error("Error in sign up user:", err);
    }
  };

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
            Sign in
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
                className={"container"}
                size={["sm", "md", "lg"]}
                value={userInputs.username}
                onChange={(e) =>
                  setUserInputs({ ...userInputs, username: e.target.value })
                }
              />
              <Input
                placeholder={"Password*"}
                borderRadius={[10, 12, 15]}
                size={["sm", "md", "lg"]}
                className={"container"}
                value={userInputs.password}
                onChange={(e) =>
                  setUserInputs({ ...userInputs, password: e.target.value })
                }
              />
              <Button
                borderRadius={[10, 12, 15]}
                size={["sm", "md", "lg"]}
                isDisabled={loginIsDisabled}
                className={"background"}
                onClick={signIn}
              >
                Sign in
              </Button>
            </Stack>
          </TabPanel>
          <TabPanel>
            <Stack spacing={2}>
              <Input
                placeholder={"Name*"}
                borderRadius={[10, 12, 15]}
                size={["sm", "md", "lg"]}
                className={"container"}
                value={newUserInputs.name}
                onChange={(e) =>
                  setNewUserInputs({
                    ...newUserInputs,
                    name: e.target.value,
                  })
                }
              />
              <Input
                placeholder={"Username*"}
                borderRadius={[10, 12, 15]}
                size={["sm", "md", "lg"]}
                className={"container"}
                value={newUserInputs.username}
                onChange={(e) =>
                  setNewUserInputs({
                    ...newUserInputs,
                    username: e.target.value,
                  })
                }
              />
              <Input
                placeholder={"Password*"}
                borderRadius={[10, 12, 15]}
                size={["sm", "md", "lg"]}
                className={"container"}
                value={newUserInputs.password}
                onChange={(e) =>
                  setNewUserInputs({
                    ...newUserInputs,
                    password: e.target.value,
                  })
                }
              />
              <Input
                placeholder={"Confirm password*"}
                borderRadius={[10, 12, 15]}
                size={["sm", "md", "lg"]}
                className={"container"}
                value={newConfirmPassword}
                onChange={(e) => setNewConfirmPassword(e.target.value)}
              />
              <Button
                borderRadius={[10, 12, 15]}
                size={["sm", "md", "lg"]}
                className={"background"}
                isDisabled={signupIsDisabled}
                onClick={signUp}
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
