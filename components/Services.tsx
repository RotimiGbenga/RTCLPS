import React from 'react';
import { AuditingIcon } from './icons/AuditingIcon';
import { BookkeepingIcon } from './icons/BookkeepingIcon';
import { BusinessSoftwareIcon } from './icons/BusinessSoftwareIcon';
import { TrainingIcon } from './icons/TrainingIcon';
import { TaxIcon } from './icons/TaxIcon';
import { DataAnalysisIcon } from './icons/DataAnalysisIcon';

const services = [
  {
    icon: <AuditingIcon className="w-12 h-12 text-orange-600" />,
    title: 'Business Assurance',
    description: 'Building stakeholder confidence through comprehensive internal and statutory assurance services.'
  },
  {
    icon: <BookkeepingIcon className="w-12 h-12 text-orange-600" />,
    title: 'Book-Keeping and Financial Statements Preparation',
    description: 'Preparing precise financial statements and maintaining accurate records for business health.'
  },
  {
    icon: <BusinessSoftwareIcon className="w-12 h-12 text-orange-600" />,
    title: 'Business Software',
    description: 'Implementing and supporting powerful software solutions to streamline your operations.'
  },
  {
    icon: <TrainingIcon className="w-12 h-12 text-orange-600" />,
    title: 'Professional Training',
    description: 'Empowering your team with customized training on accounting and payroll software.'
  },
  {
    icon: <TaxIcon className="w-12 h-12 text-orange-600" />,
    title: 'Tax Advisory Services',
    description: 'Navigating complex tax regulations to ensure compliance and optimize tax efficiency.'
  },
  {
    icon: <DataAnalysisIcon className="w-12 h-12 text-orange-600" />,
    title: 'Data Analysis & Business Intelligence',
    description: 'Transforming raw data into actionable insights to drive strategic business decisions.'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600">Our Core Services</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">We offer a range of professional services designed to meet the unique challenges of your business.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="inline-block bg-blue-100 p-4 rounded-full mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;