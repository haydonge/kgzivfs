import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, X } from 'lucide-react';

const StoryModal = ({ isOpen, onClose, story }) => {
  if (!isOpen || !story) return null;

  const storyDetails = {
    1: {
      title: "自卵自精代孕圆梦",
      content: `
        <p class="mb-4">38岁的李女士和丈夫结婚8年，一直渴望拥有自己的孩子。由于李女士的子宫环境不适合怀孕，但卵巢功能良好，他们决定选择自卵自精代孕方案。</p>
        <p class="mb-4">2022年初，他们来到DOC大学诊所。我们的生殖医学团队为李女士进行了全面的检查，确认她的卵子质量良好。通过促排卵治疗，我们成功获取了12个成熟卵子，并与丈夫的精子进行体外受精。</p>
        <p class="mb-4">经过5天的培养，我们获得了5个优质囊胚。在进行了PGS筛查后，选择了最健康的2个胚胎进行冷冻保存。随后，我们为李女士匹配了一位健康的代孕妈妈。</p>
        <p class="mb-4">2023年3月，代孕妈妈成功怀孕，整个孕期由我们的专业团队进行全程监护。2023年12月，代孕妈妈顺利产下一对健康的双胞胎，哥哥2.9公斤，妹妹2.7公斤。</p>
        <p>"虽然不能亲自怀孕有些遗憾，但能拥有自己的孩子就是最大的幸福。感谢DOC诊所专业团队和代孕妈妈的付出！"李女士激动地说。</p>
      `,
      doctor: "克里姆巴耶娃·努尔贾玛尔医生",
      treatment: "自卵自精代孕+胚胎基因筛查"
    },
    2: {
      title: "捐卵自精代孕实现梦想",
      content: `
        <p class="mb-4">42岁的王女士是一位事业有成的职业女性，由于工作繁忙，直到40岁才开始备孕。经过检查发现，她的卵巢功能已经严重衰退，无法获取可用的卵子。</p>
        <p class="mb-4">在DOC大学诊所，我们的专家团队建议王女士采用捐卵自精代孕方案。经过严格筛选，我们为她匹配了一位年轻健康的捐卵者和代孕妈妈。</p>
        <p class="mb-4">2023年初，我们成功获取了捐卵者的15个成熟卵子，与王女士丈夫的精子进行体外受精。经过5天培养，我们获得了4个优质囊胚。</p>
        <p class="mb-4">2023年3月，代孕妈妈成功怀孕。整个孕期，我们的专业团队为代孕妈妈提供了全面的孕期监护。2023年12月，代孕妈妈顺利产下一名健康的男婴，体重3.4公斤。</p>
        <p>"虽然使用了捐卵，但孩子拥有我和丈夫的遗传特征，这让我们感到非常欣慰。感谢DOC诊所的专业团队和代孕妈妈的帮助！"王女士在视频回访时感动地说。</p>
      `,
      doctor: "阿扎特·卡尔米舍夫医生",
      treatment: "捐卵自精代孕+胚胎培养"
    },
    3: {
      title: "跨国代孕圆梦之旅",
      content: `
        <p class="mb-4">36岁的张女士和丈夫常年在海外工作，由于工作压力大，备孕3年未果。在海外多家医院就诊后，他们决定回国寻求帮助。经过多方比较，他们选择了DOC大学诊所。</p>
        <p class="mb-4">我们的国际医疗团队为张女士提供了中英双语服务。检查发现，张女士存在子宫内膜异位症，这导致她无法自然怀孕。考虑到张女士需要长期在海外工作，我们建议她采用跨国代孕方案。</p>
        <p class="mb-4">2023年初，张女士在DOC诊所完成了取卵手术，成功获取了10个优质卵子。这些卵子与丈夫的精子在实验室完成受精后，形成了3个优质胚胎。随后，我们为张女士匹配了一位国内的代孕妈妈。</p>
        <p class="mb-4">2023年3月，代孕妈妈成功怀孕。整个孕期，我们的远程医疗团队通过线上平台为代孕妈妈提供全方位的孕期监护，同时为张女士夫妇提供心理支持和法律咨询。</p>
        <p class="mb-4">2023年12月，代孕妈妈顺利产下一名健康的女婴，体重3.2公斤。张女士夫妇专程回国迎接他们的宝贝女儿。</p>
        <p>"虽然过程复杂，但最终结果让我们觉得一切都是值得的。感谢DOC诊所的专业团队和代孕妈妈的帮助！"张女士在视频回访时感动地说。</p>
      `,
      doctor: "奥尔蒙别科娃·纳尔吉扎医生",
      treatment: "跨国代孕+远程医疗支持"
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
            alt={`吉尔吉斯代孕成功案例详情 - ${story.title}`} 
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
      title: "自卵自精代孕圆梦",
      description: "38岁李女士因子宫环境不适合怀孕，通过自卵自精代孕成功获得双胞胎。",
      image: "https://images.unsplash.com/photo-1518935869927-c6c9462da3b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      age: "38岁",
      attempts: "1次",
      result: "双胞胎"
    },
    {
      id: 2,
      title: "捐卵自精代孕实现梦想",
      description: "42岁王女士因卵巢功能衰退，通过捐卵自精代孕成功获得健康男婴。",
      image: "https://images.unsplash.com/photo-1563191799-2c7e8c185bb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      age: "42岁",
      attempts: "1次",
      result: "成功"
    },
    {
      id: 3,
      title: "跨国代孕圆梦之旅",
      description: "36岁张女士夫妇跨国代孕成功，通过远程医疗服务顺利迎接新生命。",
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
                  alt={`吉尔吉斯代孕成功案例 - ${story.title}`} 
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
