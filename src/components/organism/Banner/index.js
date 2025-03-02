export default function Banner() {
  return (
    <section className="bg-gray-800 flex justify-center w-full">
      <div className="w-[1280px] h-80 border border-white flex overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-pl-1">
        <div className="snap-start h-full min-w-[640px] flex justify-center items-center bg-red-400">
          Ini banner
        </div>
        <div className="flex-none snap-start h-full min-w-[640px] flex justify-center items-center bg-blue-400">
          Ini banner
        </div>
        <div className="flex-none snap-start h-full min-w-[640px] flex justify-center items-center bg-green-400">
          Ini banner
        </div>
        <div className="flex-none snap-start h-full min-w-[640px] flex justify-center items-center bg-yellow-400">
          Ini banner
        </div>
        <div className="flex-none snap-start h-full min-w-[640px] flex justify-center items-center bg-purple-400">
          Ini banner
        </div>
      </div>
    </section>
  )
};
