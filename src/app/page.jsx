import { BarbershopHero } from "@/components/barbershop-hero";
import Services from "@/components/services";
import Counter from "@/components/counter";
import Reviews from "@/components/reviews";
import ComeVisit from "@/components/comeVisitMap";
import BookVisit from "@/components/bookVisit";
import Contact from "@/components/contact";


export default function HomePage() {
  return (
    <main className="w-full">
      <BarbershopHero />
      <Services />
      <Counter />
      <Reviews />
        <BookVisit />
        <ComeVisit/>
        <Contact />
    </main>
  );
}
