import React from 'react';

const DataAnalysisPage: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-blue-600 mb-2">Data Analysis & Business Intelligence</h1>
          <p className="text-lg text-gray-600">Unlocking the Power of Your Data</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-blue-600 mb-4">From Data to Decisions</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In today's competitive landscape, data is one of your most valuable assets. However, raw data alone is not enough. The key to unlocking its potential lies in effective analysis and business intelligence (BI). By transforming complex data into clear, actionable insights, you can make smarter decisions, optimize operations, and identify new opportunities for growth.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our team helps you harness the power of your data, providing you with the clarity needed to navigate challenges and drive your business forward with confidence.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Data & BI Services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We offer a comprehensive suite of services to meet your data analysis needs:
              </p>
              <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li><strong>Custom Dashboards & Reporting:</strong> We build intuitive, interactive dashboards that visualize your key performance indicators (KPIs) in real-time.</li>
                <li><strong>Performance Analytics:</strong> We dive deep into your data to analyze business performance, identify trends, and uncover the root causes of successes and challenges.</li>
                <li><strong>Data Visualization:</strong> We translate complex datasets into easy-to-understand charts, graphs, and maps that tell a compelling story.</li>
                <li><strong>Predictive Modeling:</strong> Leveraging advanced statistical techniques, we help you forecast future trends and outcomes to support proactive strategic planning.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-600 mb-4">Key Benefits</h2>
              <ul className="space-y-4">
                <li>
                  <h3 className="text-xl font-semibold text-gray-800">Data-Driven Strategy</h3>
                  <p className="text-gray-700">Base your strategic decisions on solid evidence and insights, not just intuition.</p>
                </li>
                <li>
                  <h3 className="text-xl font-semibold text-gray-800">Operational Efficiency</h3>
                  <p className="text-gray-700">Identify bottlenecks, streamline processes, and optimize resource allocation for improved productivity.</p>
                </li>
                 <li>
                  <h3 className="text-xl font-semibold text-gray-800">Competitive Advantage</h3>
                  <p className="text-gray-700">Gain a deeper understanding of your market, customers, and competitors to stay ahead of the curve.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataAnalysisPage;