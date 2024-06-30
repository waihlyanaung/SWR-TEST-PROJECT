import React, { useState } from 'react';
import { useItems, deleteItem } from '../api';
import EditItemForm from './EditItemForm';

const ItemList = () => {
  const { items, isLoading, isError, mutate } = useItems();
  const [editItem, setEditItem] = useState(null);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading items</div>;

  const handleDelete = async (id) => {
    await deleteItem(id);
    mutate();
  };

  const handleEdit = (item) => {
    setEditItem(item);
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item.id} className="p-4 border-b flex justify-between items-center">
          <div className="flex items-center">
            {item.image && <img src={item.image} alt={item.name} className="w-16 h-16 mr-4" />}
            <span>{item.name}</span>
          </div>
          <div>
            <button
              onClick={() => handleEdit(item)}
              className="mr-4 text-blue-500"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(item.id)}
              className="text-red-500"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      {editItem && (
        <EditItemForm item={editItem} mutate={mutate} setEditItem={setEditItem} />
      )}
    </div>
  );
};

export default ItemList;
