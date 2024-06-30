import React, { useCallback, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';

const ImageUpload = ({ onImageUpload, initialImage }) => {
  const [preview, setPreview] = useState(initialImage);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const imageSrc = event.target.result;
      setPreview(imageSrc);
      onImageUpload(imageSrc);
    };
    reader.readAsDataURL(file);
  }, [onImageUpload]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  useEffect(() => {
    setPreview(initialImage);
  }, [initialImage]);

  return (
    <div className="flex items-center">
      <div {...getRootProps()} className="border-dashed border-2 p-4 text-center flex-grow">
        <input {...getInputProps()} />
        {!preview && <p>Drag 'n' drop an image here, or click to select one</p>}
        {preview && (
        <div className="ml-4">
          <img src={preview} alt="Preview" className="w-24 h-24 object-cover" />
        </div>
      )}
      
      </div>
      
    </div>
  );
};

export default ImageUpload;
