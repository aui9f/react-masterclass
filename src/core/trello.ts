import { atom } from "recoil";

export const TrelloAtom = atom({
  key: "trelloAtom",
  default: ["a", "b", "c", "d", "e", "f"],
});
