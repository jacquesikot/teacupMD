export interface Product {
  id: number;
  title: string;
  details: string;
  nutrition_details: string;
  price: string;
  sale_price?: string;
  images: string[];
  categories: string[];
}
