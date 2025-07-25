import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-primary border-t border-dark-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">Champions Lifestyle</h3>
            <p className="text-dark-text-secondary mb-4">
              Empowering transformations around the globe. From different countries to massive physical results, we bring change that speaks for itself.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4"> </h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-dark-text-secondary hover:text-white transition-colors"> </a></li>
              <li><a href="#" className="text-dark-text-secondary hover:text-white transition-colors"> </a></li>
              <li><a href="#" className="text-dark-text-secondary hover:text-white transition-colors"> </a></li>
              <li><a href="#" className="text-dark-text-secondary hover:text-white transition-colors"> </a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-dark-text-secondary">championlifestyle.yash@gmail.com</li>
              <li className="text-dark-text-secondary">+91 91683 02369</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-dark-border mt-8 pt-8 text-center">
          <p className="text-dark-text-muted">
            © 2024 Champions Lifestyle. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;