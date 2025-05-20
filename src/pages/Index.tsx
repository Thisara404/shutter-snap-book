
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/SectionHeading';
import { Camera, Calendar, User, Image } from 'lucide-react';

const Index = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-section h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80')" }}
        />
        <div className="container mx-auto h-full flex items-center justify-center hero-content">
          <div className="text-center max-w-3xl px-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 tracking-tight">
              CAPTURING LIFE'S<br />PERFECT MOMENTS
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Professional photography services in Sri Lanka. Specializing in weddings, portraits, and candid shots that tell your unique story.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="text-md">
                <Link to="/booking">Book Session</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-md border-primary text-primary hover:bg-primary/10">
                <Link to="/gallery">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex items-center justify-center">
            <div className="animate-bounce w-8 h-8">
              <span className="block w-6 h-6 border-b-2 border-r-2 border-primary rotate-45"></span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <SectionHeading 
            title="Our Services" 
            subtitle="We offer a wide range of photography services tailored to capture your special moments with creativity and professionalism."
            centered 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-secondary p-6 rounded-lg">
              <div 
                className="h-60 w-full mb-6 rounded overflow-hidden"
                style={{ 
                  backgroundImage: "url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80')", 
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center' 
                }}
              />
              <h3 className="text-xl font-serif mb-3">Wedding Shoot</h3>
              <p className="text-muted-foreground mb-4">Capture the magic of your special day with our professional wedding photography services.</p>
              <Link to="/services" className="text-primary hover:underline">View Packages →</Link>
            </div>

            {/* Service 2 */}
            <div className="bg-secondary p-6 rounded-lg">
              <div 
                className="h-60 w-full mb-6 rounded overflow-hidden"
                style={{ 
                  backgroundImage: "url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80')", 
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center' 
                }}
              />
              <h3 className="text-xl font-serif mb-3">Pre-Shoot</h3>
              <p className="text-muted-foreground mb-4">Create beautiful memories with a pre-wedding photoshoot in stunning locations.</p>
              <Link to="/services" className="text-primary hover:underline">View Packages →</Link>
            </div>

            {/* Service 3 */}
            <div className="bg-secondary p-6 rounded-lg">
              <div 
                className="h-60 w-full mb-6 rounded overflow-hidden"
                style={{ 
                  backgroundImage: "url('https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80')", 
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center' 
                }}
              />
              <h3 className="text-xl font-serif mb-3">Birthday Shoot</h3>
              <p className="text-muted-foreground mb-4">Celebrate your special day with professional birthday photography services.</p>
              <Link to="/services" className="text-primary hover:underline">View Packages →</Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-secondary/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div 
                className="h-[500px] w-full rounded-lg overflow-hidden"
                style={{ 
                  backgroundImage: "url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80')", 
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center' 
                }}
              />
            </div>
            <div>
              <SectionHeading 
                title="About Lurika Photography" 
                subtitle="We are a team of passionate photographers dedicated to capturing life's most precious moments."
              />
              <p className="mb-6 text-muted-foreground">
                Founded in 2015, Lurika Photography has grown into a team of 6 professional photographers, each with their own unique style and expertise. 
                We specialize in wedding photography, portrait sessions, and event coverage.
              </p>
              <p className="mb-8 text-muted-foreground">
                Our mission is to create timeless images that tell your story with authenticity and artistic vision. 
                We believe that every moment is worth capturing, and we're committed to providing exceptional service and stunning photographs.
              </p>
              <Button asChild>
                <Link to="/about">Meet Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <SectionHeading 
            title="Why Choose Us" 
            subtitle="We combine technical expertise with artistic vision to deliver exceptional photography services."
            centered 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="mb-6 mx-auto bg-secondary/80 p-4 rounded-full w-16 h-16 flex items-center justify-center">
                <Camera className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-serif mb-3">Professional Equipment</h3>
              <p className="text-muted-foreground">High-end cameras and lenses for exceptional image quality in any lighting condition.</p>
            </div>

            <div className="text-center">
              <div className="mb-6 mx-auto bg-secondary/80 p-4 rounded-full w-16 h-16 flex items-center justify-center">
                <User className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-serif mb-3">Experienced Team</h3>
              <p className="text-muted-foreground">Our photographers have years of experience and specialized training in various photography styles.</p>
            </div>

            <div className="text-center">
              <div className="mb-6 mx-auto bg-secondary/80 p-4 rounded-full w-16 h-16 flex items-center justify-center">
                <Image className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-serif mb-3">Artistic Approach</h3>
              <p className="text-muted-foreground">We blend technical skill with creative vision to create unique and beautiful photographs.</p>
            </div>

            <div className="text-center">
              <div className="mb-6 mx-auto bg-secondary/80 p-4 rounded-full w-16 h-16 flex items-center justify-center">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-serif mb-3">Flexible Booking</h3>
              <p className="text-muted-foreground">Easy online booking system allows you to choose your preferred photographer and date.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-secondary hero-section">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80')" }}
        />
        <div className="container mx-auto hero-content">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Ready to Book Your Photography Session?</h2>
            <p className="text-lg mb-8 text-muted-foreground">
              Contact us today to discuss your photography needs or book a session directly online.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/booking">Book Now</Link>
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

export default Index;
