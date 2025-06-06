import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

const CTASection = ({ handleConsultClick }) => {
  return (
    <section className="py-32 relative bg-gradient-to-r from-indigo-600 to-indigo-800 text-white">
      <div className="section-divider mb-20"></div>
      
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            开启您的试管婴儿之旅
          </h2>
          <p className="text-xl text-indigo-100 mb-12 leading-relaxed">
            我们的专业团队随时为您提供咨询服务，
            帮助您实现为人父母的梦想。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              className="bg-white text-indigo-700 hover:bg-indigo-50 text-xl px-12 py-6 rounded-lg font-semibold transition-colors flex items-center"
              onClick={handleConsultClick}
            >
              预约免费咨询
              <ArrowRight className="ml-3 w-6 h-6" />
            </button>
            
            <button 
              className="bg-transparent border-2 border-white/50 hover:bg-white/10 text-xl px-12 py-6 rounded-lg transition-colors"
            >
              了解更多详情
            </button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center">
              <Check className="w-5 h-5 text-indigo-200 mr-2" />
              <span className="text-indigo-100">专业医疗团队</span>
            </div>
            <div className="flex items-center">
              <Check className="w-5 h-5 text-indigo-200 mr-2" />
              <span className="text-indigo-100">全程一对一服务</span>
            </div>
            <div className="flex items-center">
              <Check className="w-5 h-5 text-indigo-200 mr-2" />
              <span className="text-indigo-100">透明收费标准</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
