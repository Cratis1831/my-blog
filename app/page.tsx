"use client";
import Typewriter from "typewriter-effect";
import SearchBox from "./components/SearchBox";
import { HiThumbUp, HiMusicNote } from "react-icons/hi";
import GridBox from "./components/GridBox";

export default function Home() {
  return (
    <main className="">
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
        <div className="grid grid-cols-1 gap-4 pb-8 md:grid-cols-2 lg:grid-cols-3">
          <GridBox likes={5}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis fuga incidunt quo? Perferendis necessitatibus cum ea
            magnam, temporibus expedita. Libero delectus error illo hic quae
            natus dolor accusantium quia saepe?
          </GridBox>
          <GridBox likes={1}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis fuga incidunt quo? Perferendis necessitatibus cum ea
            magnam, temporibus expedita. Libero delectus error illo hic quae
            natus dolor accusantium quia saepe?
          </GridBox>
          <GridBox likes={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis fuga incidunt quo? Perferendis necessitatibus cum ea
            magnam, temporibus expedita. Libero delectus error illo hic quae
            natus dolor accusantium quia saepe?
          </GridBox>
        </div>
      </div>
      {/* <div className="flex h-[500px] w-full bg-slate-600"></div>
      <div className="flex h-[500px] w-full bg-white"></div> */}
    </main>
  );
}
