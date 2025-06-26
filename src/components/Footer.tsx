import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-[#181c32] via-[#1a1f36] to-[#0f1419] text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl translate-x-24 -translate-y-24" />
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl -translate-x-20 translate-y-20" />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="py-6 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Top Section - Brand and Social */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-5">
              <div className="flex items-center gap-3 mb-4 md:mb-0">
                <div className="w-9 h-9 bg-gradient-to-br from-[#007BFF] to-[#0056b3] rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <span className="font-bold text-xl bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                    Bluepeg
                  </span>
                  <p className="text-blue-200 text-xs">Industrial Operations Excellence</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 self-start md:self-center">
                <a href="#" className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-[#007BFF] transition-all duration-300">
                  <svg className="w-4 h-4 text-blue-200 hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.5 3A2.5 2.5 0 0 1 19 5.5v9A2.5 2.5 0 0 1 16.5 17h-13A2.5 2.5 0 0 1 1 14.5v-9A2.5 2.5 0 0 1 3.5 3h13zm-9.75 12V8.75H4.25V15h2.5zm-1.25-7.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5zm10 7.25v-3.25c0-1.1-.9-2-2-2s-2 .9-2 2V15h2.5v-3.25c0-.41.34-.75.75-.75s.75.34.75.75V15h2.5z" />
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-[#007BFF] transition-all duration-300">
                  <svg className="w-4 h-4 text-blue-200 hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.316 6.246c.008.176.008.353.008.53 0 5.39-4.104 11.61-11.61 11.61-2.307 0-4.453-.676-6.26-1.84.32.037.64.053.97.053 1.92 0 3.69-.653 5.1-1.75a4.09 4.09 0 0 1-3.82-2.84c.25.04.5.07.77.07.36 0 .71-.05 1.04-.14a4.09 4.09 0 0 1-3.28-4.01v-.05c.55.3 1.18.48 1.85.5a4.08 4.08 0 0 1-1.82-3.4c0-.75.2-1.45.54-2.05a11.6 11.6 0 0 0 8.42 4.27c-.07-.3-.1-.61-.1-.93a4.09 4.09 0 0 1 7.08-3.73 8.18 8.18 0 0 0 2.59-.99 4.08 4.08 0 0 1-1.8 2.25 8.18 8.18 0 0 0 2.35-.64 8.7 8.7 0 0 1-2.05 2.12z" />
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-[#007BFF] transition-all duration-300">
                  <svg className="w-4 h-4 text-blue-200 hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 3.333c-2.667 0-8 .333-8 2.667v7.333c0 2.334 5.333 2.667 8 2.667s8-.333 8-2.667V6c0-2.334-5.333-2.667-8-2.667zm-2 8.334V8.333l5.333 1.667L8 11.667z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Website Content - Responsive Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Mobile: Simple Navigation, Desktop: About Section */}
              <div className="lg:block">
                <h4 className="font-semibold text-white mb-3 text-sm lg:block hidden">About Bluepeg</h4>
                <div className="space-y-2 text-sm lg:block hidden">
                  <a href="/about" className="block text-blue-200 hover:text-white transition-colors">About Us</a>
                  <a href="/about#mission" className="block text-blue-200 hover:text-white transition-colors">Mission & Vision</a>
                  <a href="/about#team" className="block text-blue-200 hover:text-white transition-colors">Meet The Team</a>
                  <a href="/about#story" className="block text-blue-200 hover:text-white transition-colors">Our Story</a>
                </div>
                
                {/* Mobile: Main Navigation */}
                <div className="lg:hidden flex flex-wrap gap-4 text-sm justify-start">
                  <a href="/about" className="text-blue-200 hover:text-white transition-colors">About</a>
                  <a href="/solutions" className="text-blue-200 hover:text-white transition-colors">Solutions</a>
                  <a href="/resource-center" className="text-blue-200 hover:text-white transition-colors">Resources</a>
                  <a href="/contact" className="text-blue-200 hover:text-white transition-colors">Contact</a>
                </div>
              </div>

              {/* Desktop Only: Services & Solutions */}
              <div className="hidden lg:block">
                <h4 className="font-semibold text-white mb-3 text-sm">What We Do</h4>
                <div className="space-y-2 text-sm">
                  <a href="/solutions" className="block text-blue-200 hover:text-white transition-colors">Our Solutions</a>
                  <a href="/solutions#automation" className="block text-blue-200 hover:text-white transition-colors">Industrial Automation</a>
                  <a href="/solutions#innovation" className="block text-blue-200 hover:text-white transition-colors">Innovation Lab</a>
                </div>
              </div>

              {/* Desktop Only: Resources & News */}
              <div className="hidden lg:block">
                <h4 className="font-semibold text-white mb-3 text-sm">Resources</h4>
                <div className="space-y-2 text-sm">
                  <a href="/resource-center" className="block text-blue-200 hover:text-white transition-colors">Resource Center</a>
                  <a href="/resource-center#case-studies" className="block text-blue-200 hover:text-white transition-colors">Case Studies</a>
                  <a href="/resource-center#whitepapers" className="block text-blue-200 hover:text-white transition-colors">White Papers</a>
                  <a href="#company-news" className="block text-blue-200 hover:text-white transition-colors">Company News</a>
                </div>
              </div>

              {/* Contact - Always Visible */}
              <div>
                <h4 className="font-semibold text-white mb-3 text-sm">Get In Touch</h4>
                <div className="space-y-2 text-sm">
                  <a href="/contact" className="hidden lg:block text-blue-200 hover:text-white transition-colors">Contact Us</a>
                  <a href="mailto:info@bluepeg.com" className="block text-blue-200 hover:text-white transition-colors">info@bluepeg.com</a>
                  <a href="tel:+2348000000000" className="block text-blue-200 hover:text-white transition-colors">+234 800 000 0000</a>
                  <span className="block text-blue-300 text-xs mt-2">Lagos, Nigeria</span>
                  <div className="mt-3 pt-3 border-t border-white/10 hidden lg:block">
                    <span className="text-xs text-blue-300">Follow our journey:</span>
                    <span className="block text-xs text-blue-200">Industrial Operations Excellence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs">
              <span className="text-blue-200">&copy; {new Date().getFullYear()} Bluepeg. All rights reserved.</span>
              <div className="flex items-center gap-4">
                <a href="/privacy" className="text-blue-300 hover:text-white transition-colors">Privacy</a>
                <a href="/terms" className="text-blue-300 hover:text-white transition-colors">Terms</a>
                <span className="text-blue-300">Powered by <span className="font-medium text-[#007BFF]">Bluepeg Digital</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
