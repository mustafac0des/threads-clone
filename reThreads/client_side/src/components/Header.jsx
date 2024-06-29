import { Button, Flex, useColorMode } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThreads } from "@fortawesome/free-brands-svg-icons";
import {
  faHouse,
  faMagnifyingGlass,
  faPlus,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Threads = ({ onClick }) => {
  return (
    <Button sx={styles.threadsButton} onClick={onClick}>
      <FontAwesomeIcon size={"3x"} icon={faThreads} style={styles.faIcon} />
    </Button>
  );
};

const Home = () => {
  return (
    <Button sx={styles.button}>
      <FontAwesomeIcon size={"2x"} icon={faHouse} style={styles.faIcon} />
    </Button>
  );
};

const Search = () => {
  return (
    <Button sx={styles.button}>
      <FontAwesomeIcon
        size={"2x"}
        icon={faMagnifyingGlass}
        style={styles.faIcon}
      />
    </Button>
  );
};

const Post = () => {
  return (
    <Button sx={styles.button}>
      <FontAwesomeIcon size={"2x"} icon={faPlus} style={styles.faIcon} />
    </Button>
  );
};

const Activity = () => {
  return (
    <Button sx={styles.button}>
      <FontAwesomeIcon size={"2x"} icon={faHeart} style={styles.faIcon} />
    </Button>
  );
};

const Profile = () => {
  return (
    <Button sx={styles.button}>
      <FontAwesomeIcon size={"2x"} icon={faUser} style={styles.faIcon} />
    </Button>
  );
};

const Header = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Flex
      w={"full"}
      mt={2}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Threads onClick={toggleColorMode} />
      <Flex gap={1}>
        <Home />
        <Search />
        <Post />
        <Activity />
        <Link to={"/mustafa"}>
          <Profile />
        </Link>
      </Flex>
      <Button>Log in</Button>
    </Flex>
  );
};

const styles = {
  threadsButton: {
    width: "60px",
    height: "60px",
    borderRadius: "full",
    backgroundColor: "transparent",
  },
  button: {
    width: "75px",
    height: "60px",
    borderRadius: "10px",
    backgroundColor: "transparent",
  },

  faIcon: (colorMode) => ({
    color: colorMode === "dark" ? "#FFFFFF" : "#000000",
  }),
};

export default Header;
