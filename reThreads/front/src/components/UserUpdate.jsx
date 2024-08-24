import { useState, useRef } from "react";
import {
  Box,
  Button,
  Input,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  ModalContent,
  Stack,
  useDisclosure,
  Avatar,
} from "@chakra-ui/react";
import useCustomToast from "../hooks/useCustomToast";
import usePreviewImage from "../hooks/usePreviewImage";
import { useRecoilValue } from "recoil";
import userAtom from "../atoms/userAtom";

const UserUpdate = () => {
  const user = useRecoilValue(userAtom);
  const fileRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const showToast = useCustomToast();

  const [inputs, setInputs] = useState({
    name: user.name,
    biography: user.biography,
    username: user.username,
    password: user.password,
  });
  const { imgUrl, handleImgChange } = usePreviewImage();

  const userUpdate = async () => {
    if (
      !inputs.name ||
      !inputs.biography ||
      !inputs.username ||
      !inputs.password
    ) {
      throw new Error("Fill in at least one field!");
    }

    showToast("Updating profile...", "info");

    try {
      const res = await fetch(`/api/users/update/${user._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...inputs, picture: imgUrl }),
      });

      const data = await res.json();
      console.log(user._id);
      if (data.status === 200) {
        showToast(data.message, "success");
        localStorage.setItem("user-threads", JSON.stringify(data.user));
      } else {
        showToast(data.message, "error");
      }
    } catch (err) {
      showToast(err.message, "error");
    }
  };

  return (
    <Box>
      <Button
        w={"full"}
        h={"auto"}
        my={3}
        py={1.5}
        fontSize={["7px", "9px", "11px"]}
        border={"1px solid #616161"}
        onClick={onOpen}
      >
        Edit Profile
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent
          py={5}
          border={"1px solid #616161"}
          borderRadius={"10%"}
          className={"lightBlack"}
        >
          <ModalHeader textAlign={"center"}>Edit Profile</ModalHeader>
          <ModalBody as={Stack} direction={"column"} spacing={2}>
            <Stack
              direction={"row"}
              pb={5}
              alignItems={"center"}
              justifyContent={"space-evenly"}
            >
              <Avatar
                size={"lg"}
                src={imgUrl || user.picture}
                border={"1px solid #616161"}
              />
              <Input type={"file"} ref={fileRef} onChange={handleImgChange} />
            </Stack>
            <Input
              placeholder={"Name (3 or more characters)"}
              borderRadius={[10, 12, 15]}
              size={["sm", "md", "lg"]}
              className={"container"}
              value={inputs.name}
              onChange={(e) =>
                setInputs({
                  ...inputs,
                  name: e.target.value,
                })
              }
            />
            <Input
              placeholder={"Username"}
              borderRadius={[10, 12, 15]}
              size={["sm", "md", "lg"]}
              className={"container"}
              value={inputs.username}
              onChange={(e) =>
                setInputs({
                  ...inputs,
                  username: e.target.value,
                })
              }
            />
            <Input
              placeholder={"Password (8 or more characters)"}
              type={"password"}
              borderRadius={[10, 12, 15]}
              size={["sm", "md", "lg"]}
              className={"container"}
              value={inputs.password}
              onChange={(e) =>
                setInputs({
                  ...inputs,
                  password: e.target.value,
                })
              }
            />
            <Button
              border={"1px solid #616161"}
              borderRadius={[10, 12, 15]}
              size={["sm", "md", "lg"]}
              className={"icon"}
              onClick={userUpdate}
            >
              Update
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default UserUpdate;
