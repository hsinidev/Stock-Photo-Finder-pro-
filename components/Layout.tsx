
import React, { useState, ReactNode } from 'react';
import Modal from './Modal';
import SeoArticle from './SeoArticle';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const navLinks = ['About', 'Contact', 'Guide', 'Privacy Policy', 'Terms of Service', 'DMCA'];

  const getModalContent = (modalName: string) => {
    switch (modalName) {
      case 'About':
        return (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">About Stellar Stock Photo Finder</h3>
            <p className="text-lg leading-relaxed">
              Stellar Stock Photo Finder is a next-generation visual discovery platform designed for creators, designers, and developers. We believe that finding the perfect image shouldn't be a chore—it should be an experience.
            </p>
            <p className="leading-relaxed">
              Powered by the robust Pexels API, our application offers instant access to millions of high-quality, free-to-use stock photos. But we go beyond simple search. We've crafted an immersive, galaxy-themed interface that turns the act of searching into a journey through the cosmos. Whether you need a stunning landscape for a hero banner or an authentic portrait for a blog post, Stellar Stock makes the process beautiful, fast, and inspiring.
            </p>
            <p className="leading-relaxed">
              Our mission is to democratize access to premium visual content while providing a user experience that sparks creativity.
            </p>
          </div>
        );
      case 'Contact':
        return (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Contact Us</h3>
            <p className="text-lg">We love hearing from our community! Whether you have a feature request, a bug report, or just want to say hello, please don't hesitate to reach out.</p>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mt-6">
                <ul className="space-y-4">
                <li className="flex items-center">
                    <span className="font-bold w-24 text-cyan-400">Email:</span>
                    <a href="mailto:hsini.web@gmail.com" className="text-white hover:text-purple-400 transition-colors hover:underline">hsini.web@gmail.com</a>
                </li>
                <li className="flex items-center">
                    <span className="font-bold w-24 text-cyan-400">Website:</span>
                    <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors hover:underline">doodax.com</a>
                </li>
                </ul>
            </div>
            <p className="text-sm text-gray-400 mt-4">We aim to respond to all inquiries within 24-48 hours.</p>
          </div>
        );
      case 'Guide':
          return <SeoArticle />;
      case 'Privacy Policy':
        return (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Privacy Policy</h3>
            <p><strong>Last Updated: October 27, 2023</strong></p>
            <p>At Stellar Stock Photo Finder, we prioritize your privacy. We believe in transparency and minimal data collection.</p>
            <h4 className="text-xl font-bold text-white mt-4">Data Collection</h4>
            <p>This application is a client-side interface. We do not maintain a backend server that stores your personal data or search history. The Pexels API Key you enter is stored locally in your browser's <code>sessionStorage</code>. This means it stays on your device and is cleared when you close your browser tab. We do not transmit this key to any third-party servers other than Pexels directly for the purpose of fetching images.</p>
            <h4 className="text-xl font-bold text-white mt-4">Cookies</h4>
            <p>We do not use tracking cookies or analytics software to monitor your behavior. Your browsing experience is private and secure.</p>
             <h4 className="text-xl font-bold text-white mt-4">Third-Party Services</h4>
            <p>This application interacts with the Pexels API. By using this service, you are also subject to Pexels' Privacy Policy regarding the data they may collect from API requests (such as IP addresses for rate limiting).</p>
          </div>
        );
      case 'Terms of Service':
        return (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Terms of Service</h3>
            <p><strong>Agreement to Terms</strong></p>
            <p>By accessing or using Stellar Stock Photo Finder, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.</p>
            <h4 className="text-xl font-bold text-white mt-4">Use of Images</h4>
            <p>All images displayed in this application are provided by Pexels. By downloading or using any image, you agree to comply with the <a href="https://www.pexels.com/license/" target="_blank" className="text-cyan-400 underline">Pexels License</a>. Generally, this allows for free commercial and personal use, but prohibits selling unaltered copies of photos or implying endorsement by people or brands in the images.</p>
            <h4 className="text-xl font-bold text-white mt-4">Disclaimer</h4>
            <p>The materials on Stellar Stock Photo Finder are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.</p>
          </div>
        );
      case 'DMCA':
        return (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">DMCA Notice</h3>
            <p>Stellar Stock Photo Finder respects the intellectual property rights of others. This application serves as a search engine and interface for content hosted by Pexels. We do not host, upload, or manage the image files directly.</p>
            <p>If you believe that your copyrighted work has been copied in a way that constitutes copyright infringement and is accessible via this application, please notify the source platform directly.</p>
            <div className="bg-red-900/30 border border-red-500/30 p-4 rounded-lg">
                <p className="font-bold text-white">Contact Pexels for Takedowns:</p>
                <p>Since all content is sourced via the Pexels API, the most effective way to have infringing content removed is to contact Pexels' copyright agent. You can find their legal contact information on the <a href="https://www.pexels.com/" target="_blank" className="text-cyan-400 underline">Pexels website</a>.</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };


  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-x-hidden font-sans selection:bg-cyan-500 selection:text-black">
      <div className="absolute inset-0 z-0 fixed-background">
        <style>{`
          @keyframes move-twink-back {
            from { background-position: 0 0; }
            to { background-position: -10000px 5000px; }
          }
           @keyframes move-clouds-back {
            from { background-position: 0 0; }
            to { background-position: 10000px 0; }
          }
          @keyframes fog-flow {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-200px, 0, 0); }
          }
          .stars {
            background: #000 url(https://www.script-tutorials.com/demos/360/images/stars.png) repeat top center;
            z-index: 0;
          }
          .twinkling {
            background: transparent url(https://www.script-tutorials.com/demos/360/images/twinkling.png) repeat top center;
            z-index: 1;
            animation: move-twink-back 200s linear infinite;
          }
          .clouds {
             background: transparent url(https://www.script-tutorials.com/demos/360/images/clouds.png) repeat top center;
             z-index: 2;
             opacity: 0.4;
             animation: move-clouds-back 200s linear infinite;
          }
          /* Smoky overlay effect */
          .smoky-overlay {
            background: radial-gradient(circle at 50% 50%, rgba(20, 20, 30, 0), rgba(0, 0, 0, 0.8));
            z-index: 3;
          }
        `}</style>
        <div className="absolute inset-0 stars"></div>
        <div className="absolute inset-0 twinkling"></div>
        <div className="absolute inset-0 clouds"></div>
        <div className="absolute inset-0 smoky-overlay"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="py-6 px-4 md:px-8 bg-black/30 backdrop-blur-md border-b border-white/5 sticky top-0 z-50">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.location.href = '/'}>
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full shadow-lg shadow-cyan-500/50 flex items-center justify-center">
                    <span className="font-bold text-white text-lg">S</span>
                </div>
                <h1 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 tracking-tight">
                Stellar Stock
                </h1>
            </div>
            
            <nav className="hidden md:flex space-x-1 bg-white/5 rounded-full p-1 backdrop-blur-sm border border-white/10">
              {navLinks.map((link) => (
                <button 
                    key={link} 
                    onClick={() => setActiveModal(link)} 
                    className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
                >
                  {link}
                </button>
              ))}
            </nav>
            
            <div className="md:hidden">
                <button className="text-white p-2" onClick={() => document.getElementById('mobile-menu')?.classList.toggle('hidden')}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
          </div>
          {/* Mobile Menu */}
          <div id="mobile-menu" className="hidden md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 py-4 px-4 flex flex-col space-y-2">
               {navLinks.map((link) => (
                <button 
                    key={link} 
                    onClick={() => { setActiveModal(link); document.getElementById('mobile-menu')?.classList.add('hidden'); }} 
                    className="text-left py-3 px-4 text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors border-b border-gray-800 last:border-0"
                >
                  {link}
                </button>
              ))}
          </div>
        </header>

        <main className="flex-grow container mx-auto p-4 md:p-8 flex flex-col items-center">
          {children}
        </main>

        <footer className="py-8 px-4 md:px-8 bg-black/60 backdrop-blur-md border-t border-white/5 mt-12">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-center md:text-left">
                 <h3 className="text-lg font-bold text-white">Stellar Stock</h3>
                 <p className="text-sm text-gray-500">Explore the universe of free imagery.</p>
            </div>
            
            <div className="flex flex-col items-center md:items-end">
                <p className="text-gray-400 text-sm flex items-center gap-2 mb-2">
                    Powered by 
                    <a 
                        href="https://github.com/hsinidev" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 transition-all"
                    >
                    HSINI MOHAMED
                    </a>
                </p>
                <div className="flex space-x-6 text-sm text-gray-500">
                    <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">doodax.com</a>
                    <a href="mailto:hsini.web@gmail.com" className="hover:text-cyan-400 transition-colors">hsini.web@gmail.com</a>
                </div>
            </div>
          </div>
          <div className="text-center mt-8 text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Stellar Stock Photo Finder. All rights reserved.
          </div>
        </footer>
      </div>
      
      {activeModal && (
        <Modal isOpen={!!activeModal} onClose={() => setActiveModal(null)} title={activeModal}>
            {getModalContent(activeModal)}
        </Modal>
      )}
    </div>
  );
};

export default Layout;
