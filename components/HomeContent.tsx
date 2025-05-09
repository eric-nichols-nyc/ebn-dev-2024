import React from "react";

const HomeContent = () => {
  return (
    <div className="w-full rounded-2xl bg-zinc-900/80 shadow-xl p-8 flex flex-col flex-grow gap-8 border border-zinc-800">
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center w-full">
        {/* Profile Card with ShineBorder */}
        {/* Intro and Info */}
        <div className="flex-1 flex flex-col gap-4 text-zinc-200">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Hi, I am <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 bg-clip-text text-transparent">Eric Nichols</span></h1>
          <p className="text-lg text-zinc-300">Full Stack Developer crafting exceptional digital experiences with <span className="text-green-400">modern technologies</span></p>
          <div className="bg-zinc-800 rounded-lg p-4 text-base text-zinc-300">
            <span className="inline-block bg-blue-900 text-blue-300 px-2 py-0.5 rounded mr-2 mb-1">Software Developer</span>
            As a Software Developer, I build seamless, scalable, and visually striking web and mobile applications. With deep expertise in
            <span className="inline-block bg-green-900 text-green-300 px-2 py-0.5 rounded mx-1 mb-1">React.js</span>
            <span className="inline-block bg-green-900 text-green-300 px-2 py-0.5 rounded mx-1 mb-1">Next.js</span>
            <span className="inline-block bg-green-900 text-green-300 px-2 py-0.5 rounded mx-1 mb-1">Node.js</span>
            and more, I combine functionality with aesthetics to deliver impactful solutions. Renowned for creative <span className="text-blue-400 underline cursor-pointer">problem-solving</span>, I bridge frontend and backend with precision, ensuring every detail enhances the user experience.
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
            <div className="bg-zinc-800 rounded-lg p-4">
              <div className="text-purple-400 font-semibold mb-1">Skills</div>
              <div className="text-zinc-300 text-sm">Building responsive UIs with React, Next.js, and React Native.</div>
            </div>
            <div className="bg-zinc-800 rounded-lg p-4">
              <div className="text-green-400 font-semibold mb-1">Hobbies</div>
              <div className="text-zinc-300 text-sm">Dominating in Tekken or scoring goals in FIFA. <span className="ml-1">🎮⚽</span></div>
            </div>
            <div className="bg-zinc-800 rounded-lg p-4">
              <div className="text-blue-400 font-semibold mb-1">Goal</div>
              <div className="text-zinc-300 text-sm">Let's team up and create something amazing together. <span className="ml-1">🚀</span></div>
            </div>
          </div>
        </div>
      </div>
      {/* Skills Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {/* Frontend Skills Card */}
        <div className="rounded-xl border border-zinc-700 bg-zinc-900/80 p-6 flex flex-col items-center shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl text-blue-400">🎨</span>
            <span className="text-lg font-semibold text-zinc-100 tracking-wide">Frontend Skills</span>
          </div>
          <div className="flex flex-row gap-8 w-full justify-center">
            <div className="flex flex-col items-center">
              <span className="text-3xl">⚡</span>
              <span className="text-xs text-zinc-400 mt-1">Next.js</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl">🌊</span>
              <span className="text-xs text-zinc-400 mt-1">Tailwind</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl">🔥</span>
              <span className="text-xs text-zinc-400 mt-1">Firebase</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl">🔮</span>
              <span className="text-xs text-zinc-400 mt-1">Redux</span>
            </div>
          </div>
        </div>
        {/* Backend Skills Card */}
        <div className="rounded-xl border border-zinc-700 bg-zinc-900/80 p-6 flex flex-col items-center shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl text-green-400">🛠️</span>
            <span className="text-lg font-semibold text-zinc-100 tracking-wide">Backend Skills</span>
          </div>
          <div className="flex flex-row gap-8 w-full justify-center">
            <div className="flex flex-col items-center">
              <span className="text-3xl">🟩</span>
              <span className="text-xs text-zinc-400 mt-1">Node.js</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl">☁️</span>
              <span className="text-xs text-zinc-400 mt-1">AWS</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl">🍃</span>
              <span className="text-xs text-zinc-400 mt-1">MongoDB</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent; 