import { Flame, Phone, Instagram, Clock } from "lucide-react";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-t from-background to-muted text-foreground py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img 
                  src="/attached_assets/image_1749003092514.png"
                  alt="مندي الميدان"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-mandi-gold">مندي الميدان</h3>
            </div>
            <p className="text-mandi-wheat leading-relaxed">
              نقدم أفضل أطباق المندي الحضرمي الأصيل بجودة عالية وطعم لا يُقاوم
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-mandi-gold">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("home")}
                  className="text-mandi-wheat hover:text-mandi-gold transition-colors"
                >
                  الرئيسية
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("menu")}
                  className="text-mandi-wheat hover:text-mandi-gold transition-colors"
                >
                  المنيو
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="text-mandi-wheat hover:text-mandi-gold transition-colors"
                >
                  عن المطعم
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-mandi-wheat hover:text-mandi-gold transition-colors"
                >
                  اتصل بنا
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-mandi-gold">معلومات التواصل</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="text-mandi-gold w-5 h-5" />
                <span className="text-mandi-wheat">٠٧٨٤٢٦٧١٨٧٩</span>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="text-mandi-gold w-5 h-5" />
                <span className="text-mandi-wheat">@mandialmaidan</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="text-mandi-gold w-5 h-5" />
                <span className="text-mandi-wheat">٢٤ ساعة</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-mandi-wheat">
            © ٢٠٢٤ مندي الميدان. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
