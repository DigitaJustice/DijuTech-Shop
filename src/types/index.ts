export interface Product {
  id: number;
  name: string;
  price: number;
  features: string[];
  image: string;
  videoUrl?: string;
  category: string;
}

export interface CustomerForm {
  name: string;
  phone: string;
  altPhone: string;
  quantity: number;
  address: string;
  productId: number;
}