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

// EPC images
import epc3 from '../assets/epc3.jpeg';
import epc4 from '../assets/epc4.jpeg';
import epc5 from '../assets/epc5.jpeg';
import epc6 from '../assets/epc6.jpeg';

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

  const epcProducts = [];

  const categories = [
    { id: 'electrical', name: 'Electrical Panels', icon: <Zap className="w-6 h-6" />, products: electricalProducts },
    { id: 'solar', name: 'Solar Products', icon: <Sun className="w-6 h-6" />, products: solarProducts },
    { id: 'epc', name: 'Solar EPC', icon: <Settings className="w-6 h-6" />, products: epcProducts }
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
      {activeProducts.length > 0 && (
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
                        ) : activeCategory === 'solar' ? (
                          <Sun className="w-5 h-5 text-white" />
                        ) : (
                          <Settings className="w-5 h-5 text-white" />
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
      )}

      {/* Solar EPC Content */}
      {activeCategory === 'epc' && (
        <section className="pt-8 pb-16 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              {/* EPC Images Grid */}
              <div className="grid md:grid-cols-4 gap-6 mb-6">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                  <img
                    src={epc3}
                    alt="Solar EPC Service 3"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                  <img
                    src={epc4}
                    alt="Solar EPC Service 4"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                  <img
                    src={epc5}
                    alt="Solar EPC Service 5"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                  <img
                    src={epc6}
                    alt="Solar EPC Service 6"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>

              {/* EPC Content */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
                <h2 className="text-4xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    Solar Power Plant EPC and I&C Services
                  </span>
                </h2>

                <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                  Empowering the Future with Solar Energy
                </h3>
                <p className="text-blue-200 leading-relaxed mb-8">
                  We deliver end-to-end <strong>Engineering, Procurement & Construction (EPC)</strong> and <strong>Installation & Commissioning (I&C)</strong> solutions for solar power plants. From concept to grid-connected operation, we design, build, and commission reliable, high-performance solar power plants that maximize energy yield and ROI.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4">
                  What is EPC + I&C in Solar Power Plants?
                </h3>
                <p className="text-blue-200 leading-relaxed mb-4">
                  <strong>EPC (Engineering, Procurement & Construction)</strong> is a single-point turnkey solution where we handle the complete lifecycle of your solar power project:
                </p>
                <ul className="text-blue-200 leading-relaxed mb-6 ml-6 list-disc">
                  <li><strong>Engineering</strong>: Site assessment, system design, shadow analysis, load calculation, and detailed engineering drawings.</li>
                  <li><strong>Procurement</strong>: Sourcing high-quality solar modules, inverters, mounting structures, cables, transformers, and balance-of-system (BoS) components from Tier-1 manufacturers.</li>
                  <li><strong>Construction</strong>: Civil works, module mounting, electrical installation, and grid interconnection.</li>
                </ul>

                <p className="text-blue-200 leading-relaxed mb-8">
                  <strong>I&C (Installation & Commissioning)</strong> ensures flawless execution and immediate power generation:
                </p>
                <ul className="text-blue-200 leading-relaxed mb-8 ml-6 list-disc">
                  <li>Professional installation as per IEC standards and MNRE guidelines.</li>
                  <li>Testing, synchronization, and grid commissioning.</li>
                  <li>Performance guarantee and 5–25 years of O&M support.</li>
                </ul>

                <h3 className="text-2xl font-bold text-white mb-6">
                  Types of Solar Power Plants We Execute
                </h3>
                <p className="text-blue-200 leading-relaxed mb-8">
                  We specialize in all major types of solar power plants. Here is the detailed literature you can directly use on your website:
                </p>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full bg-white/10 rounded-lg overflow-hidden">
                    <thead className="bg-gradient-to-r from-yellow-500 to-orange-600">
                      <tr>
                        <th className="px-4 py-3 text-left text-white font-bold">Type of Solar Power Plant</th>
                        <th className="px-4 py-3 text-left text-white font-bold">Description</th>
                        <th className="px-4 py-3 text-left text-white font-bold">Typical Capacity</th>
                        <th className="px-4 py-3 text-left text-white font-bold">Best Suited For</th>
                        <th className="px-4 py-3 text-left text-white font-bold">Key Features</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-white/10">
                        <td className="px-4 py-3 text-blue-200 font-semibold">Utility-Scale / Ground-Mounted Solar Power Plant</td>
                        <td className="px-4 py-3 text-blue-200">Large-scale solar farms installed on open land using fixed-tilt or tracker structures.</td>
                        <td className="px-4 py-3 text-blue-200">1 MW to 500 MW+</td>
                        <td className="px-4 py-3 text-blue-200">IPPs, DISCOMs, Solar Parks, State utilities</td>
                        <td className="px-4 py-3 text-blue-200">Highest energy yield, economies of scale, tracker option for +20–25% extra generation</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="px-4 py-3 text-blue-200 font-semibold">Rooftop Solar Power Plant (On-Grid)</td>
                        <td className="px-4 py-3 text-blue-200">Solar panels installed on industrial, commercial or institutional rooftops and synchronized with the grid.</td>
                        <td className="px-4 py-3 text-blue-200">10 kW to 10 MW</td>
                        <td className="px-4 py-3 text-blue-200">Factories, malls, hospitals, schools, IT parks</td>
                        <td className="px-4 py-3 text-blue-200">Net-metering, zero wheeling charges in many states, fast ROI (3–5 years)</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="px-4 py-3 text-blue-200 font-semibold">Off-Grid Solar Power Plant</td>
                        <td className="px-4 py-3 text-blue-200">Standalone system with battery energy storage; no grid connection required.</td>
                        <td className="px-4 py-3 text-blue-200">1 kW to 5 MW</td>
                        <td className="px-4 py-3 text-blue-200">Remote villages, telecom towers, mining sites, islands</td>
                        <td className="px-4 py-3 text-blue-200">24×7 power availability, diesel replacement</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="px-4 py-3 text-blue-200 font-semibold">Hybrid Solar Power Plant</td>
                        <td className="px-4 py-3 text-blue-200">Combines solar PV + grid + battery + optional diesel generator.</td>
                        <td className="px-4 py-3 text-blue-200">50 kW to 50 MW</td>
                        <td className="px-4 py-3 text-blue-200">Industries with high daytime + night load</td>
                        <td className="px-4 py-3 text-blue-200">Maximum uptime, peak shaving, lowest cost of energy</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="px-4 py-3 text-blue-200 font-semibold">Floating Solar Power Plant</td>
                        <td className="px-4 py-3 text-blue-200">Solar modules mounted on floating platforms over water bodies (lakes, reservoirs, ponds).</td>
                        <td className="px-4 py-3 text-blue-200">1 MW to 100 MW+</td>
                        <td className="px-4 py-3 text-blue-200">Water-scarce areas, existing water bodies</td>
                        <td className="px-4 py-3 text-blue-200">Saves land, reduces evaporation, +10–15% higher efficiency due to water cooling</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-blue-200 font-semibold">Concentrated Solar Power (CSP) Plant</td>
                        <td className="px-4 py-3 text-blue-200">Uses mirrors to concentrate sunlight and generate high-temperature steam for turbines (less common in India).</td>
                        <td className="px-4 py-3 text-blue-200">10 MW to 500 MW</td>
                        <td className="px-4 py-3 text-blue-200">Large utility projects in high DNI regions</td>
                        <td className="px-4 py-3 text-blue-200">Dispatchable power with thermal storage (night generation possible)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-2xl font-bold text-white mb-6">
                  Why Choose Our Solar EPC & I&C Services?
                </h3>
                <ul className="text-blue-200 leading-relaxed mb-8 ml-6 list-disc">
                  <li><strong>Turnkey Delivery</strong>: One window solution from feasibility study to 25-year performance guarantee.</li>
                  <li><strong>Latest Technology</strong>: Mono PERC, TOPCon, HJT, Bifacial modules + Central & String inverters + AI-based SCADA & monitoring.</li>
                  <li><strong>Compliance</strong>: MNRE, SECI, CEA, DISCOM, IEC 61215, IEC 61730, IEC 62116 standards.</li>
                  <li><strong>Bankable Documents</strong>: Detailed Project Report (DPR), PVSyst simulation, energy yield assessment, and financial models for easy project financing.</li>
                  <li><strong>Quality & Safety</strong>: Zero-incident track record, ISO 9001, 14001 & 45001 certified processes.</li>
                  <li><strong>Pan-India Presence</strong>: Execution experience across 15+ states with local teams for faster project completion.</li>
                </ul>

                <h3 className="text-2xl font-bold text-white mb-6">
                  Benefits of Investing in Solar Power Plants (2026 Perspective)
                </h3>
                <ul className="text-blue-200 leading-relaxed mb-8 ml-6 list-disc">
                  <li>Tariff as low as ₹2.0–2.5/kWh (utility scale)</li>
                  <li>25–30% capital subsidy available under various state & central schemes</li>
                  <li>Accelerated depreciation + tax benefits</li>
                  <li>Carbon credit & ESG compliance</li>
                  <li>Payback period: 3–6 years depending on plant type</li>
                  <li>25-year performance warranty on modules</li>
                </ul>

                <Link to="/quote" className="inline-block">
                  <button className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                    Get Quote
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

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
