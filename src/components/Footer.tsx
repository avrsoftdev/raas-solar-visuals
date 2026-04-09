
import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-600 p-2 rounded-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                RAAS Engineers
              </span>
            </Link>
            <p className="text-blue-200 leading-relaxed">
              Leading manufacturer of high-quality electrical panels, solar products, and automation systems. 
              Powering industries with innovative electrical solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-3 rounded-lg hover:bg-yellow-500 transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-lg hover:bg-yellow-500 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-lg hover:bg-yellow-500 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-lg hover:bg-yellow-500 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-yellow-400">Quick Links</h3>
            <div className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Products', path: '/products' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-blue-200 hover:text-yellow-400 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Products */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-yellow-400">Our Products</h3>
            <div className="space-y-3">
              {[
                'Electrical Panels',
                'Solar Products',
                'Control Systems',
                'Automation Panels',
                'Distribution Panels',
                'VFD Panels'
              ].map((product) => (
                <div key={product} className="text-blue-200">
                  {product}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-yellow-400">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <div className="text-blue-200">
                  <p> 279, Khera Chauganpur, Ecotech-3rd, Phase-1,</p>
                  <p>Greater Noida, India - 201306</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400" />
                <a href="tel:+911234567890" className="text-blue-200 hover:text-yellow-400 transition-colors duration-300">
                  +91 9773579770
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400" />
                <a href="mailto:info@raasengineers.com" className="text-blue-200 hover:text-yellow-400 transition-colors duration-300">
                  info@raasengineers.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-blue-300 text-sm">
              © 2024 RAAS Engineers. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-blue-300 hover:text-yellow-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-blue-300 hover:text-yellow-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-blue-300 hover:text-yellow-400 transition-colors duration-300">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
