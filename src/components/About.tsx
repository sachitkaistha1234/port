import React, { useEffect, useRef, useState } from 'react';
import { 
  Code, 
  Server, 
  Cloud, 
  Lightbulb, 
  Heart, 
  Target, 
  Zap, 
  Award, 
  Users, 
  ArrowRight,
  Download,
  MessageCircle,
  Star,
  TrendingUp,
  Shield,
  Rocket
} from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('story');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const tabs = [
    { id: 'story', label: 'My Story', icon: Heart },
    { id: 'values', label: 'Core Values', icon: Target },
    { id: 'unique', label: 'What Sets Me Apart', icon: Star }
  ];

  const achievements = [
    { number: '2.7+', label: 'Years Experience', icon: TrendingUp },
    { number: '15+', label: 'Technologies Mastered', icon: Code },
    { number: '10+', label: 'Projects Completed', icon: Rocket },
    { number: '100%', label: 'Client Satisfaction', icon: Award }
  ];

  const uniqueQualities = [
    {
      icon: Zap,
      title: 'Speed & Efficiency',
      description: 'Lightning-fast development with automated CI/CD pipelines that reduce deployment time by 80%.',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Precision & Reliability',
      description: 'Zero-downtime deployments with comprehensive testing and monitoring for bulletproof systems.',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Dev-Ops Bridge',
      description: 'Unique blend of development expertise and operations knowledge for seamless collaboration.',
      color: 'from-blue-400 to-purple-500'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Focus',
      description: 'Always exploring cutting-edge technologies and implementing creative solutions to complex problems.',
      color: 'from-purple-400 to-pink-500'
    }
  ];

  const coreValues = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Committed to delivering high-quality solutions that exceed expectations and drive business success.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Believe in the power of teamwork and open communication to achieve extraordinary results.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Constantly learning and adapting to new technologies to stay ahead in the rapidly evolving tech landscape.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Genuinely love what I do and bring enthusiasm to every project, making work feel like play.'
    }
  ];

  const handleDownloadResume = () => {
    // Create a temporary download link for resume
    const link = document.createElement('a');
    link.href = '#'; // Replace with actual resume URL when available
    link.download = 'Sachit_Kaistha_Resume.pdf';
    link.click();
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" ref={sectionRef} className="py-28 px-6 relative overflow-hidden min-h-screen flex items-center justify-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-emerald-400/20 to-blue-400/20 rounded-full blur-3xl animate-float-slow"></div>
      </div>

      {/* Floating Icons */}
      <Code className="absolute left-10 top-20 w-8 h-8 text-blue-400/30 animate-float" />
      <Server className="absolute right-20 top-32 w-6 h-6 text-purple-400/30 animate-float-delayed" />
      <Cloud className="absolute left-24 bottom-24 w-7 h-7 text-emerald-400/30 animate-float-slow" />
      <Lightbulb className="absolute right-16 bottom-16 w-8 h-8 text-yellow-400/30 animate-float" />

      <div className="container mx-auto max-w-7xl">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent animate-gradient-move">
              About Me
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Passionate DevOps Engineer with a mission to bridge development and operations through innovative automation and scalable solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Professional Image & Stats */}
            <div className="lg:col-span-1">
              <div className={`glass-morphism p-8 rounded-3xl shadow-2xl border border-white/30 dark:border-slate-700/30 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                {/* Professional Avatar */}
                <div className="relative mb-8 group">
                  <div className="w-48 h-48 mx-auto rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 shadow-2xl">
                    <div className="w-full h-full rounded-3xl overflow-hidden">
                     <img 
                        src="/1713446390783 (1).jpeg" 
                        alt="Sachit - DevOps Engineer" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  {/* Status Indicator */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      Available for Projects
                    </div>
                  </div>
                </div>

                {/* Achievement Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {achievements.map((achievement, index) => {
                    const IconComponent = achievement.icon;
                    return (
                      <div
                        key={index}
                        className="text-center p-4 bg-white/50 dark:bg-slate-800/50 rounded-2xl hover:scale-105 transition-all duration-300 group"
                      >
                        <IconComponent className="w-6 h-6 mx-auto mb-2 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                        <div className="text-2xl font-bold text-slate-800 dark:text-white mb-1">
                          {achievement.number}
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                          {achievement.label}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Action Buttons */}
                <div className="space-y-4">
                  <button
                    onClick={scrollToContact}
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
                  >
                    <MessageCircle className="w-5 h-5 group-hover:animate-pulse" />
                    <span className="font-semibold">Let's Connect</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  
                  <button
                    onClick={handleDownloadResume}
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
                  >
                    <Download className="w-5 h-5 group-hover:animate-bounce" />
                    <span className="font-semibold">Download Resume</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className={`glass-morphism p-8 md:p-12 rounded-3xl shadow-2xl border border-white/30 dark:border-slate-700/30 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                {/* Tab Navigation */}
                <div className="flex flex-wrap gap-2 mb-8 p-2 bg-white/30 dark:bg-slate-800/30 rounded-2xl">
                  {tabs.map((tab) => {
                    const IconComponent = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`
                          flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 font-medium
                          ${activeTab === tab.id
                            ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105'
                            : 'text-slate-700 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-slate-700/50'
                          }
                        `}
                      >
                        <IconComponent className="w-4 h-4" />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Tab Content */}
                <div className="min-h-[400px]">
                  {/* My Story Tab */}
                  {activeTab === 'story' && (
                    <div className="space-y-6 animate-fade-in">
                      <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">
                        My Journey in Tech
                      </h3>
                      
                      <div className="space-y-6 text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
                        <p>
                          My journey began with a <span className="text-blue-500 font-semibold">curiosity for code</span> and 
                          evolved into a passion for building systems that scale. Starting as a PHP developer, I spent 2.7 years 
                          crafting robust web applications, mastering the art of clean, efficient code, and understanding the 
                          intricacies of backend development.
                        </p>
                        
                        <p>
                          The transition to <span className="text-purple-500 font-semibold">DevOps</span> felt like a natural 
                          evolution. I realized that great software isn't just about writing code—it\'s about creating systems 
                          that are reliable, scalable, and maintainable. This led me to dive deep into containerization, 
                          CI/CD pipelines, and cloud infrastructure.
                        </p>
                        
                        <p>
                          Today, I'm driven by the challenge of <span className="text-emerald-500 font-semibold">bridging the gap</span> between 
                          development and operations. Every automation script I write, every pipeline I optimize, and every 
                          infrastructure I design is aimed at empowering teams to ship faster, more reliably, and with confidence.
                        </p>
                        
                        <blockquote className="border-l-4 border-blue-500 pl-6 italic text-xl text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-r-lg">
                          "The best DevOps engineers don't just automate processes—they automate success."
                        </blockquote>
                      </div>
                    </div>
                  )}

                  {/* Core Values Tab */}
                  {activeTab === 'values' && (
                    <div className="animate-fade-in">
                      <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">
                        What Drives My Work
                      </h3>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        {coreValues.map((value, index) => {
                          const IconComponent = value.icon;
                          return (
                            <div
                              key={index}
                              className="p-6 bg-white/50 dark:bg-slate-800/50 rounded-2xl hover:scale-105 transition-all duration-300 group"
                            >
                              <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                  <IconComponent className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="text-xl font-bold text-slate-800 dark:text-white">
                                  {value.title}
                                </h4>
                              </div>
                              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                {value.description}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* What Sets Me Apart Tab */}
                  {activeTab === 'unique' && (
                    <div className="animate-fade-in">
                      <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">
                        My Unique Strengths
                      </h3>
                      
                      <div className="space-y-6">
                        {uniqueQualities.map((quality, index) => {
                          const IconComponent = quality.icon;
                          return (
                            <div
                              key={index}
                              className="flex items-start gap-6 p-6 bg-white/50 dark:bg-slate-800/50 rounded-2xl hover:scale-105 transition-all duration-300 group"
                            >
                              <div className={`p-4 rounded-2xl bg-gradient-to-br ${quality.color} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                <IconComponent className="w-8 h-8 text-white" />
                              </div>
                              <div className="flex-1">
                                <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
                                  {quality.title}
                                </h4>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                  {quality.description}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      
                      {/* Call to Action */}
                      <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-200 dark:border-blue-800">
                        <div className="text-center">
                          <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
                            Ready to work together?
                          </h4>
                          <p className="text-slate-600 dark:text-slate-300 mb-4">
                            Let's discuss how I can help accelerate your development workflow and infrastructure.
                          </p>
                          <button
                            onClick={scrollToContact}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
                          >
                            <MessageCircle className="w-5 h-5" />
                            Start a Conversation
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
