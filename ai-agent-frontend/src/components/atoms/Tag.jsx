import React from "react";

const Tag = ({ label ,customClass}) => {
  return (
    <div
      className={`w-max px-2 py-1 rounded-[12px] cursor-pointer text-[12px] ${customClass}`}
    >
      {label}
    </div>
  );
};

export default Tag;
