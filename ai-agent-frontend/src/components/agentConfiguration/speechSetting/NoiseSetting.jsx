import React, { useState } from "react";
import Chip from "../../atoms/Chip";
import ToggleSwitch from "../../atoms/ToggleSwitch";

const NoiseSetting = () => {

  const [noiseConfig, setNoiseConfig] = useState([
    {
      id: "LOW",
      label: "Low",
      isSelected: false,
    },
    {
      id: "MID",
      label: "Medium",
      isSelected: true,
    },
    {
      id: "HIGH",
      label: "High",
      isSelected: false,
    },
  ]);
  const [isAmbientEnabled, setIsAmbientEnabled] = useState(false);

  const handleNoiseSelect = (selectedId) => {
    const copied = [...noiseConfig];
    const updated = copied.map((each) => {
      if (each.id === selectedId) {
        return { ...each, isSelected: true };
      } else {
        return { ...each, isSelected: false };
      }
    });

    setNoiseConfig(updated);
  };

  return (
    <div
      id="noise"
      className="border border-[#E2E8F0] rounded-lg px-5 py-4 flex justify-between items-center"
    >
      <div className="flex flex-col gap-2 w-full items-between">
        <div className="flex w-full justify-between">
          <p className="font-[600]">Ambient Noise</p>
          <ToggleSwitch
            enabled={isAmbientEnabled}
            setEnabled={setIsAmbientEnabled}
          />
        </div>

        <div className="flex gap-2">
          {noiseConfig.map((noise) => {
            return (
              <Chip
                id={noise.id}
                label={noise.label}
                isSelected={noise.isSelected}
                onSelect={handleNoiseSelect}
                variant="block"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NoiseSetting;
