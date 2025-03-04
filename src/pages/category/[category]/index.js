import Card from "@/components/molecules/ProductCard";
import Navbar from "@/components/organism/Navbar";

export default function CategoryPage() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center mt-10">
        <div className="max-w-[1280px] flex justify-center flex-wrap gap-5 p-4">
          <Card />
          <Card available={false} />
          <Card />
          {/* <Card />
          <Card />
          <Card /> */}
        </div>
      </div>
    </div>
  );
};
