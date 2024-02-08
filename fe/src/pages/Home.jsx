import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchStoriesSelector,
  fetchStoriesLoading,
} from "../redux/selectors/story.selector";
import Kanban from "../components/Kanban";
import { DragDropContext } from "react-beautiful-dnd";

const Home = (props) => {
  const [doneStories, setDoneStories] = useState([]);
  const [pendingStories, setPendingStories] = useState([]);
  const [inProgressStories, setInProgressStories] = useState([]);

  const data = useSelector(fetchStoriesSelector);
  const isLoading = useSelector(fetchStoriesLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "FETCH_STORIES",
    });
  }, []);

  useEffect(() => {
    if (data?.storyData?.length) {
      const doneStories = data.storyData.filter(
        (story) => story.status === "done"
      );
      const inProgressStories = data.storyData.filter(
        (story) => story.status === "in_progress"
      );
      const pendingStories = data.storyData.filter(
        (story) => story.status === "pending"
      );

      setDoneStories(doneStories);
      setInProgressStories(inProgressStories);
      setPendingStories(pendingStories);
    }
  }, [data]);

  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    console.log(`result`, result);

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (destination.droppableId !== source.droppableId) {
      dispatch({
        type: "UPDATE_STORY",
        payload: {
          id: draggableId,
          status: destination.droppableId,
        },
      });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <h1 className="text-2xl flex justify-center">Kanban board</h1>
        <div className="m-3">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <Kanban
              doneStories={doneStories}
              inProgressStories={inProgressStories}
              pendingStories={pendingStories}
            />
          )}
        </div>
      </div>
    </DragDropContext>
  );
};

export default Home;
