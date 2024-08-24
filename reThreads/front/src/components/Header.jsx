/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import userAtom from "../atoms/userAtom";

import {
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

import Icon from "./Icon";

const NavButton = ({ icon, onClick }) => {
  return (
    <Button p={2} bg={"unset"} onClick={onClick}>
      <Icon name={icon} size={[4, 5, 6]} color={"white"} />
    </Button>
  );
};

const HeaderMenu = (props) => {
  const setUser = useSetRecoilState(userAtom);
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Menu>
      <MenuButton>
        <NavButton icon={"bars"} />
      </MenuButton>
      <MenuList
        p={1}
        fontWeight={600}
        border={"1px solid"}
        borderColor={"#616161"}
        borderRadius={10}
        className={"lightBlack"}
      >
        <MenuGroup title={"Switch to"}>
          <MenuItem borderRadius={3} bg={"unset"}>
            <Button flex={1} onClick={toggleColorMode}>
              <Icon name={colorMode === "dark" ? "sun" : "moon"} />
              <Text flex={1}>
                {colorMode === "dark" ? "Light" : "Dark"} Mode
              </Text>
            </Button>
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
      className={"darkBlack"}
    >
      <Link to={"/"}>
        <NavButton icon={"threads"} />
      </Link>
      <Stack direction={["row", "row", "row", "column"]}>
        <Link to={"/"}>
          <NavButton icon={"home"} />
        </Link>
        <NavButton icon={"heart"} />
        {user && (
          <Box display={["block", "block", "block", "none"]}>
            <NavButton icon={"plus"} />
          </Box>
        )}
        <NavButton icon={"search"} />
        <Link to={`/${user.username}`}>
          <NavButton icon={"profile"} />
        </Link>
      </Stack>
      <Stack>
        <HeaderMenu user={user} />
      </Stack>
      {user && (
        <Button
          w={100}
          h={20}
          position={"fixed"}
          bottom={10}
          right={10}
          visibility={["hidden", "hidden", "hidden", "visible"]}
          border={"1px solid #616161"}
          borderRadius={15}
        >
          <Icon name={"plus"} size={8} />
        </Button>
      )}
    </Flex>
  );
};

export default Header;
