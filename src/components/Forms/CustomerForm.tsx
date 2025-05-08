import React, { useState } from 'react';
import { CustomerForm as CustomerFormType, Product } from '../../types';
import { sendToWhatsApp } from '../../utils/whatsapp';
import { X } from 'lucide-react';

interface CustomerFormProps {
  product: Product;
  onClose: () => void;
}

const CustomerForm: React.FC<CustomerFormProps> = ({ product, onClose }) => {
  const [form, setForm] = useState<CustomerFormType>({
    name: '',
    phone: '',
    altPhone: '',
    quantity: 1,
    address: '',
    productId: product.id
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: name === 'quantity' ? parseInt(value, 10) || 1 : value
    });
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!form.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9()+\-\s]{7,15}$/.test(form.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (form.altPhone.trim() && !/^[0-9()+\-\s]{7,15}$/.test(form.altPhone.trim())) {
      newErrors.altPhone = 'Please enter a valid phone number';
    }
    
    if (form.quantity < 1) {
      newErrors.quantity = 'Quantity must be at least 1';
    }
    
    if (!form.address.trim()) {
      newErrors.address = 'Address is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      sendToWhatsApp(form, product);
      setIsSubmitting(false);
      onClose();
    }, 500);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md relative">
        <button 
          onClick={onClose} 
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Order {product.name}</h2>
          <p className="text-gray-600 mb-4">Please fill in your details to complete the order.</p>
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your phone number"
                />
                {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
              </div>
              
              <div>
                <label htmlFor="altPhone" className="block text-sm font-medium text-gray-700 mb-1">Alternative Phone Number (Optional)</label>
                <input
                  type="tel"
                  id="altPhone"
                  name="altPhone"
                  value={form.altPhone}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.altPhone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter alternative phone number"
                />
                {errors.altPhone && <p className="mt-1 text-xs text-red-500">{errors.altPhone}</p>}
              </div>
              
              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  value={form.quantity}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.quantity ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.quantity && <p className="mt-1 text-xs text-red-500">{errors.quantity}</p>}
              </div>
              
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Delivery Address</label>
                <textarea
                  id="address"
                  name="address"
                  rows={3}
                  value={form.address}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.address ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your delivery address"
                />
                {errors.address && <p className="mt-1 text-xs text-red-500">{errors.address}</p>}
              </div>
              
              <div className="bg-gray-50 p-4 rounded-md">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700">Price per item:</span>
                  <span className="font-medium">${product.price.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700">Quantity:</span>
                  <span className="font-medium">{form.quantity}</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t border-gray-200 pt-2 mt-2">
                  <span>Total:</span>
                  <span>${(product.price * form.quantity).toFixed(2)}</span>
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2 px-4 rounded-md text-white font-medium ${
                  isSubmitting
                    ? 'bg-blue-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700'
                } transition-colors duration-300`}
              >
                {isSubmitting ? 'Sending...' : 'Submit Order via WhatsApp'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomerForm;