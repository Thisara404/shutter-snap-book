
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/SectionHeading';
import { Check } from 'lucide-react';

const ServicePackage = ({ 
  title, 
  price, 
  description, 
  features, 
  popular = false 
}: { 
  title: string; 
  price: string; 
  description: string; 
  features: string[]; 
  popular?: boolean; 
}) => {
  return (
    <div className={`bg-secondary p-8 rounded-lg relative ${popular ? 'border-2 border-primary/50' : ''}`}>
      {popular && (
        <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
          Popular
        </div>
      )}
      <h3 className="text-2xl font-serif mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold">{price}</span>
      </div>
      <p className="text-muted-foreground mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button asChild className="w-full">
        <Link to="/booking">Book Now</Link>
      </Button>
    </div>
  );
};

const ServicesPage = () => {
  const weddingPackages = [
    {
      title: "Essential",
      price: "$999",
      description: "Perfect for intimate weddings with essential coverage",
      features: [
        "6 hours of coverage",
        "1 photographer",
        "Online gallery",
        "100 edited photos",
        "Print release"
      ]
    },
    {
      title: "Premium",
      price: "$1,999",
      description: "Our most popular package for comprehensive wedding coverage",
      features: [
        "10 hours of coverage",
        "2 photographers",
        "Online gallery",
        "300 edited photos",
        "Engagement session",
        "Wedding album",
        "Print release"
      ],
      popular: true
    },
    {
      title: "Luxury",
      price: "$2,999",
      description: "Complete coverage for your perfect day with all the extras",
      features: [
        "Full day coverage",
        "2 photographers",
        "Online gallery",
        "500+ edited photos",
        "Engagement session",
        "Deluxe wedding album",
        "Canvas print",
        "Second day coverage",
        "Print release"
      ]
    }
  ];

  const portraitPackages = [
    {
      title: "Basic Portrait",
      price: "$199",
      description: "Quick portrait session for individuals",
      features: [
        "1 hour session",
        "1 location",
        "Online gallery",
        "20 edited photos",
        "Print release"
      ]
    },
    {
      title: "Family Portrait",
      price: "$299",
      description: "Comprehensive session for families",
      features: [
        "2 hour session",
        "2 locations",
        "Online gallery",
        "50 edited photos",
        "Print release",
        "Digital album"
      ],
      popular: true
    },
    {
      title: "Extended Session",
      price: "$499",
      description: "Extended session with multiple setups",
      features: [
        "3 hour session",
        "Multiple locations",
        "Outfit changes",
        "Online gallery",
        "100 edited photos",
        "Print release",
        "Digital & printed album"
      ]
    }
  ];

  const eventPackages = [
    {
      title: "Basic Event",
      price: "$499",
      description: "Coverage for small events and gatherings",
      features: [
        "4 hours of coverage",
        "1 photographer",
        "Online gallery",
        "100 edited photos",
        "Print release"
      ]
    },
    {
      title: "Standard Event",
      price: "$799",
      description: "Coverage for medium-sized events",
      features: [
        "6 hours of coverage",
        "1 photographer",
        "Online gallery",
        "200 edited photos",
        "Print release",
        "Digital slideshow"
      ],
      popular: true
    },
    {
      title: "Premium Event",
      price: "$1,499",
      description: "Complete coverage for large events",
      features: [
        "10 hours of coverage",
        "2 photographers",
        "Online gallery",
        "300+ edited photos",
        "Print release",
        "Digital & printed album",
        "Event highlight video"
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section h-[60vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80')" }}
        />
        <div className="container mx-auto h-full flex items-center justify-center hero-content">
          <div className="text-center max-w-3xl px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 tracking-tight">
              Our Services & Pricing
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              We offer a variety of photography services to capture your special moments. 
              Choose the package that suits your needs or contact us for custom options.
            </p>
          </div>
        </div>
      </section>

      {/* Wedding Photography */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <SectionHeading 
            title="Wedding Photography" 
            subtitle="We offer comprehensive wedding photography packages to capture every moment of your special day."
            centered 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {weddingPackages.map((pkg, index) => (
              <ServicePackage 
                key={index}
                title={pkg.title}
                price={pkg.price}
                description={pkg.description}
                features={pkg.features}
                popular={pkg.popular}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Portrait Photography */}
      <section className="py-20 px-6 bg-secondary/50">
        <div className="container mx-auto">
          <SectionHeading 
            title="Portrait Photography" 
            subtitle="From individual portraits to family sessions, we create beautiful images that capture your personality."
            centered 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {portraitPackages.map((pkg, index) => (
              <ServicePackage 
                key={index}
                title={pkg.title}
                price={pkg.price}
                description={pkg.description}
                features={pkg.features}
                popular={pkg.popular}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Event Photography */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <SectionHeading 
            title="Event Photography" 
            subtitle="From birthdays to corporate events, we provide professional photography services for all occasions."
            centered 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {eventPackages.map((pkg, index) => (
              <ServicePackage 
                key={index}
                title={pkg.title}
                price={pkg.price}
                description={pkg.description}
                features={pkg.features}
                popular={pkg.popular}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Services */}
      <section className="py-20 px-6 bg-secondary/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title="Custom Photography Services" 
                subtitle="Need something special? We can create a custom package tailored to your specific needs."
              />
              <p className="mb-6 text-muted-foreground">
                Whether you need a unique combination of services, extended coverage, or specialized photography for a particular event, 
                we're here to help. Our team can design a custom package that perfectly fits your requirements and budget.
              </p>
              <p className="mb-8 text-muted-foreground">
                Contact us to discuss your needs and get a personalized quote for your photography project.
              </p>
              <Button asChild>
                <Link to="/contact">Contact for Custom Quote</Link>
              </Button>
            </div>
            <div>
              <div 
                className="h-[400px] w-full rounded-lg overflow-hidden"
                style={{ 
                  backgroundImage: "url('https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80')", 
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center' 
                }}
              />
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
              Select your preferred package and book online, or contact us to discuss your specific needs.
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

export default ServicesPage;
