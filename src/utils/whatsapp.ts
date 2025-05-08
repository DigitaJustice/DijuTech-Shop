import { CustomerForm, Product } from "../types";

export const sendToWhatsApp = (form: CustomerForm, product: Product): void => {
  // Replace with your actual WhatsApp number
  const phoneNumber = "1234567890";
  
  // Format the message
  const message = `
*New Order*
-------------------
*Product*: ${product.name}
*Price*: $${product.price}
*Quantity*: ${form.quantity}
*Total*: $${(product.price * form.quantity).toFixed(2)}

*Customer Details*:
*Name*: ${form.name}
*Phone*: ${form.phone}
*Alt Phone*: ${form.altPhone || "Not provided"}
*Address*: ${form.address}
  `;
  
  // Encode the message for URL
  const encodedMessage = encodeURIComponent(message);
  
  // Create the WhatsApp URL
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  // Open WhatsApp in a new tab
  window.open(whatsappUrl, "_blank");
};

export const openWhatsAppChat = (): void => {
  // Replace with your actual WhatsApp number
  const phoneNumber = "1234567890";
  
  // Create the WhatsApp URL
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  
  // Open WhatsApp in a new tab
  window.open(whatsappUrl, "_blank");
};