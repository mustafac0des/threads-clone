/* eslint-disable react/prop-types */
import { Button, Stack, Text } from "@chakra-ui/react";
import Icon from "./Icon";
import useCustomToast from "../hooks/useCustomToast";

const ActionButton = (props) => {
  return (
    <Button
      w={0}
      h={7}
      borderRadius={"full"}
      bg={"unset"}
      onClick={props.onClick}
    >
      <Icon name={props.icon} />
      {props.count ? (
        <Text ml={1.5} fontSize={10}>
          {props.count}
        </Text>
      ) : null}
    </Button>
  );
};

const Actions = (props) => {
  const showToast = useCustomToast();

  const postLike = async () => {
    try {
      const res = await fetch(`/api/posts/like/${props.post._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (data.status === 200) {
        showToast(data.message, "success");
      } else {
        showToast(data.message, "error");
      }
    } catch (err) {
      showToast(err.message, "error");
    }
  };

  const postRepost = async () => {
    const userConfirmed = window.confirm("Do you want to repost this post?");

    if (userConfirmed) {
      showToast("Reposting...", "info");
      try {
        const res = await fetch(`/api/posts/${props.post._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await res.json();

        if (data.status === 200) {
          showToast(data.message, "success");
        } else {
          showToast(data.message, "error");
        }
      } catch (err) {
        showToast(err.message, "error");
      }
    } else {
      showToast("Reposting cancelled!", "info");
    }
  };

  const copyToClipboard = () => {
    const link = `localhost:3000/${props.post.postedBy.username}/post/${props.post._id}`;
    navigator.clipboard.writeText(link);
    showToast("Post link copied to clipboard!", "success");
  };

  return (
    <Stack direction={"row"} ml={-2}>
      <ActionButton
        icon={"heart"}
        count={props.post.likes.length}
        onClick={postLike}
      />
      <ActionButton
        icon={"comment"}
        count={props.post.replies.length}
        onClick
      />
      <ActionButton
        icon={"plus"}
        count={props.post.repostedBy.length}
        onClick={postRepost}
      />
      <ActionButton icon={"share"} onClick={copyToClipboard} />
    </Stack>
  );
};

export default Actions;
