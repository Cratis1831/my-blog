import Image from "next/image";
import React from "react";

type Props = {
  url: string;
  label: string;
};

function Avatar({}: Props) {
  return (
    //Circular avatar of profile image
    <div className="flex items-center justify-center">
      <div className="relative h-10 w-10 overflow-hidden rounded-full">
        <Image
          src="/images/logo.png"
          width={24}
          height={24}
          className="absolute inset-0 h-full w-full object-cover"
          alt={""}
        />
      </div>
    </div>
  );
}

export default Avatar;
