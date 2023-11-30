import Image from "next/image";
import Hero from "@/components/MainPage/Hero"
import Works from "@/components/MainPage/Works"
import WhyAngaz from "@/components/MainPage/WhyAngaz/WhyAngaz"
import PopularDeparts from "@/components/MainPage/PopularDeparts/PopularDeparts"
import Bestfreelancers from "@/components/MainPage/Bestfreelancers/Bestfreelancers"
import Commonquestions from "@/components/MainPage/Commonquestions/Commonquestions"
export default function Home() {
  return (
    <main className="px-4">
      <Hero/>
      <Works/>
      <WhyAngaz/>
      <PopularDeparts/>
      <Bestfreelancers/>
      <Commonquestions/>
    </main>
  );
}
