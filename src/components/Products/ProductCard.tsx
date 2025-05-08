import React, { useState } from 'react';
import { Product } from '../../types';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onOrder: (productId: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onOrder }) => {
  const [expanded, setExpanded] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        {product.videoUrl && isVideoPlaying ? (
          <video 
            src={product.videoUrl}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            onError={() => setIsVideoPlaying(false)}
          />
        ) : (
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg';
            }}
          />
        )}
        
        {product.videoUrl && (
          <button 
            className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white rounded-full p-2 text-xs"
            onClick={() => setIsVideoPlaying(!isVideoPlaying)}
          >
            {isVideoPlaying ? 'Show Image' : 'Play Video'}
          </button>
        )}
        
        <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 text-sm font-semibold rounded">
          ${product.price.toFixed(2)}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
        
        <div className="mb-4">
          <div 
            className="flex justify-between items-center cursor-pointer" 
            onClick={toggleExpand}
          >
            <h4 className="text-sm font-medium text-gray-700">Features</h4>
            {expanded ? (
              <ChevronUp className="h-4 w-4 text-gray-500" />
            ) : (
              <ChevronDown className="h-4 w-4 text-gray-500" />
            )}
          </div>
          
          {expanded && (
            <ul className="mt-2 space-y-1 pl-5 text-sm text-gray-600 list-disc">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          )}
        </div>
        
        <button
          onClick={() => onOrder(product.id)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;