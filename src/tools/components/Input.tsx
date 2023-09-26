"use client";

import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

const InputReusable = ({
  label,
  type,
  value,
  onChange,
  icon,
  name,
  placeholder,
  onFocus,
}: any) => {
  const { currentInputFocus, setCurrentInputFocus } = useContext(AppContext);

  useEffect(() => {
    console.log(currentInputFocus);
  }, [currentInputFocus]);
  return (
    <div className="formArea flex flex-col gap-2">
      <label htmlFor={name} className="text-sm text-white">
        {label}
      </label>
      <div
        className={`inputArea w-full h-8 px-4 flex gap-2 items-center border border-primary-blue-2 border-opacity-50 transition-all bg-input rounded-md
       ${
         currentInputFocus === name &&
         "border-primary-blue border-opacity-95 border-1"
       }`}
      >
        <span className="text-primary-blue">{icon && icon}</span>
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          className="w-full h-full bg-transparent text-placeholder text-xs outline-none focus:bg-transparent"
          placeholder={placeholder}
          onFocus={() => {
            setCurrentInputFocus ? setCurrentInputFocus(name) : null;
          }}
          onBlur={() => {
            setCurrentInputFocus ? setCurrentInputFocus("") : null;
          }}
        />
      </div>
    </div>
  );
};

export default InputReusable;
