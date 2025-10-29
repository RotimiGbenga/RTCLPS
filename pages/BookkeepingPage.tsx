import React from 'react';

const BookkeepingPage: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-blue-600 mb-2">Book-Keeping & Financial Statements Preparation</h1>
          <p className="text-lg text-gray-600">The Foundation of Financial Clarity</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-blue-600 mb-4">Precision Records for a Clearer Future</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Accurate and up-to-date book-keeping and financial reporting are the bedrock of any successful business. They provide the critical financial data you need to make informed, strategic decisions, manage cash flow effectively, and plan for future growth. Without it, you're flying blind.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Let our team of meticulous professionals handle your book-keeping, so you can focus on what you do best: running your business. We ensure your financial records are always organized, compliant, and ready for review.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-blue-600 mb-4">Benefits of Professional Financial Services</h2>
               <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li><strong>Informed Decision-Making:</strong> Access real-time financial reports to guide your business strategy.</li>
                <li><strong>Improved Cash Flow Management:</strong> Keep track of payables and receivables to maintain a healthy cash flow.</li>
                <li><strong>Stress-Free Tax Time:</strong> With organized records, tax preparation becomes simple and straightforward.</li>
                <li><strong>Compliance and Peace of Mind:</strong> Ensure your business adheres to all financial regulations.</li>
                <li><strong>More Time for You:</strong> Free up your valuable time to focus on core business activities.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Flexible Services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">We understand that every business has different needs. That's why we offer flexible book-keeping services to fit your requirements and budget.</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-600">Daily</h3>
                  <p className="text-gray-600 mt-2">Ideal for high-transaction businesses that need constant oversight of their financial health.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-600">Weekly</h3>
                  <p className="text-gray-600 mt-2">A balanced approach for growing businesses to stay on top of their finances without daily commitment.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-600">Monthly</h3>
                  <p className="text-gray-600 mt-2">Perfect for small businesses and startups needing essential financial tracking and reporting.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookkeepingPage;