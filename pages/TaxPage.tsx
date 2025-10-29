import React from 'react';

const TaxPage: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-blue-600 mb-2">Tax Advisory Services</h1>
          <p className="text-lg text-gray-600">Expert Guidance for Compliance and Efficiency</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-blue-600 mb-4">Navigating the Complexities of Tax</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The tax landscape is constantly evolving, presenting both challenges and opportunities for businesses and individuals. Staying compliant while optimizing your tax position requires deep expertise and proactive planning.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our team of tax professionals provides the expert guidance you need to navigate this complexity with confidence. We work diligently to ensure you are not only compliant with all regulations but also positioned to be as tax-efficient as possible.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Tax Services</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Business Tax Planning & Compliance</h3>
                  <p className="text-gray-700 mt-1">We assist businesses of all sizes with corporate tax returns, strategic tax planning to minimize liabilities, and guidance on tax implications of business decisions.</p>
                </div>
                 <div>
                  <h3 className="text-xl font-semibold text-gray-800">Individual Tax Services</h3>
                  <p className="text-gray-700 mt-1">From preparing personal tax returns to advising on tax-efficient wealth management and retirement planning, we help individuals protect and grow their assets.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Indirect Tax (VAT)</h3>
                  <p className="text-gray-700 mt-1">We offer comprehensive services for VAT registration, return filing, and advisory to ensure you manage your indirect tax obligations correctly.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Regulatory Compliance</h3>
                  <p className="text-gray-700 mt-1">Our team keeps you up-to-date with changing tax laws and helps you manage your relationship with tax authorities, ensuring full compliance and peace of mind.</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaxPage;