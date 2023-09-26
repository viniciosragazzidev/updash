"use client";

import React, { useContext, useEffect, useState } from "react";

import { CheckCircle, WarningCircle, XCircle } from "@phosphor-icons/react";
import { AppContext } from "../context/AppContext";

const ToastApp = () => {
  const { showToast } = useContext(AppContext);

  return (
    <div className="overflow-hidden">
      <div
        className={`toast overflow-hidden fixed top-0 right-0 text-white w-64 h-14 m-4 bg-input rounded-lg translate-x-[100vw] transition-all p-2 ${
          showToast.text && showToast.type && showToast.title
            ? "translate-x-[0]"
            : "translate-x-[100vw]"
        }`}
      >
        <div className="flex  w-full h-full items-center gap-3">
          <span className="icon">
            {showToast.type === "success" ? (
              <span className="text-green-500">
                <CheckCircle size={24} weight="duotone" />
              </span>
            ) : showToast.type === "error" ? (
              <span className="text-red-500">
                <XCircle size={24} weight="duotone" />
              </span>
            ) : (
              <span className="text-primary-blue">
                <WarningCircle size={24} weight="duotone" />
              </span>
            )}
          </span>
          <div className="flex flex-col gap-1">
            <span className="text-sm whitespace-nowrap font-bold ">
              {showToast.title}
            </span>
            <span className="text-xs text-placeholder">{showToast.text}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToastApp;
