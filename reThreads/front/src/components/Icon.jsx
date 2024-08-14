/* eslint-disable react/prop-types */
import { Icon as IconChakra } from "@chakra-ui/react";
import {
  ArrowIcon,
  BarsIcon,
  CommentIcon,
  EllipsisIcon,
  HeartIcon,
  HomeIcon,
  MoonIcon,
  PlusIcon,
  ProfileIcon,
  SearchIcon,
  SunIcon,
  ShareIcon,
  ThreadsIcon,
} from "./Icons";

const Icon = ({ name, size, ...props }) => {
  const icons = {
    arrow: ArrowIcon,
    bars: BarsIcon,
    comment: CommentIcon,
    ellipsis: EllipsisIcon,
    heart: HeartIcon,
    home: HomeIcon,
    moon: MoonIcon,
    plus: PlusIcon,
    profile: ProfileIcon,
    search: SearchIcon,
    share: ShareIcon,
    sun: SunIcon,
    threads: ThreadsIcon,
  };

  const SelectedIcon = icons[name];

  if (!SelectedIcon) {
    return null;
  }

  return (
    <IconChakra
      as={SelectedIcon}
      name={name}
      boxSize={size}
      {...props}
      className={"text"}
    />
  );
};

export default Icon;
