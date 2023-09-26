"use client";
import React, { useContext, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { AppContext } from "@/tools/context/AppContext";

export default function Home() {
  const { data: session } = useSession();
  const { activeToast } = useContext(AppContext);

  const router = useRouter();
  useEffect(() => {
    if (!session) {
      router.push("/auth");
    } else {
      activeToast({
        time: 3, // O tempo em segundos que o toast ficará visível
        type: "success", // O tipo de toast (por exemplo, "success", "error", "info")
        title: "Sucesso!", // O título a ser exibido no toast
        text: "Ação concluída com sucesso!", // O texto a ser exibido no toast
      });
    }
  }, []);
  return (
    <>
      {!session ? null : (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <h1 className="text-5xl font-bold">Hi, {session?.user?.name}!</h1>
          <button
            className="text-white bg-primary-blue px-4 py-1 rounded-lg cursor-pointer"
            onClick={() => signOut()}
          >
            Sign out
          </button>
        </main>
      )}
    </>
  );
}
