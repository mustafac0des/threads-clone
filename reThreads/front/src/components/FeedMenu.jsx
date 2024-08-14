import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from "@chakra-ui/react";

import Icon from "./Icon";

const FeedMenu = () => {
  return (
    <Stack my={[2, 3]} direction={"horizontal"} alignItems={"center"}>
      <Text fontSize={[12, 13, 14]} fontWeight={600}>
        For You
      </Text>
      <Menu>
        <MenuButton
          as={Button}
          w={0}
          size={"xs"}
          p={0}
          border={"1px solid #616161"}
          borderRadius={"full"}
        >
          <Icon name={"arrow"} />
        </MenuButton>
        <MenuList
          fontSize={["12px", "13px", "14px"]}
          fontWeight={600}
          border={"1px solid #616161"}
          borderRadius={10}
          className={"darkBlack"}
        >
          <MenuItem
            bg={"transparent"}
            _hover={{ fontWeight: 600 }}
            borderRadius={3}
          >
            For You
          </MenuItem>
          <MenuItem
            bg={"transparent"}
            _hover={{ fontWeight: 600 }}
            borderRadius={3}
          >
            Following
          </MenuItem>
          <MenuItem
            bg={"transparent"}
            _hover={{ fontWeight: 600 }}
            borderRadius={3}
          >
            Liked
          </MenuItem>
          <MenuItem
            bg={"transparent"}
            _hover={{ fontWeight: 600 }}
            borderRadius={3}
          >
            Saved
          </MenuItem>
        </MenuList>
      </Menu>
    </Stack>
  );
};

export default FeedMenu;
