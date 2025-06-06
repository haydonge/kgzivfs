import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, Globe, Shield, Clock, Users } from 'lucide-react';

const ServiceAdvantages = () => {
  // 服务优势数据
  const advantages = [
    {
      icon: <Award className="w-12 h-12 text-indigo-600" />,
      title: '国际认证',
      description: '拥有国际认证资质，技术团队经验丰富'
    },
    {
      icon: <Heart className="w-12 h-12 text-indigo-600" />,
      title: '专业医护',
      description: '团队由专业医生护士组成，全程细心照料'
    },
    {
      icon: <Globe className="w-12 h-12 text-indigo-600" />,
      title: '全球资源',
      description: '对接全球医疗资源，提供一站式专业服务'
    },
    {
      icon: <Shield className="w-12 h-12 text-indigo-600" />,
      title: '安全保障',
      description: '严格执行安全标准，提供全方位健康保障'
    },
    {
      icon: <Clock className="w-12 h-12 text-indigo-600" />,
      title: '时间灵活',
      description: '根据您的时间安排定制专属计划'
    },
    {
      icon: <Users className="w-12 h-12 text-indigo-600" />,
      title: '一对一服务',
      description: '专属顾问全程一对一跟进，随时解答问题'
    }
  ];

  return (
    <section className="py-32 relative">
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
            我们的服务优势
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            专业、周到、安全，为您提供最优质的IVF服务体验
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-6">
                {advantage.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAdvantages;
