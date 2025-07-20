import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Code, GraduationCap, Briefcase, Award, FolderOpen, MessageCircle, Sun, Moon, Zap, Download } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { generateResumePDF } from '../utils/resumeGenerator';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'contact', label: 'Contact', icon: MessageCircle }
  ];

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      setIsScrolled(scrollTop > 50);
      setScrollProgress(scrollPercent);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = sectionId === 'hero' ? 0 : element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const handleResumeDownload = () => {
    // Generate and download PDF resume
    generateResumePDF();
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-slate-200/20 dark:bg-slate-800/20">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Navbar - Glassmorphism Design */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled 
          ? 'backdrop-blur-xl bg-white/10 dark:bg-slate-900/10 shadow-2xl border-b border-white/20 dark:border-slate-700/30' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Enhanced Logo */}
            <div className="flex items-center gap-4 group cursor-pointer" onClick={() => scrollToSection('hero')}>
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-300">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                {/* Animated ring */}
                <div className="absolute inset-0 rounded-2xl border-2 border-blue-400/30 animate-pulse"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                  Sachit
                </h1>
              </div>
            </div>

            {/* Desktop Navigation - Glassmorphism Style */}
            <div className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`
                      group relative flex items-center gap-2 px-4 py-3 rounded-xl transition-all duration-300
                      hover:scale-105 hover:shadow-lg backdrop-blur-sm
                      ${activeSection === item.id 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105' 
                        : 'text-slate-700 dark:text-slate-300 hover:bg-white/20 dark:hover:bg-slate-800/20'
                      }
                    `}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span className="text-sm font-medium">{item.label}</span>
                    
                    {/* Active indicator */}
                    {activeSection === item.id && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    )}
                    
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </button>
                );
              })}
            </div>

            {/* Right side controls */}
            <div className="flex items-center gap-3">
              {/* Resume Download Button */}
              <button
                onClick={handleResumeDownload}
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group backdrop-blur-sm"
              >
                <Download className="w-4 h-4 group-hover:animate-bounce" />
                <span className="font-medium">Resume</span>
              </button>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-3 rounded-xl backdrop-blur-sm bg-white/10 dark:bg-slate-800/10 hover:bg-white/20 dark:hover:bg-slate-700/20 transition-all duration-300 hover:scale-110 shadow-lg group border border-white/20 dark:border-slate-700/30"
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                {theme === 'light' ? (
                  <Moon className="w-5 h-5 text-slate-600 group-hover:text-purple-600 transition-colors duration-300" />
                ) : (
                  <Sun className="w-5 h-5 text-yellow-500 group-hover:text-yellow-400 transition-colors duration-300" />
                )}
              </button>

              {/* Enhanced CTA Button */}
              <button
                onClick={() => scrollToSection('contact')}
                className="hidden md:flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group relative overflow-hidden backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <MessageCircle className="w-4 h-4 relative z-10 group-hover:animate-pulse" />
                <span className="font-medium relative z-10">Let's Talk</span>
                <Zap className="w-4 h-4 relative z-10 group-hover:animate-bounce" />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-3 rounded-xl backdrop-blur-sm bg-white/10 dark:bg-slate-800/10 hover:bg-white/20 dark:hover:bg-slate-700/20 transition-all duration-300 shadow-lg group border border-white/20 dark:border-slate-700/30"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:rotate-90 transition-transform duration-300" />
                ) : (
                  <Menu className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:scale-110 transition-transform duration-300" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Navigation Menu */}
        <div className={`
          lg:hidden absolute top-full left-0 right-0 transition-all duration-500 overflow-hidden
          ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
        `}>
          <div className="backdrop-blur-xl bg-white/10 dark:bg-slate-900/10 border-t border-white/20 dark:border-slate-700/30 shadow-2xl">
            <div className="container mx-auto px-6 py-6">
              <div className="grid grid-cols-2 gap-3 mb-6">
                {navItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`
                        flex items-center gap-3 p-4 rounded-xl transition-all duration-300
                        hover:scale-105 hover:shadow-lg group backdrop-blur-sm
                        ${activeSection === item.id 
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' 
                          : 'bg-white/10 dark:bg-slate-800/10 text-slate-700 dark:text-slate-300 hover:bg-white/20 dark:hover:bg-slate-700/20'
                        }
                      `}
                    >
                      <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  );
                })}
              </div>
              
              {/* Mobile Action Buttons */}
              <div className="flex flex-col gap-3">
                <button
                  onClick={handleResumeDownload}
                  className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl hover:scale-105 transition-all duration-300 shadow-lg backdrop-blur-sm"
                >
                  <Download className="w-5 h-5" />
                  <span className="font-medium">Download Resume</span>
                </button>
                
                <button
                  onClick={() => scrollToSection('contact')}
                  className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:scale-105 transition-all duration-300 shadow-lg backdrop-blur-sm"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-medium">Let's Connect</span>
                  <Zap className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Backdrop for mobile menu */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;