import React, { useState } from 'react';
import { Zap, Sun, Settings, Shield, Battery, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Electrical product images
import ltPanel from '../assets/lt-panels.jpeg';
import apfcPanel from '../assets/apfc-panels.png';
import controlPanel from '../assets/electric-control-panel.webp';
import distributionPanel from '../assets/distributor_panel.jpg';
import vfdPanel from '../assets/vfd-control-panel.png';
import amfPanel from '../assets/amf_panel.webp';

// Solar product images
import acdbBox from '../assets/acdb_box.webp';
import dcdbBox from '../assets/dcdb_box.png';
import earthingSolar from '../assets/earthing_solar.jpg';
import solarStringMonitoring from '../assets/solar-sting-monitring.webp';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('electrical');

  const electricalProducts = [
    {
      name: "Main LT Panel",
      description: "High-quality Main Low Tension electrical panels designed for industrial applications with advanced safety features and robust construction.",
      image: ltPanel,
      features: ["Up to 3200A rating", "IP65 protection", "Modular design", "Advanced metering"]
    },
    {
      name: "APFC Panel",
      description: "Automatic Power Factor Correction panels that optimize power consumption and reduce electricity costs for industrial facilities.",
      image: apfcPanel,
      features: ["Automatic switching", "Power factor improvement", "Energy savings", "Microprocessor controlled"]
    },
    {
      name: "Control Panel",
      description: "Advanced control panels for industrial automation, process control, and monitoring applications with user-friendly interfaces.",
      image: controlPanel,
      features: ["HMI interface", "Remote monitoring", "Data logging", "Alarm systems"]
    },
    {
      name: "Distribution Panel",
      description: "Electrical distribution panels for safe and efficient power distribution in commercial and industrial buildings.",
      image: distributionPanel,
      features: ["Multiple circuits", "Circuit protection", "Easy maintenance", "Compact design"]
    },
    {
      name: "VFD Panel",
      description: "Variable Frequency Drive panels for precise motor control, energy efficiency, and improved process control.",
      image: vfdPanel,
      features: ["Speed control", "Energy efficient", "Soft starting", "Protection features"]
    },
    {
      name: "AMF Panel",
      description: "Auto Mains Failure panels for automatic generator switching during power outages, ensuring continuous power supply.",
      image: amfPanel,
      features: ["Automatic operation", "Generator control", "Load management", "Battery backup"]
    }
  ];

  const solarProducts = [
    {
      name: "Solar ACDB",
      description: "Solar AC Distribution Boxes for safe and efficient AC power distribution in solar power systems with advanced protection.",
      image: acdbBox,
      features: ["AC surge protection", "Isolator switches", "Monitoring capability", "Weather resistant"]
    },
    {
      name: "Solar DCDB",
      description: "Solar DC Distribution Boxes designed for photovoltaic systems with comprehensive protection and monitoring features.",
      image: dcdbBox,
      features: ["DC surge protection", "String monitoring", "Fuse protection", "Remote monitoring"]
    },
    {
      name: "Solar BOS",
      description: "Complete Solar Balance of System components including mounting structures, cables, and protection devices.",
      image: earthingSolar,
      features: ["Complete solution", "Quality components", "Easy installation", "Long durability"]
    },
    {
      name: "String Monitoring Panel",
      description: "Advanced solar string monitoring panels for real-time performance tracking and fault detection in solar installations.",
      image: solarStringMonitoring,
      features: ["Real-time monitoring", "Fault detection", "Performance analytics", "Remote access"]
    }
  ];

  const categories = [
    { id: 'electrical', name: 'Electrical Panels', icon: <Zap className="w-6 h-6" />, products: electricalProducts },
    { id: 'solar', name: 'Solar Products', icon: <Sun className="w-6 h-6" />, products: solarProducts }
  ];

  const activeProducts = categories.find(cat => cat.id === activeCategory)?.products || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-yellow-500/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Products</span>
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Comprehensive range of electrical panels and solar products designed for industrial excellence
            </p>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="flex justify-center">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-2">
              <div className="flex space-x-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center space-x-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white shadow-lg'
                        : 'text-blue-200 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {category.icon}
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeProducts.map((product, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:transform hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-600 p-2 rounded-lg">
                      {activeCategory === 'electrical' ? (
                        <Zap className="w-5 h-5 text-white" />
                      ) : (
                        <Sun className="w-5 h-5 text-white" />
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-blue-200 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="text-yellow-400 font-semibold">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="text-blue-200 text-sm flex items-center">
                          <Shield className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link to="/quote" className="block">
                    <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 text-white py-3 rounded-xl font-semibold hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                      Get Quote
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Additional <span className="text-yellow-400">Services</span>
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Comprehensive support services to ensure optimal performance of your electrical systems
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Settings className="w-12 h-12" />,
                title: "Installation Services",
                description: "Professional installation of all electrical panels and solar systems by certified technicians"
              },
              {
                icon: <Cpu className="w-12 h-12" />,
                title: "System Commissioning",
                description: "Complete system testing, commissioning, and performance optimization for all installations"
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Maintenance Support",
                description: "24/7 technical support and preventive maintenance services to ensure system reliability"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-600 p-4 rounded-xl w-fit mx-auto mb-6">
                  {React.cloneElement(service.icon, { className: "w-12 h-12 text-white" })}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-blue-200">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
