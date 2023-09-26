"use client";
import React, { useEffect } from "react";
import Login from "./components/login";
import Register from "./components/register";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const Auth = () => {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session) {
      router.push("/");
    }
  });
  return (
    <>
      {session ? null : (
        <div className="w-full min-h-screen flex  justify-center items-center sm:p-4 px-2 py-6  ">
          <div className="container w-full h-full  p-1 flex    sm:p-8">
            <div className="div w-full">
              <div className="flex   w-full justify-center ">
                <Login />
                <Register />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Auth;
