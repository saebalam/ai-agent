import React, { useState } from "react";
import ToggleSwitch from "../../atoms/ToggleSwitch";

const Interruption = () => {
  const [isInterruptionEnabled, setIsInterruptionEnabled] = useState(true);

  return (
    <div
      id="allow_interruptions"
      className="border border-[#E2E8F0] rounded-lg px-5 py-4 flex justify-between items-center"
    >
      <div>
        <p className="font-[600]">Allow Interruptions</p>
        <p className="text-[#6B7280]">Enable the user to interrupt the agent</p>
      </div>
      <ToggleSwitch
        enabled={isInterruptionEnabled}
        setEnabled={setIsInterruptionEnabled}
      />
    </div>
  );
};

export default Interruption;
