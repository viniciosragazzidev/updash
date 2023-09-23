"use client";
import React from "react";
import Login from "./components/login";
import Register from "./components/register";
import Image from "next/image";
const Auth = () => {
  return (
    <div className="w-full min-h-screen flex  justify-center items-center sm:p-4 px-2 py-6  ">
      <div className="container w-full h-full  p-1 flex justify-around  sm:p-8">
        <div className="div">
          <div className="flex   ">
            <Login />
            <Register />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
