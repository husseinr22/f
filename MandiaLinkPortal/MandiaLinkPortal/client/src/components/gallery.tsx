export default function Gallery() {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Traditional Mandi dish",
      title: "مندي لحم"
    },
    {
      src: "https://images.unsplash.com/photo-1574653853027-5631d95ed4fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Traditional Middle Eastern rice with chicken",
      title: "مندي دجاج"
    },
    {
      src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Arabian traditional food",
      title: "حنيذ"
    },
    {
      src: "https://images.unsplash.com/photo-1551326844-4df70f78d0e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Kabsa rice dish",
      title: "كبسة"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-mandi-brown to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-mandi-gold mb-4">معرض الأطباق</h2>
          <p className="text-xl text-mandi-wheat max-w-2xl mx-auto">
            تذوق النكهة الأصيلة للمندي الحضرمي التقليدي
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-bold">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
