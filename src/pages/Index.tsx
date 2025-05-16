
import React from 'react';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Shield, Search, Users, Eye, FileText } from 'lucide-react';

const Index = () => {
  const heroImage = "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1920&q=80";
  
  const features = [
    {
      title: "Licensed & Insured",
      description: "Fully licensed private investigation agency with comprehensive insurance coverage."
    },
    {
      title: "Confidentiality",
      description: "Your privacy is paramount. All information is handled with the utmost confidentiality."
    },
    {
      title: "Expert Team",
      description: "Our investigators have decades of combined experience in law enforcement and private investigation."
    },
    {
      title: "Advanced Technology",
      description: "We utilize the latest surveillance and investigative technology to deliver results."
    },
  ];
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Professional Private Investigation Services"
        subtitle="Discreet, thorough, and reliable investigations conducted by licensed professionals. We uncover the truth when it matters most."
        backgroundImage={heroImage}
        primaryButtonText="Our Services"
        primaryButtonLink="/services"
        secondaryButtonText="Free Consultation"
        secondaryButtonLink="/contact"
      />
      
      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-pi-navy mb-4">Expert Private Investigation Services</h2>
            <p className="text-lg text-gray-700">
              With over 20 years of experience, Elite Investigations provides professional, discreet, and thorough investigative services for individuals and businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg text-pi-navy mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild variant="default" className="bg-pi-accent hover:bg-pi-navy">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-pi-navy mb-4">Our Services</h2>
            <p className="text-lg text-gray-700">
              We offer a comprehensive range of investigative services tailored to your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Background Checks"
              description="Comprehensive background checks for employment, tenants, or personal reasons. Verify credentials and uncover potential issues."
              icon={<FileText className="h-6 w-6" />}
              link="/services#background"
            />
            <ServiceCard
              title="Surveillance"
              description="Professional surveillance services using advanced technology and techniques. Gather evidence and document activities."
              icon={<Eye className="h-6 w-6" />}
              link="/services#surveillance"
            />
            <ServiceCard
              title="Missing Persons"
              description="Locate missing persons or long-lost relatives. Our team uses specialized techniques to find people who don't want to be found."
              icon={<Search className="h-6 w-6" />}
              link="/services#missing"
            />
            <ServiceCard
              title="Corporate Investigations"
              description="Investigate employee misconduct, fraud, theft, or competitive intelligence. Protect your business interests."
              icon={<Shield className="h-6 w-6" />}
              link="/services#corporate"
            />
            <ServiceCard
              title="Domestic Investigations"
              description="Infidelity investigations, child custody support, and other sensitive personal matters handled with discretion."
              icon={<Users className="h-6 w-6" />}
              link="/services#domestic"
            />
            <div className="flex flex-col justify-center items-center bg-pi-navy text-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4">Need a Custom Solution?</h3>
              <p className="text-center mb-6">Contact us for a confidential consultation about your specific needs.</p>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-pi-navy">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-pi-navy mb-4">Client Testimonials</h2>
            <p className="text-lg text-gray-700">
              Don't just take our word for it. Here's what our clients have to say.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Elite Investigations provided the evidence I needed for my legal case. They were professional, discreet, and thorough."
              name="Robert J."
              title="Legal Client"
              rating={5}
            />
            <TestimonialCard
              quote="Their background checks saved our company from making a costly hiring mistake. Their report was detailed and delivered quickly."
              name="Sarah M."
              title="HR Director"
              rating={5}
            />
            <TestimonialCard
              quote="I was skeptical at first, but they handled my case with such professionalism and compassion. The evidence they provided gave me the closure I needed."
              name="Michael P."
              title="Private Client"
              rating={4}
            />
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild variant="default" className="bg-pi-accent hover:bg-pi-navy">
              <Link to="/testimonials">Read More Testimonials</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-pi-navy text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Professional Investigation Services?</h2>
            <p className="text-xl mb-8">
              Contact us today for a confidential consultation. Your privacy is our priority.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-pi-accent hover:bg-white hover:text-pi-accent">
                <Link to="/contact">Contact Us Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-pi-navy">
                <a href="tel:5551234567">(555) 123-4567</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
