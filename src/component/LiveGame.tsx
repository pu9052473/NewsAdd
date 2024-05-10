export const LiveGame = () => {
  return (
    <>
      <div className="shrink-0 h-32 w-60 border-2 rounded-md border-red-900">
        <div className="flex h-10 w-full items-center">
          <div className="flex pl-4 w-[70%] bg-pink-500 font-bold text-xl">
            <p>Cricket</p>
          </div>
          <div className="flex justify-center w-[30%] bg-green-500 text-xl">
            <p>R</p>
          </div>
        </div>
        <div className="mx-auto flex justify-start items-center w-[85%] h-5 text-lg">
          <p>IPL 2023,Delhi</p>
        </div>
        <div className="flex flex-col">
          <div className="flex h-8 w-full items-center">
            <div className="flex justify-center w-[30%] bg-pink-500 font-bold text-xl">
              <p>CSK</p>
            </div>
            <div className="flex justify-center w-[70%] bg-green-500">
              <p>(20 Overs) 235/6</p>
            </div>
          </div>
          <div className="flex h-8 w-full items-center">
            <div className="flex justify-center w-[30%] bg-pink-500 font-bold text-xl">
              <p>GT</p>
            </div>
            <div className="flex justify-center w-[70%] bg-green-500">
              <p>(19 Overs) 235/5</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
