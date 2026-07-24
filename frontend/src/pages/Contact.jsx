import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const offices = [
    {
      city: 'Lilongwe',
      address: 'Capital Hill, Ministry of Gender Complex',
      phone: '+265 1 234 567',
      email: 'lilongwe@safereport.mw',
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM',
      isHeadquarters: true,
    },
    {
      city: 'Blantyre',
      address: 'City Centre, 3rd Floor, Chichiri House',
      phone: '+265 1 765 432',
      email: 'blantyre@safereport.mw',
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM',
      isHeadquarters: false,
    },
    {
      city: 'Mzuzu',
      address: 'Mzuzu City Centre, Civic Offices',
      phone: '+265 1 345 678',
      email: 'mzuzu@safereport.mw',
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM',
      isHeadquarters: false,
    },
    {
      city: 'Zomba',
      address: 'Zomba City Council Building',
      phone: '+265 1 456 789',
      email: 'zomba@safereport.mw',
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM',
      isHeadquarters: false,
    },
  ];

  return (
    <main className="max-w-[1280px] mx-auto px-6">
      {/* Hero Section */}
      <section className="py-12 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
            <span className="material-symbols-outlined text-[18px]">contact_mail</span>
            <span className="text-xs font-bold">GET IN TOUCH</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-lg text-gray-600">
            Have questions or need assistance? Our team is here to help. Reach out to us through any of the channels below or visit your nearest district office.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-12 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-600" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    className="h-12 px-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none transition-all"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-600" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    className="h-12 px-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none transition-all"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-600" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  className="h-12 px-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none transition-all"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="+265 XXX XXX XXX"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-600" htmlFor="subject">
                  Subject
                </label>
                <select
                  className="h-12 px-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none transition-all appearance-none bg-white"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option disabled value="">Select a topic</option>
                  <option value="general">General Inquiry</option>
                  <option value="report">Report Status Inquiry</option>
                  <option value="technical">Technical Support</option>
                  <option value="feedback">Feedback</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-600" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none transition-all resize-none"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows="5"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-700 text-white h-12 rounded-xl font-semibold hover:bg-blue-800 transition-all shadow-md active:scale-95"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <div className="bg-blue-700 text-white rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Quick Contact</h2>
              <div className="space-y-4">
                <a href="tel:555" className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined">phone</span>
                  </div>
                  <div>
                    <p className="text-sm opacity-80">Emergency Hotline</p>
                    <p className="text-xl font-bold">555</p>
                  </div>
                </a>
                <a href="tel:+2651234567" className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <p className="text-sm opacity-80">Main Office</p>
                    <p className="text-xl font-bold">+265 1 234 567</p>
                  </div>
                </a>
                <a href="mailto:info@safereport.mw" className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined">email</span>
                  </div>
                  <div>
                    <p className="text-sm opacity-80">Email</p>
                    <p className="text-xl font-bold">info@safereport.mw</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Office Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-semibold text-gray-900">8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-semibold text-gray-900">9:00 AM - 12:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-semibold text-gray-900">Closed</span>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-red-600">Emergency services available 24/7</span> through the hotline.
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors">
                  <span className="material-symbols-outlined text-gray-700">facebook</span>
                </a>
                <a href="#" className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors">
                  <span className="material-symbols-outlined text-gray-700">alternate_email</span>
                </a>
                <a href="#" className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors">
                  <span className="material-symbols-outlined text-gray-700">photo_camera</span>
                </a>
                <a href="#" className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors">
                  <span className="material-symbols-outlined text-gray-700">videocam</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* District Offices */}
      <section className="py-12 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">District Offices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offices.map((office, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl border p-6 hover:shadow-lg transition-all ${
                office.isHeadquarters ? 'border-blue-700 bg-blue-50' : 'border-gray-200'
              }`}
            >
              {office.isHeadquarters && (
                <span className="inline-block bg-blue-700 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  Headquarters
                </span>
              )}
              <h3 className="text-xl font-bold text-gray-900 mb-4">{office.city} Office</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-gray-600 mt-1">location_on</span>
                  <p className="text-sm text-gray-700">{office.address}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-gray-600">phone</span>
                  <a href={`tel:${office.phone}`} className="text-sm text-blue-700 hover:underline">
                    {office.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-gray-600">email</span>
                  <a href={`mailto:${office.email}`} className="text-sm text-blue-700 hover:underline">
                    {office.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-gray-600">schedule</span>
                  <p className="text-sm text-gray-700">{office.hours}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="text-blue-700 font-semibold flex items-center gap-2 mx-auto hover:underline">
            View All 28 District Offices
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 mb-12">
        <div className="bg-gray-200 rounded-2xl overflow-hidden h-[400px] relative">
          <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
            <div className="text-center">
              <span className="material-symbols-outlined text-6xl text-gray-500 mb-4">map</span>
              <p className="text-gray-600">Interactive map showing all district offices</p>
              <p className="text-sm text-gray-500 mt-2">Click on markers to see office details</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
