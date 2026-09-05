import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t bg-slate-50 py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-right">
          <div className="md:col-span-2">
            <h3 className="font-bold text-xl text-primary mb-4">الرحلة</h3>
            <p className="text-gray-600 text-sm max-w-sm">
              «الرحلة» منصة عربية تجمع «إنها لك» و«بداية الرحلة» في قصص وتجارب تضع صاحب الرحلة في قلبها.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-gray-800">أقسامنا</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/enha-lak" className="hover:text-primary transition-colors">«إنها لك»</Link></li>
              <li><Link to="/creative-writing" className="hover:text-primary transition-colors">«بداية الرحلة»</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-gray-800">روابط سريعة</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/about" className="hover:text-primary transition-colors">رحلتنا</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">المدونة</Link></li>
              <li><Link to="/support" className="hover:text-primary transition-colors">الدعم والمساعدة</Link></li>
              <li><Link to="/join-us" className="hover:text-primary transition-colors">انضم إلينا</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} الرحلة. جميع الحقوق محفوظة.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-primary">الخصوصية</Link>
            <Link to="/terms" className="hover:text-primary">الشروط</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
