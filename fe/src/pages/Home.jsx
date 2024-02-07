import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchStoriesSelector,
  fetchStoriesLoading,
} from "../redux/selectors/story.selector";
import Kanban from "../components/Kanban";

const Home = (props) => {
  const [stories, setStories] = useState({});

  const data = useSelector(fetchStoriesSelector);
  const isLoading = useSelector(fetchStoriesLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "FETCH_STORIES",
    });
  }, []);

  useEffect(() => {
    setStories(data);
  }, [data]);

  return (
    <div>
      <h1 className="text-2xl flex justify-center">Kanban board</h1>
      <div className="m-3">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          stories.storyData && <Kanban stories={stories.storyData} />
        )}
      </div>
    </div>
  );
};

export default Home;
