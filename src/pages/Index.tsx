import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Newsletter from "@/components/home/Newsletter";

const Index = () => {
  return (
    <div className="bg-stone-950 text-stone-50">
      <Hero />
      <Features />
      <Newsletter />
    </div>
  );
};

export default Index;
