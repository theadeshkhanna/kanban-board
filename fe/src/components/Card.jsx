import React from "react";
import { Draggable } from "react-beautiful-dnd";

const Card = ({ index, story }) => {
  const { id, title, created_at, created_by, todos } = story;
  const readableDate = new Date(created_at).toDateString();

  return (
    <Draggable draggableId={id.toString()} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          className={
            "bg-white p-4 flex-col rounded w-[300px] h-[100px] mb-4 cursor-pointer"
          }
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p className="font-bold p-2">{title}</p>
          <div className="flex justify-between">
            <span className="bg-[#ababab] rounded-xl text-[12px] px-3 py-1">
              {readableDate}
            </span>
            <div className="flex justify-center align-middle space-x-4">
              {todos.total !== 0 && (
                <div>
                  {todos.completed}/{todos.total}
                </div>
              )}
              <img
                src={created_by}
                alt="avatar"
                width={30}
                className="rounded-2xl"
              ></img>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Card;
