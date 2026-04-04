
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Sun, Lightbulb, Settings, Shield, Battery } from 'lucide-react';
import Navbar from '../components/Navbar';
import ProductSlider from '../components/ProductSlider';
import Footer from '../components/Footer';

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create floating particles effect
    const createParticle = () => {
      if (!particlesRef.current) return;
      
      const particle = document.createElement('div');
      particle.className = 'absolute w-2 h-2 bg-yellow-400 rounded-full opacity-70 animate-pulse';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 2 + 's';
      
      particlesRef.current.appendChild(particle);
      
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 4000);
    };

    const particleInterval = setInterval(createParticle, 300);
    
    return () => clearInterval(particleInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Navbar />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated background particles */}
        <div ref={particlesRef} className="absolute inset-0 pointer-events-none"></div>
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-yellow-500/20 animate-pulse"></div>
        
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center relative z-10">
          {/* Left Content */}
          <div className="flex-1 text-white space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                {/* <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  RAAS
                </span> */}
                <br />
                <span>
  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">RAAS</span>{' '}
  <span className="text-blue-100">Engineers</span>
</span>

              </h1>
              <p className="text-xl lg:text-2xl text-blue-200 font-light">
                Powering the Future with Advanced Electrical Solutions
              </p>
            </div>
            
            <div className="space-y-4">
              <p className="text-lg text-blue-100 leading-relaxed">
                Manufacturing excellence in Electrical Panels, Solar Products, and Automation Systems. 
                From Main LT Panels to Solar Installation services, we deliver innovative solutions 
                that power industries and sustainable energy systems.
              </p>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 py-6">
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 hover:bg-white/20 transition-all duration-300">
                <Zap className="text-yellow-400 w-6 h-6" />
                <span className="text-sm font-medium">Electrical Panels</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 hover:bg-white/20 transition-all duration-300">
                <Sun className="text-orange-400 w-6 h-6" />
                <span className="text-sm font-medium">Solar Products</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 hover:bg-white/20 transition-all duration-300">
                <Settings className="text-blue-400 w-6 h-6" />
                <span className="text-sm font-medium">Automation</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/products"
                className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 hover:from-yellow-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/quote"
                className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                <span>Get Quote</span>
                <Shield className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Right Side - Product Slider */}
          <div className="flex-1 lg:ml-12 mt-12 lg:mt-0">
            <ProductSlider />
          </div>
        </div>

        {/* Animated decorative elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Comprehensive electrical and solar solutions designed for industrial excellence and sustainable energy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-12 h-12" />,
                title: "Electrical Panels",
                description: "Main LT Panels, APFC Panels, Control Panels, Distribution Panels, and specialized industrial solutions",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: <Sun className="w-12 h-12" />,
                title: "Solar Products",
                description: "Solar ACDB/DCDB, Solar BOS, String Monitoring Panels, and complete installation services",
                gradient: "from-yellow-500 to-orange-500"
              },
              {
                icon: <Settings className="w-12 h-12" />,
                title: "Automation Systems",
                description: "PLC-Based Automation, Synchronization Panels, VFD Panels, and System Control Solutions",
                gradient: "from-purple-500 to-pink-500"
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:transform hover:scale-105"
              >
                <div className={`bg-gradient-to-r ${service.gradient} p-4 rounded-xl w-fit mb-6 group-hover:shadow-lg transition-shadow duration-300`}>
                  {React.cloneElement(service.icon, { className: "w-12 h-12 text-white" })}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-blue-200 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Why Choose <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">RAAS Engineers</span>
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    icon: <Shield className="w-6 h-6" />,
                    title: "Quality Assurance",
                    description: "We offer high-quality products that undergo rigorous testing, all at competitive prices."
                  },
                  {
                    icon: <Lightbulb className="w-6 h-6" />,
                    title: "Innovation Focus",
                    description: "Cutting-edge technology integration in all our electrical solutions"
                  },
                  {
                    icon: <Battery className="w-6 h-6" />,
                    title: "Sustainable Solutions",
                    description: "Eco-friendly solar products and energy-efficient electrical systems"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-600 p-3 rounded-lg group-hover:shadow-lg transition-shadow duration-300">
                      {React.cloneElement(feature.icon, { className: "w-6 h-6 text-white" })}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-blue-200">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">700+</div>
                    <div className="text-blue-200">Projects Completed</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">15+</div>
                    <div className="text-blue-200">Years Experience</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">1000+</div>
                    <div className="text-blue-200">Happy Clients</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                    <div className="text-blue-200">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
   