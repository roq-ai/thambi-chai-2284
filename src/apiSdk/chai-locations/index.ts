import axios from 'axios';
import queryString from 'query-string';
import { ChaiLocationInterface, ChaiLocationGetQueryInterface } from 'interfaces/chai-location';
import { GetQueryInterface } from '../../interfaces';

export const getChaiLocations = async (query?: ChaiLocationGetQueryInterface) => {
  const response = await axios.get(`/api/chai-locations${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createChaiLocation = async (chaiLocation: ChaiLocationInterface) => {
  const response = await axios.post('/api/chai-locations', chaiLocation);
  return response.data;
};

export const updateChaiLocationById = async (id: string, chaiLocation: ChaiLocationInterface) => {
  const response = await axios.put(`/api/chai-locations/${id}`, chaiLocation);
  return response.data;
};

export const getChaiLocationById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/chai-locations/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteChaiLocationById = async (id: string) => {
  const response = await axios.delete(`/api/chai-locations/${id}`);
  return response.data;
};
