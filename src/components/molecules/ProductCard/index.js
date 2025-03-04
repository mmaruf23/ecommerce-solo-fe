import Button from "@/components/atoms/Button";

export default function Card({available = true}) {
  return (
    <div className="border h-96 w-64 p-3 rounded-xl flex flex-col">
      <div className="w-full h-50 border rounded-lg flex justify-center items-center">
        Ini Image
      </div>
      <div className="flex-grow">
        <p className="text-xl mt-5 line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, et.
        </p>
      </div>
      <p className="text-red-500 font-bold py-2">RpXX.XXX</p>
      <div className="flex justify-center">
        <Button className="w-full bg-black text-white">
          Add to cart
        </Button>
      </div>
    </div>
  );
};
