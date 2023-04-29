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
        <img
          src="https://storage.live.com/users/0xd706a0b35b9108bb/myprofile/expressionprofile/profilephoto:UserTileStatic/p?ck=1&ex=720&sid=10152009FA60634904F8330BFBCA625F&fofoff=1"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

export default Avatar;
