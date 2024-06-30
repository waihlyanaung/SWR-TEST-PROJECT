import React, { useState } from 'react';
import { createItem } from '../api';
import ImageUpload from './ImageUpload';

const ItemForm = ({ mutate }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createItem({ name, image });
    setName('');
    setImage(null); // Reset image state
    mutate();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="flex flex-col mb-4">
       
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Item name"
          className="border p-2 mr-2 flex-grow"
        />
        <ImageUpload onImageUpload={setImage} initialImage={image} />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2">
        Add Item
      </button>
    </form>
  );
};

export default ItemForm;
