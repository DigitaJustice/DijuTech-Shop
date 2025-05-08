import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import WhatsAppButton from './components/Layout/WhatsAppButton';
import ProductGrid from './components/Products/ProductGrid';
import CustomerForm from './components/Forms/CustomerForm';
import Hero from './components/Hero/Hero';
import { products } from './data/products';
import { Product } from './types';

function App() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(product => product.category === activeCategory);

  const handleOrder = (productId: number) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      setSelectedProduct(product);
      setIsFormOpen(true);
    }
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      
      <main className="flex-grow">
        <Hero />
        
        <div id="products" className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Products & Services</h2>
          <p className="text-gray-600 mb-8">Browse our selection of Smart products we Offer.</p>
          
          {filteredProducts.length > 0 ? (
            <div className="animate-fade-in"> 
              <ProductGrid 
                products={filteredProducts} 
                onOrder={handleOrder} 
              />
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No products found in this category.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
      <WhatsAppButton />
      
      {isFormOpen && selectedProduct && (
        <CustomerForm 
          product={selectedProduct} 
          onClose={closeForm} 
        />
      )}
    </div>
  );
}

export default App;