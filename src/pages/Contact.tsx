
import React from 'react';
import HeroSection from '@/components/HeroSection';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const heroImage = "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1920&q=80";
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Contact Us"
        subtitle="Reach out for a confidential consultation with our team of professional investigators."
        backgroundImage={heroImage}
      />
      
      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-pi-navy mb-6">Get in Touch</h2>
                <p className="text-gray-700 mb-8">
                  Fill out the form below for a confidential consultation. We'll respond promptly to discuss your investigation needs.
                </p>
                
                <ContactForm />
              </div>
              
              {/* Contact Information */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-3xl font-bold text-pi-navy mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="mr-4 h-6 w-6 text-pi-accent" />
                    <div>
                      <h3 className="font-bold text-pi-navy mb-1">Phone</h3>
                      <p className="text-gray-700">(555) 123-4567</p>
                      <p className="text-sm text-gray-500">Available 24/7 for urgent matters</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="mr-4 h-6 w-6 text-pi-accent" />
                    <div>
                      <h3 className="font-bold text-pi-navy mb-1">Email</h3>
                      <p className="text-gray-700">info@eliteinvestigations.com</p>
                      <p className="text-sm text-gray-500">We respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="mr-4 h-6 w-6 text-pi-accent" />
                    <div>
                      <h3 className="font-bold text-pi-navy mb-1">Office Location</h3>
                      <p className="text-gray-700">
                        123 Confidential St, Suite 101<br />
                        New York, NY 10001
                      </p>
                      <p className="text-sm text-gray-500">Meetings by appointment only</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="mr-4 h-6 w-6 text-pi-accent" />
                    <div>
                      <h3 className="font-bold text-pi-navy mb-1">Business Hours</h3>
                      <p className="text-gray-700">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday - Sunday: By appointment
                      </p>
                      <p className="text-sm text-gray-500">24/7 availability for surveillance operations</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-pi-navy text-white rounded-lg">
                  <h3 className="font-bold text-xl mb-2">Confidentiality Guarantee</h3>
                  <p>
                    All consultations and investigations are strictly confidential. Your privacy and security are our top priorities.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-pi-navy mb-6">Frequently Asked Questions</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-pi-navy mb-2">How much do your services cost?</h3>
                  <p className="text-gray-700">
                    Our fees vary depending on the type of investigation, complexity, and resources required. We provide transparent pricing and detailed quotes during the initial consultation.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-pi-navy mb-2">How long does an investigation take?</h3>
                  <p className="text-gray-700">
                    Timeframes vary widely based on the type of case. Some investigations can be completed in days, while others may take weeks. We'll provide an estimated timeline during your consultation.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-pi-navy mb-2">Are your investigations legal?</h3>
                  <p className="text-gray-700">
                    Absolutely. We operate within the bounds of the law and adhere to strict ethical standards. Our evidence is collected legally and can be used in court proceedings if needed.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-pi-navy mb-2">What areas do you serve?</h3>
                  <p className="text-gray-700">
                    We primarily serve the greater New York area, but can handle investigations throughout the United States through our network of trusted partners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
