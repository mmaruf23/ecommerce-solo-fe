import { Search } from "lucide-react";

export default function SearchBar() {
  function handleCLick() {
    console.log("clicked");
  }
  return (
    <div className="border flex justify-between items-center lg:w-xl rounded-md">
      <input className="px-4 md:py-2 py-1 flex-grow" type="text" />
      <button onClick={handleCLick} className="flex justify-center items-center md:py-2 p-1 bg-gray-600 hover:bg-gray-700 md:w-14">
        <Search className="text-gray-300 w-8" />
      </button>
    </div>
  )
};
