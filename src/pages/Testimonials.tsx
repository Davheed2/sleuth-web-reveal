
import React from 'react';
import HeroSection from '@/components/HeroSection';
import TestimonialCard from '@/components/TestimonialCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  const heroImage = "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1920&q=80";
  
  const testimonials = [
    {
      quote: "Elite Investigations provided the evidence I needed for my legal case. They were professional, discreet, and thorough throughout the entire process.",
      name: "Robert J.",
      title: "Legal Client",
      rating: 5
    },
    {
      quote: "Their background checks saved our company from making a costly hiring mistake. Their report was detailed and delivered quickly.",
      name: "Sarah M.",
      title: "HR Director",
      rating: 5
    },
    {
      quote: "I was skeptical at first, but they handled my case with such professionalism and compassion. The evidence they provided gave me the closure I needed.",
      name: "Michael P.",
      title: "Private Client",
      rating: 4
    },
    {
      quote: "The team at Elite Investigations was incredible. They found my long-lost relative after decades of searching. I can't thank them enough for their persistence.",
      name: "Jennifer K.",
      title: "Family Reunification",
      rating: 5
    },
    {
      quote: "Their corporate investigation uncovered a significant fraud that was happening right under our noses. Their discrete approach prevented any business disruption while gathering evidence.",
      name: "David R.",
      title: "Business Owner",
      rating: 5
    },
    {
      quote: "After being scammed online, I hired Elite Investigations to help locate the perpetrator. They were thorough and professional, and helped me build a case for the authorities.",
      name: "Thomas L.",
      title: "Fraud Victim",
      rating: 5
    },
    {
      quote: "As an attorney, I've worked with many investigation firms over the years. Elite Investigations consistently provides court-admissible evidence and detailed reporting that makes my job easier.",
      name: "Patricia S.",
      title: "Family Law Attorney",
      rating: 5
    },
    {
      quote: "They responded quickly to my urgent situation and kept me informed throughout the process. Their investigator was professional and understanding of my concerns.",
      name: "Christopher B.",
      title: "Private Client",
      rating: 4
    },
    {
      quote: "The surveillance they conducted was completely undetectable. They provided clear video and photographic evidence that made all the difference in my case.",
      name: "Elizabeth W.",
      title: "Legal Client",
      rating: 5
    }
  ];
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Client Testimonials"
        subtitle="Hear what our clients have to say about our professional investigation services."
        backgroundImage={heroImage}
      />
      
      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-pi-navy mb-6">Our Client Success Stories</h2>
            <p className="text-lg text-gray-700">
              At Elite Investigations, we measure our success by the satisfaction of our clients. Here are some testimonials from individuals and businesses we've helped over the years.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                title={testimonial.title}
                rating={testimonial.rating}
              />
            ))}
          </div>
          
          <div className="mt-16 bg-gray-50 p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-pi-navy mb-4 text-center">Share Your Experience</h3>
            <p className="text-gray-700 mb-6 text-center">
              Are you a satisfied client? We'd love to hear about your experience working with Elite Investigations.
            </p>
            <div className="flex justify-center">
              <Button asChild className="bg-pi-accent hover:bg-pi-navy">
                <Link to="/contact">Submit a Testimonial</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-pi-navy text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Professional Investigation Services?</h2>
            <p className="text-xl mb-8">
              Join our satisfied clients. Contact us today for a confidential consultation.
            </p>
            <Button asChild size="lg" className="bg-pi-accent hover:bg-white hover:text-pi-accent">
              <Link to="/contact">Contact Us Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
