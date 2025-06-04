import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Flame } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const NavigationLinks = () => (
    <>
      <button
        onClick={() => scrollToSection("home")}
        className="text-mandi-wheat hover:text-mandi-gold transition-colors font-medium"
      >
        الرئيسية
      </button>
      <button
        onClick={() => scrollToSection("menu")}
        className="text-mandi-wheat hover:text-mandi-gold transition-colors font-medium"
      >
        المنيو
      </button>
      <button
        onClick={() => scrollToSection("about")}
        className="text-mandi-wheat hover:text-mandi-gold transition-colors font-medium"
      >
        عن المطعم
      </button>
      <button
        onClick={() => scrollToSection("contact")}
        className="text-mandi-wheat hover:text-mandi-gold transition-colors font-medium"
      >
        اتصل بنا
      </button>
    </>
  );

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/95 backdrop-blur-sm shadow-lg" : "bg-background/95"
    } border-b-2 border-mandi-gold`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg">
              <img 
                src="/attached_assets/image_1749003092514.png"
                alt="مندي الميدان"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-mandi-gold">مندي الميدان</h1>
              <p className="text-sm text-mandi-wheat">المندي الحضرمي الأصيل</p>
            </div>
          </div>
          
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-mandi-gold">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-background border-mandi-gold">
              <div className="flex flex-col gap-6 mt-8">
                <NavigationLinks />
              </div>
            </SheetContent>
          </Sheet>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <NavigationLinks />
          </nav>
        </div>
      </div>
    </header>
  );
}
