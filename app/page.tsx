"use client";
import Typewriter from "typewriter-effect";
import SearchBox from "./components/SearchBox";

export default function Home() {
  return (
    <main className="px-3">
      <div className="mx-auto max-w-6xl flex-1">
        <SearchBox />
      </div>
      <div className="flex justify-center pt-4 align-middle text-lg">
        <Typewriter
          options={{ autoStart: true, loop: true, delay: 75 }}
          onInit={(typewriter) => {
            typewriter

              .typeString("Hello, Welcome to my website!<br />")
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
    </main>
  );
}
