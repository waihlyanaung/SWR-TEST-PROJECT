import { SWRResponse } from 'swr';

interface Item {
  id: number;
  name: string;
  image: string;
}

export const useItems: () => SWRResponse<Item[], any>;
export const createItem: (item: Partial<Item>) => Promise<Item>;
export const updateItem: (id: number, item: Partial<Item>) => Promise<Item>;
export const deleteItem: (id: number) => Promise<void>;
