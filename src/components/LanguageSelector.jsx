import React from "react";

function LanguageSelector({ language, setLanguage }) {
  return (
    <div className="flex items-center gap-2">
      <i className="ri-earth-line text-gold text-xl" aria-hidden="true"></i>
      <label htmlFor="language-select" className="sr-only">
        Select Language
      </label>
      <select
        id="language-select"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="bg-gray-800 text-white px-3 py-1 rounded-md border border-gray-600"
        aria-label="Select Language"
        aria-describedby="language-description"
      >
        <option value="es">es</option>
        <option value="en">en</option>
        <option value="fr">fr</option>
        <option value="de">de</option>
      </select>
      <span id="language-description" className="sr-only">
        Choose your preferred language for the website.
      </span>
    </div>
  );
}

export default LanguageSelector;
