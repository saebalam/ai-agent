import React from "react";
import Accordian from "../../atoms/accordian/Accordian";
import Tag from "../../atoms/Tag";

const VoiceSelection = () => {
  const name = "Trisha";

  const accordianHead = (
    <div className="flex gap-2">
      <img src="icons/ic_flag.svg" alt="flag" width={35} height={32} />
      <div className="flex flex-col gap-1">
        <p className="font-[600]">{name}</p>
        <div className="flex gap-1">
          <Tag label="Female" customClass="bg-[#F3E8FF] text-[#7E22CE]" />
          <Tag label="EN" customClass="bg-[#EFF6FF] text-[#2563EB]" />
          <Tag label="HI" customClass="bg-[#EFF6FF] text-[#2563EB]" />
        </div>
      </div>
    </div>
  );
  return (
    <div>
      <p className="font-[600] my-1">Voice Selection</p>
      <Accordian title="Speech Setings" head={accordianHead}>
        <div>body</div>
      </Accordian>
    </div>
  );
};

export default VoiceSelection;
