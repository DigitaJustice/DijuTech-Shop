import React from 'react';
import { MessageSquare } from 'lucide-react';
import { openWhatsAppChat } from '../../utils/whatsapp';

const WhatsAppButton: React.FC = () => {
  return (
    <button
      onClick={openWhatsAppChat}
      className="fixed bottom-6 right-6 z-20 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare className="h-6 w-6" />
    </button>
  );
};

export default WhatsAppButton;