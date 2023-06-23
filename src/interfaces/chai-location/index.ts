import { ReviewInterface } from 'interfaces/review';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface ChaiLocationInterface {
  id?: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  rating: number;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  review?: ReviewInterface[];
  organization?: OrganizationInterface;
  _count?: {
    review?: number;
  };
}

export interface ChaiLocationGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  address?: string;
  organization_id?: string;
}
