import React from 'react';
import { motion } from 'framer-motion';
import { FileCheck, Stethoscope, TestTube, Calendar, Baby } from 'lucide-react';

const MedicalProcess = () => {
  // 医疗流程数据
  const steps = [
    {
      icon: <FileCheck className="w-10 h-10 text-indigo-600" />,
      title: "初步咨询评估",
      description: "通过详细问诊和身体检查，制定个性化的治疗方案",
      duration: "1-2 天"
    },
    {
      icon: <Stethoscope className="w-10 h-10 text-indigo-600" />,
      title: "基础检查",
      description: "进行全面的身体和生育能力检查，为后续治疗做准备",
      duration: "3-5 天"
    },
    {
      icon: <TestTube className="w-10 h-10 text-indigo-600" />,
      title: "取卵与受精",
      description: "促排卵治疗后取卵，随后在实验室完成受精过程",
      duration: "10-14 天"
    },
    {
      icon: <Calendar className="w-10 h-10 text-indigo-600" />,
      title: "胚胎培养与移植",
      description: "胚胎培养3-5天后，选择优质胚胎进行移植",
      duration: "3-5 天"
    },
    {
      icon: <Baby className="w-10 h-10 text-indigo-600" />,
      title: "妊娠检测",
      description: "移植后14天进行妊娠检测，确认是否成功受孕",
      duration: "约2周"
    }
  ];

  return (
    <section id="medical-process" className="py-32 relative bg-white">
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
            医疗流程
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            我们规范透明的试管婴儿全流程服务
          </p>
        </motion.div>
        
        <div className="relative">
          {/* 连接线 */}
          <div className="absolute hidden md:block left-1/2 top-0 bottom-0 w-1 bg-indigo-100 -translate-x-1/2 z-0"></div>
          
          {/* 流程步骤 */}
          <div className="relative z-10 space-y-20">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative flex flex-col md:flex-row items-center md:items-start gap-8"
              >
                {/* 时间线节点 - 移动端显示在顶部，桌面端显示在中间 */}
                <div className="w-16 h-16 rounded-full bg-white border-4 border-indigo-100 flex items-center justify-center z-10 md:absolute md:left-1/2 md:-translate-x-1/2">
                  {step.icon}
                </div>
                
                {/* 内容卡片 - 移动端全宽，桌面端左右交替 */}
                <div className={`bg-white rounded-xl shadow-lg p-8 md:w-5/12 w-full
                  ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}
                >
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <div className="inline-flex items-center px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full">
                    <span className="text-sm font-medium">预计时长：{step.duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium text-lg transition-colors"
          >
            咨询详细流程
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default MedicalProcess;
