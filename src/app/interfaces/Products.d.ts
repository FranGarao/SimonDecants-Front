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
  price: string;
  stock: string;
  sizeId: string;
}

/*
cambie ;
discount: number; por status: string;
brand: string; por price: string;
size_id: number; por sizeId: string;
location: Location; lo borre 
*/