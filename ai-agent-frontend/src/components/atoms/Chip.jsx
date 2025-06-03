import React from "react";

const Chip = ({ id, label, isSelected, onSelect, variant }) => {
  return (
    <div
      className={`${isSelected ? "bg-black text-white " : ""} w-max px-2 py-1  ${
        variant === "block"
          ? "border border-[#E2E8F0] rounded-[6px]"
          : "rounded-[16px]"
      }  cursor-pointer font-[400] `}
      onClick={() => onSelect(id)}
    >
      {label}
    </div>
  );
};

export default Chip;
