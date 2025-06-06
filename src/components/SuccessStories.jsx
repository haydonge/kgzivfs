import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const SuccessStories = () => {
  // 成功案例数据
  const successStories = [
    {
      id: 1,
      title: "历经三年，终圆梦",
      description: "多次尝试后成功怀孕的感人故事",
      image: "https://images.unsplash.com/photo-1518935869927-c6c9462da3b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      age: "38岁",
      attempts: "3次",
      result: "成功"
    },
    {
      id: 2,
      title: "高龄产妇的奇迹",
      description: "突破年龄限制的成功案例",
      image: "https://images.unsplash.com/photo-1563191799-2c7e8c185bb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      age: "42岁",
      attempts: "2次",
      result: "双胞胎"
    },
    {
      id: 3,
      title: "跨国求子之旅",
      description: "从海外远道而来的幸福故事",
      image: "https://images.unsplash.com/photo-1591604021695-0c69b7c05981?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      age: "36岁",
      attempts: "1次",
      result: "成功"
    }
  ];

  return (
    <section id="success-stories" className="py-32 relative bg-gradient-to-b from-white to-slate-50">
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
            成功案例展示
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            我们已经帮助了数百个家庭实现了生育梦想
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden h-60">
                <img 
                  src={story.image} 
                  alt={story.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{story.title}</h3>
                  <p className="text-white/80">{story.description}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <p className="text-sm text-gray-500">年龄</p>
                    <p className="text-lg font-bold text-indigo-700">{story.age}</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <p className="text-sm text-gray-500">尝试次数</p>
                    <p className="text-lg font-bold text-indigo-700">{story.attempts}</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <p className="text-sm text-gray-500">结果</p>
                    <p className="text-lg font-bold text-green-600">{story.result}</p>
                  </div>
                </div>
                <button className="mt-6 w-full py-3 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-medium rounded-lg transition-colors flex items-center justify-center">
                  <span>查看详情</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
