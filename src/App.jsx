import React, { useState, useEffect } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';

// 导入模块化组件
import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import ServiceAdvantages from '@/components/ServiceAdvantages';
import Services from '@/components/Services';
import PricePackages from '@/components/PricePackages';
import VisaGuide from '@/components/VisaGuide';
import MedicalProcess from '@/components/MedicalProcess';
import SuccessTips from '@/components/SuccessTips';
import MedicalTeam from '@/components/MedicalTeam';
import SuccessStories from '@/components/SuccessStories';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

function App() {
  const { toast } = useToast();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  // 滚动监听
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 处理表单变化
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // 处理表单提交
  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "咨询请求已发送",
      description: "我们的专家团队将在24小时内与您联系。",
    });
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: ''
    });
  };

  // 处理咨询按钮点击
  const handleConsultClick = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Toaster />
      
      {/* 导航栏 */}
      <Navbar 
        isScrolled={isScrolled} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
      />
      
      {/* Hero 轮播区域 */}
      <HeroSlider />
      
      {/* 服务优势 */}
      <ServiceAdvantages />
      
      {/* 服务项目 */}
      <Services />
      
      {/* 价格套餐 */}
      <PricePackages />
      
      {/* 签证攻略 */}
      <VisaGuide />
      
      {/* 医疗流程 */}
      <MedicalProcess />
      
      {/* 成功率提升建议 */}
      <SuccessTips />
      
      {/* 医疗团队 */}
      <MedicalTeam />
      
      {/* 成功案例 */}
      <SuccessStories />
      
      {/* 用户评价 */}
      <Testimonials />
      
      {/* CTA区域 */}
      <CTASection handleConsultClick={handleConsultClick} />
      
      {/* 联系表单 */}
      <ContactForm />
      
      {/* 页脚 */}
      <Footer />
    </div>
  );
}

export default App;
