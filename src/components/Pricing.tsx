// import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '4999 Rs',
    description: 'Perfect for small businesses',
    features: [
      'Single page website',
      'Responsive design',
      'Basic SEO optimization',
      '2 rounds of revisions',
      '1 month support',
    ],
  },
  {
    name: 'Professional',
    price: '14,499 Rs',
    description: 'Ideal for growing companies',
    features: [
      'Up to 5 pages website',
      'Custom animations',
      'Advanced SEO package',
      'E-commerce integration',
      '3 months support',
      'Analytics setup',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large scale projects',
    features: [
      'Custom web application',
      'Advanced features',
      'Priority support',
      'Custom integrations',
      '6 months support',
      'Performance optimization',
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Transparent Pricing
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Choose the perfect plan for your needs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl shadow-lg overflow-hidden ${
                plan.highlighted
                  ? 'border-2 border-teal-500 scale-105 bg-white'
                  : 'bg-white'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 inset-x-0 h-2 bg-teal-500"></div>
              )}
              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                <p className="mt-4 text-gray-500">{plan.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-base font-medium text-gray-500">/project</span>}
                </p>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check className="h-5 w-5 text-teal-500" />
                      </div>
                      <p className="ml-3 text-sm text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <a
                    href="#contact"
                    className={`block w-full py-3 px-4 rounded-md shadow text-center text-sm font-medium ${
                      plan.highlighted
                        ? 'bg-teal-600 text-white hover:bg-teal-700'
                        : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;