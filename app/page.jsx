import Image from "next/image";
import Hero from "@/components/MainPage/Hero"
import Works from "@/components/MainPage/Works"
import WhyAngaz from "@/components/MainPage/WhyAngaz"
import PopularSearch from "@/components/MainPage/PopularSearch"
import Bestfreelancers from "@/components/MainPage/Bestfreelancers"
import Commonquestions from "@/components/MainPage/Commonquestions"
export default function Home() {
  return (
    <main className="px-4">
      <Hero/>
      <Works/>
      <WhyAngaz/>
      <PopularSearch/>
      <Bestfreelancers/>
      <Commonquestions/>
    </main>
  );
}
