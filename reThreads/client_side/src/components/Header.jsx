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

const NavButton = (props, { onClick }) => {
  return (
    <Button sx={styles.button} onClick={onClick} className={"icon"}>
      <FontAwesomeIcon size={"xl"} icon={props.icon} className={"text"} />
    </Button>
  );
};

const HeaderMenu = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <Menu>
      <MenuButton>
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
        <MenuGroup title={"Appearance"} bg={"transparent"}>
          <MenuItem borderRadius={3} bg={"transparent"}>
            <ButtonGroup
              isAttached
              flex={1}
              border={"1px solid #999999"}
              borderRadius={5}
            >
              <Button flex={1}>
                <FontAwesomeIcon icon={faSun} onClick={toggleColorMode} />
              </Button>
              <Button flex={1}>
                <FontAwesomeIcon icon={faMoon} onClick={toggleColorMode} />
              </Button>
              <Button flex={1} onClick={() => {}}>
                <Text>Auto</Text>
              </Button>
            </ButtonGroup>
          </MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup bg={"transparent"}>
          <MenuItem
            borderRadius={3}
            bg={"transparent"}
            _hover={{ bg: "#616161" }}
          >
            Report a problem
          </MenuItem>
          <MenuItem
            borderRadius={3}
            bg={"transparent"}
            _hover={{ bg: "#616161" }}
          >
            Logout
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};

const Header = () => {
  // write a logged in button for the plus
  const isLoggedIn = true;

  return (
    <Flex
      h={"98vh"}
      mt={2}
      ml={2}
      position={"Fixed"}
      left={0}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <NavButton icon={faThreads} />
      <Stack>
        <NavButton icon={faHouse} />
        <NavButton icon={faSearch} />
        {!isLoggedIn && <NavButton icon={faPlus} />}
        <NavButton icon={faHeart} />
        <Link to={"/mustafa"}>
          <NavButton icon={faUser} />
        </Link>
      </Stack>
      <Stack>
        <HeaderMenu />
      </Stack>
      {isLoggedIn && (
        <Button
          w={110}
          h={20}
          position={"fixed"}
          bottom={10}
          right={10}
          border={"1px solid #616161"}
          borderRadius={15}
        >
          <FontAwesomeIcon size={"2xl"} icon={faPlus} style={styles.faIcon} />
        </Button>
      )}
    </Flex>
  );
};

const styles = {
  button: {
    width: "50px",
    height: "50px",
    backgroundColor: "transparent",
  },
};

export default Header;
