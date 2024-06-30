import axios from 'axios';
import useSWR from 'swr';

const fetcher = (url) => axios.get(url).then(res => res.data);

export const useItems = () => {
  const { data, error, mutate } = useSWR('http://localhost:4000/items', fetcher);
  return {
    items: data,
    isLoading: !error && !data,
    isError: error,
    mutate
  };
};

export const createItem = async (item) => {
  const response = await axios.post('http://localhost:4000/items', item);
  return response.data;
};

export const updateItem = async (id, item) => {
  const response = await axios.put(`http://localhost:4000/items/${id}`, item);
  return response.data;
};

export const deleteItem = async (id) => {
  await axios.delete(`http://localhost:4000/items/${id}`);
};
