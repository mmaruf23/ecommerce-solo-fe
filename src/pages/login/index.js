import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import Navbar from "@/components/organism/Navbar";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [warning, setWarning] = useState();
  return (

    <div className="flex flex-col min-h-[100svh] items-center">
      <div className="w-full flex justify-center shadow sticky top-0 z-10">
        <Navbar />
      </div>
      <div className="mt-10 flex-grow w-full max-w-[1280px] flex justify-center">
        <div>
          <div className="w-96 p-4 border rounded-2xl">
            <p>Masuk</p>
            <p>Belum punya akun? <Link href={"/register"}>Daftar</Link></p>
            <div className="flex-grow w-full flex flex-col gap-4 mt-8">
              <Input label={"username"} text={"Username"} placeholder="username" />
              <Input label={"password"} text={"Password"} placeholder="password" />
              <p>{warning}</p>
            </div>
            <Button className={"bg-red-600 hover:bg-red-700 text-white w-full mt-5"}>Login</Button>
          </div>
        </div>
      </div>
    </div>

  );
};
