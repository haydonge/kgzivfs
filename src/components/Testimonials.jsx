import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
  // 用户评价数据
  const testimonials = [
    {
      id: 1,
      name: "刘女士",
      role: "35岁，成功怀孕",
      content: "在这里的整个IVF过程非常顺利，医护团队专业又贴心。他们详细解答了我所有的问题，让我安心度过了整个治疗过程。现在我已经怀孕4个月了，非常感谢他们的帮助！",
      rating: 5
    },
    {
      id: 2,
      name: "张先生和张女士",
      role: "38岁和36岁，双胞胎父母",
      content: "经过多年不孕困扰，我们几乎要放弃了。但来到这里后，专业医生给了我们全新希望。现在我们有了可爱的双胞胎女儿，这一切对我们来说就像梦一样！",
      rating: 5
    },
    {
      id: 3,
      name: "王女士",
      role: "42岁，成功生育",
      content: "因为年龄原因，我们担心可能无法成功受孕。但这里的医生制定了个性化方案，让我们战胜了难题。护理团队的细心照料也让整个过程变得轻松很多。",
      rating: 4
    }
  ];

  // 当前显示的评价索引
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  // 自动切换评价
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 relative bg-indigo-700 text-white">
      <div className="section-divider mb-20 bg-indigo-700"></div>
      
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            用户真实评价
          </h2>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            听听我们的客户如何评价我们的服务
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-xl md:text-2xl italic mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial].content}"
                </p>
                <div>
                  <p className="text-lg font-bold">{testimonials[currentTestimonial].name}</p>
                  <p className="text-indigo-200">{testimonials[currentTestimonial].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center mt-10 space-x-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${currentTestimonial === index ? 'bg-white w-8' : 'bg-white/50'}`}
                aria-label={`查看第${index + 1}个评价`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
