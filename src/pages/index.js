import Card from "@/components/molecules/ProductCard";
import Banner from "@/components/organism/Banner";
import Footer from "@/components/organism/Footer";
import Navbar from "@/components/organism/Navbar";

export default function Home() {

  return (
    <div className="flex flex-col min-h-[100svh] items-center">
        <Navbar />
      {/* Main body */}
      <div className="flex flex-col flex-grow w-full">
        <Banner />
        <div className="flex justify-center flex-wrap gap-5 p-4">
          <div className="max-w-[1280px] flex flex-wrap gap-5 p-4">
            <Card />
            <Card available={false} />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );

};
