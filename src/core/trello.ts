import { atom } from "recoil";

interface TrelloAtom {
  [key: string]: string[]
}
export const TrelloAtom = atom<TrelloAtom>({
  key: "trelloAtom",
  // default: ["a", "b", "c", "d", "e", "f"],
  default: {
    todo: ["a", "b",],
    doing: [ "c", "d", "e",],
    done: [ "f"]
  }
});
