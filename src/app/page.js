import Image from "next/image";
// import { Image } from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Goals from "@/components/Goals/Goals";

export default function Home() {




  return (
    <main className="">
      <Navbar/>
      <Hero/>
      <Goals/>

    </main>
  );
}
