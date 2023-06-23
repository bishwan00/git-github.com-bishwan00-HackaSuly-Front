import React from "react";
const Container = ({ color, children }) => {
  return (
    <div
      className="max-w-[600px]  mx-6 mt-10 mb-24 lg:inline"
      style={{ backgroundColor: color }}
    >
      {children}
    </div>
  );
};

export default Container;
