export type ProductsList = Product[];

export interface Product {
  id: number;
  title: string;
  category: string;
  gender: string;
  img: string;
  description: string;
  status: string;
  discount: number;
  brand: string;
  size_id: number;
}
