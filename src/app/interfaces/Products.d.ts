import { Location } from './Location';
export interface ProductsList {
  ok: boolean;
  products: Product[];
}

export interface Product {
  id?: number;
  title: string;
  category: string;
  gender: string;
  img: string;
  description: string;
  status: string;
  discount: string;
  brand: string;
  price: number;
  stock: string;
  size_id: string;
}

/*
cambie ;
discount: number; por status: string;
brand: string; por price: string;
size_id: number; por sizeId: string;
location: Location; lo borre 
*/
