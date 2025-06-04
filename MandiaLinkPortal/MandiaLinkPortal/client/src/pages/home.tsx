import Header from "@/components/header";
import Hero from "@/components/hero";
import Menu from "@/components/menu";
import Gallery from "@/components/gallery";
import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Menu />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
