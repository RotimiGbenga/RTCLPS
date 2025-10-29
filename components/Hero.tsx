import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-blue-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/1600/900?grayscale&blur=2')" }}>
      </div>
      <div className="container mx-auto px-6 py-24 md:py-32 text-center relative z-10">
        <h1 className={`text-4xl md:text-6xl font-extrabold leading-tight mb-4 transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          Your Partner in Financial Clarity and Business Growth
        </h1>
        <p className={`text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8 transition-all duration-700 ease-out delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Expert Auditing, Book-keeping, and Business Software Solutions to streamline your operations.
        </p>
        <div className={`flex flex-col sm:flex-row justify-center items-center gap-4 transition-all duration-700 ease-out delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
           <a
            href="#/contact"
            className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition-transform transform hover:scale-105 duration-300 inline-block w-full sm:w-auto"
          >
            Request a Consultation
          </a>
          <a
            href="#/services"
            className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-white hover:text-blue-600 transition-colors duration-300 inline-block w-full sm:w-auto"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;