import React, { useState, useEffect } from 'react';
import { ChevronDownIcon } from '../components/icons/ChevronDownIcon';

const faqData = [
  {
    question: "What services do you specialize in?",
    answer: "We specialize in a range of services including Business Assurance (auditing), Book-Keeping, Business Software Implementation (Infor Sunsystems, Sage, Zoho), Professional Training, Tax Advisory, and Data Analysis."
  },
  {
    question: "How do you handle software implementation and support?",
    answer: "Our process includes software selection, full implementation and configuration, secure data migration, and reliable ongoing technical support to ensure your team can leverage the software to its full potential."
  },
  {
    question: "What is your approach to client communication?",
    answer: "We believe in building long-term partnerships. We act as an extension of your team, providing clear, consistent communication and ongoing guidance to help you navigate challenges and seize opportunities."
  },
  {
    question: "Do you offer services for startups and small businesses?",
    answer: "Absolutely. Our services are tailored to meet the unique needs and budgets of businesses of all sizes, from startups to established enterprises. We offer flexible book-keeping schedules (daily, weekly, monthly) to fit your requirements."
  }
];

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleFaqToggle = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        return value.trim() ? '' : 'Name is required.';
      case 'email':
        if (!value.trim()) return 'Email is required.';
        if (!/\S+@\S+\.\S+/.test(value)) return 'Please enter a valid email address.';
        return '';
      case 'message':
        return value.trim() ? '' : 'Message cannot be empty.';
      default:
        return '';
    }
  };

  useEffect(() => {
    const isNameValid = formData.name.trim() !== '' && !errors.name;
    const isEmailValid = formData.email.trim() !== '' && !errors.email;
    const isMessageValid = formData.message.trim() !== '' && !errors.message;
    setIsFormValid(isNameValid && isEmailValid && isMessageValid);
  }, [formData, errors]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name as keyof typeof errors]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const nameError = validateField('name', formData.name);
    const emailError = validateField('email', formData.email);
    const messageError = validateField('message', formData.message);

    if (nameError || emailError || messageError) {
      setErrors({
        name: nameError,
        email: emailError,
        message: messageError
      });
      return;
    }

    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setErrors({ name: '', email: '', message: '' });

    setTimeout(() => {
        setIsSubmitted(false);
    }, 5000);
  };

  const commonLabelClasses = "absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 left-1 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4";
  const commonInputClasses = "block w-full px-3 py-2.5 text-gray-800 bg-transparent border rounded-md appearance-none focus:outline-none peer transform transition-all duration-300 ease-in-out";

  return (
    <div className="bg-white">
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600">Get in Touch With Our Experts</h1>
          <p className="mt-4 text-lg text-gray-600">We're here to help. Reach out to us with any questions or to schedule a consultation.</p>
        </div>
      </section>
      
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-xl" noValidate>
                {isSubmitted && (
                    <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-md text-center">
                        Thank you for your message! We'll get back to you shortly.
                    </div>
                )}
                <div className="space-y-6">
                  <div>
                    <div className="relative">
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder=" "
                        className={`${commonInputClasses} ${errors.name ? 'border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-200' : 'border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200'} focus:scale-[1.01]`}
                      />
                      <label htmlFor="name" className={`${commonLabelClasses} ${errors.name ? 'text-red-600' : 'text-gray-500 peer-focus:text-blue-600'}`}>Name</label>
                    </div>
                    <div className={`transition-all duration-300 ease-in-out overflow-hidden ${errors.name ? 'max-h-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="text-red-600 text-xs pt-1">{errors.name}</p>
                    </div>
                  </div>
                  <div>
                    <div className="relative">
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder=" "
                        className={`${commonInputClasses} ${errors.email ? 'border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-200' : 'border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200'} focus:scale-[1.01]`}
                      />
                      <label htmlFor="email" className={`${commonLabelClasses} ${errors.email ? 'text-red-600' : 'text-gray-500 peer-focus:text-blue-600'}`}>Email</label>
                    </div>
                    <div className={`transition-all duration-300 ease-in-out overflow-hidden ${errors.email ? 'max-h-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="text-red-600 text-xs pt-1">{errors.email}</p>
                    </div>
                  </div>
                  <div>
                    <div className="relative">
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder=" "
                        className={`${commonInputClasses} border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:scale-[1.01]`}
                      />
                      <label htmlFor="phone" className={`${commonLabelClasses} text-gray-500 peer-focus:text-blue-600`}>Phone Number (Optional)</label>
                    </div>
                  </div>
                  <div>
                     <div className="relative">
                       <textarea 
                        id="message" 
                        name="message" 
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder=" "
                        className={`${commonInputClasses} ${errors.message ? 'border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-200' : 'border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200'} focus:scale-[1.01]`}
                      ></textarea>
                      <label htmlFor="message" className={`${commonLabelClasses} ${errors.message ? 'text-red-600' : 'text-gray-500 peer-focus:text-blue-600'}`}>Message</label>
                    </div>
                    <div className={`transition-all duration-300 ease-in-out overflow-hidden ${errors.message ? 'max-h-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="text-red-600 text-xs pt-1">{errors.message}</p>
                    </div>
                  </div>
                </div>
                <button 
                  type="submit" 
                  className="mt-8 bg-blue-600 text-white font-bold py-3 px-6 rounded-md transition-all duration-300 ease-in-out w-full disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  disabled={!isFormValid}
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info and Map */}
            <div>
              <div className="bg-blue-50 p-8 rounded-lg h-full">
                <h2 className="text-2xl font-bold text-blue-600 mb-4">Contact Information</h2>
                <div className="space-y-3 text-gray-700">
                  <div>
                    <h3 className="font-semibold">Address:</h3>
                    <p>11, Agard Street, Sabo, Yaba, Lagos</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Email:</h3>
                    <p>
                      <a href="mailto:odunsi@tclprofessionals.com" className="text-blue-700 hover:underline">
                        odunsi@tclprofessionals.com
                      </a>
                    </p>
                  </div>
                   <div>
                    <h3 className="font-semibold">WhatsApp:</h3>
                    <p>
                      <a href="tel:+2348023268296" className="text-blue-700 hover:underline">
                        +2348023268296
                      </a>
                    </p>
                  </div>
                   <div>
                    <h3 className="font-semibold">Call:</h3>
                    <p>
                      <a href="tel:+2349091349207" className="text-blue-700 hover:underline">
                        +2349091349207
                      </a>
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <iframe 
                    src="https://www.google.com/maps/embed?q=11%20Agard%20St%2C%20Sabo%20yaba%20101245%2C%20Lagos"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                    className="rounded-md"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            {faqData.map((item, index) => (
              <div key={index} className="border-b">
                <button
                  onClick={() => handleFaqToggle(index)}
                  className="w-full flex justify-between items-center text-left py-5 px-2 focus:outline-none"
                  aria-expanded={openFaqIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-lg font-semibold text-gray-800">{item.question}</span>
                  <ChevronDownIcon
                    className={`w-6 h-6 text-blue-600 transition-transform duration-300 ${
                      openFaqIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFaqIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="px-2 pb-5 text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;