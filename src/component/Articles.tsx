import { TrendingNewsItem } from "./TrendingNewsItem";

export const TrendingNews = () => {
  return (
    <>
      <div className="h-full w-[75vw] bg-gray-500">
        <div id="heading-section" className="h-[10vh] w-full flex">
            <div className="h-full w-[60%] flex items-center justify-evenly text-xl max-[1200px]:text-lg max-[1000px]:text-base max-[835px]:text-xs">
                <p className="h-full w-[45vw] border border-pink-500 flex items-center justify-center">Your News</p>
                <p className="h-full w-[45vw] border border-pink-500 flex items-center justify-center">cricket</p>
                <p className="h-full w-[45vw] border border-pink-500 flex items-center justify-center">Football</p>
            </div>
        </div>
        <div id="trending-items" className="h-[70vh] w-full flex flex-col">
            <TrendingNewsItem />
        </div>
      </div>
    </>
  );
};
