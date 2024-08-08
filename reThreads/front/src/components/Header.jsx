/* eslint-disable react/prop-types */
import { Link, Navigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";

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

import userAtom from "../atoms/userAtom";

const NavButton = (props, { onClick }) => {
  return (
    <Button
      as={FontAwesomeIcon}
      size={["xxs", "xs"]}
      p={2}
      bg={"unset"}
      icon={props.icon}
      onClick={onClick}
      className={"icon"}
    />
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
      w={["full", "full", "full", "5vh"]}
      h={["5vh", "5vh", "5vh", "full"]}
      p={2}
      position={"fixed"}
      left={["auto", "auto", "auto", 0]}
      bottom={[0, 0, 0, "auto"]}
      flexDirection={["row", "row", "row", "column"]}
      alignItems={"center"}
      justifyContent={"space-between"}
      zIndex={10}
      border={"1px solid #616161"}
      className={"darkBlack"}
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
        <Link to={`/${user.username}`}>
          <NavButton icon={faUser} />
        </Link>
      </Stack>
      <Stack>
        <HeaderMenu user={user} />
      </Stack>
      {user && (
        <Button
          as={FontAwesomeIcon}
          w={100}
          h={80}
          position={"fixed"}
          bottom={10}
          right={10}
          visibility={["hidden", "hidden", "hidden", "visible"]}
          border={"1px solid #616161"}
          borderRadius={15}
        />
      )}
    </Flex>
  );
};

export default Header;
