
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/SectionHeading';
import { Camera, Mail, Calendar, Instagram } from 'lucide-react';

interface Photographer {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialties: string[];
  pricing: string;
  availability: string;
  instagram: string;
}

const AboutPage = () => {
  const photographers: Photographer[] = [
    {
      id: "john-smith",
      name: "John Smith",
      role: "Lead Photographer",
      bio: "With over 10 years of experience, John specializes in portrait and wedding photography. His artistic approach captures the essence of every moment.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
      specialties: ["Wedding", "Portrait", "Fashion"],
      pricing: "$200/hour",
      availability: "Mon-Fri, 9AM-6PM",
      instagram: "johnsmith_photo"
    },
    {
      id: "sarah-jones",
      name: "Sarah Jones",
      role: "Portrait Specialist",
      bio: "Sarah has a unique eye for capturing authentic emotions in her subjects. She specializes in family portraits and lifestyle photography.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
      specialties: ["Family", "Children", "Lifestyle"],
      pricing: "$180/hour",
      availability: "Tue-Sat, 10AM-7PM",
      instagram: "sarahjonesphoto"
    },
    {
      id: "michael-rodriguez",
      name: "Michael Rodriguez",
      role: "Event Photographer",
      bio: "Michael is renowned for his ability to capture the energy and excitement of events. From corporate gatherings to weddings, he delivers stunning images.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80",
      specialties: ["Events", "Corporate", "Concerts"],
      pricing: "$220/hour",
      availability: "Wed-Sun, flexible hours",
      instagram: "michaelrodphoto"
    },
    {
      id: "emily-chen",
      name: "Emily Chen",
      role: "Creative Director",
      bio: "Emily brings a fresh, artistic perspective to every shoot. Her background in fine arts gives her a unique approach to composition and lighting.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80",
      specialties: ["Editorial", "Fashion", "Fine Art"],
      pricing: "$250/hour",
      availability: "Mon-Thu, 11AM-8PM",
      instagram: "emilychen_creative"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section h-[60vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80')" }}
        />
        <div className="container mx-auto h-full flex items-center justify-center hero-content">
          <div className="text-center max-w-3xl px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 tracking-tight">
              About Our Team
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Meet the talented photographers behind Lurika Photography and discover our passion for capturing moments.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title="Our Story" 
                subtitle="Lurika Photography was founded with a simple vision: to capture life's most precious moments with artistic excellence."
              />
              <p className="mb-6 text-muted-foreground">
                Founded in 2015 by John Smith, Lurika Photography began as a small studio focusing on wedding photography. 
                Over the years, we've grown into a team of talented photographers, each bringing their unique perspective and expertise.
              </p>
              <p className="mb-6 text-muted-foreground">
                Our philosophy is based on the belief that photographs are not just images—they're tangible memories that tell your 
                unique story. Whether we're documenting a wedding, creating family portraits, or covering a special event, we approach 
                each project with creativity, technical excellence, and a genuine passion for photography.
              </p>
              <p className="mb-6 text-muted-foreground">
                Today, Lurika Photography is known for its distinct style that blends documentary approach with artistic vision, 
                creating timeless images that capture authentic emotions and genuine moments.
              </p>
            </div>
            <div>
              <div 
                className="h-[500px] w-full rounded-lg overflow-hidden"
                style={{ 
                  backgroundImage: "url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80')", 
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center' 
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 px-6 bg-secondary/50">
        <div className="container mx-auto">
          <SectionHeading 
            title="Meet Our Photography Team" 
            subtitle="Each member of our team brings unique skills and perspective to create beautiful, meaningful images."
            centered 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {photographers.map((photographer) => (
              <div key={photographer.id} className="bg-secondary p-6 rounded-lg">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/3">
                    <div 
                      className="h-60 w-full rounded overflow-hidden"
                      style={{ 
                        backgroundImage: `url('${photographer.image}')`, 
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center' 
                      }}
                    />
                  </div>
                  <div className="w-full md:w-2/3">
                    <h3 className="text-2xl font-serif mb-2">{photographer.name}</h3>
                    <p className="text-primary/80 mb-4">{photographer.role}</p>
                    <p className="text-muted-foreground mb-4">{photographer.bio}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="text-sm font-medium mb-1">Specialties</h4>
                        <p className="text-muted-foreground text-sm">{photographer.specialties.join(', ')}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-1">Pricing</h4>
                        <p className="text-muted-foreground text-sm">{photographer.pricing}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-1">Availability</h4>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Calendar className="h-3 w-3 mr-1" />
                          {photographer.availability}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-1">Instagram</h4>
                        <a href={`https://instagram.com/${photographer.instagram}`} className="flex items-center text-muted-foreground text-sm hover:text-primary transition-colors">
                          <Instagram className="h-3 w-3 mr-1" />
                          @{photographer.instagram}
                        </a>
                      </div>
                    </div>
                    
                    <Button asChild size="sm" variant="outline" className="mt-2">
                      <Link to={`/booking?photographer=${photographer.id}`}>Book This Photographer</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <SectionHeading 
            title="Our Process" 
            subtitle="We follow a structured approach to ensure we deliver exceptional results for every client."
            centered 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="mb-4 mx-auto bg-secondary/80 p-4 rounded-full w-16 h-16 flex items-center justify-center relative">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-serif mb-3">Consultation</h3>
              <p className="text-muted-foreground">We start with a detailed discussion about your vision, preferences, and specific needs.</p>
            </div>

            <div className="text-center">
              <div className="mb-4 mx-auto bg-secondary/80 p-4 rounded-full w-16 h-16 flex items-center justify-center">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-serif mb-3">Planning</h3>
              <p className="text-muted-foreground">We create a tailored plan covering locations, timing, shot list, and all important details.</p>
            </div>

            <div className="text-center">
              <div className="mb-4 mx-auto bg-secondary/80 p-4 rounded-full w-16 h-16 flex items-center justify-center">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-serif mb-3">Photoshoot</h3>
              <p className="text-muted-foreground">Our photographers work their magic, capturing beautiful moments with technical excellence.</p>
            </div>

            <div className="text-center">
              <div className="mb-4 mx-auto bg-secondary/80 p-4 rounded-full w-16 h-16 flex items-center justify-center">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-serif mb-3">Delivery</h3>
              <p className="text-muted-foreground">We carefully edit each photo and deliver the final images in your preferred format.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-secondary hero-section">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80')" }}
        />
        <div className="container mx-auto hero-content">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Ready to Work With Us?</h2>
            <p className="text-lg mb-8 text-muted-foreground">
              Book a session with our talented team of photographers and let us capture your special moments.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/booking">Book a Photographer</Link>
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

export default AboutPage;
