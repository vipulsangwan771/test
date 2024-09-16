import React, { createContext, useState, useContext } from 'react';
import usa from './Assests/usa.svg'; 

const SelectedImageContext = createContext();

export const SelectedImageProvider = ({ children }) => {
    const [selectedImage, setSelectedImage] = useState(() => {
        return localStorage.getItem('selectedImage') || usa; 
    });

    const updateSelectedImage = (image) => {
        setSelectedImage(image);
        localStorage.setItem('selectedImage', image); 
    };

    return (
        <SelectedImageContext.Provider value={{ selectedImage, setSelectedImage: updateSelectedImage }}>
            {children}
        </SelectedImageContext.Provider>
    );
};

export const useSelectedImage = () => useContext(SelectedImageContext);
