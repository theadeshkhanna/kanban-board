const data = require("../data/stories.json");

const getStories = () => {
  return data.stories.map((story) => {
    const todos = story.todos || [];
    const totalTodos = todos.length;
    const completedTodos = todos.filter((todo) => todo.is_completed).length;

    return {
      id: story.id,
      title: story.title,
      created_at: story.created_at,
      created_by: story.created_by,
      status: story.status,
      todos: {
        total: totalTodos,
        completed: completedTodos,
      },
    };
  });
};

const updateStoryStatus = (id, status) => {
  const storyIndex = data.stories.findIndex((story) => story.id === id);
  if (storyIndex !== -1) {
    const story = data.stories[storyIndex];
    data.stories.splice(storyIndex, 1);
    story.status = status;
    data.stories.splice(storyIndex, 0, story);
    return getStories();
  } else {
    // throw errror
  }
};

module.exports = {
  getStoryData: getStories,
  updateStoryStatus: updateStoryStatus,
};
