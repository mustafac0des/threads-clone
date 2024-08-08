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
import { useRecoilState } from "recoil";
import userAtom from "../atoms/userAtom";

const UserUpdate = () => {
  const showToast = useCustomToast();
  const fileRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const user = useRecoilState(userAtom);
  const [inputs, setInputs] = useState({
    name: user[0].name,
    biography: user[0].biography,
    username: user[0].username,
    password: user[0].password,
  });
  const { imgUrl, handleImgChange } = usePreviewImage();
  console.log(imgUrl);

  const Update = async () => {
    if (
      !inputs.name ||
      !inputs.biography ||
      !inputs.username ||
      !inputs.password
    ) {
      return showToast("Fill in at least one field", "error");
    }

    showToast("Updating profile...", "info");

    try {
      const res = await fetch(`/api/users/update/${user[0]._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...inputs, picture: imgUrl }),
      });

      const data = await res.json();
      if (data.status === 200) {
        showToast(data.message, "success");
      } else {
        showToast(data.message, "error");
      }
    } catch {
      return showToast("Error while updating the profile!", "error");
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
                src={imgUrl || user[0].picture}
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
              onClick={Update && onClose}
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
