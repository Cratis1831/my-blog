import React from "react";
import { HiThumbUp } from "react-icons/hi";

type Props = {
  children: string;
  likes: number;
  id?: number;
};

function GridBox({ children, likes, id }: Props) {
  return (
    <div className="h-50 w-80 cursor-pointer rounded-md border border-gray-400 bg-gray-50 p-5 shadow-md duration-200 ease-in-out hover:scale-105 active:scale-95">
      <p>{children}</p>
      <div className="flex items-center justify-between pt-3 text-sm text-gray-600">
        <p className="font-bold">{`Read More ->`}</p>
        <div className="flex space-x-1">
          <p>{likes}</p>
          <p>
            <HiThumbUp size={18} />
          </p>
        </div>
      </div>
    </div>
  );
}

export default GridBox;
