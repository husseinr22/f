import { Button } from "@/components/ui/button";
import { Phone, Utensils } from "lucide-react";

export default function Hero() {
  const scrollToMenu = () => {
    const element = document.getElementById("menu");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative py-20 overflow-hidden min-h-[600px] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 arabic-pattern opacity-30"></div>
      
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-gradient-to-l from-black/85 via-black/60 to-black/85"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></div>
      
      <div className="relative container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            أطلب ويوصلك لباب بيتك
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            مستعدون لتجهيز جميع المناسبات ودوائر الدولة والشركات
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg"
              className="bg-mandi-orange hover:bg-orange-600 text-white px-8 py-4 text-lg shadow-xl transform hover:scale-105 transition-all duration-300"
              onClick={() => window.open("tel:07842671879", "_self")}
            >
              <Phone className="ml-2 h-5 w-5" />
              اطلب الآن - ٠٧٨٤٢٦٧١٨٧٩
            </Button>
            <Button 
              size="lg"
              variant="secondary"
              className="bg-mandi-gold hover:bg-yellow-600 text-white px-8 py-4 text-lg shadow-xl transform hover:scale-105 transition-all duration-300"
              onClick={scrollToMenu}
            >
              <Utensils className="ml-2 h-5 w-5" />
              شاهد المنيو
            </Button>
          </div>
          
          {/* Delivery Apps */}
          <div className="flex justify-center items-center gap-8">
            <div className="text-white text-center">
              <p className="mb-4 text-lg font-medium">متوفر على:</p>
              <div className="flex gap-4">
                <div className="bg-orange-500 px-4 py-2 rounded-lg text-white font-bold">Talabat</div>
                <div className="bg-green-500 px-4 py-2 rounded-lg text-white font-bold">Toters</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
