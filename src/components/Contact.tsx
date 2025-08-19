import React, { useState, useEffect } from 'react';
import EmojiIcon from './EmojiIcon';
import { Mail, Github, Linkedin, Twitter, Send, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';



const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');

  // Auto-hide success message after 10 seconds
  useEffect(() => {
    if (submitStatus === 'success') {
      const timer = setTimeout(() => {
        setSubmitStatus('idle');
      }, 10000); // 10 seconds
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);


  interface TemplateParams {
    [key: string]: unknown;
    from_name: string;
    from_email: string;
    message: string;
    to_email: string;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const templateParams: TemplateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: import.meta.env.VITE_CONTACT_EMAIL as string
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string
      );
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' }); // Clear form
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/chitranshuajmera0000', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/chitranshu-ajmera-b72878297/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/CAjmera71252', label: 'X (Twitter)' },
    { icon: Mail, href: `https://mail.google.com/mail/?view=cm&fs=1&to=${import.meta.env.VITE_CONTACT_EMAIL}&su=Hello%20from%20your%20portfolio!&body=Hi%20Chitranshu,%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect.%0A%0A`, label: 'Email' },
  ];

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif' }}>
      {/* Global CSS for Twemoji SVG */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .emoji-icon img {
            width: 1em;
            height: 1em;
            vertical-align: -0.125em;
            display: inline-block;
            margin: 0;
          }

          .animate-spin-slow {
            animation: spin 3s linear infinite;
          }
          
          input::placeholder,
          textarea::placeholder {
            font-family: system-ui, -apple-system, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji" !important;
          }
        `
      }} />

      <section id="contact" className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        {/* Minimal background blurs only */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-32 right-16 w-40 h-40 bg-white/5 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-32 left-16 w-48 h-48 bg-white/5 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white/3 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-orange-600 mb-6 tracking-tight">
              Launch <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent animate-pulse">Sequence</span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-orange-400 max-w-2xl mx-auto mb-4 px-4">
              <EmojiIcon emoji="🚀" fallback="Rocket" className="inline-block text-3xl animate-bounce mr-2" />
              Ready to build something amazing together?<br />
              Warning: May result in epic collaborations
            </p>
            <div className="flex justify-center space-x-2">
              <div className="w-16 h-1 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-pulse"></div>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse delay-300"></div>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse delay-700"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Contact Form */}
            <div className="relative bg-gradient-to-br from-slate-800/40 via-gray-800/30 to-slate-900/60 backdrop-blur-sm border border-gray-600/30 hover:border-pink-400/60 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 transition-all duration-700 hover:shadow-2xl hover:shadow-pink-500/20 overflow-hidden">
              {/* Animated top border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-600"></div>

              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 mb-6 flex items-center gap-3">
                <EmojiIcon emoji="🛰️" fallback="Satellite" className="text-3xl animate-pulse" />
                Send Transmission
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-white text-lg font-medium mb-2 flex items-center gap-2">
                    <EmojiIcon emoji="🧑‍🚀" fallback="User" className="text-3xl" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600/40 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-white text-lg font-medium mb-2 flex items-center gap-2">
                    <EmojiIcon emoji="📡" fallback="Satellite Dish" className="text-3xl" />
                    Email Coordinates
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600/40 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                    placeholder="captain@galaxy.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-white text-lg font-medium mb-2 flex items-center gap-2">
                    <EmojiIcon emoji="💌" fallback="Love Letter" className="text-lg" />
                    Your Epic Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600/40 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 resize-none backdrop-blur-sm"
                    placeholder="Let's build something amazing together..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group w-full px-8 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3 ${isSubmitting
                    ? 'bg-gradient-to-r from-gray-500 to-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 hover:from-pink-600 hover:via-purple-700 hover:to-blue-700 hover:shadow-purple-500/25'
                    } text-white`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Launching...</span>
                    </>
                  ) : (
                    <>
                      <EmojiIcon emoji="🚀" fallback="Rocket" className="text-xl animate-bounce" />
                      Launch Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl backdrop-blur-sm animate-fade-in-up">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <div>
                      <p className="text-green-400 font-medium flex items-center gap-2">
                        <EmojiIcon emoji="🚀" fallback="Rocket" className="text-lg" />
                        Message Launched Successfully!
                      </p>
                      <p className="text-green-300 text-sm">Your transmission has been received. I'll respond soon!</p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-xl backdrop-blur-sm animate-fade-in-up">
                    <AlertCircle className="w-6 h-6 text-red-400" />
                    <div>
                      <p className="text-red-400 font-medium flex items-center gap-2">
                        <EmojiIcon emoji="🛸" fallback="UFO" className="text-lg" />
                        Transmission Failed
                      </p>
                      <p className="text-red-300 text-sm">Houston, we have a problem! Please try again or email directly.</p>
                    </div>
                  </div>
                )}
              </form>
            </div>
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="relative bg-gradient-to-br from-slate-800/40 via-gray-800/30 to-slate-900/60 backdrop-blur-sm border border-gray-600/30 hover:border-blue-400/60 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 transition-all duration-700 hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden">
                {/* Animated top border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-cyan-500 to-green-600"></div>

                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 mb-6 flex items-center gap-3">
                  <EmojiIcon emoji="📍" fallback="Location Pin" className="text-3xl animate-pulse" />
                  Mission HQ
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-400 font-medium flex items-center gap-2">
                        <EmojiIcon emoji="📧" fallback="Email" className="text-lg" />
                        Direct Line
                      </p>
                      <a
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${import.meta.env.VITE_CONTACT_EMAIL}&su=Hello%20from%20your%20portfolio!&body=Hi%20Chitranshu,%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect.%0A%0A`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:underline"
                      >
                        {import.meta.env.VITE_CONTACT_EMAIL}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-400 font-medium flex items-center gap-2">
                        <EmojiIcon emoji="🌍" fallback="Earth" className="text-lg" />
                        Base Station
                      </p>
                      <p className="text-gray-300">Orbiting Planet Earth (Bangalore, India)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="relative bg-gradient-to-br from-slate-800/40 via-gray-800/30 to-slate-900/60 backdrop-blur-sm border border-gray-600/30 hover:border-green-400/60 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 transition-all duration-700 hover:shadow-2xl hover:shadow-green-500/20 overflow-hidden">
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500 mb-6 flex items-center gap-3">
                  <EmojiIcon emoji="🌐" fallback="Globe" className="text-2xl animate-spin-slow" />
                  Social Orbit
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 p-4 bg-gradient-to-br from-slate-700/30 to-gray-800/40 hover:from-slate-600/40 hover:to-gray-700/50 border border-gray-600/30 hover:border-cyan-400/50 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 backdrop-blur-sm"
                      >
                        <Icon className="w-8 h-8 text-cyan-300 group-hover:text-green-400 transition-colors duration-300 group-hover:rotate-12 drop-shadow-[0_0_8px_rgba(34,211,238,0.7)] group-hover:drop-shadow-[0_0_12px_rgba(34,197,94,0.7)]" />
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                          {social.label}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    </div >
  );
};

export default Contact;
