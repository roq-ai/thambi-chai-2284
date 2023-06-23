import { UserInterface } from 'interfaces/user';
import { ChaiLocationInterface } from 'interfaces/chai-location';
import { GetQueryInterface } from 'interfaces';

export interface ReviewInterface {
  id?: string;
  rating: number;
  comment?: string;
  user_id: string;
  chai_location_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  chai_location?: ChaiLocationInterface;
  _count?: {};
}

export interface ReviewGetQueryInterface extends GetQueryInterface {
  id?: string;
  comment?: string;
  user_id?: string;
  chai_location_id?: string;
}
