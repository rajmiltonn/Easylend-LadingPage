import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-primary text-white py-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content - single row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          {/* Left side - Email */}
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-white" />
            <a 
              href="mailto:query@easylend.com" 
              className="text-white text-base hover:text-white/90 transition-colors"
            >
              query@easylend.com
            </a>
          </div>

          {/* Right side - Disclaimer */}
          <div className="text-white text-sm leading-relaxed">
            <div>
              <strong>Disclaimer:</strong> EasyLend is a loan aggregator and is
            </div>
            <div>
              authorized to provide services on behalf of its partners.
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-white/20 pt-6">
          <p className="text-white/80 text-sm">
            Copyright © 2025 Easylend. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;