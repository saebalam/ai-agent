import React from "react";
import SpeechSetting from "./speechSetting/SpeechSetting";
import CallSetting from "./callSetting/CallSetting";
import PostCall from "./postCall/PostCall";
import { useState } from "react";
import Chip from "../atoms/Chip";

const ConfigurationForm = () => {
  const [tabConfig, setTabConfig] = useState([
    {
      label: "Speech Settings",
      id: "SPEECH_SETTING",
      isSelected: true,
    },
    {
      label: "Call Settings",
      id: "CALL_SETTING",
      isSelected: false,
    },
    {
      label: "Post Call",
      id: "POST_CALL",
      isSelected: false,
    },
    {
      label: "Chat Widget",
      id: "CHAT_WIDGET",
      isSelected: false,
    },
    {
      label: "Security",
      id: "SECURITY",
      isSelected: false,
    },
  ]);

  const handleSelect = (selectedId) => {
    const copied = [...tabConfig];
    const updated = copied.map((each) => {
      if (each.id == selectedId) {
        return { ...each, isSelected: !each.isSelected };
      } else {
        return { ...each, isSelected: false };
      }
    });

    setTabConfig(updated);
  };
  return (
    <div
      className="bg-white rounded-[18px] border border-[#E2E8F0] absolute right-2 top-1/2 -translate-y-1/2 max-w-[575px] h-[90vh] overflow-scroll p-4"
      id="config_form"
    >
      <div className="w-full flex items-center justify-between">
        <h1 className="text-[24px] font-[600]">General Configuration</h1>
        <img src="icons/ic_close.svg" alt='close' width={16} height={16} />
      </div>
      <p>Choose how you'd like to start building your agent.</p>

      <div className="flex flex-wrap gap-x-2 gap-y-2 items-center mt-5 mb-6  overflow-scroll">
        {tabConfig.map((eachTab) => {
          return (
            <Chip
              key={eachTab.id}
              id={eachTab.id}
              label={eachTab.label}
              isSelected={eachTab.isSelected}
              onSelect={handleSelect}
            />
          );
        })}
      </div>

      <div className="flex flex-col gap-4 ">
        <SpeechSetting
          id={tabConfig[0].id}
          isOpen={tabConfig[0].isSelected}
          handleSelect={handleSelect}
        />
        <CallSetting
          id={tabConfig[1].id}
          isOpen={tabConfig[1].isSelected}
          handleSelect={handleSelect}
        />
        <PostCall
          id={tabConfig[2].id}
          isOpen={tabConfig[2].isSelected}
          handleSelect={handleSelect}
        />
      </div>
    </div>
  );
};

export default ConfigurationForm;
