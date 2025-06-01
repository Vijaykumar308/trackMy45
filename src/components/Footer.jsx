import React from 'react';

function Footer() {
  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200 py-6">
      <div className="max-w-screen-xl mx-auto px-4 text-center space-y-2">
        <p className="text-sm md:text-base">
          Powered by <span className="font-semibold text-black">Vijay Kumar</span>
        </p>
        <p className="text-sm md:text-base">
          Get Contact @{' '}
          <a href="mailto:jwvijaykumar@gmail.com" className="text-blue-600 hover:underline">
            jwvijaykumar@gmail.com
          </a>
        </p>
        <p className="text-xs md:text-sm text-gray-500">
          &copy; 2025–2026 All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
