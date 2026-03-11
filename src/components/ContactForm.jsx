import { useState } from 'react';

const STATICFORMS_ENDPOINT = import.meta.env.VITE_STATICFORMS_ENDPOINT || 'https://api.staticforms.dev/submit';
const STATICFORMS_ACCESS_KEY =
  import.meta.env.VITE_STATICFORMS_ACCESS_KEY || import.meta.env.VITE_STATICFORMS_API_KEY || '';
const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || '';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  classInterested: 'Class 10',
  message: '',
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState({ type: '', message: '' });

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitState({ type: '', message: '' });

    try {
      if (!STATICFORMS_ACCESS_KEY) {
        throw new Error('StaticForms access key is missing.');
      }
      if (!CONTACT_EMAIL) {
        throw new Error('Contact email is missing.');
      }

      const response = await fetch(STATICFORMS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          accessKey: STATICFORMS_ACCESS_KEY,
          apiKey: STATICFORMS_ACCESS_KEY,
          subject: `New inquiry from ${formData.name} to ${CONTACT_EMAIL}`,
          to: CONTACT_EMAIL,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          classInterested: formData.classInterested,
          message: formData.message,
          replyTo: formData.email,
        }),
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Submission failed. Please try again.');
      }

      setSubmitState({
        type: 'success',
        message: 'Thank you. Your message has been sent successfully.',
      });
      setFormData(initialForm);
    } catch (error) {
      setSubmitState({
        type: 'error',
        message: error.message || 'Something went wrong. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-wrapper bg-lightbg">
      <div className="content-container">
        <h2 className="font-heading text-3xl font-bold text-gray-900">Book Demo</h2>
        <div className="heading-accent" />
        <p className="mt-5 text-gray-700">
          Fill this form to book your demo session. You will receive a confirmation by email.
        </p>

        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
          <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={onChange}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-secondary"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={onChange}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-secondary"
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
                Phone (optional)
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={onChange}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-secondary"
              />
            </div>

            <div>
              <label htmlFor="classInterested" className="mb-1 block text-sm font-medium text-gray-700">
                Class Interested
              </label>
              <select
                id="classInterested"
                name="classInterested"
                value={formData.classInterested}
                onChange={onChange}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-secondary"
              >
                <option>Class 10</option>
                <option>Class 11</option>
                <option>Class 12</option>
                <option>Engineering</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={onChange}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-secondary"
              />
            </div>

            <div className="sm:col-span-2">
              <button type="submit" disabled={isSubmitting} className="primary-btn w-full sm:w-auto">
                {isSubmitting ? 'Sending...' : 'Submit Request'}
              </button>
            </div>

            {submitState.type === 'success' && (
              <p className="sm:col-span-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
                {submitState.message}
              </p>
            )}

            {submitState.type === 'error' && (
              <p className="sm:col-span-2 rounded-xl bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
                {submitState.message}
              </p>
            )}

            <p className="sm:col-span-2 text-xs text-gray-500">
              Your information will only be used for academic communication.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
