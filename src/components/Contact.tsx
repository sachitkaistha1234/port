import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1000);
  };

  const handleEmailMe = () => {
    window.open('mailto:skaistha16@gmail.com', '_blank');
  };

  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-emerald-400/20 to-blue-400/20 rounded-full blur-3xl animate-float-slow"></div>
      </div>

      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent animate-gradient-move">
            Let's Connect
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss how we can work together to create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-morphism p-8 rounded-3xl shadow-2xl border border-white/30 dark:border-slate-700/30">
              <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-8 flex items-center gap-3">
                <MessageCircle className="w-8 h-8 text-blue-500" />
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center space-x-4 group">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Email</p>
                    <a 
                      href="mailto:skaistha16@gmail.com" 
                      className="text-lg font-semibold text-slate-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                    >
                      skaistha16@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-4 group">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Phone</p>
                    <a 
                      href="tel:+917876434370" 
                      className="text-lg font-semibold text-slate-800 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
                    >
                      +91 7876434370
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-4 group">
                  <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Location</p>
                    <p className="text-lg font-semibold text-slate-800 dark:text-white">Chandigarh, India</p>
                  </div>
                </div>
              </div>

              {/* Email Me Button */}
              <button
                onClick={handleEmailMe}
                className="w-full mt-8 flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group font-semibold text-lg"
              >
                <Mail className="w-6 h-6 group-hover:animate-bounce" />
                <span>Email Me</span>
                <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </button>
            </div>

            {/* Social Links */}
            <div className="glass-morphism p-8 rounded-3xl shadow-2xl border border-white/30 dark:border-slate-700/30">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/sachitkaistha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-2xl hover:scale-105 transition-all duration-300 group shadow-lg hover:shadow-xl"
                >
                  <Github className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="font-semibold">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/sachit-kaistha-306849190/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl hover:scale-105 transition-all duration-300 group shadow-lg hover:shadow-xl"
                >
                  <Linkedin className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="font-semibold">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-morphism p-8 md:p-10 rounded-3xl shadow-2xl border border-white/30 dark:border-slate-700/30">
            <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-8">
              Send Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-white/50 dark:bg-slate-800/50 border border-white/30 dark:border-slate-700/30 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm text-slate-800 dark:text-white placeholder-slate-500 dark:placeholder-slate-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-white/50 dark:bg-slate-800/50 border border-white/30 dark:border-slate-700/30 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm text-slate-800 dark:text-white placeholder-slate-500 dark:placeholder-slate-400"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 bg-white/50 dark:bg-slate-800/50 border border-white/30 dark:border-slate-700/30 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm text-slate-800 dark:text-white placeholder-slate-500 dark:placeholder-slate-400"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-4 bg-white/50 dark:bg-slate-800/50 border border-white/30 dark:border-slate-700/30 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm resize-none text-slate-800 dark:text-white placeholder-slate-500 dark:placeholder-slate-400"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 shadow-lg"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-xl text-green-800 dark:text-green-200 text-center font-medium">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;