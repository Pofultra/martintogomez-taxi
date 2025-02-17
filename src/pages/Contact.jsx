import React from 'react';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">{t('contact.title')}</h2>
        <div className="max-w-xl mx-auto text-center space-y-6">
          <p className="text-lg">
            {t('contact.message', {
              defaultValue: 'We are here to help you. Contact us through the following means:',
            })}
          </p>
          
          <div className="space-y-2">
            <p><strong>{t('contact.phone')}: </strong> +41 75 5777 700</p>
            <p><strong>{t('contact.email')}: </strong>service@martintogomez-taxi.com</p>
            <p><strong>{t('contact.address')}: </strong>123 Business St, City, Country</p>
          </div>

          <div className="flex justify-center space-x-4 mt-6">
            <a href="https://www.facebook.com/profile.php?id=61568516343141" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <i className="ri-facebook-box-fill text-2xl text-blue-600 hover:text-blue-800"></i>
            </a>
            
            <a href="https://instagram.com/martintogomez.taxi" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <i className="ri-instagram-fill text-2xl text-pink-500 hover:text-pink-700"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;