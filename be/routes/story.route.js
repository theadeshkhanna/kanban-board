const { Router } = require("express");
const {
  getStories,
  getStory,
  updateStory,
  createStory,
  deleteStory,
} = require("../controllers/story.controller");

const router = new Router();

router.get("/", getStories);
router.get("/:id", getStory);
router.patch("/:id", updateStory);
router.post("/", createStory);
router.delete("/:id", deleteStory);

module.exports = {
  storyRouter: router,
};
