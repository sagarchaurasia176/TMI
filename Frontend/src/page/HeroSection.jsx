import React, { useState, useEffect } from "react";
import { Play, ArrowRight, Code, ArrowDown, ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";

function HeroSection() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('analyze');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative overflow-hidden bg-black">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white dark:bg-gray-900 shadow-md" : "bg-transparent"}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <span className="text-xl font-bold text-gray-900 dark:text-white">TECH MOCK INTERVIEW</span>
              </div>
              <div className="hidden md:flex items-center ml-10 space-x-8">
                <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Features</a>
                <a href="#pricing" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Pricing</a>
                <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="hidden md:block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Sign In</button>
              <NavLink to="/LanguageSelector">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Try For Free</button>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-28 md:pt-32 pb-20 bg-black h-[90vh] flex items-center">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left Content */}
            <div className="w-full md:w-1/2 mb-12 md:mb-0 md:pr-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                  TECH MOCK
                </span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-slate-950 from-red-500">
                  INTERVIEW
                </span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-lg">
                Land your dream job. Practice interview questions and get real-time
                feedback from your private and judgment-free AI Interview Coach.
              </p>
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <NavLink to="/LanguageSelector">
                  <button className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                    <Play className="h-5 w-5 mr-2" />
                    Try For Free
                  </button>
                </NavLink>
                <button className="w-full sm:w-auto px-8 py-3 border border-blue-600 text-blue-400 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center">
                  <ArrowRight className="h-5 w-5 mr-2" />
                  Learn More
                </button>
              </div>
            </div>
            
            {/* Right Content - Placeholder for GIF */}
            <div className="w-full md:w-1/2">
              <div className="bg-gray-800 rounded-xl overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 w-full h-auto">
                  <div className="w-full h-full flex items-center justify-center bg-gray-700 text-gray-400">
                    <span>Interview Demo GIF</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Preview */}
      <div className="bg-gray-900 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-2">How It Works</h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">Our AI-powered platform helps you prepare for technical interviews with realistic practice.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl shadow-sm">
              <div className="h-12 w-12 bg-blue-900 rounded-lg flex items-center justify-center text-blue-400 mx-auto mb-4">
                <Code className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Practice Questions</h3>
              <p className="text-gray-400">Access a wide range of technical questions tailored to your field.</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-xl shadow-sm">
              <div className="h-12 w-12 bg-blue-900 rounded-lg flex items-center justify-center text-blue-400 mx-auto mb-4">
                <Code className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Real-time Feedback</h3>
              <p className="text-gray-400">Get instant analysis of your answers and suggestions for improvement.</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-xl shadow-sm">
              <div className="h-12 w-12 bg-blue-900 rounded-lg flex items-center justify-center text-blue-400 mx-auto mb-4">
                <Code className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Progress Tracking</h3>
              <p className="text-gray-400">Monitor your improvement over time with detailed analytics.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;