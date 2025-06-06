import React from 'react';
import { Phone, Globe, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  // 页脚链接数据
  const quickLinks = [
    { name: "签证指南", href: "#" },
    { name: "医疗流程", href: "#" },
    { name: "服务项目", href: "#services" },
    { name: "成功案例", href: "#success-stories" },
    { name: "常见问题", href: "#" }
  ];
  
  const legalLinks = [
    { name: "隐私政策", href: "#" },
    { name: "服务条款", href: "#" },
    { name: "免责声明", href: "#" }
  ];

  return (
    <footer className="py-16 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg mr-3"></div>
              <span className="text-2xl font-bold text-white">IVF Guide</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              专业的试管婴儿咨询与服务平台，
              助您圆梦，共创幸福家庭。
            </p>
            <div className="flex space-x-4">
              <SocialButton icon={<Facebook className="w-5 h-5" />} />
              <SocialButton icon={<Instagram className="w-5 h-5" />} />
              <SocialButton icon={<Twitter className="w-5 h-5" />} />
              <SocialButton icon={<Youtube className="w-5 h-5" />} />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">快速链接</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
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
              <a key={link.name} href={link.href} className="text-slate-500 text-sm hover:text-slate-300 transition-colors">
                {link.name}
              </a>
            ))}
          </div>
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
