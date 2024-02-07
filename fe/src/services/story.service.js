import { APP_URL } from "../../secrets";

export const fetchStoriesData = async () => {
  const data = await fetch(`${APP_URL}/story`);
  const stories = await data.json();
  return stories;
};
