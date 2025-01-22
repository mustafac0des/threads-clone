import { atom } from "recoil";

const userAtom = atom({
  key: "user-threads",
  default: JSON.parse(localStorage.getItem("user-threads")),
});

export default userAtom;
