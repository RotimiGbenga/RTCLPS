import React from 'react';

const TrainingPage: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-blue-600 mb-2">Professional Training</h1>
          <p className="text-lg text-gray-600">Empowering Your Team with Knowledge</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-blue-600 mb-4">Unlock the Full Potential of Your Software</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Investing in powerful accounting and payroll software is only the first step. To truly maximize your return on investment, your team needs to know how to use it effectively. Proper training empowers your employees, reduces errors, improves efficiency, and ensures you are leveraging all the features your software has to offer.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We offer expert training on all the accounting and payroll software we support. Our supportive, educational approach is designed to build confidence and competence within your team.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-blue-600 mb-4">Customized Training Programs</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We recognize that every team learns differently and has unique needs. That's why we don't offer one-size-fits-all training. Our programs are:
              </p>
              <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li><strong>Tailored to Your Team:</strong> We can design training for individuals needing one-on-one attention or for entire departments.</li>
                <li><strong>Focused on Your Workflows:</strong> We customize the curriculum to focus on the specific features and processes relevant to your business operations.</li>
                <li><strong>Beginner to Advanced:</strong> Whether your team is new to the software or needs a refresher on advanced features, we can cater to all skill levels.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-600 mb-4">Flexible Delivery Options</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We offer training in the format that works best for your business and schedule.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-600">On-Site Training</h3>
                  <p className="text-gray-600 mt-2">Our instructors can come to your office to provide hands-on training in your own environment, using your own data for a truly practical learning experience.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-600">Remote Training</h3>
                  <p className="text-gray-600 mt-2">We conduct live, interactive training sessions online, providing a convenient and effective option for distributed teams or those with tight schedules.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrainingPage;