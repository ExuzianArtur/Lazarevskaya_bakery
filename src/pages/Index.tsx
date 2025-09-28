import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Products from "@/components/Products";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Products />
        <About />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
