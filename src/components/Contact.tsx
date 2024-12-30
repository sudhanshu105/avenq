import React from 'react';
import { MailIcon, PhoneIcon, MapPinIcon } from './icons';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Let's discuss your next project
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <ContactForm />
          </div>

          <div className="space-y-8">
            <div className="flex items-start">
              <MailIcon className="h-6 w-6 text-teal-600 mt-1" />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Email</h3>
                <p className="mt-1 text-gray-500">contact@avenq.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <PhoneIcon className="h-6 w-6 text-teal-600 mt-1" />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                <p className="mt-1 text-gray-500">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start">
              <MapPinIcon className="h-6 w-6 text-teal-600 mt-1" />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Location</h3>
                <p className="mt-1 text-gray-500">
                  123 Tech Street<br />
                  San Francisco, CA 94105
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;