import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchStoriesSelector,
  fetchStoriesLoading,
} from "../redux/selectors/story.selector";
import Kanban from "../components/Kanban";
import { DragDropContext } from "react-beautiful-dnd";

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

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // call update API here
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
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
    </DragDropContext>
  );
};

export default Home;
