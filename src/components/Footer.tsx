import React from 'react';
import { CircuitBoard } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2">
              <CircuitBoard className="h-8 w-8 text-teal-500" />
              <span className="text-2xl font-bold text-white">AVENQ</span>
            </div>
            <p className="mt-4 text-gray-400">
              Transforming ideas into digital reality. We create innovative solutions for businesses worldwide.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Services
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  Mobile Development
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  UI/UX Design
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#about" className="text-base text-gray-300 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#work" className="text-base text-gray-300 hover:text-white">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-base text-gray-300 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} Avenq. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;