import { APP_URL } from "../../secrets";

export const fetchStoriesData = async () => {
  const data = await fetch(`${APP_URL}/story`);
  const stories = await data.json();
  return stories;
};

export const updateStoryData = async (payload) => {
  const data = await fetch(`${APP_URL}/story/${payload.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      status: payload.status,
    }),
  });
  const stories = await data.json();
  return stories;
};
