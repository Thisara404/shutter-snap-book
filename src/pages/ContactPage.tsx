
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import SectionHeading from '@/components/SectionHeading';
import { Camera, Mail, Phone, Clock, MapPin } from 'lucide-react';

const ContactPage = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // In a real application, you would send the form data to a server
    toast({
      title: "Message Sent",
      description: "We've received your message and will contact you soon.",
    });
    
    // Reset the form
    e.currentTarget.reset();
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section h-[60vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80')" }}
        />
        <div className="container mx-auto h-full flex items-center justify-center hero-content">
          <div className="text-center max-w-3xl px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 tracking-tight">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Have questions or ready to book? Reach out to our team and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading 
                title="Get In Touch" 
                subtitle="Fill out the form below and our team will contact you shortly."
              />
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                    <Input id="name" placeholder="Your full name" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                    <Input id="email" type="email" placeholder="your@email.com" required />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                    <Input id="phone" placeholder="Your phone number" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <Input id="subject" placeholder="What is this regarding?" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea id="message" placeholder="Tell us about your photography needs..." className="min-h-32" required />
                </div>
                
                <Button type="submit" className="w-full md:w-auto">Send Message</Button>
              </form>
            </div>
            
            <div>
              <SectionHeading 
                title="Contact Information" 
                subtitle="Our team is available to answer your questions and provide more information."
              />
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary p-3 rounded-full">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Studio Address</h3>
                    <p className="text-muted-foreground">123 Photography Studio, Main Street</p>
                    <p className="text-muted-foreground">City, State, 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary p-3 rounded-full">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Phone</h3>
                    <p><a href="tel:+1234567890" className="text-muted-foreground hover:text-foreground transition-colors">+123 456 7890</a></p>
                    <p><a href="tel:+1234567891" className="text-muted-foreground hover:text-foreground transition-colors">+123 456 7891</a></p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary p-3 rounded-full">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Email</h3>
                    <p><a href="mailto:info@lurikaphotography.com" className="text-muted-foreground hover:text-foreground transition-colors">info@lurikaphotography.com</a></p>
                    <p><a href="mailto:bookings@lurikaphotography.com" className="text-muted-foreground hover:text-foreground transition-colors">bookings@lurikaphotography.com</a></p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary p-3 rounded-full">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Business Hours</h3>
                    <p className="text-muted-foreground">Monday - Friday: 9AM - 6PM</p>
                    <p className="text-muted-foreground">Saturday: 10AM - 4PM</p>
                    <p className="text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="https://instagram.com" className="bg-secondary p-3 rounded-full hover:bg-secondary/80 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                  </a>
                  <a href="https://facebook.com" className="bg-secondary p-3 rounded-full hover:bg-secondary/80 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                  <a href="https://twitter.com" className="bg-secondary p-3 rounded-full hover:bg-secondary/80 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 px-6 bg-secondary/50">
        <div className="container mx-auto">
          <div className="h-[400px] w-full rounded-lg overflow-hidden">
            {/* In a real application, you would embed a Google Map here */}
            <div className="w-full h-full bg-secondary flex items-center justify-center">
              <div className="text-center">
                <Camera className="h-10 w-10 mx-auto mb-4" />
                <p className="text-xl font-medium">Interactive Map Coming Soon</p>
                <p className="text-muted-foreground mt-2">Our studio is located in the heart of the city.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <SectionHeading 
              title="Ready to Book Your Session?" 
              subtitle="Skip the form and book your photography session directly online."
              centered 
            />
            <Button asChild size="lg">
              <Link to="/booking">Book Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
