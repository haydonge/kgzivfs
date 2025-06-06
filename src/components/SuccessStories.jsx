import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, X } from 'lucide-react';

const StoryModal = ({ isOpen, onClose, story }) => {
  if (!isOpen || !story) return null;

  const storyDetails = {
    1: {
      title: "历经三年，终圆梦",
      content: `
        <p class="mb-4">38岁的李女士和丈夫结婚8年，一直渴望拥有自己的孩子。由于输卵管堵塞问题，他们尝试了多次自然受孕都未能成功。在经历了3次失败的试管婴儿尝试后，李女士几乎要放弃希望。</p>
        <p class="mb-4">2022年初，他们通过朋友介绍来到DOC大学诊所。我们的生殖医学团队为李女士制定了个性化的治疗方案，包括激素调节和子宫内膜准备。在第三次尝试中，我们采用了最新的胚胎培养技术，成功培育出两个优质胚胎。</p>
        <p class="mb-4">移植后第14天，李女士的HCG检测结果呈阳性，她和丈夫激动得热泪盈眶。整个孕期，我们的产科团队为她提供了全方位的产前检查和指导。2023年3月，李女士顺利产下一名健康的女婴，体重3.2公斤。</p>
        <p>"感谢DOC诊所的每一位医护人员，是你们让我们实现了做父母的梦想。"李女士在产后回访时动情地说。</p>
      `,
      doctor: "克里姆巴耶娃·努尔贾玛尔医生",
      treatment: "第三代试管婴儿(IVF-ET)"
    },
    2: {
      title: "高龄产妇的奇迹",
      content: `
        <p class="mb-4">42岁的王女士是一位事业有成的职业女性，由于工作繁忙，直到40岁才开始备孕。经过检查发现，她的卵巢功能已经开始下降，自然受孕几率极低。</p>
        <p class="mb-4">在DOC大学诊所，我们的专家团队为王女士制定了针对高龄患者的个性化方案。考虑到她的特殊情况，我们采用了微刺激方案，并结合胚胎冷冻技术，分两次取卵共获得6个卵子。</p>
        <p class="mb-4">经过实验室精心培育，最终获得3个优质胚胎。在第二次移植时，我们移植了两个胚胎，结果都成功着床。王女士怀上了双胞胎！</p>
        <p class="mb-4">整个孕期，我们的产科团队为王女士提供了严密的监护和营养指导。2023年5月，王女士通过剖宫产顺利产下一对健康的龙凤胎，哥哥2.8公斤，妹妹2.6公斤。</p>
        <p>"虽然过程很辛苦，但看到两个可爱的宝宝，一切都值得了。感谢DOC诊所的专家团队！"王女士在出院时激动地说。</p>
      `,
      doctor: "阿扎特·卡尔米舍夫医生",
      treatment: "微刺激IVF+冷冻胚胎移植"
    },
    3: {
      title: "跨国求子之旅",
      content: `
        <p class="mb-4">36岁的张女士和丈夫常年在海外工作，由于工作压力大，备孕3年未果。在海外多家医院就诊后，他们决定回国寻求帮助。经过多方比较，他们选择了DOC大学诊所。</p>
        <p class="mb-4">我们的国际医疗团队为张女士提供了中英双语服务。检查发现，张女士存在子宫内膜异位症，这是导致她不孕的主要原因。我们的专家团队为她制定了手术+试管婴儿的综合治疗方案。</p>
        <p class="mb-4">2023年1月，张女士接受了腹腔镜手术，解决了子宫内膜异位问题。术后3个月，我们开始了试管婴儿治疗。令人欣喜的是，第一次移植就取得了成功。</p>
        <p class="mb-4">考虑到张女士需要返回海外工作，我们的远程医疗团队通过线上平台持续为她提供产前指导和咨询。2024年2月，张女士在海外顺利产下一名健康男婴，体重3.5公斤。</p>
        <p>"虽然我们远在异国他乡，但DOC诊所的医生们始终像家人一样关心着我们。"张女士在视频回访时感动地说。</p>
      `,
      doctor: "奥尔蒙别科娃·纳尔吉扎医生",
      treatment: "腹腔镜手术+试管婴儿(IVF)"
    }
  };

  const detail = storyDetails[story.id];
  if (!detail) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={onClose}>
      <motion.div 
        className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative text-black"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        onClick={e => e.stopPropagation()}
      >
        <button 
          className="absolute top-4 right-4 text-gray-700 hover:text-black"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="p-8">
          <img 
            src={story.image} 
            alt={story.title} 
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          
          <h3 className="text-2xl font-bold text-black mb-4">{detail.title}</h3>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-sm text-gray-700">主治医生</p>
              <p className="font-medium text-black">{detail.doctor}</p>
            </div>
            <div>
              <p className="text-sm text-gray-700">治疗方案</p>
              <p className="font-medium text-black">{detail.treatment}</p>
            </div>
            <div>
              <p className="text-sm text-gray-700">年龄</p>
              <p className="font-medium text-black">{story.age}</p>
            </div>
            <div>
              <p className="text-sm text-gray-700">尝试次数</p>
              <p className="font-medium text-black">{story.attempts}</p>
            </div>
          </div>
          
          <div className="prose max-w-none text-black" dangerouslySetInnerHTML={{ __html: detail.content }} />
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600">* 为保护患者隐私，文中姓名为化名，图片仅供参考。</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const SuccessStories = () => {
  const [selectedStory, setSelectedStory] = useState(null);
  
  const openStory = (story) => {
    setSelectedStory(story);
    document.body.style.overflow = 'hidden';
  };
  
  const closeStory = () => {
    setSelectedStory(null);
    document.body.style.overflow = 'auto';
  };

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
      description: "36岁的张女士常年在海外工作，通过我们的远程医疗服务成功受孕并顺利生产。",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
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
                <button 
                  className="mt-6 w-full py-3 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-medium rounded-lg transition-colors flex items-center justify-center"
                  onClick={() => openStory(story)}
                >
                  <span>查看详情</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <AnimatePresence>
        {selectedStory && (
          <StoryModal 
            isOpen={!!selectedStory} 
            onClose={closeStory} 
            story={selectedStory} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default SuccessStories;
