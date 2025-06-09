import React from 'react';
import { FaUserMd, FaHeart, FaGlobe, FaShieldAlt, FaBaby, FaHandsHelping, FaFlask, FaUsers } from 'react-icons/fa';

const ServiceAdvantages = () => {
  const advantages = [
    {
      icon: <FaUserMd className="text-4xl text-blue-600 mb-4" />,
      title: "专业医疗团队",
      description: "拥有丰富经验的生殖医学专家，提供个性化治疗方案，确保最佳治疗效果。"
    },
    {
      icon: <FaHeart className="text-4xl text-blue-600 mb-4" />,
      title: "贴心服务体验",
      description: "全程一对一专属服务，从咨询到治疗完成，提供温馨舒适的就医环境。"
    },
    {
      icon: <FaGlobe className="text-4xl text-blue-600 mb-4" />,
      title: "国际化标准",
      description: "采用国际先进的医疗设备和技术标准，与世界顶级生殖中心保持同步。"
    },
    {
      icon: <FaShieldAlt className="text-4xl text-blue-600 mb-4" />,
      title: "合法的代孕法规",
      description: "吉尔吉斯斯坦《家庭法》明确规定代孕合法化，为国际客户提供完善的法律保障和透明的法律程序。"
    },
    {
      icon: <FaUsers className="text-4xl text-blue-600 mb-4" />,
      title: "优选代孕资源",
      description: "严格筛选的优质代母和卵子捐赠者资源，完善的健康检查和心理评估体系，确保最佳匹配。"
    },
    {
      icon: <FaFlask className="text-4xl text-blue-600 mb-4" />,
      title: "高级试管技术",
      description: "采用中国成熟的第三代试管婴儿技术（PGD/PGS），包括胚胎植入前遗传学检测，显著提高成功率。"
    },
    {
      icon: <FaHandsHelping className="text-4xl text-blue-600 mb-4" />,
      title: "专业代理服务",
      description: "专业代理公司提供全方位服务，包括法律咨询、医疗协调、生活安排和跨国事务处理。"
    },
    {
      icon: <FaBaby className="text-4xl text-blue-600 mb-4" />,
      title: "高成功率保障",
      description: "凭借先进技术和丰富经验，我们的成功率位居行业前列，为您的生育梦想保驾护航。"
    }
  ];

  return (
    <section id="serviceadvantages" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            技术服务优势
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            我们致力于为每一位客户提供最专业、最贴心的生殖医疗服务
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {advantage.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAdvantages;
