import { Award, Clock } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-mandi-gold mb-6">عن مندي الميدان</h2>
            <p className="text-lg text-mandi-wheat mb-6 leading-relaxed">
              مطعم مندي الميدان متخصص في تقديم المندي الحضرمي الأصيل بأعلى معايير الجودة والطعم المميز. 
              نحن نفخر بتقديم أجود أنواع الأرز البسمتي مع اللحوم والدواجن الطازجة يومياً.
            </p>
            <p className="text-lg text-mandi-wheat mb-8 leading-relaxed">
              مستعدون لتجهيز جميع المناسبات والطلبات الكبيرة لدوائر الدولة والشركات بأفضل الأسعار وأسرع الأوقات.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-mandi-gold rounded-full flex items-center justify-center">
                  <Award className="text-background w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-mandi-gold">جودة عالية</h4>
                  <p className="text-sm text-mandi-wheat/80">مكونات طازجة يومياً</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-mandi-gold rounded-full flex items-center justify-center">
                  <Clock className="text-background w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-mandi-gold">توصيل سريع</h4>
                  <p className="text-sm text-mandi-wheat/80"></p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="ornate-border">
              <div className="ornate-border-inner overflow-hidden">
                <img 
              
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
