import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Minimize2, Maximize2 } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface QuickOption {
  text: string;
  action: string;
}

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const quickOptions: QuickOption[] = [
    { text: "Tell me about Sachit's skills", action: "skills" },
    { text: "Show me his projects", action: "projects" },
    { text: "View his resume", action: "resume" },
    { text: "How to contact him?", action: "contact" },
    { text: "His experience", action: "experience" },
    { text: "Education background", action: "education" }
  ];

  const botResponses: Record<string, string> = {
    skills: "Sachit is a skilled DevOps Engineer with 2.7 years of PHP development experience. His expertise includes:\n\n🔧 DevOps: Docker, Jenkins, GitHub Actions, AWS, Linux\n💻 Backend: PHP, Laravel, MySQL, API development\n☁️ Cloud: AWS services, infrastructure automation\n🛠️ Tools: Git, Nginx, Bash scripting, Postman\n\nWould you like to know more about any specific skill?",
    
    projects: "Sachit has worked on several impressive projects:\n\n🚀 DevFlow AI - Multi-tool dashboard with AI integration\n🐳 Remote Docker Manager - SSH-based container management\n📖 AI Story Co-Writer - Creative writing assistant\n💻 Universal Code Generator - AI-powered development tool\n🐧 Linux Command Menu - System administration utility\n\nWould you like details about any specific project?",
    
    resume: "You can download Sachit's resume by clicking the 'Download Resume' button in the hero section, or I can scroll you there! His resume includes detailed information about his DevOps expertise, PHP development experience, certifications, and project portfolio.",
    
    contact: "You can reach Sachit through multiple channels:\n\n📧 Email: skaistha16@gmail.com\n📱 Phone: +91 7876434370\n📍 Location: Chandigarh, India\n💼 LinkedIn: linkedin.com/in/sachit-kaistha-306849190\n🐙 GitHub: github.com/sachitkaistha\n\nShall I scroll you to the contact form?",
    
    experience: "Sachit has a strong professional background:\n\n🔄 Current: DevOps Engineer - Focusing on CI/CD, containerization, and cloud infrastructure\n💻 Previous: PHP Web Developer (2.7 years) - Built robust web applications using PHP/Laravel\n\nHe's passionate about automation, scalable systems, and bridging development with operations.",
    
    education: "Sachit's educational background:\n\n🎓 Master of Computer Applications (MCA) - Currently pursuing (2023-2025)\n🎓 Bachelor of Computer Applications (BCA) - Completed (2019-2022)\n📜 PHP Development Training - 6 months intensive course\n🏆 Linux World Informatics Internship - AI integration & DevOps automation\n\nHe's also certified in PHP fundamentals through Udemy.",
    
    default: "Hi! I'm Sachit's AI assistant. I can help you learn about his skills, projects, experience, and how to get in touch with him. What would you like to know?",
    
    greeting: "Hello! 👋 Welcome to Sachit's portfolio. I'm here to help you explore his work and expertise. Feel free to ask me anything about his skills, projects, or experience!"
  };

  useEffect(() => {
    if (messages.length === 0) {
      addBotMessage(botResponses.greeting);
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const addMessage = (text: string, sender: 'user' | 'bot') => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
    
    if (sender === 'bot' && !isOpen) {
      setHasNewMessage(true);
    }
  };

  const addBotMessage = (text: string) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      addMessage(text, 'bot');
    }, 1000 + Math.random() * 1000);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    addMessage(inputValue, 'user');
    const userMessage = inputValue.toLowerCase();
    setInputValue('');

    // Simple keyword matching for responses
    let response = botResponses.default;
    
    if (userMessage.includes('skill') || userMessage.includes('technology') || userMessage.includes('tech')) {
      response = botResponses.skills;
    } else if (userMessage.includes('project') || userMessage.includes('work') || userMessage.includes('portfolio')) {
      response = botResponses.projects;
    } else if (userMessage.includes('resume') || userMessage.includes('cv') || userMessage.includes('download')) {
      response = botResponses.resume;
    } else if (userMessage.includes('contact') || userMessage.includes('email') || userMessage.includes('phone') || userMessage.includes('reach')) {
      response = botResponses.contact;
    } else if (userMessage.includes('experience') || userMessage.includes('job') || userMessage.includes('career')) {
      response = botResponses.experience;
    } else if (userMessage.includes('education') || userMessage.includes('study') || userMessage.includes('degree')) {
      response = botResponses.education;
    } else if (userMessage.includes('hello') || userMessage.includes('hi') || userMessage.includes('hey')) {
      response = botResponses.greeting;
    }

    addBotMessage(response);
  };

  const handleQuickOption = (action: string) => {
    const option = quickOptions.find(opt => opt.action === action);
    if (option) {
      addMessage(option.text, 'user');
      addBotMessage(botResponses[action] || botResponses.default);
    }

    // Handle special actions
    if (action === 'contact') {
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 2000);
    } else if (action === 'projects') {
      setTimeout(() => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      }, 2000);
    } else if (action === 'resume') {
      setTimeout(() => {
        document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
      }, 2000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setHasNewMessage(false);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <>
      {/* Chat Widget */}
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${isOpen ? 'w-96 h-[500px]' : 'w-16 h-16'}`}>
        {!isOpen ? (
          /* Floating Chat Button */
          <button
            onClick={toggleChat}
            className="relative w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
            aria-label="Open chat"
          >
            <MessageCircle className="w-7 h-7" />
            
            {/* Notification Dot */}
            {hasNewMessage && (
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse border-2 border-white"></div>
            )}
            
            {/* Pulse Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-ping opacity-20"></div>
            
            {/* Tooltip */}
            <div className="absolute right-full mr-3 px-3 py-2 bg-slate-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              Chat with Sachit's AI Assistant
            </div>
          </button>
        ) : (
          /* Chat Window */
          <div className={`w-full h-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 dark:border-slate-700/30 flex flex-col overflow-hidden transition-all duration-300 ${isMinimized ? 'h-14' : 'h-[500px]'}`}>
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Sachit's AI Assistant</h3>
                  <p className="text-xs opacity-90">Online • Ready to help</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleMinimize}
                  className="p-1 hover:bg-white/20 rounded transition-colors duration-200"
                  aria-label={isMinimized ? "Maximize" : "Minimize"}
                >
                  {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={toggleChat}
                  className="p-1 hover:bg-white/20 rounded transition-colors duration-200"
                  aria-label="Close chat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex items-start gap-3 ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.sender === 'user' 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      }`}>
                        {message.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                      </div>
                      <div className={`max-w-[80%] p-3 rounded-2xl ${
                        message.sender === 'user'
                          ? 'bg-blue-500 text-white rounded-tr-sm'
                          : 'bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white rounded-tl-sm'
                      }`}>
                        <p className="text-sm whitespace-pre-line">{message.text}</p>
                        <p className={`text-xs mt-1 opacity-70 ${
                          message.sender === 'user' ? 'text-blue-100' : 'text-slate-500 dark:text-slate-400'
                        }`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  ))}

                  {/* Typing Indicator */}
                  {isTyping && (
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center justify-center">
                        <Bot className="w-4 h-4" />
                      </div>
                      <div className="bg-slate-100 dark:bg-slate-700 p-3 rounded-2xl rounded-tl-sm">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Options */}
                {messages.length <= 2 && (
                  <div className="p-4 border-t border-slate-200 dark:border-slate-600">
                    <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">Quick questions:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {quickOptions.slice(0, 4).map((option) => (
                        <button
                          key={option.action}
                          onClick={() => handleQuickOption(option.action)}
                          className="text-xs p-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg transition-colors duration-200 text-left"
                        >
                          {option.text}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input Area */}
                <div className="p-4 border-t border-slate-200 dark:border-slate-600">
                  <div className="flex gap-2">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask me anything about Sachit..."
                      className="flex-1 px-4 py-2 bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim()}
                      className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default AIChat;