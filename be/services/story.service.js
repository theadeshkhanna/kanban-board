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
      todos: {
        total: totalTodos,
        completed: completedTodos,
      },
    };
  });
};

module.exports = {
  getStoryData: getStories,
};
