import React, { useState, useEffect } from 'react';

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
    
    // Clear error on change after initial blur
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

    // Simulate form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setErrors({ name: '', email: '', message: '' });

    setTimeout(() => {
        setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="bg-white">
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-600">Get in Touch With Our Experts</h1>
          <p className="mt-4 text-lg text-gray-600">We're here to help. Reach out to us with any questions or to schedule a consultation.</p>
        </div>
      </section>
      
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg" noValidate>
                {isSubmitted && (
                    <div className="mb-4 p-4 bg-green-100 text-green-800 rounded-md text-center">
                        Thank you for your message! We'll get back to you shortly.
                    </div>
                )}
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-orange-500'}`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-orange-500'}`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Phone Number (Optional)</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" 
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-orange-500'}`}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>
                <button 
                  type="submit" 
                  className="bg-orange-600 text-white font-bold py-3 px-6 rounded-md hover:bg-orange-700 transition-colors w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
                  disabled={!isFormValid}
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info and Map */}
            <div>
              <div className="bg-blue-50 p-8 rounded-lg h-full">
                <h2 className="text-2xl font-bold text-orange-600 mb-4">Contact Information</h2>
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
    </div>
  );
};

export default ContactPage;