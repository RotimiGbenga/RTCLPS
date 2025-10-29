import React from 'react';

const SoftwarePage: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-orange-600 mb-2">Business Software Implementation & Support</h1>
          <p className="text-lg text-gray-600">Integrating Technology for Peak Performance</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-orange-600 mb-4">Our Software Expertise</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The right software can revolutionize your business, but implementation can be complex. We bridge the gap between technology and business needs. Our team has deep expertise in a range of powerful financial and business management software, ensuring a smooth transition and optimal performance.
              </p>
              <div className="flex flex-wrap gap-4 my-6">
                <span className="bg-blue-100 text-blue-800 font-semibold px-3 py-1 rounded-full">Infor Sunsystems</span>
                <span className="bg-blue-100 text-blue-800 font-semibold px-3 py-1 rounded-full">Sage</span>
                <span className="bg-blue-100 text-blue-800 font-semibold px-3 py-1 rounded-full">Zoho</span>
                <span className="bg-blue-100 text-blue-800 font-semibold px-3 py-1 rounded-full">Dolibarr</span>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-orange-600 mb-4">Our Services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We provide end-to-end support for your business software journey:
              </p>
              <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li><strong>Software Selection:</strong> We help you choose the best software that aligns with your budget, goals, and existing infrastructure.</li>
                <li><strong>Implementation:</strong> Our experts handle the complete setup, configuration, and integration of your new system with minimal disruption.</li>
                <li><strong>Data Migration:</strong> We securely and accurately migrate your existing data to the new platform, ensuring a seamless transition.</li>
                <li><strong>Ongoing Support:</strong> Our commitment doesn't end at launch. We provide reliable, ongoing technical support to resolve issues and ensure your team can leverage the software to its full potential.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-orange-600 mb-4">Key Benefits</h2>
              <ul className="space-y-4">
                <li>
                  <h3 className="text-xl font-semibold text-gray-800">Improved Efficiency</h3>
                  <p className="text-gray-700">Automate manual tasks, streamline workflows, and give your team more time to focus on high-value activities.</p>
                </li>
                <li>
                  <h3 className="text-xl font-semibold text-gray-800">Better Integration</h3>
                  <p className="text-gray-700">Connect disparate systems into a unified platform for a single source of truth and improved data accuracy.</p>
                </li>
                 <li>
                  <h3 className="text-xl font-semibold text-gray-800">Enhanced Reporting</h3>
                  <p className="text-gray-700">Gain access to powerful reporting and analytics tools for deeper insights into your business performance.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoftwarePage;