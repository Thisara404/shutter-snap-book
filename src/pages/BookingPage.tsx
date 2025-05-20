
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import SectionHeading from '@/components/SectionHeading';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Check } from 'lucide-react';

interface Photographer {
  id: string;
  name: string;
  image: string;
  specialties: string[];
  price: string;
  availability: string[];
}

interface ServicePackage {
  id: string;
  title: string;
  price: string;
  description: string;
  duration: string;
  features: string[];
}

const BookingPage = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || '';
  const initialPhotographer = searchParams.get('photographer') || '';

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('');
  const [selectedPhotographer, setSelectedPhotographer] = useState(initialPhotographer);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [step, setStep] = useState(1);

  const { toast } = useToast();

  const photographers: Photographer[] = [
    {
      id: "john-smith",
      name: "John Smith",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
      specialties: ["Wedding", "Portrait"],
      price: "$200/hour",
      availability: ["Monday", "Tuesday", "Wednesday", "Friday"]
    },
    {
      id: "sarah-jones",
      name: "Sarah Jones",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
      specialties: ["Family", "Children"],
      price: "$180/hour",
      availability: ["Tuesday", "Wednesday", "Thursday", "Saturday"]
    },
    {
      id: "michael-rodriguez",
      name: "Michael Rodriguez",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80",
      specialties: ["Events", "Corporate"],
      price: "$220/hour",
      availability: ["Wednesday", "Thursday", "Friday", "Sunday"]
    },
    {
      id: "emily-chen",
      name: "Emily Chen",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80",
      specialties: ["Fashion", "Editorial"],
      price: "$250/hour",
      availability: ["Monday", "Tuesday", "Thursday", "Sunday"]
    }
  ];

  const packages: ServicePackage[] = [
    {
      id: "basic",
      title: "Basic Package",
      price: "$299",
      description: "Perfect for simple portrait sessions or small events",
      duration: "2 hours",
      features: [
        "2-hour photoshoot",
        "1 location",
        "50 edited photos",
        "Digital delivery",
        "Print release"
      ]
    },
    {
      id: "standard",
      title: "Standard Package",
      price: "$499",
      description: "Ideal for engagement sessions, family portraits, or small events",
      duration: "4 hours",
      features: [
        "4-hour photoshoot",
        "2 locations",
        "100 edited photos",
        "Digital delivery",
        "Print release",
        "Online gallery"
      ]
    },
    {
      id: "premium",
      title: "Premium Package",
      price: "$999",
      description: "Our comprehensive package for weddings and special events",
      duration: "8 hours",
      features: [
        "8-hour photoshoot",
        "Multiple locations",
        "300 edited photos",
        "Digital delivery",
        "Print release",
        "Online gallery",
        "Photo album"
      ]
    }
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", 
    "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  const categories = [
    "Wedding", "Portrait", "Family", "Event", 
    "Corporate", "Fashion", "Other"
  ];

  const handleNextStep = () => {
    if (step === 1 && !selectedPackage) {
      toast({
        title: "Please select a package",
        description: "You need to select a package to continue.",
        variant: "destructive"
      });
      return;
    }

    if (step === 2 && !selectedPhotographer) {
      toast({
        title: "Please select a photographer",
        description: "You need to select a photographer to continue.",
        variant: "destructive"
      });
      return;
    }

    if (step === 3 && (!selectedDate || !selectedTime)) {
      toast({
        title: "Please select both date and time",
        description: "You need to select both a date and time to continue.",
        variant: "destructive"
      });
      return;
    }

    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // In a real application, you would send the booking data to a server
    toast({
      title: "Booking Submitted",
      description: "We've received your booking request and will contact you shortly to confirm.",
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section h-[40vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80')" }}
        />
        <div className="container mx-auto h-full flex items-center justify-center hero-content">
          <div className="text-center max-w-3xl px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 tracking-tight">
              Book Your Session
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Schedule your photography session in a few simple steps.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="flex justify-between items-center">
                {[1, 2, 3, 4].map((stepNumber) => (
                  <div 
                    key={stepNumber}
                    className={`flex flex-col items-center ${stepNumber < step ? 'text-primary' : stepNumber === step ? 'text-foreground' : 'text-muted-foreground'}`}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                      stepNumber < step ? 'bg-primary text-primary-foreground' : 
                      stepNumber === step ? 'bg-secondary border-2 border-primary' : 
                      'bg-secondary'
                    }`}>
                      {stepNumber < step ? <Check className="h-5 w-5" /> : stepNumber}
                    </div>
                    <span className="text-sm hidden md:block">
                      {stepNumber === 1 ? 'Select Package' : 
                       stepNumber === 2 ? 'Choose Photographer' : 
                       stepNumber === 3 ? 'Select Date & Time' : 'Personal Details'}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 h-1 bg-secondary">
                <div 
                  className="h-1 bg-primary transition-all" 
                  style={{ width: `${(step - 1) * 33.33}%` }}
                ></div>
              </div>
            </div>

            {/* Step 1: Select Package */}
            {step === 1 && (
              <div className="animate-fade-in">
                <SectionHeading 
                  title="Select Your Package" 
                  subtitle="Choose the package that best suits your photography needs."
                  centered 
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  {packages.map((pkg) => (
                    <div 
                      key={pkg.id}
                      className={`bg-secondary p-6 rounded-lg border-2 transition-colors cursor-pointer ${
                        selectedPackage === pkg.id ? 'border-primary' : 'border-transparent hover:border-primary/50'
                      }`}
                      onClick={() => setSelectedPackage(pkg.id)}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-serif">{pkg.title}</h3>
                        {selectedPackage === pkg.id && (
                          <div className="bg-primary text-primary-foreground p-1 rounded-full">
                            <Check className="h-4 w-4" />
                          </div>
                        )}
                      </div>
                      <div className="mb-4">
                        <span className="text-2xl font-bold">{pkg.price}</span>
                      </div>
                      <p className="text-muted-foreground mb-4 text-sm">{pkg.description}</p>
                      <p className="text-sm mb-4">Duration: {pkg.duration}</p>
                      <ul className="space-y-2 mb-4">
                        {pkg.features.map((feature, index) => (
                          <li key={index} className="flex items-start text-sm">
                            <Check className="h-4 w-4 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="flex justify-end mt-8">
                  <Button onClick={handleNextStep}>Next</Button>
                </div>
              </div>
            )}

            {/* Step 2: Select Photographer */}
            {step === 2 && (
              <div className="animate-fade-in">
                <SectionHeading 
                  title="Choose Your Photographer" 
                  subtitle="Select the photographer whose style and expertise match your vision."
                  centered 
                />

                <div className="mb-6">
                  <label className="text-sm font-medium mb-2 block">Filter by Photography Style</label>
                  <Select 
                    value={selectedCategory} 
                    onValueChange={setSelectedCategory}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>{category}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  {photographers
                    .filter(photographer => 
                      !selectedCategory || 
                      selectedCategory === "all" ||
                      photographer.specialties.includes(selectedCategory)
                    )
                    .map((photographer) => (
                      <div 
                        key={photographer.id}
                        className={`bg-secondary p-6 rounded-lg border-2 transition-colors cursor-pointer ${
                          selectedPhotographer === photographer.id ? 'border-primary' : 'border-transparent hover:border-primary/50'
                        }`}
                        onClick={() => setSelectedPhotographer(photographer.id)}
                      >
                        <div className="flex gap-4">
                          <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                            <img 
                              src={photographer.image} 
                              alt={photographer.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="text-xl font-serif">{photographer.name}</h3>
                              {selectedPhotographer === photographer.id && (
                                <div className="bg-primary text-primary-foreground p-1 rounded-full">
                                  <Check className="h-4 w-4" />
                                </div>
                              )}
                            </div>
                            <p className="text-primary/80 mb-2">{photographer.price}</p>
                            <p className="text-muted-foreground text-sm mb-2">
                              Specialties: {photographer.specialties.join(', ')}
                            </p>
                            <p className="text-sm">
                              Available: {photographer.availability.join(', ')}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>

                {photographers.filter(photographer => 
                  !selectedCategory || 
                  selectedCategory === "all" ||
                  photographer.specialties.includes(selectedCategory)
                ).length === 0 && (
                  <div className="text-center py-8">
                    <p>No photographers available for the selected category. Please try another category.</p>
                  </div>
                )}

                <div className="flex justify-between mt-8">
                  <Button variant="outline" onClick={handlePrevStep}>Previous</Button>
                  <Button onClick={handleNextStep}>Next</Button>
                </div>
              </div>
            )}

            {/* Step 3: Select Date and Time */}
            {step === 3 && (
              <div className="animate-fade-in">
                <SectionHeading 
                  title="Select Date & Time" 
                  subtitle="Choose a convenient date and time for your photography session."
                  centered 
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Select Date</h3>
                    <div className="bg-secondary rounded-lg p-4">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        className="rounded-md"
                        disabled={(date) => {
                          // Disable dates in the past
                          return date < new Date(new Date().setHours(0, 0, 0, 0));
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Select Time</h3>
                    <div className="bg-secondary rounded-lg p-4">
                      <div className="grid grid-cols-2 gap-2">
                        {timeSlots.map((time) => (
                          <Button
                            key={time}
                            variant={selectedTime === time ? "default" : "outline"}
                            className={`w-full justify-start ${selectedTime === time ? '' : 'bg-background'}`}
                            onClick={() => setSelectedTime(time)}
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>

                    {selectedDate && (
                      <div className="mt-6">
                        <h3 className="text-lg font-medium mb-2">Selected Date & Time</h3>
                        <div className="bg-secondary p-4 rounded-lg">
                          <div className="flex items-center">
                            <CalendarIcon className="h-5 w-5 mr-2" />
                            <span>{selectedDate ? format(selectedDate, 'PPP') : 'Select a date'}</span>
                          </div>
                          {selectedTime && (
                            <div className="mt-2 ml-7">
                              at {selectedTime}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex justify-between mt-8">
                  <Button variant="outline" onClick={handlePrevStep}>Previous</Button>
                  <Button onClick={handleNextStep}>Next</Button>
                </div>
              </div>
            )}

            {/* Step 4: Personal Details */}
            {step === 4 && (
              <div className="animate-fade-in">
                <SectionHeading 
                  title="Your Details" 
                  subtitle="Provide your contact information to complete your booking."
                  centered 
                />

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                      <Input id="firstName" placeholder="Your first name" required />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                      <Input id="lastName" placeholder="Your last name" required />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                      <Input id="email" type="email" placeholder="your@email.com" required />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                      <Input id="phone" placeholder="Your phone number" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="location" className="text-sm font-medium">Preferred Location</label>
                    <Input id="location" placeholder="Where would you like the photoshoot to take place?" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Additional Information</label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your photography needs, specific requirements, or any questions you have..." 
                      className="min-h-32" 
                    />
                  </div>

                  <Card className="mt-8">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-medium mb-4">Booking Summary</h3>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Package:</span>
                          <span className="font-medium">{packages.find(p => p.id === selectedPackage)?.title}</span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Price:</span>
                          <span className="font-medium">{packages.find(p => p.id === selectedPackage)?.price}</span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Photographer:</span>
                          <span className="font-medium">{photographers.find(p => p.id === selectedPhotographer)?.name}</span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Date:</span>
                          <span className="font-medium">{selectedDate ? format(selectedDate, 'PPP') : 'Not selected'}</span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Time:</span>
                          <span className="font-medium">{selectedTime}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div className="flex justify-between mt-8">
                    <Button type="button" variant="outline" onClick={handlePrevStep}>Previous</Button>
                    <Button type="submit">Complete Booking</Button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;
