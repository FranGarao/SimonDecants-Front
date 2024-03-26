import { Location } from './Location';
export interface Users {
  ok: boolean
  users: User[]
  };

export interface User {
  name: string;
  last_name: string;
  email: string;
  password: string;
  phone: string;
  location: Location;
}
