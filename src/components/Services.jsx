import React from 'react';
import { motion } from 'framer-motion';
import { BabyIcon, TestTubeIcon, FileHeartIcon, StethoscopeIcon, HeartHandshake, Globe, Plane, BadgeCheck, CheckCircle } from 'lucide-react';

const Services = () => {
  // 代孕服务数据
  const services = [
    {
      icon: <HeartHandshake className="w-16 h-16 text-white" />,
      title: "吉尔吉斯斯坦代孕服务",
      description: "全程代孕服务，从代孕妈妈筛选到孕期管理一站式解决",
      features: [
        "高质量代孕妈妈严格筛选",
        "全程中国医疗团队跟进",
        "十年经验代孕中心",
        "完善的法律保障系统"
      ]
    },
    {
      icon: <TestTubeIcon className="w-16 h-16 text-white" />,
      title: "二代/三代试管婴儿",
      description: "提供最先进的第三代试管婴儿技术，满足不同需求",
      features: [
        "三代试管胚胎筛选(PGD/PGS)",
        "纯中国医生团队手术保障",
        "高成功率提供保障",
        "中文全流程沟通无障碍"
      ]
    },
    {
      icon: <Globe className="w-16 h-16 text-white" />,
      title: "国际化一站式服务",
      description: "从行前咨询到回国证件办理全程安排",
      features: [
        "吉尔吉斯斯坦生活安排与翻译",
        "全程医疗附加服务",
        "定制化出行计划",
        "国际护照与证件办理协助"
      ]
    },
    {
      icon: <BadgeCheck className="w-16 h-16 text-white" />,
      title: "定制化代孕套餐",
      description: "根据您的需求提供多种代孕套餐选择",
      features: [
        "自精自卵代孕套餐",
        "自精供卵代孕套餐",
        "纯移植代孕套餐",
        "二代/三代试管技术结合"
      ]
    }
  ];

  return (
    <section id="services" className="py-32 relative bg-slate-50">
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
            我们的服务项目
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            通过专业技术和服务助您实现为人父母的梦想
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-indigo-600 p-8">
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-white/80">{service.description}</p>
              </div>
              <div className="bg-white p-6 flex-grow">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">服务内容</h4>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  className="mt-6 w-full py-3 bg-slate-100 hover:bg-slate-200 text-indigo-700 font-medium rounded-lg transition-colors"
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  了解详情
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
