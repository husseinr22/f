import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Instagram, Clock, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-mandi-brown">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">اتصل بنا</h2>
          <p className="text-xl text-mandi-wheat max-w-2xl mx-auto">
            نحن في خدمتكم على مدار الساعة لتلبية جميع طلباتكم
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Phone Numbers */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-mandi-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">أرقام التوصيل</h3>
              <div className="space-y-3">
                <Button
                  variant="ghost"
                  className="block w-full text-mandi-wheat hover:text-white text-lg font-mono p-2"
                  onClick={() => window.open("tel:07842671879", "_self")}
                >
                  ٠٧٨٤٢٦٧١٨٧٩
                </Button>
                <Button
                  variant="ghost"
                  className="block w-full text-mandi-wheat hover:text-white text-lg font-mono p-2"
                  onClick={() => window.open("tel:07713333146", "_self")}
                >
                  ٠٧٧١٣٣٣٣١٤٦
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Social Media */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-mandi-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Instagram className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">تابعنا</h3>
              <Button
                variant="ghost"
                className="text-mandi-wheat hover:text-white transition-colors"
                onClick={() => window.open("https://www.instagram.com/mandialmaidan", "_blank")}
              >
                <Instagram className="ml-2 w-5 h-5" />
                @mandialmaidan
              </Button>
            </CardContent>
          </Card>

          {/* Working Hours */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-mandi-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">ساعات العمل</h3>
              <div className="text-mandi-wheat space-y-2">
                <p>يومياً: ١٠:٠٠ ص - ١٢:٠٠ م</p>
                <p className="text-sm">خدمة التوصيل متاحة على مدار الساعة</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Special Orders Section */}
        <Card className="bg-gradient-to-r from-mandi-gold to-mandi-peru border-0">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">اطلب الان</h3>
            <p className="text-white/90 mb-6 text-lg">
              نقدم خدمات خاصة للمناسبات ودوائر الدولة والشركات بأسعار مميزة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-white text-mandi-gold hover:bg-gray-100 px-6 py-3 font-bold"
                onClick={() => window.open("tel:07842671879", "_self")}
              >
                <Phone className="ml-2 w-5 h-5" />
                اتصل للطلب 
              </Button>
              <Button 
                className="bg-green-600 text-white hover:bg-green-700 px-6 py-3 font-bold"
                onClick={() => window.open("https://wa.me/9647842671879", "_blank")}
              >
                <MessageCircle className="ml-2 w-5 h-5" />
                واتساب
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
