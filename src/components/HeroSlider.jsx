import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-scroll';

// 英雄轮播图组件
const HeroSlider = () => {
  // 轮播图数据
  const slides = [
    {
      id: 1,
      title: "吉尔吉斯斯坦专业代孕服务",
      subtitle: "圆您家庭梦想",
      description: "提供高质量代孕及试管婴儿服务，由具有20年经验的中国医生团队全程操作，确保95%以上的成功率。我们拥有现代化医疗设施，采用先进技术，为您提供安全、可靠、透明的一站式服务，让每一位客户安心无忧。",
      image: "hero-slide-1.jpg",
      btnText: "查看套餐",
      targetSection: "prices"
    },
    {
      id: 2,
      title: "二代/三代试管婴儿技术",
      subtitle: "先进医疗保障",
      description: "采用国际领先的第三代试管婴儿技术(PGD/PGS)，可筛查23对染色体异常及200多种遗传疾病，大幅提高妊娠率并降低流产率。我们的中国资深医生团队拥有多年国际执业经验，使用先进设备和技术为您打造健康家庭。",
      image: "pexels-photo-287227.webp",
      btnText: "技术详情",
      targetSection: "serviceadvantages"
    },
    {
      id: 3,
      title: "一站式代孕服务",
      subtitle: "无忧全程陪护",
      description: "从初次咨询到宝宝回国，我们提供360°全方位服务：专业医疗咨询、合法合规签约、先进试管技术、严格代孕妈妈筛选（含体检、心理评估、背景调查）、全程孕期监控、24小时医疗陪护、出生证明和旅行证件办理，确保您的整个旅程舒适无忧。",
      image: "hero-slide-3.jpg",
      btnText: "联系我们",
      targetSection: "medicalprocess"
    },
    {
      id: 4,
      title: "优质卵妹服务",
      subtitle: "高性价比选择",
      description: "我们严格筛选20-28岁健康卵妹，所有卵妹均经过全面体检（包括遗传病史、生育能力评估）、心理评估和背景调查。提供卵子基因检测、冷冻保存、运输和移植全流程服务，多种方案可选。每位卵妹不超过3次捐卵，确保卵子质量和健康。",
      image: "hero-slide-4.jpg",
      btnText: "咨询详情",
      targetSection: "services"
    },
    {
      id: 5,
      title: "全程中文服务团队",
      subtitle: "无障碍沟通体验",
      description: "我们的服务团队由全部说中文的专业人员组成，包括医生、翻译、后勤保障和法律顾问。从踏入吉尔吉斯斯坦的那一刻起，您将享受到如同在国内的无障碍沟通体验。我们的中国医生团队拥有丰富的国际经验，全程为您提供专业咨询和支持。",
      image: "hero-slide-5.jpg",
      btnText: "了解团队",
      targetSection: "team"
    },
    {
      id: 6,
      title: "合法安心，隐私保障",
      subtitle: "法律与隐私双重保障",
      description: "吉尔吉斯斯坦是少数合法允许代孕和试管婴儿的国家之一，法律框架完善且稳定。我们严格遵循当地法规，提供100%合法服务。同时，我们采用严格的隐私保护措施，所有客户信息绝对保密，合同和协议均有法律效力，确保您的权益和隐私得到全面保障。",
      image: "hero-slide-6.jpg",
      btnText: "了解政策",
      targetSection: "visa-guide"
    }
  ];

  // 状态管理
  const [current, setCurrent] = useState(0);
  
  // 自动轮播
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  // 下一张幻灯片
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  // 上一张幻灯片
  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden bg-slate-900">
      {/* 二维码浮动元素 */}
      <div className="absolute right-24 top-1/2 transform -translate-y-1/2 z-30 hidden md:block">
        <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-xl">
          <img 
            src="QR1.png" 
            alt="微信联系haydonge" 
            className="w-32 h-72 object-cover" 
          />
          <p className="text-center mt-2 text-gray-700 font-medium text-sm">扫码咨询</p>
        </div>
      </div>
      {/* 背景轮播图 */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img 
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover object-center"
            style={{ objectPosition: 'center center' }}
          />
        </motion.div>
      </AnimatePresence>
      
      {/* 内容区域 */}
      <div className="container mx-auto px-6 relative z-20 h-full flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="text-indigo-300 text-xl mb-4 block">{slides[current].subtitle}</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {slides[current].title}
            </h1>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              {slides[current].description}
            </p>
            
            <div className="flex flex-wrap gap-6">
              <Link
                to={slides[current].targetSection}
                spy={true}
                smooth={true}
                duration={800}
                offset={-100}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-medium flex items-center transition-colors cursor-pointer"
              >
                {slides[current].btnText} 
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={800}
                offset={-100}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-medium transition-colors cursor-pointer"
              >
                预约咨询
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* 导航按钮 */}
      <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? 'bg-white w-10' : 'bg-white/50'
            }`}
            aria-label={`前往幻灯片 ${index + 1}`}
          />
        ))}
      </div>
      
      {/* 左右箭头 */}
      <button
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center text-white"
        onClick={prevSlide}
        aria-label="上一张"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center text-white"
        onClick={nextSlide}
        aria-label="下一张"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </section>
  );
};

export default HeroSlider;
