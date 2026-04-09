
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Send, Calculator, Home, Building, Factory } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useToast } from '../hooks/use-toast';
import { FORM_RECIPIENT_EMAIL, submitLeadForm } from '../lib/formSubmit';

const Contact = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const isQuoteRequest = searchParams.get('type') === 'quote';
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    // Quote-specific fields
    projectType: '',
    systemSize: '',
    budget: '',
    timeline: '',
    location: ''
  });

  useEffect(() => {
    if (isQuoteRequest) {
      setFormData(prev => ({
        ...prev,
        subject: 'Quote Request - Solar System Installation'
      }));
    }
  }, [isQuoteRequest]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to send your message.",
        variant: "destructive"
      });
      return;
    }

    // Quote-specific validation
    if (isQuoteRequest && (!formData.projectType || !formData.systemSize || !formData.budget)) {
      toast({
        title: "Please fill quote details",
        description: "Project type, system size, and budget are required for quote requests.",
        variant: "destructive"
      });
      return;
    }

    try {
      setIsSubmitting(true);

      await submitLeadForm(isQuoteRequest ? 'Quote Request' : 'Contact Form', {
        ...formData,
        formType: isQuoteRequest ? 'Quote Request' : 'Contact Form',
        recipientEmail: FORM_RECIPIENT_EMAIL,
      });

      toast({
        title: isQuoteRequest ? "Quote request sent successfully!" : "Message sent successfully!",
        description: `Your inquiry has been forwarded to ${FORM_RECIPIENT_EMAIL}. We'll get back to you within 24 hours.`,
      });

      setFormData({
        name: '',
        email: '',
        subject: isQuoteRequest ? 'Quote Request - Solar System Installation' : '',
        message: '',
        projectType: '',
        systemSize: '',
        budget: '',
        timeline: '',
        location: ''
      });
    } catch (error) {
      const description =
        error instanceof Error
          ? error.message
          : 'Please try again in a moment or contact us directly.';

      toast({
        title: 'Message could not be sent',
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
              {isQuoteRequest ? 'Get Your' : 'Contact'} <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">{isQuoteRequest ? 'Free Quote' : 'Us'}</span>
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              {isQuoteRequest 
                ? 'Tell us about your solar project and get a customized quote from our experts'
                : 'Get in touch with our experts for electrical panels, solar products, and automation solutions'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  {isQuoteRequest ? 'Request Your' : 'Send us a'} <span className="text-yellow-400">{isQuoteRequest ? 'Quote' : 'Message'}</span>
                </h2>
                <p className="text-blue-200 text-lg">
                  {isQuoteRequest 
                    ? 'Fill out the details below and our solar experts will provide you with a customized quote within 24 hours.'
                    : 'Have a project in mind? We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.'
                  }
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
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

                <div>
                  <label htmlFor="subject" className="block text-white font-semibold mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-blue-300 focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                    placeholder="What is this regarding?"
                    required
                  />
                </div>

                {/* Quote-specific fields */}
                {isQuoteRequest && (
                  <div className="space-y-6 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <Calculator className="w-6 h-6 mr-2 text-yellow-400" />
                      Project Details
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
                          required={isQuoteRequest}
                        >
                          <option value="" className="bg-slate-800">Select project type</option>
                          <option value="residential" className="bg-slate-800">Residential</option>
                          <option value="commercial" className="bg-slate-800">Commercial</option>
                          <option value="industrial" className="bg-slate-800">Industrial</option>
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
                          required={isQuoteRequest}
                        >
                          <option value="" className="bg-slate-800">Select system size</option>
                          <option value="1-3kw" className="bg-slate-800">1-3 kW</option>
                          <option value="3-5kw" className="bg-slate-800">3-5 kW</option>
                          <option value="5-10kw" className="bg-slate-800">5-10 kW</option>
                          <option value="10-25kw" className="bg-slate-800">10-25 kW</option>
                          <option value="25kw+" className="bg-slate-800">25 kW+</option>
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
                          required={isQuoteRequest}
                        >
                          <option value="" className="bg-slate-800">Select budget range</option>
                          <option value="under-1lac" className="bg-slate-800">Under ₹1 Lac</option>
                          <option value="1-3lac" className="bg-slate-800">₹1-3 Lac</option>
                          <option value="3-5lac" className="bg-slate-800">₹3-5 Lac</option>
                          <option value="5-10lac" className="bg-slate-800">₹5-10 Lac</option>
                          <option value="above-10lac" className="bg-slate-800">Above ₹10 Lac</option>
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
                          <option value="asap" className="bg-slate-800">ASAP</option>
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
                )}

                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-blue-300 focus:outline-none focus:border-yellow-400 transition-colors duration-300 resize-none"
                    placeholder="Tell us about your project requirements..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 text-white py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:from-yellow-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  <Send className="w-5 h-5" />
                  <span>{isSubmitting ? 'Sending...' : isQuoteRequest ? 'Request Quote' : 'Send Message'}</span>
                </button>
              </form>
            </div>

            {/* Map and Contact Info */}
            <div className="space-y-8">
              {/* Map Container */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-white mb-6">Visit Our Office</h3>
                <div className="aspect-video bg-slate-700 rounded-xl flex items-center justify-center relative overflow-hidden">
                  {/* Placeholder map with interactive styling */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-yellow-500/20"></div>
                  <div className="relative z-10 text-center">
                    <MapPin className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                    <p className="text-white font-semibold">Interactive Map</p>
                    <p className="text-blue-200 text-sm">279, Khera Chauganpur, Ecotech-3rd, Phase-1, Greater Noida, UTTAR PRADESH, 201306</p>
                  </div>
                  
                  {/* Animated location pin */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full animate-pulse"></div>
                    <div className="w-12 h-12 bg-yellow-400/30 rounded-full animate-ping absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-600 p-3 rounded-lg flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Address</h4>
                      <p className="text-blue-200">
                        279, Khera Chauganpur, Ecotech-3rd, Phase-1, <br />
                       Greater Noida, UTTAR PRADESH, 201306
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-600 p-3 rounded-lg flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Phone</h4>
                      <p className="text-blue-200">+91  9773579770</p>
                      {/* <p className="text-blue-200">+91 098 765 4321</p> */}
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-600 p-3 rounded-lg flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Email</h4>
                      <p className="text-blue-200">{FORM_RECIPIENT_EMAIL}</p>
                      <p className="text-blue-200">raasengineer@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-600 p-3 rounded-lg flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Business Hours</h4>
                      <p className="text-blue-200">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Response Promise */}
              <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-2">Quick Response Guarantee</h3>
                <p className="text-blue-200">
                  We respond to all inquiries within 24 hours. For urgent matters, call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
