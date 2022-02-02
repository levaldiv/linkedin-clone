import { atom } from "recoil";

// boolean value
export const handlePostState = atom({
  key: "handlePostState",
  default: false,
});

// storing all posts when the modal is clicked
export const getPostState = atom({
  key: "getPostState",
  default: {},
});

export const useSSRPostsState = atom({
  key: "useSSRPostsState",
  default: true,
});
