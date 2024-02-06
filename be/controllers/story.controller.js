const { getStoryData } = require("../services/story.service");

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
  res.status(200).send("controller is working");
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
