import { Location } from './Location';
export interface ProductsList {
  ok: boolean;
  products: Product[];
}

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
  location: Location;
}
