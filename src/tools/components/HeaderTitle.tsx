import React from "react";
import Image from "next/image";
const HeaderTitle = ({ text }: { text: string }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="logoArea]">
        <Image src="/logo.svg" width={155} height={75} alt="logo" />
      </div>
      <div className="text text-white text-xl max-w-[260px]">
        <h1>{text}</h1>
      </div>
    </div>
  );
};

export default HeaderTitle;
