import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Clock, BookOpen, Download, Globe } from 'lucide-react';

const VisaGuide = () => {
  // 添加状态管理
  const [selectedGuide, setSelectedGuide] = useState(null);
  
  // 吉尔吉斯斯坦签证攻略数据
  const visaGuides = [
    {
      icon: <FileText />,
      title: "电子旅游签证",
      description: "中国公民可在线申请吉尔吉斯斯坦电子签证，无需前往使馆",
      time: "处理时间：15个工作日",
      features: ["可停留60天", "在线申请", "无需面试"],
      detailContent: {
        overview: "吉尔吉斯斯坦为中国公民提供便捷的电子签证服务，可通过官方网站在线申请。",
        requirements: [
          "有效护照（剩余有效期至少6个月）",
          "护照首页扫描件",
          "近期2寸白底彩色照片",
          "往返机票预订单",
          "酒店预订确认单",
          "银行存款证明（不少于1000美元）"
        ],
        process: [
          "访问吉尔吉斯斯坦电子签证官方网站",
          "填写在线申请表格",
          "上传所需文件",
          "支付签证费用（约922元人民币）",
          "等待审核（15个工作日）",
          "下载并打印电子签证"
        ],
        notes: [
          "电子签证有效期为90天，可停留60天",
          "入境时需携带打印版电子签证",
          "建议提前20天申请以确保及时获得签证"
        ]
      }
    },
    {
      icon: <Globe />,
      title: "医疗签证",
      description: "专为医疗旅游者设计的签证类型，提供更长停留期",
      time: "处理时间：3-5个工作日",
      features: ["可停留90天", "可延期", "适合试管婴儿客户"],
      detailContent: {
        overview: "吉尔吉斯斯坦医疗签证专为接受医疗服务的外国公民设计，特别适合试管婴儿治疗客户。",
        advantages: [
          "停留期长达90天，满足完整治疗周期",
          "可根据治疗需要申请延期",
          "审批速度快，通常3-5个工作日",
          "对试管婴儿等辅助生殖技术政策开放",
          "无严格的身份限制，单身女性也可申请"
        ],
        requirements: [
          "医疗机构出具的邀请函",
          "治疗计划和预约确认书",
          "医疗费用支付证明",
          "健康状况证明",
          "有效护照和照片",
          "经济能力证明"
        ],
        medicalPolicy: [
          "试管婴儿技术适用对象无严格身份限制",
          "已婚夫妇、单身女性均可接受治疗",
          "医疗技术先进，费用相对合理",
          "医护人员多数会说俄语和英语",
          "完善的医疗保险制度"
        ]
      }
    },
    {
      icon: <FileText />,
      title: "吉尔吉斯国家概况",
      description: "位于中亚的美丽国家，拥有丰富的自然资源和友好的签证政策",
      time: "地理：中亚山国",
      features: ["首都：比什凯克", "语言：吉尔吉斯语、俄语", "对华友好"],
      detailContent: {
        geography: {
          title: "地理位置",
          content: [
            "位于中亚东北部，面积19.99万平方公里",
            "北部和东北部与哈萨克斯坦毗邻",
            "南部与塔吉克斯坦相连",
            "西南部与乌兹别克斯坦交界",
            "东部和东南部与中国接壤，边界长1096公里",
            "90%领土在海拔1500米以上，平均海拔2750米"
          ]
        },
        population: {
          title: "人口民族",
          content: [
            "总人口约728万（2025年1月）",
            "80多个民族，吉尔吉斯族占77.8%",
            "乌兹别克族占14.2%，俄罗斯族占3.8%",
            "东干族占1.1%，维吾尔族占0.9%",
            "70%以上居民信仰伊斯兰教",
            "吉尔吉斯语为国语，俄语为官方语言"
          ]
        },
        capital: {
          title: "首都比什凯克",
          content: [
            "人口132万（2025年1月）",
            "全国政治、经济、文化、科学中心",
            "主要的交通枢纽",
            "1月平均气温-4℃，7月平均气温26℃",
            "时差比北京时间晚2小时"
          ]
        },
        politics: {
          title: "政治制度",
          content: [
            "政教分离的世俗国家",
            "实行总统制共和政体",
            "现任总统萨德尔·扎帕罗夫",
            "推行民主改革并实行多党制",
            "法律体系建立在现代法制基础上"
          ]
        },
        economy: {
          title: "经济状况",
          content: [
            "2024年GDP约172亿美元，同比增长9.4%",
            "人均GDP约2375美元",
            "主要资源：黄金、锑、钨、锡、汞、铀",
            "锑产量居世界第三位",
            "水电资源在独联体国家中居第三位",
            "与中国贸易关系密切"
          ]
        },
        relations: {
          title: "中吉关系",
          content: [
            "1992年1月5日中吉建交",
            "2013年建立战略伙伴关系",
            "上海合作组织重要成员",
            "'一带一路'重要合作伙伴",
            "在联合国等多边领域互相支持",
            "双边贸易额持续增长"
          ]
        }
      }
    }
  ];

  return (
    <>
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
                    <button 
                      className="flex-1 flex items-center justify-center py-3 bg-white border border-indigo-200 text-indigo-700 rounded-lg hover:bg-indigo-50 transition-colors"
                      onClick={() => setSelectedGuide(guide)}
                    >
                      <BookOpen className="w-5 h-5 mr-2" />
                      <span>阅读详情</span>
                    </button>
                    <button 
                      className="flex-1 flex items-center justify-center py-3 bg-white border border-indigo-200 text-indigo-700 rounded-lg hover:bg-indigo-50 transition-colors"
                      onClick={() => {
                        // 模拟下载
                        const link = document.createElement('a');
                        link.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(`${guide.title}指南\n\n${guide.description}`);
                        link.download = `${guide.title}指南.txt`;
                        link.click();
                      }}
                    >
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
      
      {/* 详情模态框 */}
      {selectedGuide && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setSelectedGuide(null)}
        >
          <div 
            className="bg-white p-6 rounded-lg max-w-4xl w-full mx-4 max-h-96 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-4 text-indigo-700">{selectedGuide.title}</h3>
            
            {selectedGuide.title === "电子旅游签证" && (
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 text-lg">签证概述</h4>
                  <p className="text-gray-600 mb-4">{selectedGuide.detailContent.overview}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-lg">申请材料</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {selectedGuide.detailContent.requirements.map((req, i) => (
                      <li key={i} className="text-gray-600">{req}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-lg">申请流程</h4>
                  <ol className="list-decimal pl-5 space-y-1">
                    {selectedGuide.detailContent.process.map((step, i) => (
                      <li key={i} className="text-gray-600">{step}</li>
                    ))}
                  </ol>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-lg">注意事项</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {selectedGuide.detailContent.notes.map((note, i) => (
                      <li key={i} className="text-gray-600">{note}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            
            {selectedGuide.title === "医疗签证" && (
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 text-lg">签证概述</h4>
                  <p className="text-gray-600 mb-4">{selectedGuide.detailContent.overview}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-lg">签证优势</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {selectedGuide.detailContent.advantages.map((adv, i) => (
                      <li key={i} className="text-gray-600">{adv}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-lg">申请要求</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {selectedGuide.detailContent.requirements.map((req, i) => (
                      <li key={i} className="text-gray-600">{req}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-lg">医疗政策</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {selectedGuide.detailContent.medicalPolicy.map((policy, i) => (
                      <li key={i} className="text-gray-600">{policy}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            
            {selectedGuide.title === "吉尔吉斯国家概况" && (
              <div className="space-y-6">
                {Object.entries(selectedGuide.detailContent).map(([key, section]) => (
                  <div key={key}>
                    <h4 className="font-semibold mb-2 text-lg">{section.title}</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {section.content.map((item, i) => (
                        <li key={i} className="text-gray-600">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
            
            <button 
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg mt-6 hover:bg-indigo-700 transition-colors"
              onClick={() => setSelectedGuide(null)}
            >
              关闭
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default VisaGuide;
