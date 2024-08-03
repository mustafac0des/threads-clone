import { useState, useRef } from "react";
import {
  Box,
  Button,
  Image,
  Input,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  ModalContent,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import useCustomToast from "../hooks/useCustomToast";
import useImage from "../hooks/useImage";

const UserUpdate = () => {
  const showToast = useCustomToast();
  const fileRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [inputs, setInputs] = useState({
    name: "",
    biography: "",
    username: "",
    password: "",
  });

  const Update = () => {
    if (
      !inputs.name ||
      !inputs.biography ||
      !inputs.username ||
      !inputs.password
    ) {
      return showToast("Fill in at least one field", "error");
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
          border={"1px solid #666666"}
          borderRadius={"10%"}
          className={"background"}
        >
          <ModalHeader textAlign={"center"}>Edit Profile</ModalHeader>
          <ModalBody as={Stack} direction={"column"} spacing={2}>
            <Stack
              direction={"row"}
              pb={5}
              alignItems={"center"}
              justifyContent={"space-evenly"}
            >
              <Box>
                <Image
                  src={fileRef}
                  width={["65px", "85px", "105px"]}
                  border={"1px solid #616161"}
                  borderRadius={"100%"}
                />
              </Box>
              <Input type={"file"} ref={fileRef} onChange={useImage} />
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
              borderRadius={[10, 12, 15]}
              size={["sm", "md", "lg"]}
              className={"icon"}
              onClick={Update}
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
