import Hero from "@/app/component/mainpage/Hero/Hero";
import WhyAngaz from "@/app/component/mainpage/WhyAngaz/WhyAngaz";
import Works from "@/app/component/mainpage/Works/Works";
import PopularDeparts from "@/app/component/mainpage/PopularDeparts/PopularDeparts";
import Bestfreelancers from "@/app/component/mainpage/Bestfreelancers/Bestfreelancers";
import ClintComment from "@/app/component/mainpage/ClintComment/ClintComment";
import Commonquestions from "@/app/component/mainpage/Commonquestions/Commonquestions";
export default function Home() {
  return (
    <main className="px-20">
         <Hero />
      <WhyAngaz />
      <Works />
      <PopularDeparts />
      <Bestfreelancers />
      <ClintComment />
      <Commonquestions />
    </main>
  );
}
