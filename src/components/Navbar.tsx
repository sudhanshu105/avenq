import  { useState } from 'react';
import { Menu, X, CircuitBoard } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center gap-2">
                <CircuitBoard className="h-8 w-8 text-teal-600" />
                <span className="text-2xl font-bold text-gray-900">AVENQ</span>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-gray-900 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#services" className="text-gray-900 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium">Services</a>
              <a href="#work" className="text-gray-900 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium">Our Work</a>
              <a href="#about" className="text-gray-900 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#contact" className="bg-teal-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-teal-700">Contact Us</a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-teal-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="text-gray-900 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#services" className="text-gray-900 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium">Services</a>
            <a href="#work" className="text-gray-900 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium">Our Work</a>
            <a href="#about" className="text-gray-900 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#contact" className="bg-teal-600 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-teal-700">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;