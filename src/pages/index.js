import Footer from "@/components/organism/Footer";
import Navbar from "@/components/organism/Navbar";

export default function Home() {

  return (
    <div className="flex flex-col min-h-[100svh] items-center">
      <div className="w-full flex justify-center shadow sticky top-0 z-10">
        <Navbar/>
      </div>
      <h1 className="flex-grow">Ini Home</h1>
      <Footer />
    </div>
  );

};
