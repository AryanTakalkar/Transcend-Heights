import React from 'react';
import { Building, Hammer, HomeIcon, Factory } from 'lucide-react';

const services = [
  {
    icon: Building,
    title: 'Commercial Construction',
    description: 'State-of-the-art commercial buildings designed for modern business needs.'
  },
  {
    icon: HomeIcon,
    title: 'Residential Projects',
    description: 'Custom homes and residential complexes built with precision and care.'
  },
  {
    icon: Factory,
    title: 'Industrial Facilities',
    description: 'Efficient and sustainable industrial spaces engineered for performance.'
  },
  {
    icon: Hammer,
    title: 'Renovations',
    description: 'Expert renovations that transform existing spaces into modern masterpieces.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">Comprehensive construction solutions for every need</p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-4px]"
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                <div className="inline-flex p-3 rounded-lg bg-blue-600 text-white transition-transform duration-300 group-hover:scale-110">
                  <service.icon size={24} />
                </div>
              </div>
              <div className="pt-8 text-center">
                <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                <p className="mt-4 text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}