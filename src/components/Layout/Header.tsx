import React, { useState, useEffect } from 'react';
import { MessageSquare, ShoppingBag } from 'lucide-react';
import { openWhatsAppChat } from '../../utils/whatsapp';
import { categories } from '../../data/products';

interface HeaderProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeCategory, setActiveCategory }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 z-10 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <ShoppingBag className="h-8 w-8 text-blue-600 mr-2" />
            <h1 className="text-xl font-bold text-gray-800">DijuTech Solutions</h1>
          </div>
          
          <div className="hidden md:flex space-x-4 overflow-x-auto py-2">
            <button 
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                activeCategory === 'All' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory('All')}
            >
              All Products
            </button>
            
            {categories.map((category) => (
              <button 
                key={category}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          <button 
            onClick={openWhatsAppChat}
            className="flex items-center px-4 py-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors"
          >
            <MessageSquare className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Chat with us</span>
          </button>
        </div>
        
        <div className="md:hidden flex overflow-x-auto space-x-2 mt-2 pb-2">
          <button 
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors flex-shrink-0 ${
              activeCategory === 'All' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveCategory('All')}
          >
            All Products
          </button>
          
          {categories.map((category) => (
            <button 
              key={category}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors flex-shrink-0 ${
                activeCategory === category 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;