import Image from "next/image";
import Hero from "@/components/Hero"
import Works from "@/components/Works"
import WhyAngaz from "@/components/WhyAngaz"
import PopularSearch from "@/components/PopularSearch"
import Bestfreelancers from "@/components/Bestfreelancers"
import Commonquestions from "@/components/Commonquestions"
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
