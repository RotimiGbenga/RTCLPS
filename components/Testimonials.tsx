import React from 'react';

const testimonials = [
  {
    quote: "Their team provided exceptional insights that transformed our financial processes. We couldn't be happier with the results and their ongoing support.",
    name: 'Alex Johnson',
    company: 'Director, Future Solutions',
    avatar: 'https://picsum.photos/100/100?random=1'
  },
  {
    quote: "A truly reliable partner. Their expertise in business software implementation was critical for our project's success. Highly recommended for any growing business.",
    name: 'Maria Garcia',
    company: 'Founder, Connective Hub',
    avatar: 'https://picsum.photos/100/100?random=2'
  },
   {
    quote: "The professionalism and depth of knowledge at TCL are outstanding. They helped us navigate complex tax issues with ease and confidence.",
    name: 'David Chen',
    company: 'CFO, Quantum Leap Inc.',
    avatar: 'https://picsum.photos/100/100?random=3'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600">What Our Clients Say About Us</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">We're proud to have built lasting partnerships with our clients.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg flex flex-col">
              <p className="text-gray-600 italic mb-6 flex-grow">"{testimonial.quote}"</p>
              <div className="flex items-center mt-auto">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;