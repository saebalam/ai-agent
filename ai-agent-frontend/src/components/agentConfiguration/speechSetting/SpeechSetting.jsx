import React from "react";
import Accordian from "../../atoms/accordian/Accordian";
import VoiceSelection from "./VoiceSelection";
import NoiseSetting from "./NoiseSetting";
import Interruption from "./Interruption";
import SpeedSetting from "./SpeedSetting";

const SpeechSetting = ({ id, isOpen, handleSelect }) => {
  const AccordianHead = (
    <div className="flex items-center gap-3">
      <img src="/icons/ic_mic.svg" alt='mic' width={40} height={40} />
      Speech Setings
    </div>
  );

  return (
    <div>
      <Accordian
        id={id}
        title="Speech Setings"
        img="/icons/ic_mic.svg"
        isPreopened={isOpen}
        handleSelect={handleSelect}
        head={AccordianHead}
      >
        <div className="flex flex-col gap-3">
          <VoiceSelection />
          <Interruption />
          <NoiseSetting />
          <SpeedSetting />
        </div>
      </Accordian>
    </div>
  );
};

export default SpeechSetting;
