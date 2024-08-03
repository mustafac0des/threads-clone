/* eslint-disable react/prop-types */
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Button,
  Container,
  Flex,
  Text,
  Image,
  Stack,
  Divider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Textarea,
} from "@chakra-ui/react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserPost from "../components/UserPost";
import { useRecoilValue } from "recoil";
import userAtom from "../atoms/userAtom";

const FeedMenu = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        size={"xs"}
        p={0}
        border={"1px solid #616161"}
        borderRadius={"full"}
      >
        <FontAwesomeIcon icon={faAngleDown} />
      </MenuButton>
      <MenuList
        p={1}
        fontSize={["12px", "13px", "14px"]}
        fontWeight={600}
        border={"1px solid #616161"}
        borderRadius={10}
        className={"container"}
      >
        <MenuItem
          bg={"transparent"}
          _hover={{ fontWeight: "600" }}
          borderRadius={3}
        >
          For you
        </MenuItem>
        <MenuItem
          bg={"transparent"}
          _hover={{ fontWeight: "600" }}
          borderRadius={3}
        >
          Following
        </MenuItem>
        <MenuItem
          bg={"transparent"}
          _hover={{ fontWeight: "600" }}
          borderRadius={3}
        >
          Liked
        </MenuItem>
        <MenuItem
          bg={"transparent"}
          _hover={{ fontWeight: "600" }}
          borderRadius={3}
        >
          Saved
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

const Post = (props) => {
  return (
    <Stack direction={"horizontal"} alignItems={"center"}>
      <Image
        src={
          "https://yt3.ggpht.com/gtKyyf28tXVtyjap_Oy8GhJoPh9KewrudUjjdDSEgSu7BI0fDsTwGsqlu_VekNt0xUqgeX0YLg=s88-c-k-c0x00ffffff-no-rj"
        }
        w={["25px", "30px", "35px", "40px"]}
        border={"1px solid #999999"}
        borderRadius={"full"}
      />
      <Text fontSize={14} className="icon">
        Start a thread...
      </Text>
      <Modal isOpen={props.isOpen} onClose={props.onClose} isCentered>
        <ModalOverlay />
        <ModalContent
          borderRadius={["10px", "12px", "15px", "20px"]}
          className={"container"}
        >
          <ModalBody m={0} pl={0}>
            <Container my={["1px", "2px", "3px"]}>
              <Stack direction={"row"} spacing={["6px", "8px", "10px", "12px"]}>
                <Stack direction={"column"} alignItems={"center"}>
                  <Box w={["25px", "30px", "35px", "40px"]} className={"icon"}>
                    <Image
                      src={
                        props.profilePicture ||
                        "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
                      }
                      border={"1px solid #999999"}
                      borderRadius={"full"}
                    />
                  </Box>
                  <Divider
                    orientation={"vertical"}
                    minH={"30px"}
                    borderWidth={["1px", "1px", "2px"]}
                  />
                </Stack>
                <Stack w={"full"} direction={"column"}>
                  <Text fontSize={13} fontWeight={600}>
                    {props.name || "404"}
                  </Text>
                  <Textarea
                    placeholder={"Start a thread..."}
                    resize={"none"}
                    mt={-1}
                    p={0}
                    border={0}
                    _focus={{ boxShadow: "none" }}
                    fontSize={"12px"}
                    maxLength={400}
                  />
                </Stack>
              </Stack>
            </Container>
          </ModalBody>
          <ModalFooter p={0}>
            <Button
              mb={3}
              mr={3}
              size={"sm"}
              fontSize={13}
              border={"1px solid #999999"}
              borderRadius={["7px", "8px", "9px", "10px"]}
              className={"background"}
              onClick={props.onClose}
            >
              Post
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Stack>
  );
};

const FeedPage = () => {
  const user = useRecoilValue(userAtom);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      mt={[1, 2, 3, 4, 5, 6, 7]}
      alignItems={"center"}
      flexDirection={"column"}
      overflowX={"hidden"}
      overflowY={"scroll"}
      // style={{ scrollbarWidth: "none" }}
      className={"text"}
    >
      {user && (
        <Flex gap={["3px", "5px", "7px"]}>
          <Text fontSize={["12px", "13px", "14px", "15px"]} fontWeight={600}>
            For You
          </Text>
          <FeedMenu />
        </Flex>
      )}
      <Container
        minW={["full", "480px", "576px", "720px"]}
        mt={[1, 2, 3, 4, 5, 6, 7]}
        borderRadius={"25"}
        border={"1px solid #616161"}
        left={0}
        className={"container"}
      >
        {user && (
          <>
            <Flex
              w={"full"}
              my={[1, 2, 3, 4, 5, 6, 7]}
              px={[1, 2, 3, 4, 5, 6, 7]}
              alignItems={"center"}
              justifyContent={"space-between"}
              onClick={onOpen}
            >
              <Box>
                <Post isOpen={isOpen} onClose={onClose} />
              </Box>
              <Button
                w={["36px", "48px", "60px"]}
                h={["21px", "28px", "35px"]}
                fontSize={["12px", "13px", "14px", "15px"]}
                className={"container"}
                border={"1px solid #999999"}
                borderRadius={"12px"}
              >
                Post
              </Button>
            </Flex>
            <Divider />
          </>
        )}
        <Box mx={[1, 2, 3]}>
          <UserPost
            profilePicture={""}
            uploadTime={"1h"}
            text={""}
            image={
              "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-4.0.3https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=2099&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
          <UserPost
            profilePicture={""}
            uploadTime={"1h"}
            text={""}
            image={
              "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-4.0.3https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=2099&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
          <UserPost
            profilePicture={""}
            uploadTime={"1h"}
            text={""}
            image={
              "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-4.0.3https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=2099&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
          <UserPost
            profilePicture={""}
            uploadTime={"1h"}
            text={""}
            image={
              "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-4.0.3https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=2099&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
          <UserPost
            profilePicture={""}
            uploadTime={"1h"}
            text={""}
            image={
              "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-4.0.3https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=2099&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
        </Box>
      </Container>
    </Flex>
  );
};

export default FeedPage;
