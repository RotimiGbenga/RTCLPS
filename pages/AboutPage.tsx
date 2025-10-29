import React from 'react';

const teamMembers = [
  { name: 'John Doe', title: 'Managing Partner, CPA', avatar: 'https://picsum.photos/200/200?random=4' },
  { name: 'Jane Smith', title: 'Head of Software Solutions', avatar: 'https://picsum.photos/200/200?random=5' },
  { name: 'Samuel Green', title: 'Senior Tax Advisor', avatar: 'https://picsum.photos/200/200?random=6' }
];

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-orange-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">About TCL Professional Services</h1>
          <p className="mt-4 text-lg text-orange-100">Your dedicated partner in growth and financial excellence.</p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-orange-600 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To provide reliable and efficient financial and software solutions that empower businesses to thrive. We are committed to delivering services with the utmost integrity, professionalism, and a dedication to our clients' success.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-orange-600 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To be the leading provider of integrated professional services for growing businesses. We aim to be recognized for our expertise, our innovative solutions, and the lasting partnerships we build with our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600">Meet Our Team</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Our strength lies in our experienced and dedicated professionals.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <img src={member.avatar} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                <p className="text-orange-600 font-semibold">{member.title}</p>
                <p className="text-gray-600 mt-2 text-sm">A brief bio highlighting expertise, experience, and commitment to client success will be placed here.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;