import React from 'react';
import { 
  CodeIcon, 
  PaletteIcon, 
  SmartphoneIcon, 
  GlobeIcon, 
  DatabaseIcon, 
  TerminalIcon 
} from './icons';

const services = [
  {
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies.',
    icon: CodeIcon,
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that enhance user experience.',
    icon: PaletteIcon,
  },
  {
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications.',
    icon: SmartphoneIcon,
  },
  {
    title: 'Web Hosting',
    description: 'Reliable and secure hosting solutions for your applications.',
    icon: GlobeIcon,
  },
  {
    title: 'Database Design',
    description: 'Efficient and scalable database architectures.',
    icon: DatabaseIcon,
  },
  {
    title: 'Performance Optimization',
    description: 'Speed up your applications for better user experience.',
    icon: TerminalIcon,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Comprehensive digital solutions tailored to your needs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-teal-500 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-teal-50 text-teal-600 ring-4 ring-white">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium">
                  <a href="#" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {service.title}
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;