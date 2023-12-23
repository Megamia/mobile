import React, { createContext, useState } from 'react';

export const SelectedImageContext = createContext();

export const SelectedImageProvider = ({ children }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const updateSelectedImage = (imageUri) => {
    setSelectedImage(imageUri);
  };

  return (
    <SelectedImageContext.Provider value={{ selectedImage, updateSelectedImage }}>
      {children}
    </SelectedImageContext.Provider>
  );
};