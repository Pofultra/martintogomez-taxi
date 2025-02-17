// src/components/ui/LanguageSelector.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 text-white">
        <Globe size={20} />
        <span className="uppercase">{i18n.language}</span>
      </button>
      <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
        <button
          onClick={() => changeLanguage('en')}
          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          English
        </button>
        <button
          onClick={() => changeLanguage('de')}
          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Deutsch
        </button>
      </div>
    </div>
  );
};

export default LanguageSelector;