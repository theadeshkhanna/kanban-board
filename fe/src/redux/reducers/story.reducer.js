const initialState = {
  stories: [],
  isLoading: false,
  isError: false,
};

const storyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_STORIES":
      {
        return {
          ...state,
          isLoading: true,
        };
      }
      break;
    case "FETCH_STORIES_COMPLETED":
      {
        console.log(action);

        return {
          ...state,
          isLoading: false,
          stories: action.payload,
        };
      }
      break;
    case "FETCH_STORIES_ERROR":
      {
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      }
      break;
    case "FETCH_STORY":
      {
      }
      break;
    case "CREATE_STORY":
      {
      }
      break;
    case "UPDATE_STORY":
      {
      }
      break;
    case "DELETE_STORY":
      {
      }
      break;
    default: {
      return state;
    }
  }
};

export default storyReducer;
