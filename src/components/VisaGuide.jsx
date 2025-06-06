import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Clock, BookOpen, Download, Globe } from 'lucide-react';

const VisaGuide = () => {
  // 吉尔吉斯斯坦签证攻略数据
  const visaGuides = [
    {
      icon: <FileText />,
      title: "电子旅游签证",
      description: "中国公民可在线申请吉尔吉斯斯坦电子签证，无需前往使馆",
      time: "处理时间：3个工作日",
      features: ["可停留60天", "在线申请", "无需面试"]
    },
    {
      icon: <Globe />,
      title: "医疗签证",
      description: "专为医疗旅游者设计的签证类型，提供更长停留期",
      time: "处理时间：3-5个工作日",
      features: ["可停留90天", "可延期", "适合试管婴儿客户"]
    },
    {
      icon: <FileText />,
      title: "吉尔吉斯国家概况",
      description: "位于中亚的美丽国家，拥有丰富的自然资源和友好的签证政策",
      time: "地理：中亚山国",
      features: ["首都：比什凯克", "语言：吉尔吉斯语、俄语", "对华友好"]
    }
  ];

  return (
    <section id="visa-guide" className="py-32 relative bg-gradient-to-b from-slate-50 to-white">
      <div className="section-divider mb-20"></div>
      
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-indigo-700">
            吉尔吉斯斯坦签证指南
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            便捷的电子签证系统，让您轻松踏上试管婴儿之旅
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {visaGuides.map((guide, index) => (
            <motion.div
              key={guide.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-indigo-50 p-8 flex items-center">
                <div className="w-14 h-14 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-5">
                  {guide.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{guide.title}</h3>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{guide.time}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-6">{guide.description}</p>
                
                <div className="space-y-3 mb-8">
                  {guide.features.map((feature, i) => (
                    <div key={i} className="flex items-center bg-slate-50 px-4 py-2 rounded-lg">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <button className="flex-1 flex items-center justify-center py-3 bg-white border border-indigo-200 text-indigo-700 rounded-lg hover:bg-indigo-50 transition-colors">
                    <BookOpen className="w-5 h-5 mr-2" />
                    <span>阅读详情</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center py-3 bg-white border border-indigo-200 text-indigo-700 rounded-lg hover:bg-indigo-50 transition-colors">
                    <Download className="w-5 h-5 mr-2" />
                    <span>下载指南</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisaGuide;
