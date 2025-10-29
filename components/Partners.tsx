import React from 'react';
import { CloudIcon } from './icons/CloudIcon';
import { DatabaseIcon } from './icons/DatabaseIcon';
import { ShieldCheckIcon } from './icons/ShieldCheckIcon';


const Partners: React.FC = () => {
  const partners = [
    { name: 'Cloud Solutions', icon: <CloudIcon className="w-16 h-16" /> },
    { name: 'Data Analytics', icon: <DatabaseIcon className="w-16 h-16" /> },
    { name: 'Cybersecurity', icon: <ShieldCheckIcon className="w-16 h-16" /> },
    { name: 'Financial Software', icon: <BriefcaseIcon className="w-16 h-16" /> },
    { name: 'Marketing Platforms', icon: <ChartBarIcon className="w-16 h-16" /> },
  ];

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800">Technologies We Leverage</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We use industry-leading software and platforms to deliver exceptional results for our clients.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {partners.map((partner, index) => (
            <div key={index} className="flex flex-col items-center text-gray-500 hover:text-blue-600 transition-colors duration-300">
              {partner.icon}
              <span className="mt-2 text-sm font-semibold">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { BriefcaseIcon } from './icons/BriefcaseIcon';
import { ChartBarIcon } from './icons/ChartBarIcon';

export default Partners;