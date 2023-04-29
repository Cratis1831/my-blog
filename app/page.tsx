"use client";
import Typewriter from "typewriter-effect";
import SearchBox from "./components/SearchBox";
import { HiThumbUp, HiMusicNote } from "react-icons/hi";

export default function Home() {
  return (
    <main className="px-3">
      <div className="mx-auto max-w-6xl flex-1">
        <SearchBox />
      </div>
      <div className="flex justify-center pt-12 align-middle text-lg">
        <Typewriter
          options={{ autoStart: true, loop: true, delay: 75 }}
          onInit={(typewriter) => {
            typewriter

              .typeString("Hello, Welcome to my website!")
              // .callFunction(() => {
              //   console.log("String typed out!");
              // })
              .pauseFor(2500)
              .deleteAll()
              // .callFunction(() => {
              //   console.log("All strings were deleted");
              // })
              .start();
          }}
        />
      </div>
      {/* A 4x4 Grid showing random images from Unsplash */}
      <div className="flex justify-center pt-16">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="h-50 w-80 rounded-md border border-gray-300 p-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis fuga incidunt quo? Perferendis necessitatibus cum ea
              magnam, temporibus expedita. Libero delectus error illo hic quae
              natus dolor accusantium quia saepe?
            </p>
            <div className="flex items-center justify-end space-x-1 text-sm text-gray-700">
              <p>5</p>
              <p>
                <HiThumbUp />
              </p>
            </div>
          </div>
          <div className="h-50 w-80 rounded-md border border-gray-300 p-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis fuga incidunt quo? Perferendis necessitatibus cum ea
              magnam, temporibus expedita. Libero delectus error illo hic quae
              natus dolor accusantium quia saepe?
            </p>
            <div className="flex items-center justify-end space-x-1 text-sm text-gray-700">
              <p>5</p>
              <p>
                <HiThumbUp />
              </p>
            </div>
          </div>
          <div className="h-50 w-80 rounded-md border border-gray-300 p-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis fuga incidunt quo? Perferendis necessitatibus cum ea
              magnam, temporibus expedita. Libero delectus error illo hic quae
              natus dolor accusantium quia saepe?
            </p>
            <div className="flex items-center justify-end space-x-1 text-sm text-gray-700">
              <p>5</p>
              <p>
                <HiThumbUp />
              </p>
            </div>
          </div>
          <div className="h-50 w-80 rounded-md border border-gray-300 p-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis fuga incidunt quo? Perferendis necessitatibus cum ea
              magnam, temporibus expedita. Libero delectus error illo hic quae
              natus dolor accusantium quia saepe?
            </p>
            <div className="flex items-center justify-end space-x-1 text-sm text-gray-700">
              <p>5</p>
              <p>
                <HiThumbUp />
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
