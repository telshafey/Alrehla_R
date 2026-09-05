import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center mx-auto px-4 justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-bold text-xl text-primary">الرحلة</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary">الرئيسية</Link>
          <Link to="/enha-lak" className="text-sm font-medium hover:text-primary">إنها لك</Link>
          <Link to="/creative-writing" className="text-sm font-medium hover:text-primary">بداية الرحلة</Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary">رحلتنا</Link>
          <Link to="/blog" className="text-sm font-medium hover:text-primary">المدونة</Link>
          <Link to="/join-us" className="text-sm font-medium hover:text-primary">انضم إلينا</Link>
          <Link to="/support" className="text-sm font-medium hover:text-primary">الدعم والمساعدة</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link to="/login">
            <Button variant="ghost">تسجيل الدخول</Button>
          </Link>
          <Link to="/register">
            <Button>حساب جديد</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
