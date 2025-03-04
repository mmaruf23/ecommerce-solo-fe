import Button from "@/components/atoms/Button";

export default function Card({available = true}) {
  function handleClick(event) {
    event.stopPropagation();
    console.log("I AM CLICK!");
    
  }
  return (
    <div onClick={() => console.log("Parent here")} className="border min-h-96 w-64 p-3 rounded-xl flex flex-col">
      <div className="w-full h-50 border rounded-lg flex justify-center items-center">
        Ini Image
      </div>
      <div className="flex-grow">
        <p className="text-xl mt-5 line-clamp-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, et.
        </p>
      </div>
      <p className="text-red-500 font-bold py-2">RpXX.XXX</p>
      <div className="flex justify-center">
        <Button onClick={(event) => handleClick(event)} className="w-full bg-black text-white">
          Add to cart
        </Button>
      </div>
    </div>
  );
};
