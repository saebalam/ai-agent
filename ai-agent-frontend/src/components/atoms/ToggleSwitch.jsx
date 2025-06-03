import React, { useState } from "react";

const ToggleSwitch = ({enabled,setEnabled}) => {
 

  return (
    <div
      onClick={() => setEnabled((prev) => !prev)}
      className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
        enabled ? "bg-gray-800" : "bg-gray-400"
      }`}
    >
      <div
        className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          enabled ? "translate-x-[16px]" : ""
        }`}
      ></div>
    </div>
  );
};

export default ToggleSwitch;
