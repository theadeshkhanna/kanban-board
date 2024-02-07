import { createSelector } from "@reduxjs/toolkit";
import { storySelector } from "./index";

export const fetchStoriesSelector = createSelector(
  [storySelector],
  (storyState) => storyState.stories
);

export const fetchStoriesLoading = createSelector(
  [storySelector],
  (storyState) => storyState.isLoading
);
