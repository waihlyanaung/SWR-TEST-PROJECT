import { ComponentType } from 'react';
import { Mutator } from 'swr';

interface ItemFormProps {
  mutate: Mutator;
}

const ItemForm: ComponentType<ItemFormProps>;
export default ItemForm;
