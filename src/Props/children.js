import React from "react";

const Children = ({ heading, color }) => {
  
  return (
    <div className={`${color} flex flex-col w-1/3 items-center my-5 py-3`}>
      <h1>{heading}</h1>
      <p className="text-xs">This is a children component</p>
    </div>
  );
};

export default Children;
