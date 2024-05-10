export const TrendingNewsItem = () => {
    return (<>
    <div className="mx-auto h-[15vw] max-[651px]:h-[16vw] max-[592px]:h-[18vw] max-[581px]:h-[20vw] max-[545px]:h-[22vw] max-[500px]:h-[26vw] max-[421px]:h-[28vw] max-[391px]:h-[32vw] max-[381px]:h-[34vw] max-[353px]:h-[36vw] max-[321px]:h-[38vw] w-[98%] border border-purple-800 flex">
        <div className="h-full w-[80%] border border-blue-500 flex flex-col">
            <p className="h-[5vw] w-full pl-2 flex items-center text-lg max-[1200px]:text-base max-[1000px]:text-sm max-[835px]:text-xs border">Cricket</p>
            <p className="h-[5vw] w-full pl-2 flex items-center text-xl max-[1200px]:text-lg max-[1000px]:text-base max-[835px]:text-sm max-[425px]:text-xs font-bold border">Ashes 2023 to be postponed</p>
            <p className="h-[10vw] max-[500px]:h-[12vw] max-[391px]:h-[20vw] max-[321px]:h-[22vw] w-full pl-2 flex text-lg max-[1200px]:text-base max-[1000px]:text-sm max-[835px]:text-xs  border">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, aliquid laudantium facilis expedita veritatis omnis vero... </p>
            <div className="h-[5vw] w-full pl-2 flex items-center text-lg max-[1200px]:text-base max-[1000px]:text-sm max-[835px]:text-xs border-green-600">
                <div className="h-full w-[60%]">Dec 22, 2022</div>
                <div className="h-full w-[40%] max-[321px]:w-[50%] underline font-bold border flex items-center justify-center">Read More...</div>
            </div>
        </div>
        <div className="h-full w-[20%] border border-pink-500"></div>
    </div>
    </>)
}