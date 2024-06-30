import React, { useState } from 'react';
import { updateItem } from '../api';
import ImageUpload from './ImageUpload';

const EditItemForm = ({ item, mutate, setEditItem }) => {
  const [name, setName] = useState(item.name);
  const [image, setImage] = useState(item.image);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateItem(item.id, { ...item, name, image });
    setName('');
    setImage(null);
    setEditItem(null);
    mutate();
  };

  const handleCancel = () => {
    setEditItem(null);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="flex mb-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Item name"
          className="border p-2 mr-2 flex-grow"
        />
        <ImageUpload onImageUpload={setImage} initialImage={item.image} />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 mr-2">
        Update Item
      </button>
      <button type="button" onClick={handleCancel} className="bg-gray-500 text-white p-2">
        Cancel
      </button>
    </form>
  );
};

export default EditItemForm;
