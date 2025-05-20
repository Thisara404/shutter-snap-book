
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 bg-background/80 backdrop-blur-md">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold">Lurika Photography</Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-foreground hover:text-primary/80 transition-colors">Home</Link>
          <Link to="/services" className="text-foreground hover:text-primary/80 transition-colors">Services</Link>
          <Link to="/about" className="text-foreground hover:text-primary/80 transition-colors">About Us</Link>
          <Link to="/gallery" className="text-foreground hover:text-primary/80 transition-colors">Gallery</Link>
          <Link to="/contact" className="text-foreground hover:text-primary/80 transition-colors">Contact</Link>
        </div>
        
        <div className="hidden md:block">
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
            <Link to="/booking">Book Now</Link>
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background shadow-lg py-4 px-6 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-foreground hover:text-primary/80 transition-colors" onClick={toggleMenu}>Home</Link>
            <Link to="/services" className="text-foreground hover:text-primary/80 transition-colors" onClick={toggleMenu}>Services</Link>
            <Link to="/about" className="text-foreground hover:text-primary/80 transition-colors" onClick={toggleMenu}>About Us</Link>
            <Link to="/gallery" className="text-foreground hover:text-primary/80 transition-colors" onClick={toggleMenu}>Gallery</Link>
            <Link to="/contact" className="text-foreground hover:text-primary/80 transition-colors" onClick={toggleMenu}>Contact</Link>
            <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
              <Link to="/booking" onClick={toggleMenu}>Book Now</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
