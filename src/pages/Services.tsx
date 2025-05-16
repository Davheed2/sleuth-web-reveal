
import React from 'react';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { FileText, Eye, Search, Shield, Users } from 'lucide-react';

const Services = () => {
  const heroImage = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1920&q=80";
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Our Investigation Services"
        subtitle="Comprehensive, professional, and discreet investigative solutions tailored to your needs."
        backgroundImage={heroImage}
      />
      
      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-pi-navy mb-6">Professional Investigation Services</h2>
            <p className="text-lg text-gray-700 mb-12">
              At Elite Investigations, we offer a wide range of professional investigative services designed to meet the unique needs of individuals and businesses. Each of our services is performed with the utmost professionalism, discretion, and attention to detail.
            </p>
            
            {/* Background Checks */}
            <div id="background" className="mb-16 scroll-mt-24">
              <div className="flex items-center mb-6">
                <div className="rounded-full bg-pi-accent/10 p-3 text-pi-accent mr-4">
                  <FileText className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-pi-navy">Background Checks</h3>
              </div>
              
              <p className="text-gray-700 mb-4">
                Our comprehensive background check services help you make informed decisions about potential employees, business partners, tenants, or even romantic interests. We go beyond basic online searches to provide verified, accurate information.
              </p>
              
              <p className="text-gray-700 mb-6">
                Our background checks can include:
              </p>
              
              <ul className="list-disc pl-6 mb-6 grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
                <li>Criminal history records</li>
                <li>Employment verification</li>
                <li>Education verification</li>
                <li>Professional license verification</li>
                <li>Credit history</li>
                <li>Civil litigation history</li>
                <li>Reference checks</li>
                <li>Address history</li>
                <li>Property ownership verification</li>
                <li>Social media analysis</li>
              </ul>
              
              <Button asChild variant="outline" className="border-pi-accent text-pi-accent hover:bg-pi-accent hover:text-white">
                <Link to="/contact">Inquire About Background Checks</Link>
              </Button>
            </div>
            
            {/* Surveillance */}
            <div id="surveillance" className="mb-16 scroll-mt-24">
              <div className="flex items-center mb-6">
                <div className="rounded-full bg-pi-accent/10 p-3 text-pi-accent mr-4">
                  <Eye className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-pi-navy">Surveillance</h3>
              </div>
              
              <p className="text-gray-700 mb-4">
                Our surveillance services provide documented evidence of activities through legal, ethical observation and documentation. We employ skilled investigators and state-of-the-art equipment to gather the information you need.
              </p>
              
              <p className="text-gray-700 mb-6">
                Our surveillance services include:
              </p>
              
              <ul className="list-disc pl-6 mb-6 grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
                <li>Covert physical surveillance</li>
                <li>Video documentation</li>
                <li>Photographic evidence</li>
                <li>Activity logs and reports</li>
                <li>GPS tracking (where legally permitted)</li>
                <li>Multiple investigator teams when needed</li>
                <li>Long-term surveillance capability</li>
                <li>Court-admissible evidence collection</li>
              </ul>
              
              <Button asChild variant="outline" className="border-pi-accent text-pi-accent hover:bg-pi-accent hover:text-white">
                <Link to="/contact">Inquire About Surveillance</Link>
              </Button>
            </div>
            
            {/* Missing Persons */}
            <div id="missing" className="mb-16 scroll-mt-24">
              <div className="flex items-center mb-6">
                <div className="rounded-full bg-pi-accent/10 p-3 text-pi-accent mr-4">
                  <Search className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-pi-navy">Missing Persons</h3>
              </div>
              
              <p className="text-gray-700 mb-4">
                Our missing persons investigations help locate individuals who have disappeared from your life, whether they're family members, friends, or individuals who need to be found for legal reasons. We use specialized techniques and resources to find people when other methods have failed.
              </p>
              
              <p className="text-gray-700 mb-6">
                Our missing persons services include:
              </p>
              
              <ul className="list-disc pl-6 mb-6 grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
                <li>Skip tracing</li>
                <li>Family member location</li>
                <li>Birth parent/child searches</li>
                <li>Old friend/classmate searches</li>
                <li>Database research</li>
                <li>Social media investigation</li>
                <li>Witness location</li>
                <li>Debtor location</li>
              </ul>
              
              <Button asChild variant="outline" className="border-pi-accent text-pi-accent hover:bg-pi-accent hover:text-white">
                <Link to="/contact">Inquire About Missing Persons</Link>
              </Button>
            </div>
            
            {/* Corporate Investigations */}
            <div id="corporate" className="mb-16 scroll-mt-24">
              <div className="flex items-center mb-6">
                <div className="rounded-full bg-pi-accent/10 p-3 text-pi-accent mr-4">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-pi-navy">Corporate Investigations</h3>
              </div>
              
              <p className="text-gray-700 mb-4">
                Our corporate investigation services help businesses identify and address issues that could impact their financial health, reputation, or security. We provide discreet, thorough investigations to protect your business interests.
              </p>
              
              <p className="text-gray-700 mb-6">
                Our corporate investigation services include:
              </p>
              
              <ul className="list-disc pl-6 mb-6 grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
                <li>Employee misconduct investigations</li>
                <li>Workplace theft investigations</li>
                <li>Fraud investigations</li>
                <li>Due diligence for mergers and acquisitions</li>
                <li>Competitive intelligence</li>
                <li>Corporate security assessments</li>
                <li>Intellectual property theft</li>
                <li>Workers' compensation investigations</li>
              </ul>
              
              <Button asChild variant="outline" className="border-pi-accent text-pi-accent hover:bg-pi-accent hover:text-white">
                <Link to="/contact">Inquire About Corporate Investigations</Link>
              </Button>
            </div>
            
            {/* Domestic Investigations */}
            <div id="domestic" className="mb-16 scroll-mt-24">
              <div className="flex items-center mb-6">
                <div className="rounded-full bg-pi-accent/10 p-3 text-pi-accent mr-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-pi-navy">Domestic Investigations</h3>
              </div>
              
              <p className="text-gray-700 mb-4">
                Our domestic investigation services address sensitive personal matters with the utmost discretion and professionalism. We understand these cases involve emotional situations, and we approach them with empathy and confidentiality.
              </p>
              
              <p className="text-gray-700 mb-6">
                Our domestic investigation services include:
              </p>
              
              <ul className="list-disc pl-6 mb-6 grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
                <li>Infidelity investigations</li>
                <li>Child custody support</li>
                <li>Alimony/spousal support investigations</li>
                <li>Cohabitation investigations</li>
                <li>Pre-marital background checks</li>
                <li>Dating background checks</li>
                <li>Child welfare checks</li>
                <li>Online relationship verification</li>
              </ul>
              
              <Button asChild variant="outline" className="border-pi-accent text-pi-accent hover:bg-pi-accent hover:text-white">
                <Link to="/contact">Inquire About Domestic Investigations</Link>
              </Button>
            </div>
            
            {/* CTA */}
            <div className="bg-pi-navy text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Need a Custom Investigation Solution?</h3>
              <p className="text-lg mb-6">
                Our services can be customized to meet your specific needs. Contact us for a confidential consultation to discuss your situation.
              </p>
              <Button asChild className="bg-pi-accent hover:bg-white hover:text-pi-accent">
                <Link to="/contact">Request a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
