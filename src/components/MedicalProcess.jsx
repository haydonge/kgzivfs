import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileCheck, Stethoscope, TestTube, Calendar, Baby, Users, Heart, Shield, X, Info, ArrowRight, Clock } from 'lucide-react';

const MedicalProcess = () => {
  const [showChecklistModal, setShowChecklistModal] = useState(false);

  // 代孕医疗流程数据
  const steps = [
    {
      icon: <FileCheck className="w-6 h-6 text-white" />,
      title: "初步咨询与评估",
      description: "详细了解客户需求，进行医学评估，制定个性化代孕方案，签署初步协议",
      duration: "1-2 周",
      details: ["医学史评估", "心理咨询", "法律咨询", "方案制定"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: <Stethoscope className="w-6 h-6 text-white" />,
      title: "客户医学准备",
      description: "客户进行全面身体检查，包括生育能力评估和必要的医学检查",
      duration: "1-2 周",
      details: ["生育能力检查", "遗传学筛查", "感染性疾病检测", "激素水平检测"],
      hasDetailedChecklist: true,
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200"
    },
    {
      icon: <TestTube className="w-6 h-6 text-white" />,
      title: "促排卵与取卵",
      description: "客户进行促排卵治疗，在最佳时机取卵，同时收集精子样本",
      duration: "2-3 周",
      details: ["促排卵治疗", "卵泡监测", "取卵手术", "精子处理"],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "代母筛选与匹配",
      description: "严格筛选合适的代孕母亲，进行全面的身体和心理检查，确保最佳匹配",
      duration: "2-4 周",
      details: ["代母健康筛查", "心理评估", "背景调查", "匹配确认"],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    },
    {
      icon: <Heart className="w-6 h-6 text-white" />,
      title: "代母身体调理",
      description: "代孕母亲进行全面身体调理，包括营养补充、激素调节和子宫内膜准备",
      duration: "4-6 周",
      details: ["营养调理", "激素治疗", "子宫内膜准备", "定期监测"],
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200"
    },
    {
      icon: <TestTube className="w-6 h-6 text-white" />,
      title: "体外受精与胚胎培养",
      description: "在实验室进行体外受精，培养胚胎至囊胚期，进行PGS/PGD筛查",
      duration: "5-7 天",
      details: ["体外受精", "胚胎培养", "遗传学筛查", "胚胎评级"],
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200"
    },
    {
      icon: <Calendar className="w-6 h-6 text-white" />,
      title: "胚胎移植",
      description: "将优质胚胎移植到代孕母亲的子宫内，确保最佳的着床环境",
      duration: "1 天",
      details: ["移植前准备", "胚胎移植手术", "术后观察", "黄体支持"],
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200"
    },
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "妊娠监护",
      description: "全程监护代孕母亲的妊娠过程，定期产检，确保母婴健康",
      duration: "9 个月",
      details: ["定期产检", "营养指导", "心理支持", "医疗监护"],
      color: "from-cyan-500 to-cyan-600",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200"
    },
    {
      icon: <Baby className="w-6 h-6 text-white" />,
      title: "分娩与交接",
      description: "专业医疗团队协助分娩，完成法律手续，将健康宝宝交给委托父母",
      duration: "1-2 周",
      details: ["分娩准备", "医疗协助", "法律手续", "宝宝交接"],
      color: "from-rose-500 to-rose-600",
      bgColor: "bg-rose-50",
      borderColor: "border-rose-200"
    }
  ];

  // 检查项目清单数据
  const checklistData = {
    title: "试管前检查项目清单（3个月内有效）",
    male: {
      title: "男方",
      items: [
        {
          category: "精子常规",
          tests: [
            { name: "精子前向游动率", timing: "排精后三天" },
            { name: "畸形率", timing: "排精后三天" },
            { name: "形态", timing: "排精后三天" }
          ]
        },
        { category: "精子DNA碎片率", timing: "排精后三天" },
        { category: "乙肝", timing: "随时可以检查" },
        { category: "丙肝", timing: "随时可以检查" },
        { category: "梅毒", timing: "随时可以检查" },
        { category: "艾滋", timing: "随时可以检查" },
        { category: "染色体核型", timing: "报告时间较长，尽早检查" },
        { category: "血型，RH属性", timing: "现在可以检查" }
      ]
    },
    female: {
      title: "女方",
      items: [
        { category: "AMH", timing: "随时可以检查" },
        {
          category: "性激素六项",
          tests: [
            { name: "FSH", timing: "月经开始后第二天" },
            { name: "LH", timing: "月经开始后第二天" },
            { name: "P", timing: "月经开始后第二天" },
            { name: "E2", timing: "月经开始后第二天" },
            { name: "T", timing: "月经开始后第二天" },
            { name: "PRL", timing: "月经开始后第二天" }
          ]
        },
        {
          category: "卵巢阴超",
          tests: [
            { name: "窦卵泡大小", timing: "月经开始后第二天，检查窦卵泡" },
            { name: "窦卵泡数量", timing: "月经开始后第二天，检查窦卵泡" },
            { name: "卵巢大小，位置", timing: "月经开始后第二天，检查窦卵泡" }
          ]
        },
        { category: "甲状腺功能检查", timing: "随时可以检查" },
        { category: "乳腺功能检查", timing: "随时可以检查，可选", note: "如果之前检查有结节，必须复查" },
        { category: "乙肝", timing: "随时可以检查" },
        { category: "丙肝", timing: "随时可以检查" },
        { category: "梅毒", timing: "随时可以检查" },
        { category: "艾滋", timing: "随时可以检查" },
        { category: "染色体核型", timing: "报告时间较长，尽早检查" },
        { category: "血型，RH属性", timing: "随时可以检查" }
      ]
    },
    notes: [
      "提交报告需要完整姓名时间。遮盖报告无效，不能提供审核。",
      "同时提交男女双方体检报告和护照扫描件"
    ]
  };

  // 渲染检查项目
  const renderCheckItem = (item) => {
    if (item.tests) {
      return (
        <div key={item.category} className="mb-4">
          <div className="font-semibold text-gray-800 mb-2">{item.category}</div>
          {item.tests.map((test, index) => (
            <div key={index} className="ml-4 flex justify-between items-center py-1 border-b border-gray-100">
              <span className="text-gray-700">{test.name}</span>
              <span className="text-sm text-gray-500">{test.timing}</span>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div key={item.category} className="flex justify-between items-center py-2 border-b border-gray-100">
          <div>
            <span className="text-gray-800">{item.category}</span>
            {item.note && <div className="text-xs text-orange-600 mt-1">{item.note}</div>}
          </div>
          <span className="text-sm text-gray-500">{item.timing}</span>
        </div>
      );
    }
  };

  return (
    <section id="medicalprocess" className="py-20 relative bg-gradient-to-br from-gray-50 to-white">
      <div className="section-divider mb-16"></div>
      
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            代孕医疗流程
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            专业、规范、透明的代孕全流程服务，从咨询到宝宝诞生的完整医疗保障
          </p>
        </motion.div>
        
        {/* 现代化流程时间线 */}
        <div className="relative">
          {/* 主时间线 */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-200 via-purple-200 to-pink-200 hidden md:block"></div>
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex items-start space-x-6"
              >
                {/* 步骤圆圈和连接线 */}
                <div className="relative flex-shrink-0">
                  {/* 步骤圆圈 */}
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg relative z-10`}>
                    {step.icon}
                  </div>
                  
                  {/* 步骤编号 */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center text-xs font-bold text-gray-600 shadow-sm">
                    {index + 1}
                  </div>
                  
                  {/* 连接箭头 */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 hidden md:block">
                      <ArrowRight className="w-4 h-4 text-gray-300 rotate-90" />
                    </div>
                  )}
                </div>
                
                {/* 内容卡片 */}
                <div className={`flex-1 ${step.bgColor} rounded-2xl p-6 border-2 ${step.borderColor} shadow-sm hover:shadow-lg transition-all duration-300 group`}>
                  {/* 卡片头部 */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {step.description}
                      </p>
                    </div>
                    
                    {/* 时长标签 */}
                    <div className="flex items-center space-x-1 bg-white rounded-full px-3 py-1 shadow-sm">
                      <Clock className="w-3 h-3 text-gray-500" />
                      <span className="text-sm font-medium text-gray-700">{step.duration}</span>
                    </div>
                  </div>
                  
                  {/* 详细步骤 */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">主要环节：</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color}`}></div>
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* 操作按钮 */}
                  {step.hasDetailedChecklist && (
                    <div className="flex justify-end">
                      <button
                        onClick={() => setShowChecklistModal(true)}
                        className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                      >
                        <Info className="w-4 h-4" />
                        <span>查看检查清单</span>
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* 总结信息卡片 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white shadow-xl"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">完整流程周期</h3>
            <p className="text-indigo-100 text-lg">
              从初步咨询到宝宝诞生，整个代孕流程大约需要 <span className="font-bold text-white">15~18个月</span>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <div className="text-3xl font-bold mb-2">3-4个月</div>
              <div className="text-indigo-100">前期准备与调理</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <div className="text-3xl font-bold mb-2">9~12个月</div>
              <div className="text-indigo-100">妊娠监护期</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <div className="text-3xl font-bold mb-2">3~4周</div>
              <div className="text-indigo-100">分娩与交接</div>
            </div>
          </div>
          
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg"
            >
              咨询详细代孕流程
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* 检查项目清单弹窗 */}
      {showChecklistModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowChecklistModal(false)}
        >
          <div 
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 弹窗头部 */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-xl">
              <h3 className="text-2xl font-bold text-gray-800">{checklistData.title}</h3>
              <button
                onClick={() => setShowChecklistModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>
            
            {/* 弹窗内容 */}
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                {/* 男方检查项目 */}
                <div>
                  <h4 className="text-xl font-bold text-blue-600 mb-4 border-b-2 border-blue-200 pb-2">
                    {checklistData.male.title}
                  </h4>
                  <div className="space-y-2">
                    {checklistData.male.items.map((item, index) => renderCheckItem(item))}
                  </div>
                </div>
                
                {/* 女方检查项目 */}
                <div>
                  <h4 className="text-xl font-bold text-pink-600 mb-4 border-b-2 border-pink-200 pb-2">
                    {checklistData.female.title}
                  </h4>
                  <div className="space-y-2">
                    {checklistData.female.items.map((item, index) => renderCheckItem(item))}
                  </div>
                </div>
              </div>
              
              {/* 注意事项 */}
              <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                <h5 className="font-semibold text-gray-800 mb-2">注意事项：</h5>
                <ul className="space-y-1">
                  {checklistData.notes.map((note, index) => (
                    <li key={index} className="text-sm text-gray-700 flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MedicalProcess;
