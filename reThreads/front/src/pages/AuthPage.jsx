import { useState } from "react";
import { useSetRecoilState } from "recoil";
import {
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

import Icon from "../components/Icon";
import userAtom from "../atoms/userAtom";
import useCustomToast from "../hooks/useCustomToast";

const AuthPage = () => {
  const showToast = useCustomToast();

  const [userInputs, setUserInputs] = useState({
    username: "",
    password: "",
  });

  const [newUserInputs, setNewUserInputs] = useState({
    name: "",
    username: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");

  const setUser = useSetRecoilState(userAtom);

  const userSignIn = async () => {
    if (userInputs.username === "" || userInputs.password === "") {
      return showToast("Fill in both fields!", "info");
    }

    showToast("Signing in...", "info");

    try {
      const res = await fetch("/api/users/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInputs),
      });

      const data = await res.json();

      if (data.status === 200) {
        showToast(data.message, "success");
        localStorage.setItem("user-threads", JSON.stringify(data.user));
        setUser(data.user);
      } else {
        showToast(data.message, "error");
      }
    } catch (err) {
      showToast(err.message, "error");
    }
  };

  const userSignUp = async () => {
    if (
      newUserInputs.name.length < 3 ||
      newUserInputs.name.length > 15 ||
      newUserInputs.password.length < 8
    ) {
      return showToast({
        title: "Fill in the fields as per the requirements!",
        status: "warning",
      });
    }

    if (newUserInputs.password !== confirmPassword) {
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
        body: JSON.stringify(newUserInputs),
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
    } catch (err) {
      showToast({
        title: err.message,
        status: "error",
      });
    }
  };

  return (
    <Container centerContent>
      <Image
        minW={[320, 480, 768, 1280, 1440, 1920]}
        src={"https://static.cdninstagram.com/rsrc.php/v3/yU/r/7LVg0KiH0gH.png"}
      />
      <Stack w={[300, 350, 400]} gap={[3, 5, 7, 10]}>
        <Icon name={"threads"} size={10} className={"text"} />
        <Tabs isFitted variant={"enclosed"}>
          <TabList>
            <Tab fontSize={[10, 12, 16]} className={"text"}>
              Sign in
            </Tab>
            <Tab fontSize={[10, 12, 16]} className={"text"}>
              Sign up
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Stack spacing={2}>
                <Input
                  borderRadius={[10, 12, 15]}
                  placeholder={"Username*"}
                  value={userInputs.username}
                  onChange={(e) =>
                    setUserInputs({ ...userInputs, username: e.target.value })
                  }
                  className={"text"}
                />
                <Input
                  placeholder={"Password*"}
                  borderRadius={[10, 12, 15]}
                  value={userInputs.password}
                  onChange={(e) =>
                    setUserInputs({ ...userInputs, password: e.target.value })
                  }
                  className={"text"}
                />
                <Button
                  fontSize={[10, 12, 16]}
                  borderRadius={[10, 12, 15]}
                  onClick={userSignIn}
                  className={"text"}
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
                  value={newUserInputs.name}
                  onChange={(e) =>
                    setNewUserInputs({
                      ...newUserInputs,
                      name: e.target.value,
                    })
                  }
                  className={"text"}
                />
                <Input
                  placeholder={"Username*"}
                  borderRadius={[10, 12, 15]}
                  value={newUserInputs.username}
                  onChange={(e) =>
                    setNewUserInputs({
                      ...newUserInputs,
                      username: e.target.value,
                    })
                  }
                  className={"text"}
                />
                <Input
                  placeholder={"Password (8 or more characters)*"}
                  borderRadius={[10, 12, 15]}
                  value={newUserInputs.password}
                  onChange={(e) =>
                    setNewUserInputs({
                      ...newUserInputs,
                      password: e.target.value,
                    })
                  }
                  className={"text"}
                />
                <Input
                  placeholder={"Confirm password*"}
                  borderRadius={[10, 12, 15]}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={"text"}
                />
                <Button
                  fontSize={[10, 12, 16]}
                  borderRadius={[10, 12, 15]}
                  onClick={userSignUp}
                  className={"text"}
                >
                  Sign up
                </Button>
              </Stack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
      <Text fontSize={[9, 10, 15]}>Threads Clone by Mustafa</Text>
    </Container>
  );
};

export default AuthPage;
