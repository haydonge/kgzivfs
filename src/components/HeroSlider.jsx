import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-scroll';

// 英雄轮播图组件
const HeroSlider = () => {
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
      description: "我们的服务团队由全部说中文的专业人员组成，包括医生、翻译、后勤保障和法律顾问。从踏入吉尔吉斯斯坦那一刻起，您将享受到如同在中国无障碍沟通体验。我们的中国医生团队拥有丰富的国际经验，全程为您提供专业咨询和支持。",
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
  const [current, setCurrent] = useState(0);
  const [formsAppInstance, setFormsAppInstance] = useState(null);
  const formsAppScriptLoaded = useRef(false); // 用于确保脚本只加载一次

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  // 加载 forms.app 脚本并创建实例
  useEffect(() => {
    if (formsAppScriptLoaded.current) return; // 如果脚本已加载，则不再执行

    const scriptId = 'formsapp-embed-script';
    if (document.getElementById(scriptId)) { // 再次检查，以防万一
      formsAppScriptLoaded.current = true;
      // 如果脚本已存在但实例未创建 (理论上不应发生在此逻辑下)
      if (!formsAppInstance && window.formsapp && typeof window.formsapp === 'function') {
        try {
          const instance = new window.formsapp('6848f9f42eb8ca0002d505ea', 'popup', {
            'overlay': 'rgba(45,45,45,0.5)',
            'button': {'color':'#ff9e24','text':'点击这里！'}, // 这个按钮配置可能仍然是针对 forms.app 自身创建的触发器
            'width': '800px',
            'height': '600px',
            'openingAnimation': {'entrance':'animate__fadeIn','exit':'animate__fadeOut'}
          }, 'https://af5fj9sl.forms.app');
          setFormsAppInstance(instance);
          console.log('Forms.app instance created (script already existed).');
        } catch (e) {
          console.error('Error creating forms.app instance (script already existed):', e);
        }
      }
      return;
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = 'https://forms.app/cdn/embed.js';
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    script.onload = () => {
      console.log('forms.app embed.js loaded');
      formsAppScriptLoaded.current = true;
      if (window.formsapp && typeof window.formsapp === 'function') {
        try {
          const instance = new window.formsapp('6848f9f42eb8ca0002d505ea', 'popup', {
            'overlay': 'rgba(45,45,45,0.5)',
            'button': {'color':'#ff9e24','text':'点击这里！'},
            'width': '800px',
            'height': '600px',
            'openingAnimation': {'entrance':'animate__fadeIn','exit':'animate__fadeOut'}
          }, 'https://af5fj9sl.forms.app');
          setFormsAppInstance(instance);
          console.log('Forms.app instance created.');
        } catch (e) {
          console.error('Error creating forms.app instance:', e);
        }
      } else {
        console.error('forms.app embed.js loaded, but window.formsapp is not defined or not a function.');
      }
    };
    script.onerror = () => {
      console.error('Failed to load forms.app embed.js');
      formsAppScriptLoaded.current = false; // 加载失败，允许重试 (尽管此effect只运行一次)
    };
    document.body.appendChild(script);

    return () => {
      // 清理：移除脚本。实例的清理取决于 forms.app 是否有 destroy 方法
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
      if (formsAppInstance && typeof formsAppInstance.destroy === 'function') {
        // formsAppInstance.destroy(); // 如果 forms.app 提供销毁方法
      }
      // 移除 forms.app 可能添加的全局UI元素
      const formsappOverlay = document.querySelector('.formsapp-overlay');
      if (formsappOverlay) formsappOverlay.remove();
      const formsappPopup = document.querySelector('.formsapp-popup-container');
      if (formsappPopup) formsappPopup.remove();
      formsAppScriptLoaded.current = false; // 重置加载状态，以便组件重新挂载时可以重新加载
    };
  }, []); // 空依赖数组，确保只在挂载和卸载时运行

  const handleOpenForm = () => {
    if (formsAppInstance && typeof formsAppInstance.open === 'function') {
      formsAppInstance.open();
    } else {
      console.error('Forms.app instance is not available or does not have an open method.');
      // 可以尝试在这里重新加载脚本或重新创建实例，作为备用方案，但这会使逻辑复杂化
      // alert('表单功能暂不可用，请稍后重试。');
    }
  };

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="home" className="relative h-screen overflow-hidden bg-slate-900">
      {/* ... 二维码和其他元素 ... */}
      <div className="absolute right-24 top-1/2 transform -translate-y-1/2 z-30 hidden md:block">
        <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-xl">
          <img 
            src="QR1.png" 
            alt="吉尔吉斯代孕微信联系haydonge" 
            className="w-32 h-72 object-cover" 
          />
          <p className="text-center mt-2 text-gray-700 font-medium text-sm">扫码咨询</p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {/* ... 背景轮播图保持不变 ... */}
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
            alt={`吉尔吉斯代孕 - ${slides[current].title}`}
            className="w-full h-full object-cover object-center"
            style={{ objectPosition: 'center center' }}
          />
        </motion.div>
      </AnimatePresence>
      
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
                to={slides[current].targetSection} /* ... */
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-medium flex items-center transition-colors cursor-pointer"
              >
                {slides[current].btnText} 
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              {/* 修改按钮，移除 formsappId，添加 onClick 事件 */}
              <button 
                onClick={handleOpenForm} 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-medium transition-colors cursor-pointer"
              >
                预约咨询
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* ... 导航按钮和左右箭头保持不变 ... */}
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
