import React, { useEffect, useState } from "react";

const Accordian = ({ id, title, img,head, children, isPreopened, handleSelect }) => {
  const [isOpen, setIsOpen] = useState(isPreopened || false);

  useEffect(() => {
    setIsOpen(isPreopened);
  }, [isPreopened]);

  return (
    <div className="border rounded-lg ">
      <div id="accordian_head" className="flex justify-between px-5 py-3">
        {head}
        <div
          className={`w-8 h-8 cursor-pointer flex items-center justify-center ${
            isOpen ? " bg-gray-200 rounded-full" : ""
          }`}
          onClick={() => (handleSelect ? handleSelect(id) : () => {})}
        >
          <img
            src="/icons/ic_chevron.svg"
            alt='arrow'
            width={28}
            height={28}
            className={`${isOpen ? "rotate-180" : ""}`}
          />
        </div>
      </div>
      {isOpen && (
        <div className="border border-[#E2E8F0] px-5 py-4 rounded-b-[8px]">{children}</div>
      )}
    </div>
  );
};

export default Accordian;
