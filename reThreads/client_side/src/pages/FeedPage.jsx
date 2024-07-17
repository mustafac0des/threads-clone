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
  Input,
  Textarea,
} from "@chakra-ui/react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FeedbackPost from "../components/FeedPost";

const FeedMenu = () => {
  return (
    <Menu bg={"transparent"}>
      <MenuButton
        as={Button}
        size={"xs"}
        border={"1px solid #616161"}
        borderRadius={"full"}
      >
        <FontAwesomeIcon icon={faAngleDown} />
      </MenuButton>
      <MenuList
        p={1}
        fontWeight={600}
        border={"1px solid #616161"}
        borderRadius={10}
        bg={"#1A1A1A"}
      >
        <MenuItem
          bg={"transparent"}
          _hover={{ bg: "#616161" }}
          borderRadius={3}
        >
          For you
        </MenuItem>
        <MenuItem
          bg={"transparent"}
          _hover={{ bg: "#616161" }}
          borderRadius={3}
        >
          Following
        </MenuItem>
        <MenuItem
          bg={"transparent"}
          _hover={{ bg: "#616161" }}
          borderRadius={3}
        >
          Liked
        </MenuItem>
        <MenuItem
          bg={"transparent"}
          _hover={{ bg: "#616161" }}
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
        w={"40px"}
        border={"1px solid #999999"}
        borderRadius={"full"}
      />
      <Text fontSize={14} className="icon">
        Start a thread...
      </Text>
      <Modal isOpen={props.isOpen} onClose={props.onClose} isCentered>
        <ModalOverlay />
        <ModalContent borderRadius={15} className={"container"}>
          <ModalBody m={0} pl={0}>
            <Container my={2}>
              <Stack direction={"row"} spacing={3}>
                <Stack direction={"column"} alignItems={"center"}>
                  <Box w={"40px"} className={"icon"}>
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
                    w={0}
                    minH={"20px"}
                    borderWidth={"2px"}
                  />
                </Stack>
                <Stack w={"full"} direction={"column"}>
                  <Text fontSize={13} fontWeight={600}>
                    {props.name || "Mustafa"}
                  </Text>
                  <Textarea
                    placeholder="Start a thread..."
                    resize="none"
                    mt={-2}
                    p={0}
                    border={0}
                    _focus={{ boxShadow: "none" }}
                    size="xs"
                    maxLength={400}
                    minHeight="40px" // Set a minimum height to prevent collapsing
                    css={{
                      resize: "none", // Disable manual resizing
                      overflowY: "hidden", // Hide overflow to prevent scrollbars
                      lineHeight: "1.2", // Adjust line height for readability
                    }}
                  />
                </Stack>
              </Stack>
            </Container>
          </ModalBody>
          <ModalFooter w={"auto"} h={"auto"} p={0}>
            <Button
              m={5}
              size={"sm"}
              fontSize={13}
              border={"1px solid #999999"}
              borderRadius={"10px"}
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      mt={5}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      overflow={"hidden"}
      className={"text"}
    >
      <Flex alignItems={"center"} gap={3}>
        <Box>
          <Text fontWeight={600}>For You</Text>
        </Box>
        <Box>
          <FeedMenu />
        </Box>
      </Flex>
      <Container
        minW={"720"}
        minH={"100vh"}
        mt={5}
        borderRadius={"25"}
        border={"1px solid #616161"}
        centerContent
        className={"container"}
      >
        <Flex
          w={"full"}
          my={5}
          px={5}
          alignItems={"center"}
          justifyContent={"space-between"}
          onClick={onOpen}
        >
          <Box>
            <Post isOpen={isOpen} onClose={onClose} />
          </Box>
          <Button
            w={"60px"}
            h={"35px"}
            className={"container"}
            border={"1px solid #999999"}
            borderRadius={12}
          >
            Post
          </Button>
        </Flex>
        <Divider minW={"110%"} />
        <FeedbackPost
          profilePicture={""}
          uploadTime={"1h"}
          text={""}
          image={
            "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-4.0.3https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=2099&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
      </Container>
    </Flex>
  );
};

export default FeedPage;
