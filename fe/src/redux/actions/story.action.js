export const fetchStoriesAction = () => {
  return {
    type: "FETCH_STORIES",
  };
};

export const fetchStoriesCompletedAction = (payload) => {
  return {
    type: "FETCH_STORIES_COMPLETED",
    payload: payload,
  };
};

export const fetchStoriesErrorAction = () => {
  return {
    type: "FETCH_STORIES_ERROR",
  };
};
