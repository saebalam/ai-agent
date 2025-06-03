import React, { useState } from 'react';
import Chip from '../../atoms/Chip';

const SpeedSetting = () => {
    const [speedConfig, setSpeedConfig] = useState([
        {
          id: "0.25",
          label: "0.25x",
          isSelected: true,
        },
        {
          id: "0.50",
          label: "0.50x",
          isSelected: false,
        },
        {
          id: "1.0",
          label: "1.0x",
          isSelected: false,
        },
        {
          id: "1.25",
          label: "1.25x",
          isSelected: false,
        },
      ]);
    
      const handleSpeedSelect = (selectedId) => {
        const copied = [...speedConfig];
        const updated = copied.map((each) => {
          if (each.id == selectedId) {
            return { ...each, isSelected: true };
          } else {
            return { ...each, isSelected: false };
          }
        });
    
        setSpeedConfig(updated);
      };
    return (
        <div
                   id="speed"
                   className="border border-[#E2E8F0] rounded-lg px-5 py-4 flex justify-between items-center"
                 >
                   <div className="flex flex-col gap-2 w-full items-between">
                     <p className="font-[600]">Speech Speed</p>
       
                     <div className="flex gap-2 flex-wrap">
                       {speedConfig.map((noise) => {
                         return (
                           <Chip
                           key={noise.id}
                             id={noise.id}
                             label={noise.label}
                             isSelected={noise.isSelected}
                             onSelect={handleSpeedSelect}
                             variant="block"
                           />
                         );
                       })}
                     </div>
                   </div>
                 </div>
    );
};

export default SpeedSetting;