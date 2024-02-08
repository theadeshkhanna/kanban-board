const initialState = {
  stories: [],
  isLoading: false,
  isError: false,
};

const storyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_STORIES":
    case "UPDATE_STORY":
      {
        return {
          ...state,
          isLoading: true,
        };
      }
      break;
    case "FETCH_STORIES_COMPLETED":
    case "UPDATE_STORY_COMPLETED":
      {
        return {
          ...state,
          isLoading: false,
          stories: action.payload,
        };
      }
      break;
    case "FETCH_STORIES_ERROR":
    case "UPDATE_STORY_ERROR":
      {
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      }
      break;
    default: {
      return state;
    }
  }
};

export default storyReducer;
