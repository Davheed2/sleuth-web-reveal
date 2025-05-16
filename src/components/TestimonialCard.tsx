
import React from 'react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title?: string;
  rating: number;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  title,
  rating,
  className,
}) => {
  return (
    <div className={cn(
      "bg-white p-6 rounded-lg shadow-md",
      className
    )}>
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={cn(
              "w-5 h-5",
              i < rating ? "text-yellow-500" : "text-gray-300"
            )}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 15.934l-6.18 3.254 1.18-6.876L.1 7.514l6.9-1.004L10 .294l3 6.216 6.9 1.004-4.9 4.798 1.18 6.876z"
              clipRule="evenodd"
            />
          </svg>
        ))}
      </div>
      <blockquote className="italic text-gray-600 mb-4">"{quote}"</blockquote>
      <div className="font-medium text-pi-navy">{name}</div>
      {title && <div className="text-sm text-gray-500">{title}</div>}
    </div>
  );
};

export default TestimonialCard;
