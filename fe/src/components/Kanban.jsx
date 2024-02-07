import React from "react";
import Card from "../components/Card";
import { Droppable } from "react-beautiful-dnd";

const Kanban = ({ stories }) => {
  const doneStories = stories.filter((story) => story.status === "done");
  const inProgressStories = stories.filter(
    (story) => story.status === "in_progress"
  );
  const pendingStories = stories.filter((story) => story.status === "pending");

  return (
    <div className="flex space-x-4">
      <Droppable droppableId="pending">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <h1>Pending</h1>
            {pendingStories.map((story, index) => {
              return <Card story={story} />;
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="in_progress">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <h1>In Progress</h1>
            {inProgressStories.map((story, index) => {
              return <Card index={index} story={story} />;
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="done">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <h1>Done</h1>
            {doneStories.map((story, index) => {
              return <Card index={index} story={story} />;
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Kanban;
