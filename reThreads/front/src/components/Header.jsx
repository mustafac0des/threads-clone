/* eslint-disable react/prop-types */
import {
  ButtonGroup,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  MenuGroup,
  Button,
  Flex,
  Stack,
  useColorMode,
  Text,
  Box,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThreads } from "@fortawesome/free-brands-svg-icons";
import {
  faHouse,
  faPlus,
  faHeart,
  faUser,
  faBars,
  faSearch,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import userAtom from "../atoms/userAtom";

const NavButton = (props, { onClick }) => {
  return (
    <Button
      w={"50px"}
      h={"50px"}
      bg={"unset"}
      onClick={onClick}
      className={"icon"}
    >
      <FontAwesomeIcon size={"xl"} icon={props.icon} className={"text"} />
    </Button>
  );
};

const HeaderMenu = (props) => {
  const setUser = useSetRecoilState(userAtom);
  const { toggleColorMode } = useColorMode();

  return (
    <Menu>
      <MenuButton onClick={toggleColorMode}>
        <NavButton icon={faBars} />
      </MenuButton>
      <MenuList
        p={1}
        fontWeight={600}
        border={"1px solid"}
        borderColor={"#616161"}
        borderRadius={10}
        className={"background"}
      >
        <MenuGroup title={"Appearance"}>
          <MenuItem borderRadius={3} bg={"unset"}>
            <ButtonGroup
              isAttached
              flex={1}
              border={"1px solid #999999"}
              borderRadius={5}
            >
              <Button flex={1}>
                <FontAwesomeIcon icon={faSun} />
              </Button>
              <Button flex={1}>
                <FontAwesomeIcon icon={faMoon} />
              </Button>
              <Button flex={1} onClick={() => {}}>
                <Text>Auto</Text>
              </Button>
            </ButtonGroup>
          </MenuItem>
        </MenuGroup>
        {props.user && (
          <>
            <MenuDivider />
            <MenuGroup bg={"unset"}>
              <MenuItem
                borderRadius={3}
                bg={"unset"}
                _hover={{ fontWeight: "600" }}
              >
                Report a problem
              </MenuItem>
              <MenuItem
                borderRadius={3}
                bg={"unset"}
                _hover={{ fontWeight: "600" }}
                onClick={() => {
                  localStorage.removeItem("user-threads");
                  setUser(null);
                }}
              >
                Logout
              </MenuItem>
            </MenuGroup>
          </>
        )}
      </MenuList>
    </Menu>
  );
};

const Header = () => {
  const user = useRecoilValue(userAtom);
  return (
    <Flex
      w={["full", "full", "full", "auto"]}
      h={["5vh", "5vh", "5vh", "100vh"]}
      pt={"2px"}
      pl={"2px"}
      pr={"2px"}
      pb={"10px"}
      position={"Fixed"}
      left={["auto", "auto", "auto", "0px"]}
      bottom={["0px", "0px", "0px", "auto"]}
      flexDirection={["row", "row", "row", "column"]}
      alignItems={"center"}
      justifyContent={"space-between"}
      className={"background"}
    >
      <NavButton icon={faThreads} />
      <Stack direction={["row", "row", "row", "column"]}>
        <NavButton icon={faHouse} />
        <NavButton icon={faSearch} />
        {user && (
          <Box display={["block", "block", "block", "none"]}>
            <NavButton icon={faPlus} />
          </Box>
        )}
        <NavButton icon={faHeart} />
        <Link to={"/mustafa"}>
          <NavButton icon={faUser} />
        </Link>
      </Stack>
      <Stack>
        <HeaderMenu user={user} />
      </Stack>
      {user && (
        <Button
          visibility={["hidden", "hidden", "hidden", "visible"]}
          w={"100px"}
          h={"80px"}
          position={"fixed"}
          bottom={10}
          right={10}
          border={"1px solid #616161"}
          borderRadius={15}
        >
          <FontAwesomeIcon size={"2xl"} icon={faPlus} />
        </Button>
      )}
    </Flex>
  );
};

export default Header;
