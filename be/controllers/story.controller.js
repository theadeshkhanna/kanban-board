const {
  getStoryData,
  updateStoryStatus,
} = require("../services/story.service");
const data = require("../data/stories.json");

const getStories = (req, res) => {
  const storyData = getStoryData();
  return res.status(200).json({
    storyData,
  });
};
const getStory = (req, res) => {
  res.status(200).send("controller is working");
};
const updateStory = (req, res) => {
  const storyId = +req.param("id");
  const status = req.body.status;

  if (!data.stories.map((story) => story.id).includes(storyId)) {
    return res.status(404).json({
      error: "This Id does not exists",
    });
  }

  if (!["done", "in_progress", "active"].includes(status)) {
    return res.status(404).json({
      error: "Invalid status, can not update",
    });
  }

  const updatedStories = updateStoryStatus(storyId, status);
  return res.status(200).json({
    storyData: updatedStories,
  });
};
const createStory = (req, res) => {
  res.status(200).send("controller is working");
};
const deleteStory = (req, res) => {
  res.status(200).send("controller is working");
};

module.exports = {
  getStories,
  getStory,
  updateStory,
  createStory,
  deleteStory,
};
