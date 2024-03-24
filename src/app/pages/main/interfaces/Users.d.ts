import { Location } from './Location';
export type Users = User[];

export interface User {
  name: string;
  last_name: string;
  email: string;
  password: string;
  phone: string;
  location: Location;
}
