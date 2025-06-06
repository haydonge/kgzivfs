import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const MedicalTeam = () => {
  // 医疗团队数据 - 全部是中国医生
  const teamMembers = [
    {
      name: "张教授",
      title: "生殖医学博士",
      specialty: "试管婴儿、代孕技术",
      experience: "20年",
      avatar: "https://randomuser.me/api/portraits/men/52.jpg"
    },
    {
      name: "李主任",
      title: "胎胶学专家",
      specialty: "囊胎培养、第三代试管",
      experience: "15年",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "王主任",
      title: "妇产科专家",
      specialty: "低刺激方案、不孕诊疗",
      experience: "18年",
      avatar: "https://randomuser.me/api/portraits/women/79.jpg"
    },
    {
      name: "刘主任",
      title: "生殖内分泌专家",
      specialty: "不孕评估、代孕管理",
      experience: "12年",
      avatar: "https://randomuser.me/api/portraits/men/92.jpg"
    }
  ];

  return (
    <section id="team" className="py-32 relative bg-slate-50">
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
            中国医生团队
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            我们的医疗团队全部由中国资深医生组成，在吉尔吉斯斯坦为您提供全程中文服务
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={member.avatar} 
                  alt={member.name} 
                  className="w-full h-64 object-cover transition-transform duration-700 hover:scale-110" 
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-white/80">{member.title}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4 pb-4 border-b border-gray-100">
                  <p className="text-gray-800"><span className="font-semibold">专长：</span> {member.specialty}</p>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Clock className="w-5 h-5 text-indigo-600" />
                  <span className="text-gray-600">{member.experience}临床经验</span>
                </div>
                <button className="mt-6 w-full py-3 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-medium rounded-lg transition-colors">
                  预约咨询
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MedicalTeam;
