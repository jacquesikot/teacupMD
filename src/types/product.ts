export interface Product {
  id: string;
  title: string;
  details: string;
  nutrition_details: string;
  price: string;
  sale_price?: string;
  images: string[];
  category: string[];
}
