import React from 'react';
import { Phone, Globe, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { useState } from 'react';

// 在组件顶部添加状态和处理函数
const Footer = () => {
  const [showModal, setShowModal] = useState(null);
  
  const handleLinkClick = (type) => {
    if (type === 'visa-guide') {
      const element = document.getElementById('visa-guide');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (type === 'medical-process') {
      const element = document.getElementById('medical-process');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setShowModal(type);
    }
  };
  
  // 页脚链接数据
  const quickLinks = [
    { name: "签证指南", action: () => handleLinkClick('visa-guide') },
    { name: "医疗流程", action: () => handleLinkClick('medical-process') },
    { name: "服务项目", href: "#services" },
    { name: "成功案例", href: "#success-stories" },
    { name: "常见问题", action: () => handleLinkClick('faq') }
  ];
  
  const legalLinks = [
    { name: "隐私政策", action: () => handleLinkClick('privacy') },
    { name: "服务条款", action: () => handleLinkClick('terms') },
    { name: "免责声明", action: () => handleLinkClick('disclaimer') }
  ];

  return (
    <footer className="py-16 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <img
  src="/icon.svg"
  alt="吉尔吉斯代孕Logo"
  className="w-10 h-10 rounded-lg mr-3 bg-white/80"
  draggable="false"
/>
              <span className="text-2xl font-bold text-white">吉尔吉斯代孕</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              专业的试管婴儿咨询与服务平台，
              助您圆梦，共创幸福家庭。
            </p>
            <div className="flex space-x-4">
  <a href="https://www.facebook.com/wklbaby" target="_blank" rel="noopener noreferrer">
    <SocialButton icon={<Facebook className="w-5 h-5" />} />
  </a>
  <a href="https://www.instagram.com/wklbaby" target="_blank" rel="noopener noreferrer">
    <SocialButton icon={<Instagram className="w-5 h-5" />} />
  </a>
  <a href="https://twitter.com/wklivf" target="_blank" rel="noopener noreferrer">
    <SocialButton icon={<Twitter className="w-5 h-5" />} />
  </a>
  <a href="https://www.youtube.com/@haydonge5328" target="_blank" rel="noopener noreferrer">
    <SocialButton icon={<Youtube className="w-5 h-5" />} />
  </a>
</div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">快速链接</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.href ? (
                    <a href={link.href} className="text-slate-400 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  ) : (
                    <button 
                      onClick={link.action}
                      className="text-slate-400 hover:text-white transition-colors text-left"
                    >
                      {link.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">联系我们</h4>
            <address className="not-italic">
              <p className="text-slate-400 mb-2">江苏省昆山市紫竹路669</p>
              <p className="text-slate-400 mb-2">+86 13912655230</p>
              <p className="text-slate-400 mb-4">fuzhushengzhi@gmail.com</p>
            </address>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/8613912655230" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-slate-800 transition-colors"
                title="WhatsApp联系我们"
              >
                <Phone className="w-4 h-4 text-slate-400" />
              </a>
              <a 
                href="https://kgzivf.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-slate-800 transition-colors"
                title="访问我们的网站"
              >
                <Globe className="w-4 h-4 text-slate-400" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} IVF Guide. 保留所有权利
          </p>
          <div className="flex flex-wrap gap-6">
            {legalLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={link.action}
                className="text-slate-500 text-sm hover:text-slate-300 transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>
          
          {/* 模态框 */}
          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
                <h3 className="text-lg font-bold mb-4">
                  {showModal === 'faq' && '常见问题'}
                  {showModal === 'privacy' && '隐私政策'}
                  {showModal === 'terms' && '服务条款'}
                  {showModal === 'disclaimer' && '免责声明'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {showModal === 'faq' && '这里是常见问题的内容...'}
                  {showModal === 'privacy' && '我们承诺保护您的个人信息安全...'}
                  {showModal === 'terms' && '服务条款内容...'}
                  {showModal === 'disclaimer' && '免责声明内容...'}
                </p>
                <button 
                  className="bg-indigo-600 text-white px-4 py-2 rounded"
                  onClick={() => setShowModal(null)}
                >
                  关闭
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

// 社交媒体按钮组件
const SocialButton = ({ icon }) => {
  return (
    <button className="w-10 h-10 rounded-full bg-slate-800 hover:bg-indigo-600 flex items-center justify-center transition-colors">
      {icon}
    </button>
  );
};

export default Footer;
