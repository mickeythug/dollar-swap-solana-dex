
import React from 'react';

const Footer = () => {
  return (
    <footer className="relative z-10 px-4 py-12 mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* About Section */}
            <div id="about">
              <h3 className="text-white font-bold text-lg mb-4">About 1 Dollar</h3>
              <p className="text-purple-200 text-sm leading-relaxed mb-4">
                This is a simple meme token called 1 dollar. The idea is easy — just buy one dollar worth of this token. 
                No complicated stuff, no risk of losing your money, just holding together as a community.
              </p>
              <p className="text-purple-300 text-xs">
                ⚠️ This is not financial advice. Like all crypto, there is always risk.
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Token Features</h3>
              <ul className="space-y-2 text-purple-200 text-sm">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span>Fixed total supply</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span>Holder rewards on transactions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>Anti-whale protection</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  <span>Community governed</span>
                </li>
              </ul>
            </div>

            {/* Community */}
            <div id="community">
              <h3 className="text-white font-bold text-lg mb-4">Join Community</h3>
              <p className="text-purple-200 text-sm mb-4">
                Connect with fellow holders and stay updated on the latest developments.
              </p>
              <div className="space-y-2">
                <a href="#" className="block text-purple-300 hover:text-white text-sm transition-colors">
                  📱 Telegram Community
                </a>
                <a href="#" className="block text-purple-300 hover:text-white text-sm transition-colors">
                  🐦 Twitter Updates
                </a>
                <a href="#" className="block text-purple-300 hover:text-white text-sm transition-colors">
                  💬 Discord Server
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-6 text-center">
            <p className="text-purple-300 text-sm">
              © 2024 1 Dollar Token. Built with ❤️ for the community.
            </p>
            <p className="text-purple-400 text-xs mt-2">
              Always DYOR (Do Your Own Research) before investing in any cryptocurrency.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
