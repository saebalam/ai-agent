import React from "react";
import Accordian from "../../atoms/accordian/Accordian";

const CallSetting = ({ id, isOpen, handleSelect }) => {
    const AccordianHead = (
        <div className="flex items-center gap-3">
          <img src="/icons/ic_call.svg" width={40} height={40} />
          Call Settings
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
        <p>Data for Call setting same as above</p>
      </Accordian>
    </div>
  );
};

export default CallSetting;
