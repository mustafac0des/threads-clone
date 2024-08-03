import {
  Box,
  Button,
  Container,
  Image,
  Input,
  Tabs,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Text,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThreads } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import useCustomToast from "../hooks/useCustomToast";
import { useSetRecoilState } from "recoil";
import userAtom from "../atoms/userAtom";

const AuthPage = () => {
  const showToast = useCustomToast();

  const [user_inputs, set_user_inputs] = useState({
    username: "",
    password: "",
  });

  const [new_user_inputs, set_new_user_inputs] = useState({
    name: "",
    username: "",
    password: "",
  });

  const [confirm_password, set_confirm_password] = useState("");

  const setUser = useSetRecoilState(userAtom);

  const sign_in = async () => {
    if (user_inputs.username === "" || user_inputs.password === "") {
      return showToast("Fill in both fields!", "info");
    }

    showToast("Signing in!", "info");

    try {
      const res = await fetch("/api/users/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user_inputs),
      });

      const data = await res.json();

      if (data.status === 200) {
        showToast(data.message, "success");
        localStorage.setItem("user-threads", JSON.stringify(data.user));
        setUser(data.user);
      } else if (data.status === 400) {
        showToast(data.message, "warning");
      } else {
        showToast(data.message, "error");
      }
    } catch {
      showToast("Error while fetching!", "error");
    }
  };

  const sign_up = async () => {
    if (
      new_user_inputs.name.length < 3 ||
      new_user_inputs.name.length > 15 ||
      new_user_inputs.password.length < 8
    ) {
      return showToast({
        title: "Fill in the fields as per the requirements!",
        status: "warning",
      });
    }

    if (new_user_inputs.password !== confirm_password) {
      return showToast({
        title: "Passwords don't match!",
        status: "warning",
      });
    }

    showToast({
      title: "Creating account...",
      status: "info",
    });

    try {
      const res = await fetch("/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(new_user_inputs),
      });

      const data = await res.json();

      if (data.status === 200) {
        showToast({
          title: data.message,
          status: "success",
        });
      } else {
        showToast({
          title: data.message,
          status: "error",
        });
      }
    } catch {
      showToast({
        title: "Error while fetching! Try again.",
        status: "error",
      });
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
                value={user_inputs.username}
                onChange={(e) =>
                  set_user_inputs({ ...user_inputs, username: e.target.value })
                }
              />
              <Input
                placeholder={"Password*"}
                borderRadius={[10, 12, 15]}
                size={["sm", "md", "lg"]}
                className={"container"}
                value={user_inputs.password}
                onChange={(e) =>
                  set_user_inputs({ ...user_inputs, password: e.target.value })
                }
              />
              <Button
                borderRadius={[10, 12, 15]}
                size={["sm", "md", "lg"]}
                className={"icon"}
                onClick={sign_in}
              >
                Sign in
              </Button>
            </Stack>
          </TabPanel>
          <TabPanel>
            <Stack spacing={2}>
              <Input
                placeholder={"Name (3 or more characters)*"}
                borderRadius={[10, 12, 15]}
                size={["sm", "md", "lg"]}
                className={"container"}
                value={new_user_inputs.name}
                onChange={(e) =>
                  set_new_user_inputs({
                    ...new_user_inputs,
                    name: e.target.value,
                  })
                }
              />
              <Input
                placeholder={"Username*"}
                borderRadius={[10, 12, 15]}
                size={["sm", "md", "lg"]}
                className={"container"}
                value={new_user_inputs.username}
                onChange={(e) =>
                  set_new_user_inputs({
                    ...new_user_inputs,
                    username: e.target.value,
                  })
                }
              />
              <Input
                placeholder={"Password (8 or more characters)*"}
                borderRadius={[10, 12, 15]}
                size={["sm", "md", "lg"]}
                className={"container"}
                value={new_user_inputs.password}
                onChange={(e) =>
                  set_new_user_inputs({
                    ...new_user_inputs,
                    password: e.target.value,
                  })
                }
              />
              <Input
                placeholder={"Confirm password*"}
                borderRadius={[10, 12, 15]}
                size={["sm", "md", "lg"]}
                className={"container"}
                value={confirm_password}
                onChange={(e) => set_confirm_password(e.target.value)}
              />
              <Button
                borderRadius={[10, 12, 15]}
                size={["sm", "md", "lg"]}
                className={"icons"}
                onClick={sign_up}
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
