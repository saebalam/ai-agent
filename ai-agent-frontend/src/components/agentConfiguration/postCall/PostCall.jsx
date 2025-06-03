import React from "react";
import Accordian from "../../atoms/accordian/Accordian";

const PostCall = ({ id, isOpen, handleSelect }) => {
  const AccordianHead = (
    <div className="flex items-center gap-3">
      <img src="/icons/ic_pc.svg" width={40} height={40} />
      Post Call
    </div>
  );
  return (
    <div>
      <Accordian
        id={id}
        head={AccordianHead}
        isPreopened={isOpen}
        handleSelect={handleSelect}
      >
        <p>Data for Post Call same as above</p>
      </Accordian>
    </div>
  );
};

export default PostCall;
