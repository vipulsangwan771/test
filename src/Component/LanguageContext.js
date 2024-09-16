import React, { createContext, useState, useContext } from 'react';

// Create a context for language
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [selectedLanguage, setSelectedLanguage] = useState('en'); // Default language

    const changeLanguage = (languageCode) => {
        setSelectedLanguage(languageCode);
    };

    return (
        <LanguageContext.Provider value={{ selectedLanguage, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Custom hook to use the LanguageContext
export const useLanguage = () => {
    return useContext(LanguageContext);
};
