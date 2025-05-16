
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  link,
  className,
}) => {
  return (
    <div className={cn(
      "bg-white rounded-lg p-6 shadow-md service-card",
      className
    )}>
      <div className="flex items-center mb-4">
        <div className="rounded-full bg-pi-accent/10 p-3 text-pi-accent mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-pi-navy">{title}</h3>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <Button 
        asChild
        variant="outline" 
        className="border-pi-accent text-pi-accent hover:bg-pi-accent hover:text-white"
      >
        <Link to={link}>Learn More</Link>
      </Button>
    </div>
  );
};

export default ServiceCard;
