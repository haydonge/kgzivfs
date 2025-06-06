import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

// 英雄轮播图组件
const HeroSlider = () => {
  // 轮播图数据
  const slides = [
    {
      id: 1,
      title: "吉尔吉斯斯坦专业代孕服务",
      subtitle: "圆您家庭梦想",
      description: "提供高质量代孕及试管婴儿服务，由中国医生团队全程操作，确保安全与成功率。",
      image: "https://photo.171006.xyz/ZRtwrNCegKfzttuQToGyh.jpg",
      btnText: "查看套餐"
    },
    {
      id: 2,
      title: "二代/三代试管婴儿技术",
      subtitle: "先进医疗保障",
      description: "采用国际领先的第三代试管婴儿技术，由中国资深医生团队提供全套医疗服务。",
      image: "https://photo.171006.xyz/photo/a671c16d3b2284d8da233.jpg",
      btnText: "技术详情"
    },
    {
      id: 3,
      title: "一站式代孕服务",
      subtitle: "无忧全程陪护",
      description: "从医疗咨询、签约、试管技术到代孕妈妈筛选、产后照护、办理证件，全程一站式服务。",
      image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      btnText: "联系我们"
    },
    {
      id: 4,
      title: "优质卵妹服务",
      subtitle: "高性价比选择",
      description: "提供优质的卵子服务，从卵子筛选、卵子冷冻、卵子保存到卵子移植，全程一站式服务。",
      image: "https://photo.171006.xyz/BnhlQFV9saUfFbiAJizbp.jpg",
      btnText: "联系我们"
    }
  ];

  // 状态管理
  const [current, setCurrent] = useState(0);
  
  // 自动轮播
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
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
            className="w-full h-full object-cover"
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
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-medium flex items-center transition-colors">
                {slides[current].btnText} 
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-medium transition-colors">
                预约咨询
              </button>
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
