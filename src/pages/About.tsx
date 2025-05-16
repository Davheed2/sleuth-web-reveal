
import React from 'react';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  const heroImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80";
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="About Elite Investigations"
        subtitle="Professional, discreet, and experienced private investigators at your service."
        backgroundImage={heroImage}
      />
      
      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-pi-navy mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 mb-8">
              Elite Investigations was founded in 2002 by retired law enforcement officer James Mitchell. With over 30 years of experience in criminal investigations, James established the firm with a commitment to providing professional, ethical, and effective investigative services.
            </p>
            
            <p className="text-lg text-gray-700 mb-8">
              Over the past two decades, we've grown into one of the most trusted private investigation agencies in the region, serving clients from all walks of life. Our team now consists of former law enforcement officers, military personnel, and specialists in various investigative fields.
            </p>
            
            <div className="bg-gray-50 p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-bold text-pi-navy mb-4">Our Mission</h3>
              <p className="text-lg italic text-gray-700">
                "To uncover truth with integrity, professionalism, and discretion, providing our clients with the information they need to make informed decisions."
              </p>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-pi-navy mb-6">Why Choose Us</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-bold text-pi-navy mb-3">Experience & Expertise</h3>
                <p className="text-gray-700">
                  Our team brings over 75 years of combined investigative experience from law enforcement, military, and private sector backgrounds. We've handled cases of all types and complexities.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-pi-navy mb-3">Licensed & Insured</h3>
                <p className="text-gray-700">
                  Elite Investigations is fully licensed and insured in all jurisdictions where we operate. We adhere to all legal and ethical standards in our profession.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-pi-navy mb-3">Confidentiality</h3>
                <p className="text-gray-700">
                  We understand the sensitive nature of private investigations. All client information is treated with the utmost confidentiality and security.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-pi-navy mb-3">Advanced Technology</h3>
                <p className="text-gray-700">
                  We invest in state-of-the-art surveillance equipment, databases, and investigative tools to ensure thorough and effective results for our clients.
                </p>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-pi-navy mb-6">Our Team</h2>
            
            <div className="mb-12">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-pi-navy mb-1">James Mitchell</h3>
                <p className="text-gray-600 italic mb-3">Founder & Lead Investigator</p>
                <p className="text-gray-700">
                  With 30+ years in law enforcement before founding Elite Investigations, James brings extensive experience in criminal investigations, surveillance, and case management. He has specialized training in forensic evidence collection and witness interviewing techniques.
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-pi-navy mb-1">Sarah Johnson</h3>
                <p className="text-gray-600 italic mb-3">Senior Investigator</p>
                <p className="text-gray-700">
                  A former military intelligence officer with 15 years of experience, Sarah specializes in background investigations, digital forensics, and corporate security. She has an advanced degree in Criminal Justice and numerous industry certifications.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-pi-navy mb-1">David Rodriguez</h3>
                <p className="text-gray-600 italic mb-3">Surveillance Specialist</p>
                <p className="text-gray-700">
                  David joined our team after 12 years in local law enforcement. He specializes in surveillance operations, missing persons cases, and evidence documentation. His attention to detail and patience make him exceptionally effective in the field.
                </p>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-pi-navy mb-6">Our Approach</h2>
            
            <div className="mb-12">
              <p className="text-lg text-gray-700 mb-4">
                At Elite Investigations, we take a methodical, thorough approach to every case:
              </p>
              
              <ol className="list-decimal pl-6 space-y-4 text-gray-700">
                <li>
                  <strong>Initial Consultation</strong> - We begin with a detailed, confidential discussion of your needs and objectives.
                </li>
                <li>
                  <strong>Case Planning</strong> - We develop a strategic plan tailored to your specific situation.
                </li>
                <li>
                  <strong>Investigation</strong> - Our team executes the plan using appropriate techniques and resources.
                </li>
                <li>
                  <strong>Documentation & Reporting</strong> - We provide thorough, court-admissible documentation of all findings.
                </li>
                <li>
                  <strong>Follow-Up</strong> - We remain available to clarify findings and provide additional support as needed.
                </li>
              </ol>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-pi-navy mb-4">Ready to Work with Us?</h3>
              <p className="text-lg text-gray-700 mb-6">
                Contact us today for a confidential consultation about your investigative needs.
              </p>
              <Button asChild className="bg-pi-accent hover:bg-pi-navy">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
