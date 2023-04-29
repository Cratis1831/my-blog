"use client";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <main className="flex scale-150 items-center justify-center pt-20 text-2xl text-slate-900">
      <Typewriter
        options={{ autoStart: true, loop: true, delay: 75 }}
        onInit={(typewriter) => {
          typewriter

            .typeString("Hello, Welcome to my website!<br />")
            .callFunction(() => {
              console.log("String typed out!");
            })
            .pauseFor(2500)
            .typeString("How are you doing Aiden?")
            .deleteAll()
            .callFunction(() => {
              console.log("All strings were deleted");
            })
            .start();
        }}
      />
    </main>
  );
}
