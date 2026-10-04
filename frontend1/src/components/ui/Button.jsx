import React from "react";

export const Button = ({ bgColor, textColor, label, onClick }) => {
  return (
    <button
      type="button"
      className={`${bgColor} ${textColor} px-3 py-1  rounded font-medium text-fg-brand  cursor-pointer`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
