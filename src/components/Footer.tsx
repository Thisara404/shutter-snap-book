
import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Mail, Phone, Clock, Calendar, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4">Lurika Photography</h3>
            <p className="text-muted-foreground mb-4">Capturing life's perfect moments with artistic vision and professional expertise.</p>
            <div className="flex space-x-3">
              <a href="https://instagram.com" className="p-2 bg-accent rounded-full hover:bg-accent/80 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://facebook.com" className="p-2 bg-accent rounded-full hover:bg-accent/80 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://twitter.com" className="p-2 bg-accent rounded-full hover:bg-accent/80 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-serif mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors">Services & Pricing</Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-muted-foreground hover:text-foreground transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/booking" className="text-muted-foreground hover:text-foreground transition-colors">Book a Session</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-serif mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Wedding Photography</li>
              <li className="text-muted-foreground">Pre-Wedding Shoots</li>
              <li className="text-muted-foreground">Birthday Photography</li>
              <li className="text-muted-foreground">Graduation Shoots</li>
              <li className="text-muted-foreground">Model Portfolio</li>
              <li className="text-muted-foreground">Corporate Events</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-serif mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Camera className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">123 Studio Street, City</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <a href="mailto:info@lurikaphotography.com" className="text-muted-foreground hover:text-foreground transition-colors">info@lurikaphotography.com</a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-foreground transition-colors">+123 456 7890</a>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">Mon-Sat: 9AM - 6PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/40 mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Lurika Photography. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
