import Image from "next/image";
import Hero from "./Component/Hero";
import Pricing from "./Component/Pricing";

export default function Home() {
  return (
    <main >
      <Hero />
      <div className="bg-black text-white text-center ">
        <p className=" text-lg md:text-xl lg:text-2xl p-5">Onboarding the next <b>100 restaurants</b> for <b>free</b> from <b>Pakistan</b> is now live.</p>
      
      </div>
      <Pricing />
    </main>
  );
}
