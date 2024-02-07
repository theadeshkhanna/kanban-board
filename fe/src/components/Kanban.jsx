import React from "react";
import Card from "../components/Card";

const Kanban = ({ stories }) => {
  return (
    <div>
      {stories.map((story, index) => {
        return <Card story={story} />;
      })}
    </div>
  );
};

export default Kanban;
