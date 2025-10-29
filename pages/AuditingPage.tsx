import React from 'react';

const AuditingPage: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-orange-600 mb-2">Business Assurance</h1>
          <p className="text-lg text-gray-600">Building Confidence and Ensuring Integrity</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-orange-600 mb-4">The Value of Business Assurance</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In today's complex business environment, assurance is more than a compliance requirement—it's a vital tool for building trust and confidence. Professional assurance provides stakeholders, from investors and lenders to management, with a clear and credible view of a company's financial health. It identifies risks, highlights opportunities for improvement in internal controls, and ensures that your financial reporting is accurate and transparent.
              </p>
              <p className="text-gray-700 leading-relaxed">
                At TCL Professional Services, we treat every assurance engagement with the seriousness and diligence it deserves. Our approach is designed to instill confidence and provide valuable insights that go beyond the numbers.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-orange-600 mb-4">Our Assurance Process</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our assurance process is collaborative, systematic, and tailored to your organization. We work closely with your team to ensure minimal disruption while maintaining the highest standards of independence and objectivity.
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li><strong>Planning & Risk Assessment:</strong> We begin by understanding your business, industry, and internal control environment to identify key risk areas.</li>
                <li><strong>Fieldwork & Testing:</strong> Our team conducts detailed testing of financial records, transactions, and operational controls.</li>
                <li><strong>Analysis & Evaluation:</strong> We analyze our findings to form an objective opinion on your financial statements.</li>
                <li><strong>Reporting & Communication:</strong> We deliver a clear, concise report and communicate significant findings and recommendations to management and governance bodies.</li>
              </ol>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-orange-600 mb-4">Types of Assurance We Provide</h2>
              <ul className="space-y-4">
                <li>
                  <h3 className="text-xl font-semibold text-gray-800">Statutory Audits</h3>
                  <p className="text-gray-700">We perform audits required by law to provide an independent opinion on the truth and fairness of your financial statements, ensuring you meet all regulatory obligations.</p>
                </li>
                <li>
                  <h3 className="text-xl font-semibold text-gray-800">Internal Audits</h3>
                  <p className="text-gray-700">We help you evaluate and improve the effectiveness of your risk management, control, and governance processes. Our internal audits provide assurance that your operations are running efficiently and effectively.</p>
                </li>
                 <li>
                  <h3 className="text-xl font-semibold text-gray-800">Compliance Audits</h3>
                  <p className="text-gray-700">We review your adherence to specific laws, regulations, policies, and procedures, helping you mitigate the risk of non-compliance.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuditingPage;