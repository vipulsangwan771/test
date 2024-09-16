import React from 'react';
import { useLanguage } from './LanguageContext'; // Import the custom hook
import usaFlag from './Assests/irela.svg';
import ukFlag from './Assests/isle.webp';
import deFlag from './Assests/irela.svg';
import frFlag from './Assests/irela.svg';
import esFlag from './Assests/irela.svg';
import itFlag from './Assests/irela.svg';
import jpFlag from './Assests/irela.svg';
import cnFlag from './Assests/irela.svg';
import ruFlag from './Assests/irela.svg';
import brFlag from './Assests/irela.svg';
import inFlag from './Assests/irela.svg';
import mxFlag from './Assests/irela.svg';

const LanguageSelector = () => {
    const { selectedLanguage, changeLanguage } = useLanguage();

    const handleLanguageChange = (languageCode) => {
        changeLanguage(languageCode);
    };

    const getIcon = () => {
        switch (selectedLanguage) {
            case 'en':
                return usaFlag;
            case 'uk':
                return ukFlag;
            case 'de':
                return deFlag;
            case 'fr':
                return frFlag;
            case 'es':
                return esFlag;
            case 'it':
                return itFlag;
            case 'jp':
                return jpFlag;
            case 'cn':
                return cnFlag;
            case 'ru':
                return ruFlag;
            case 'br':
                return brFlag;
            case 'in':
                return inFlag;
            case 'mx':
                return mxFlag;
            default:
                return usaFlag; // Default icon
        }
    };

    return (
        <div className="language-selector" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ marginBottom: '10px' }}>
                <img
                    src={getIcon()}
                    alt="Selected Language"
                    style={{ cursor: 'pointer', width: '30px', height: '20px' }}
                />
            </div>
            <div className="language-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {/* Repeat for other languages */}
                <img
                    src={usaFlag}
                    alt="English"
                    style={{ cursor: 'pointer', width: '30px', height: '20px' }}
                    onClick={() => handleLanguageChange('en')}
                />
                <img
                    src={ukFlag}
                    alt="English"
                    style={{ cursor: 'pointer', width: '30px', height: '20px' }}
                    onClick={() => handleLanguageChange('en')}
                />
                {/* Other flags */}
            </div>
        </div>
    );
};

export default LanguageSelector;
