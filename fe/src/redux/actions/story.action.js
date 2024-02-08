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

export const updateStoriesAction = (payload) => {
  return {
    type: "UPDATE_STORY",
    payload: payload,
  };
};

export const updateStoriesCompletedAction = (payload) => {
  return {
    type: "UPDATE_STORY_COMPLETED",
    payload: payload,
  };
};

export const updateStoriesErrorAction = () => {
  return {
    type: "UPDATE_STORY_ERROR",
  };
};
