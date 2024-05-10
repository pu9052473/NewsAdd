import { LiveGame } from "./LiveGame";

export const LiveGames = () => {
  return (
    <>
      <div className="h-[35%] w-full bg-violet-900 ">
        <div className="pl-10 h-10 w-screen flex justify-start items-center font-bold text-2xl">
          <p className="">Live Games</p>
        </div>
        <div className="mx-auto h-40 w-[95vw] bg-violet-300 flex items-center gap-10 overflow-x-scroll">
          <LiveGame />
          <LiveGame />
          <LiveGame />
          <LiveGame />
          <LiveGame />
          <LiveGame />
          <LiveGame />



        </div>
      </div>
    </>
  );
};
