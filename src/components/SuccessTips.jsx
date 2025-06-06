import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Heart, Globe, Check } from 'lucide-react';

const SuccessTips = () => {
  return (
    <section className="py-32 relative bg-white">
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
            成功率优化建议
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            提高试管婴儿成功率的关键要点
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8"
          >
            <div className="w-16 h-16 rounded-xl bg-indigo-100 flex items-center justify-center mb-6">
              <Calendar className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">机构选择</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                <span>认证医院优先</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                <span>考察设备与医生资质</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                <span>注重临床专业水平</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8"
          >
            <div className="w-16 h-16 rounded-xl bg-indigo-100 flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">健康管理</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                <span>合理调整饮食结构</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                <span>适度运动，保持好心情</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                <span>按时休息，降低压力</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8"
          >
            <div className="w-16 h-16 rounded-xl bg-indigo-100 flex items-center justify-center mb-6">
              <Globe className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">心理支持</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                <span>加入患者社群</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                <span>定期心理咨询</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                <span>休息放松技巧</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SuccessTips;
