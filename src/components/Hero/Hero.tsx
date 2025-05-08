import React from 'react';
import { ShoppingBag } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative text-white overflow-hidden bg-gradientClr">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23FFF" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")', backgroundSize: '60px 60px' }}></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-xl">
          <div className="flex items-center mb-6">
            <ShoppingBag className="h-10 w-10 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold">DijuTech Solutions</h1>
          </div>
          
          <p className="text-xl md:text-2xl opacity-90 mb-6">
            Smart Home Solutions for a Safer Tomorrow.
          </p>
          
          <p className="mb-8 text-lg opacity-80">
            Upgrade your home with smart locks, security cameras, Smart switches & sockets and Projectors, Providing you with a cutting-edge home security and automation solutions.
          </p>
          
          <a
            href="#products"
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Shop Now
          </a>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#F3F4F6">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;