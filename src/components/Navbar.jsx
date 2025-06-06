import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

// 导航栏组件
const Navbar = ({ isMenuOpen, setIsMenuOpen, isScrolled }) => {
  // 导航链接数据
  const navLinks = [
    { title: '首页', href: '#home' },
    { title: '服务', href: '#services' },
    { title: '价格套餐', href: '#prices' },
    { title: '医疗团队', href: '#team' },
    { title: '成功案例', href: '#success-stories' },
    { title: '联系我们', href: '#contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className={`w-10 h-10 rounded-lg mr-3 ${isScrolled ? 'bg-gradient-to-br from-indigo-600 to-purple-600' : 'bg-white/80'}`}></div>
            <span className={`text-2xl font-bold ${isScrolled ? 'text-indigo-700' : 'text-white'}`}>吉尔吉斯医旅</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.title}
                href={link.href}
                className={`font-medium hover:text-indigo-500 transition-colors ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.title}
              </a>
            ))}
            <button className="btn-primary">
              预约咨询
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? '关闭菜单' : '打开菜单'}
          >
            {isMenuOpen ? (
              <X className={`w-7 h-7 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`w-7 h-7 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <motion.div 
        className="md:hidden"
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0,
          height: isMenuOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
      >
        {isMenuOpen && (
          <div className="bg-white shadow-lg px-6 py-8">
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a 
                  key={link.title}
                  href={link.href}
                  className="font-medium text-gray-700 hover:text-indigo-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.title}
                </a>
              ))}
              <button className="btn-primary w-full py-3">
                预约咨询
              </button>
            </nav>
          </div>
        )}
      </motion.div>
    </header>
  );
};

export default Navbar;
