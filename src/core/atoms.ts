import { atom } from "recoil";

export const isDarkAtom = atom({
  key: "isDark", //이름인데 유니크
  default: false,
});
