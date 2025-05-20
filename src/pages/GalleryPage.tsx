
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/SectionHeading';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface GalleryImage {
  id: string;
  src: string;
  category: string;
  title: string;
  photographer: string;
}

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [open, setOpen] = useState(false);

  const categories = ["All", "Wedding", "Portrait", "Event", "Fashion"];
  const [activeCategory, setActiveCategory] = useState("All");

  const images: GalleryImage[] = [
    { 
      id: "img1", 
      src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80", 
      category: "Wedding", 
      title: "Beachside Wedding", 
      photographer: "John Smith"
    },
    { 
      id: "img2", 
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80", 
      category: "Portrait", 
      title: "Natural Light Portrait", 
      photographer: "Sarah Jones" 
    },
    { 
      id: "img3", 
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80", 
      category: "Event", 
      title: "Corporate Gala", 
      photographer: "Michael Rodriguez" 
    },
    { 
      id: "img4", 
      src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80", 
      category: "Portrait", 
      title: "Studio Portrait", 
      photographer: "Emily Chen" 
    },
    { 
      id: "img5", 
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80", 
      category: "Fashion", 
      title: "Urban Fashion", 
      photographer: "Emily Chen" 
    },
    { 
      id: "img6", 
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80", 
      category: "Wedding", 
      title: "Winter Wedding", 
      photographer: "John Smith" 
    },
    { 
      id: "img7", 
      src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80", 
      category: "Event", 
      title: "Birthday Celebration", 
      photographer: "Michael Rodriguez" 
    },
    { 
      id: "img8", 
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80", 
      category: "Fashion", 
      title: "Editorial Shoot", 
      photographer: "Emily Chen" 
    },
    { 
      id: "img9", 
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80", 
      category: "Portrait", 
      title: "Family Portrait", 
      photographer: "Sarah Jones" 
    }
  ];

  const filteredImages = activeCategory === "All" 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const openImageModal = (image: GalleryImage) => {
    setSelectedImage(image);
    setOpen(true);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section h-[60vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80')" }}
        />
        <div className="container mx-auto h-full flex items-center justify-center hero-content">
          <div className="text-center max-w-3xl px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 tracking-tight">
              Our Photography Portfolio
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Explore our diverse collection of photographs, showcasing our range of styles and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <SectionHeading 
            title="Photo Gallery" 
            subtitle="Browse our collection of images across various categories and styles."
            centered 
          />

          <Tabs defaultValue="All" className="w-full max-w-3xl mx-auto mb-12">
            <TabsList className="grid grid-cols-5">
              {categories.map(category => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="group relative aspect-square overflow-hidden rounded-lg bg-secondary cursor-pointer"
                onClick={() => openImageModal(image)}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundImage: `url('${image.src}')` }}
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-serif text-white mb-1">{image.title}</h3>
                    <p className="text-white/80 text-sm">Photographer: {image.photographer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background">
              {selectedImage && (
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="aspect-square md:aspect-auto overflow-hidden">
                    <img 
                      src={selectedImage.src} 
                      alt={selectedImage.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6 flex flex-col">
                    <h2 className="text-2xl font-serif mb-2">{selectedImage.title}</h2>
                    <p className="text-muted-foreground mb-4">Category: {selectedImage.category}</p>
                    <p className="text-muted-foreground mb-8">Photographer: {selectedImage.photographer}</p>
                    <div className="mt-auto">
                      <Button asChild className="w-full">
                        <Link to={`/booking?category=${selectedImage.category}`}>Book Similar Shoot</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-secondary hero-section">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80')" }}
        />
        <div className="container mx-auto hero-content">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Ready to Create Your Own Beautiful Images?</h2>
            <p className="text-lg mb-8 text-muted-foreground">
              Book a session with our professional photographers and let us capture your special moments.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/booking">Book a Session</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
