import React, { useState } from 'react';
import Layout from '../components/layout/Layout';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    email: '',
    message: '',
    status: ''
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formState.email,
          message: formState.message
        }),
      });

      if (response.ok) {
        setFormState(prev => ({ ...prev, status: 'success' }));
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setFormState(prev => ({ ...prev, status: 'error' }));
    }
  };

  return (
    <Layout
      title="Contact Tess - Research Inquiries"
      description="Get in touch with Tess regarding research collaborations or inquiries"
    >
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-8">Contact Me</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={formState.email}
              onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-softBlue-500 focus:ring-softBlue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              value={formState.message}
              onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-softBlue-500 focus:ring-softBlue-500"
              required
            />
          </div>

          {formState.status === 'success' && (
            <div className="rounded-md bg-green-50 p-4">
              <p className="text-sm text-green-700">Message sent successfully!</p>
            </div>
          )}

          {formState.status === 'error' && (
            <div className="rounded-md bg-red-50 p-4">
              <p className="text-sm text-red-700">Failed to send message. Please try again.</p>
            </div>
          )}

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-softBlue hover:bg-softBlue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-softBlue-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Contact;
