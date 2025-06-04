import { Card, CardContent } from "@/components/ui/card";
import { Flame, Utensils, Sandwich } from "lucide-react";

interface MenuItem {
  name: string;
  price: string;
}

interface MenuCategory {
  title: string;
  icon: React.ReactNode;
  items: MenuItem[];
}

export default function Menu() {
  const menuCategories: MenuCategory[] = [
    {
      title: "المندي",
      icon: <Flame className="text-mandi-gold w-6 h-6" />,
      items: [
        { name: "مندي دجاج", price: "١٨٠٠٠ دينار" },
        { name: "نص مندي دجاج", price: "١٠٠٠٠ دينار" },
        { name: "ربع مندي دجاج", price: "٦٠٠٠ دينار" },
        { name: "مندي لحم", price: "٢٤٠٠٠ دينار" },
        { name: "مشكل نص دجاج+لحم", price: "٣٢٠٠٠ دينار" },
        { name: "مشكل دجاج+لحم", price: "٤٠٠٠٠ دينار" }
      ]
    },
    {
      title: "الحنيذ والكبسة",
      icon: <Utensils className="text-mandi-gold w-6 h-6" />,
      items: [
        { name: "حنيذ دجاج", price: "١٨٠٠٠ دينار" },
        { name: "نص حنيذ دجاج", price: "١٠٠٠٠ دينار" },
        { name: "حنيذ لحم", price: "٢٤٠٠٠ دينار" },
        { name: "كبسة دجاج", price: "١٨٠٠٠ دينار" },
        { name: "نص كبسة دجاج", price: "١٠٠٠٠ دينار" },
        { name: "كبسة لحم", price: "٢٤٠٠٠ دينار" }
      ]
    },
    {
      title: "الحجز المسبق",
      icon: <Sandwich className="text-mandi-gold w-6 h-6" />,
      items: [
        { name: "ذبيحة كاملة", price: "حجز مسبق" },
        { name: "نص ذبيحة", price: "حجز مسبق" },
        { name: "ربع ذبيحة", price: "حجز مسبق" },
        { name: "كتف لحم", price: "حجز مسبق" },
        { name: "فخذ لحم", price: "حجز مسبق" }
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-mandi-gold mb-4">المنيو</h2>
          <p className="text-xl text-mandi-wheat max-w-2xl mx-auto">
            جميع المنتجات تُحضّر يومياً من أجود أنواع اللحوم الحمراء والبيضاء الطازجة
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {menuCategories.map((category, index) => (
            <div key={index} className="ornate-border">
              <Card className="ornate-border-inner border-0 bg-card">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-mandi-gold to-mandi-peru rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <div className="text-background">{category.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-mandi-gold">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex justify-between items-center border-b border-border pb-3 last:border-b-0">
                        <span className="font-medium text-foreground">{item.name}</span>
                        <span className="text-mandi-gold font-bold">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
