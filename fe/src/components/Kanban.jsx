import React from "react";
import Card from "../components/Card";
import { Droppable } from "react-beautiful-dnd";

const Kanban = ({ doneStories, inProgressStories, pendingStories }) => {
  return (
    <div className="flex space-x-4">
      <Droppable droppableId="pending">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <span className="bg-red-500 px-4 py-1 rounded-xl text-white text-sm">
              Pending
            </span>
            <div className="mt-6">
              {pendingStories.map((story, index) => {
                return <Card index={index} story={story} />;
              })}
            </div>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="in_progress">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <span className="bg-yellow-500 px-4 py-1 rounded-xl mb-4 text-white text-sm">
              In Progress
            </span>
            <div className="mt-6">
              {inProgressStories.map((story, index) => {
                return <Card index={index} story={story} />;
              })}
            </div>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="done">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <span className="bg-green-500 px-4 py-1 rounded-xl mb-4 text-white text-sm">
              Done
            </span>
            <div className="mt-6">
              {doneStories.map((story, index) => {
                return <Card index={index} story={story} />;
              })}
            </div>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Kanban;
