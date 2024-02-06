const { Router } = require("express");
const { storyRouter } = require("./story.route");

const router = new Router();
router.use("/story", storyRouter);

module.exports = {
  baseRouter: router,
};
