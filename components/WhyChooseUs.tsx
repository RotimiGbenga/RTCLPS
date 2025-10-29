import React from 'react';
import { CheckBadgeIcon } from './icons/CheckBadgeIcon';

const differentiators = [
  {
    title: 'Deep Software Expertise',
    description: 'We are proficient with a wide range of industry-leading software, including Infor Sunsystems, Sage, Zoho, and Dolibarr, ensuring we can select, implement, and support the perfect solution for your unique business needs.'
  },
  {
    title: 'Personalized Service',
    description: 'We believe that one size does not fit all. Our team takes the time to understand your business challenges and goals to provide tailored solutions and dedicated support that drives real results.'
  },
  {
    title: 'Your Long-Term Partner',
    description: 'Our goal is to build lasting relationships. We act as an extension of your team, providing ongoing guidance and support to help you navigate challenges and seize opportunities for growth.'
  }
]

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600">Why Choose Us?</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We combine technology expertise with a commitment to your success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
                 <div key={index} className="bg-gray-50 p-8 rounded-lg">
                    <div className="flex items-center mb-4">
                        <CheckBadgeIcon className="w-8 h-8 text-orange-600 mr-3" />
                        <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                 </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;