import React, { useState } from 'react';
import { Calculator, Mail, Phone, MapPin, Clock, Send, Home, Building, Factory, Zap, Settings } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useToast } from '../hooks/use-toast';
import { FORM_RECIPIENT_EMAIL, submitLeadForm } from '../lib/formSubmit';

const Quote = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    systemSize: '',
    budget: '',
    timeline: '',
    location: '',
    requirements: '',
    hearAboutUs: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.projectType || !formData.systemSize || !formData.budget) {
      toast({
        title: "Please fill all required fields",
        description: "Name, email, project type, system size, and budget are required.",
        variant: "destructive"
      });
      return;
    }

    try {
      setIsSubmitting(true);

      await submitLeadForm('Quote Request', {
        ...formData,
        recipientEmail: FORM_RECIPIENT_EMAIL,
      });

      toast({
        title: "Quote request submitted successfully!",
        description: `Your request has been forwarded to ${FORM_RECIPIENT_EMAIL}. Our solar experts will contact you within 24 hours with a customized quote.`,
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        systemSize: '',
        budget: '',
        timeline: '',
        location: '',
        requirements: '',
        hearAboutUs: ''
      });
    } catch (error) {
      const description =
        error instanceof Error
          ? error.message
          : 'Please try again in a moment or contact us directly.';

      toast({
        title: 'Quote request could not be sent',
        description,
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-yellow-500/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Get Your <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Free Quote</span>
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Tell us about your solar project and get a detailed, customized quote from our certified engineers within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="text-center mb-8">
                <Calculator className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-white mb-4">
                  Project Details
                </h2>
                <p className="text-blue-200">
                  Fill out the form below and our team will prepare a comprehensive quote tailored to your specific requirements.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white flex items-center">
                    <Mail className="w-5 h-5 mr-2 text-yellow-400" />
                    Contact Information
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white font-semibold mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-blue-300 focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white font-semibold mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-blue-300 focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-white font-semibold mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-blue-300 focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-white font-semibold mb-2">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-blue-300 focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                        placeholder="Enter company name"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-yellow-400" />
                    Project Specifications
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="projectType" className="block text-white font-semibold mb-2">
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                        required
                      >
                        <option value="" className="bg-slate-800">Select project type</option>
                        <option value="residential" className="bg-slate-800">🏠 Residential</option>
                        <option value="commercial" className="bg-slate-800">🏢 Commercial</option>
                        <option value="industrial" className="bg-slate-800">🏭 Industrial</option>
                        <option value="hybrid" className="bg-slate-800">🔋 Hybrid System</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="systemSize" className="block text-white font-semibold mb-2">
                        System Size *
                      </label>
                      <select
                        id="systemSize"
                        name="systemSize"
                        value={formData.systemSize}
                        onChange={handleChange}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                        required
                      >
                        <option value="" className="bg-slate-800">Select system size</option>
                        <option value="1-3kw" className="bg-slate-800">1-3 kW (Small Home)</option>
                        <option value="3-5kw" className="bg-slate-800">3-5 kW (Medium Home)</option>
                        <option value="5-10kw" className="bg-slate-800">5-10 kW (Large Home)</option>
                        <option value="10-25kw" className="bg-slate-800">10-25 kW (Commercial)</option>
                        <option value="25-100kw" className="bg-slate-800">25-100 kW (Industrial)</option>
                        <option value="100kw+" className="bg-slate-800">100 kW+ (Large Scale)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="budget" className="block text-white font-semibold mb-2">
                        Budget Range *
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                        required
                      >
                        <option value="" className="bg-slate-800">Select budget range</option>
                        <option value="under-1lac" className="bg-slate-800">Under ₹1 Lac</option>
                        <option value="1-3lac" className="bg-slate-800">₹1-3 Lac</option>
                        <option value="3-5lac" className="bg-slate-800">₹3-5 Lac</option>
                        <option value="5-10lac" className="bg-slate-800">₹5-10 Lac</option>
                        <option value="10-25lac" className="bg-slate-800">₹10-25 Lac</option>
                        <option value="above-25lac" className="bg-slate-800">Above ₹25 Lac</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="timeline" className="block text-white font-semibold mb-2">
                        Preferred Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                      >
                        <option value="" className="bg-slate-800">Select timeline</option>
                        <option value="asap" className="bg-slate-800">ASAP (Within 1 month)</option>
                        <option value="1-3months" className="bg-slate-800">1-3 Months</option>
                        <option value="3-6months" className="bg-slate-800">3-6 Months</option>
                        <option value="6months+" className="bg-slate-800">6+ Months</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-white font-semibold mb-2">
                      Project Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-blue-300 focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                      placeholder="City, State (e.g., Delhi, NCR)"
                    />
                  </div>
                </div>

                {/* Additional Requirements */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white flex items-center">
                    <Settings className="w-5 h-5 mr-2 text-yellow-400" />
                    Additional Requirements
                  </h3>

                  <div>
                    <label htmlFor="requirements" className="block text-white font-semibold mb-2">
                      Project Requirements & Special Requests
                    </label>
                    <textarea
                      id="requirements"
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-blue-300 focus:outline-none focus:border-yellow-400 transition-colors duration-300 resize-none"
                      placeholder="Tell us about any specific requirements, existing electrical setup, roof type, shading concerns, or special features you need..."
                    />
                  </div>

                  <div>
                    <label htmlFor="hearAboutUs" className="block text-white font-semibold mb-2">
                      How did you hear about us?
                    </label>
                    <select
                      id="hearAboutUs"
                      name="hearAboutUs"
                      value={formData.hearAboutUs}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                    >
                      <option value="" className="bg-slate-800">Select option</option>
                      <option value="google" className="bg-slate-800">Google Search</option>
                      <option value="social-media" className="bg-slate-800">Social Media</option>
                      <option value="referral" className="bg-slate-800">Referral</option>
                      <option value="website" className="bg-slate-800">Website</option>
                      <option value="advertisement" className="bg-slate-800">Advertisement</option>
                      <option value="other" className="bg-slate-800">Other</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 text-white py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:from-yellow-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  <Send className="w-5 h-5" />
                  <span>{isSubmitting ? 'Sending...' : 'Submit Quote Request'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Quote;
