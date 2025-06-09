import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Heart, Baby } from 'lucide-react';

const Testimonials = () => {
  // 客户成功案例数据
  const testimonials = [
    {
      id: 1,
      name: "李女士",
      role: "39岁，成功获得健康宝宝",
      content: "经历了多年的不孕困扰，我们几乎失去了希望。通过专业的代孕服务，我们终于迎来了期盼已久的宝宝。整个过程透明、安全，医疗团队非常专业，让我们安心度过了每一个阶段。现在看着健康可爱的宝宝，一切都值得了！",
      rating: 5,
      highlight: "专业透明，圆梦成功"
    },
    {
      id: 2,
      name: "王先生夫妇",
      role: "42岁和40岁，喜获龙凤胎",
      content: "由于身体原因无法自然受孕，我们选择了代孕服务。从匹配代孕妈妈到整个孕期管理，每个环节都有专业团队跟进。代孕妈妈非常配合，医疗监护也很到位。最终我们获得了健康的龙凤胎，感谢这个专业团队让我们圆了父母梦！",
      rating: 5,
      highlight: "全程跟进，双重惊喜"
    },
    {
      id: 3,
      name: "陈女士",
      role: "45岁，高龄成功案例",
      content: "作为高龄产妇，我们对代孕服务有很多顾虑。但这里的专业咨询让我们了解了整个流程，法律保障也很完善。代孕妈妈的健康管理非常严格，定期检查让我们很放心。现在宝宝已经一岁了，非常健康聪明！",
      rating: 5,
      highlight: "高龄无忧，法律保障"
    },
    {
      id: 4,
      name: "张先生",
      role: "单身父亲，实现育儿梦想",
      content: "作为单身男性，我一直希望能有自己的孩子。通过合法的代孕渠道，我实现了这个梦想。整个过程合规透明，从胚胎培育到孕期管理都有专业保障。现在我是一个幸福的单身爸爸，孩子就是我生命中最珍贵的礼物！",
      rating: 5,
      highlight: "单身圆梦，合法合规"
    }
  ];

  // 当前显示的评价索引
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  // 自动切换评价
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 relative bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-400 text-white">
      <div className="section-divider mb-20 bg-gradient-to-r from-blue-400 to-purple-400"></div>
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex justify-center items-center mb-6">
            <Heart className="w-8 h-8 text-pink-300 mr-3" />
            <Baby className="w-10 h-10 text-white" />
            <Heart className="w-8 h-8 text-pink-300 ml-3" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            成功案例见证
          </h2>
          <p className="text-xl text-pink-100 max-w-3xl mx-auto">
            数千个家庭的圆梦之路，见证专业代孕服务的力量
          </p>
          <div className="mt-8 flex justify-center items-center space-x-8 text-pink-100">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">98%</div>
              <div className="text-sm">成功率</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">3000+</div>
              <div className="text-sm">成功案例</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">15年</div>
              <div className="text-sm">专业经验</div>
            </div>
          </div>
        </motion.div>
        
        <div className="max-w-5xl mx-auto relative">
          <div className="relative bg-white/15 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                
                <div className="bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text text-lg font-semibold mb-4">
                  {testimonials[currentTestimonial].highlight}
                </div>
                
                <p className="text-lg md:text-xl italic mb-8 leading-relaxed text-gray-100">
                  "{testimonials[currentTestimonial].content}"
                </p>
                
                <div className="border-t border-white/20 pt-6">
                  <p className="text-xl font-bold text-white">{testimonials[currentTestimonial].name}</p>
                  <p className="text-pink-200 mt-1">{testimonials[currentTestimonial].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center mt-10 space-x-3">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  currentTestimonial === index 
                    ? 'bg-white w-10 shadow-lg' 
                    : 'bg-white/50 w-3 hover:bg-white/70'
                }`}
                aria-label={`查看第${index + 1}个成功案例`}
              />
            ))}
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-white">您也可以成为下一个成功案例</h3>
            <p className="text-pink-100 mb-6">
              专业的医疗团队、完善的法律保障、透明的服务流程，让您的求子之路更加安心
            </p>
            <button 
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              立即咨询专业顾问
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
