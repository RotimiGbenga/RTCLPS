import React, { useState } from 'react';

const services = [
  {
    title: 'Business Assurance',
    description: 'Building stakeholder confidence and ensuring integrity through comprehensive internal and statutory assurance services.',
    link: '#/auditing',
    category: 'Compliance & Assurance'
  },
  {
    title: 'Book-Keeping and Financial Statements Preparation',
    description: 'Preparing precise financial statements and maintaining accurate records to form the foundation for informed business decisions.',
    link: '#/bookkeeping',
    category: 'Financial Management'
  },
  {
    title: 'Business Software Implementation and Support',
    description: 'Specializing in the implementation and ongoing support of leading software like Infor Sunsystems, Sage, and Zoho to streamline your operations.',
    link: '#/software',
    category: 'Technology & Software'
  },
  {
    title: 'Professional Training',
    description: 'Offering customized training programs for individuals and teams on accounting and payroll software, available on-site or remotely.',
    link: '#/training',
    category: 'Technology & Software'
  },
  {
    title: 'Tax Advisory Services',
    description: 'Expert guidance on tax planning and compliance for businesses and individuals, helping you navigate complex regulations efficiently.',
    link: '#/tax',
    category: 'Compliance & Assurance'
  },
  {
    title: 'Data Analysis and Business Intelligence',
    description: 'Transforming your raw data into actionable insights that drive strategic decisions and uncover growth opportunities.',
    link: '#/data-analysis',
    category: 'Strategy & Growth'
  }
];

const categories = ['All', ...new Set(services.map(s => s.category))];

const ServicesListPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredServices = activeCategory === 'All'
    ? services
    : services.filter(service => service.category === activeCategory);

  return (
    <div className="bg-white">
      <section className="bg-orange-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Our Professional Services</h1>
          <p className="mt-4 text-lg text-orange-100 max-w-3xl mx-auto">
            We provide a comprehensive suite of services to support your business at every stage of its growth.
          </p>
        </div>
      </section>
      
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ${
                  activeCategory === category
                    ? 'bg-orange-600 text-white shadow-md'
                    : 'bg-gray-200 text-gray-700 hover:bg-orange-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredServices.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300 flex flex-col">
                <h2 className="text-2xl font-bold text-orange-600 mb-3">{service.title}</h2>
                <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                <a 
                  href={service.link} 
                  className="font-semibold text-blue-700 hover:text-orange-800 transition-colors mt-auto self-start"
                >
                  Learn More &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesListPage;