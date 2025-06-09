import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Phone, Award } from 'lucide-react';

const MedicalTeam = () => {
  // 医院信息
  const hospitalInfo = {
    name: "DOC University Clinic",
    description: "吉尔吉斯斯坦现代医学典范，专注于辅助生殖技术",
    intro: "DOC大学诊所不仅是一家医疗机构，更是希望、健康与高科技的象征，坐落于比什凯克的中心地带。这里是医学与人文关怀交汇之所，患者的健康始终被置于首位。",
    branches: [
      {
        location: "提米里亚泽夫街78号分院",
        features: "面积1600平方米，包括门诊服务、诊断科、日间住院部及DOCLAB实验室、IVF中心"
      },
      {
        location: "乔马尔特·博孔巴耶夫街144号分院",
        features: "面积5000平方米，包括手术区、重症监护室、门诊部、60张床位的住院部、现代化实验室，全天候运行"
      }
    ],
    specialties: [
      "外科（普通外科、化脓外科、整形外科）",
      "泌尿科",
      "妇科（包括不孕不育治疗及试管婴儿）",
      "试管婴儿与辅助生殖中心",
      "耳鼻喉科",
      "心脏病学与内科",
      "创伤与矫形外科",
      "物理治疗与康复",
      "诊断（超声、心电图、超声心动图、X光、DOCLAB实验室）",
      "牙科"
    ],
    ivfCenter: {
      title: "IVF辅助生殖技术中心（试管婴儿）",
      description: "DOC 大学诊所的试管婴儿中心是本机构的骄傲，也是成千上万家庭的福音。这里提供全面的不孕不育诊断与治疗、试管婴儿（IVF）、卵胞浆内单精子注射（ICSI）、辅助生殖手术、孕期管理及激素治疗。该部门由拥有国际经验的产科-妇科医生、辅助生殖专家纳尔吉扎·奥尔蒙别科娃领导。团队成员还包括医学博士候选人、内窥镜外科专家、DOC IVF 中心主任阿扎特·卡尔米舍夫。凭借高度的专业水平与个性化方案，该中心实现了较高的妊娠成功率，并积累了大量成功案例。"
    },
    whyChooseUs: [
      "先进的高端医疗设备",
      "拥有国际经验和荣誉称号的医生",
      "全面、团队协作的治疗方式",
      "为每位患者量身打造的治疗方案",
      "在试管婴儿项目中成果显著",
      "拥有自主的DOCLAB 实验室，可实现快速诊断",
      "提供舒适的就医环境与人性化服务"
    ],
    conclusion: "DOC 大学诊所不仅是一个医疗中心，更是梦想实现之地。它是现代吉尔吉斯医学的典范，融合了科技、人文与卓越成果。在国际展会上，DOC 代表吉尔吉斯斯坦，以进步、关怀和高效的医疗体系赢得广泛认可。"
  };

  // 医疗团队数据 - DOC University Clinic 医生团队
  const teamMembers = [
    {
      name: "克里姆巴耶娃·努尔贾玛尔·卡奇科诺夫娜",
      title: "妇科医生 生殖专家",
      specialty: "妇科内分泌、不孕症治疗、辅助生殖技术",
      experience: "30年",
      avatar: "https://photo.171006.xyz/VLkkpOMzPE.png",
      achievements: "吉尔吉斯共和国卫生杰出工作者",
      education: [
        "1983–1991：吉尔吉斯国立医学院（КГМИ），专业为'临床医学'",
        "1991–1992：在第1国家医院完成妇产科学实习，优异毕业",
        "1996：妇科内分泌课程",
        "1999–2000：家庭医学进修课程"
      ],
      training: [
        "2012：俄罗斯莫斯科，《现代不孕症治疗方法》课程",
        "2013：哈萨克斯坦阿拉木图，生殖医学课程《现代不孕症治疗方法与辅助生殖技术》",
        "2015：意大利米兰，生殖医学课程",
        "2015：俄罗斯索契，生殖医学课程",
        "2021：阿拉木图，MАР《生殖医学高级课程》",
        "2023：宫腔镜检查与子宫腔内手术课程",
        "2024：俄罗斯叶卡捷琳堡，超声诊断课程"
      ],
      experienceList: [
        "1992–1994：巴雷克奇市医院，妇产科医生",
        "1992–1994：巴雷克奇市妇产医院，妇产科医生",
        "1994–2023：比什凯克市第1家庭医疗中心，妇科内分泌医生",
        "2023年2月至今：DOC Clinic，担任妇科内分泌医生及生殖科医生"
      ],
      languages: "柯尔克孜语（母语），俄语（熟练）",
      qualities: ["守时", "善于沟通", "有责任心", "要求严格", "团队合作能力强"]
    },
    {
      name: "阿扎特·卡尔米舍夫",
      title: "医学科学候选人",
      specialty: "妇科手术、美容妇科、DOC IVF中心主任",
      experience: "20年",
      avatar: "https://photo.171006.xyz/fQGlUhIwws.png",
      achievements: "'优秀医疗人员'奖获得者，'吉尔吉斯共和国杰出医生'荣誉称号",
      skills: ["产科", "妇科", "妇科手术", "美容妇科"],
      experienceList: [
        "DOC IVF 中心主任 | 2024年至今",
        "吉尔吉斯斯坦生殖医学专家协会主席 | 2023年至今",
        "吉尔吉斯国立医科大学妇产科系高级研究员 | 2023年至今",
        "DOC 大学诊所首席医生 | 2021年至今",
        "吉尔吉斯国家人类生殖中心治疗部副主任 | 2019–2021",
        "国家妇幼健康中心手术产科部门主任 | 2012–2019"
      ],
      education: [
        "吉尔吉斯国家医学进修学院 急救服务妇产科住院医师 | 2005–2007",
        "吉尔吉斯国立医科大学 高等医学教育 | 1998–2004"
      ],
      training: [
        "欧洲妇科内镜协会（法国）2024",
        "'无国界妇科'大会演讲者（哈萨克斯坦）2024",
        "'无国界妇科'大会演讲者（乌兹别克斯坦）2023",
        "'无国界妇科'大会演讲者（阿塞拜疆）2023"
      ]
    },
    {
      name: "奥尔蒙别科娃·纳尔吉扎·奥尔蒙别科夫娜",
      title: "产科医生-妇科医生，生殖专家",
      specialty: "高危妊娠管理、不孕不育治疗、体外受精",
      experience: "15年",
      avatar: "https://photo.171006.xyz/oFOO1D3rFK.png",
      achievements: "一级医师资格，'年度最佳人物'奖，比什凯克市市长办公室'荣誉证书'获得者",
      specialties: [
        "高危妊娠管理",
        "内窥镜及微创妇科手术",
        "不孕不育治疗与排卵诱导",
        "体外受精（IVF）",
        "宫腔内人工授精（IUI）",
        "宫腔镜电切术",
        "妇科腹腔镜手术"
      ],
      experienceList: [
        "DOC 诊所 产科医生-妇科医生 | 2023年至今",
        "国家妇幼健康中心 产科部门主任 | 2018–2021",
        "国家妇幼健康中心 急诊服务医师 | 2013–2018",
        "国际医科大学 讲师 | 2021–2023"
      ],
      education: [
        "国家妇幼健康中心 妇产科临床住院医师 | 2011–2013",
        "吉尔吉斯国立医科大学 医学博士（儿科方向） | 2005–2011"
      ],
      languages: "柯尔克孜语（母语）、俄语（流利）、英语（日常交流）"
    },
    {
      name: "铁木尔别科夫·贾林·铁木尔别科维奇",
      title: "IVF实验室主任",
      specialty: "胚胎学医生，组织学与胚胎学专家",
      experience: "5年",
      avatar: "https://photo.171006.xyz/微信截图_20250523131720.webp",      achievements: "",
      skills: [
        "生物样本质量评估",
        "冷冻保存",
        "胚胎活检",
        "辅助孵化技术",
        "胚胎发育监测与研究"
      ],
      experienceList: [
        "DOC IVF生殖中心 IVF实验室主任 | 2024年至今",
        "哈萨克斯坦IRM生殖中心 胚胎学医生 | 2020–2024",
        "吉尔吉斯国家人类生殖科学中心 胚胎学医生 | 2019–2020"
      ],
      education: [
        "伊斯坦布尔大学医学院 组织学与胚胎学 博士"
      ],
      training: [
        "2024年7月：临床胚胎学基础、辅助生殖技术精子选择技术",
        "2024年4月：GeneXpert系统操作培训（迪拜）",
        "2023年10月：《生殖医学中的现代方法与策略》研修",
        "2022年5月：临床胚胎学基础与辅助生殖技术培训"
      ],
      languages: "吉尔吉斯语（母语）、俄语、土耳其语、英语（流利）"
    }
  ];

  return (
    <section id="team" className="py-32 relative bg-slate-50">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-20"></div>
      
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-indigo-700">
            医院与医疗团队
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            我们的专家团队与先进设施，为您的健康保驾护航
          </p>
        </motion.div>

        {/* DOC University Clinic 医院介绍 */}
        <div className="bg-slate-50 rounded-2xl p-8 mb-16 shadow-lg">
          <div className="flex flex-col items-center mb-4">
            <img src="https://photo.171006.xyz/Лого-DOC-university-clinic.webp" alt="吉尔吉斯代孕合作医院DOC大学诊所LOGO" className="h-24" />
            <p className="text-lg font-semibold text-indigo-700 mb-2">--------------------- </p>
            <h3 className="text-2xl font-bold text-indigo-800 mb-2">   DOC University Clinic</h3>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-1 justify-center mb-8">
            {[
              {
                src: "https://photo.171006.xyz/微信截图_20250429111356.webp",
                alt: "吉尔吉斯代孕合作医院DOC医院照片1"
              },
              {
                src: "https://photo.171006.xyz/微信图片_20250304135006.webp",
                alt: "吉尔吉斯代孕合作医院DOC医院照片2"
              },
              {
                src: "https://photo.171006.xyz/微信截图_20250429111356.webp",
                alt: "吉尔吉斯代孕合作医院DOC医院照片3"
              }
            ].map((img, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl h-40 flex items-center"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="object-cover w-full h-full rounded-2xl"
                />
              </div>
            ))}
          </div>
          {/* 医院简介 */}
          <div className="text-center mb-8">
            <p className="text-lg font-semibold text-indigo-700">吉尔吉斯斯坦现代医学典范，专注于辅助生殖技术</p>
            <p className="text-base text-gray-700 mt-2">DOC大学诊所不仅是一家医疗机构，更是希望、健康与高科技的象征，坐落于比什凯克的中心地带。这里是医学与人文关怀交汇之所，患者的健康始终被置于首位。</p>
          </div>

          {/* grid分区块展示 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* 分院信息 */}
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col">
              <h4 className="font-bold text-indigo-700 mb-2">分院信息</h4>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li><span className="font-semibold">提米里亚泽夫街78号分院</span>：面积1600平方米，包括门诊服务、诊断科、日间住院部及DOCLAB实验室、IVF中心</li>
                <li><span className="font-semibold">乔马尔特·博孔巴耶夫街144号分院</span>：面积5000平方米，包括手术区、重症监护室、门诊部、60张床位的住院部、现代化实验室，全天候运行</li>
              </ul>
            </div>
            {/* 专科特色 */}
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col">
              <h4 className="font-bold text-indigo-700 mb-2">专科特色</h4>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>外科（普通外科、化脓外科、整形外科）</li>
                <li>泌尿科</li>
                <li>妇科（包括不孕不育治疗及试管婴儿）</li>
                <li>试管婴儿与辅助生殖中心</li>
                <li>耳鼻喉科</li>
                <li>心脏病学与内科</li>
                <li>创伤与矫形外科</li>
                <li>物理治疗与康复</li>
                <li>诊断（超声、心电图、超声心动图、X光、DOCLAB实验室）</li>
                <li>牙科</li>
              </ul>
            </div>
            {/* IVF中心介绍（横跨两列） */}
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col md:col-span-2">
              <h4 className="font-bold text-indigo-700 mb-2">IVF辅助生殖技术中心（试管婴儿）</h4>
              <p className="text-gray-700">DOC 大学诊所的试管婴儿中心是本机构的骄傲，也是成千上万家庭的福音。这里提供全面的不孕不育诊断与治疗、试管婴儿（IVF）、卵胞浆内单精子注射（ICSI）、辅助生殖手术、孕期管理及激素治疗。该部门由拥有国际经验的产科-妇科医生、辅助生殖专家纳尔吉扎·奥尔蒙别科娃领导。团队成员还包括医学博士候选人、内窥镜外科专家、DOC IVF 中心主任阿扎特·卡尔米舍夫。凭借高度的专业水平与个性化方案，该中心实现了较高的妊娠成功率，并积累了大量成功案例。</p>
            </div>
            {/* 为什么选择我们（横跨两列） */}
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col md:col-span-2">
              <h4 className="font-bold text-indigo-700 mb-2">为什么选择我们？</h4>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>先进的高端医疗设备</li>
                <li>拥有国际经验和荣誉称号的医生</li>
                <li>全面、团队协作的治疗方式</li>
                <li>为每位患者量身打造的治疗方案</li>
                <li>在试管婴儿项目中成果显著</li>
                <li>拥有自主的DOCLAB 实验室，可实现快速诊断</li>
                <li>提供舒适的就医环境与人性化服务</li>
              </ul>
            </div>
          </div>
          {/* 结尾标语 */}
          <p className="text-indigo-900 font-semibold text-center mt-4">DOC 大学诊所不仅是一个医疗中心，更是梦想实现之地。它是现代吉尔吉斯医学的典范，融合了科技、人文与卓越成果。在国际展会上，DOC 代表吉尔吉斯斯坦，以进步、关怀和高效的医疗体系赢得广泛认可。</p>
        </div>
        {/* 唐IVF Center 医院介绍 */}
        <div className="bg-slate-50 rounded-2xl p-8 mb-16 shadow-lg">
          <h3 className="text-2xl font-bold text-red-700 mb-4 flex items-center justify-center">
            <img src="https://photo.171006.xyz/微信图片_20250522093113.png" alt="吉尔吉斯代孕合作医院唐IVF Center LOGO" className="h-10 mr-4" />
            唐IVF Center
          </h3>
          {/* 图片区域 */}
          <div className="grid grid-cols-2 gap-2 mb-8">
            {[
              {
                src: "https://photo.171006.xyz/chrome_yfJWvPSK4R.png",
                alt: "吉尔吉斯代孕合作医院唐IVF医院照片1"
              },
              {
                src: "https://photo.171006.xyz/chrome_B7N0CJG9Kg.png",
                alt: "吉尔吉斯代孕合作医院唐IVF医院照片2"
              }
            ].map((img, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl h-40 flex items-center"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="object-cover w-full h-full rounded-2xl"
                />
              </div>
            ))}
          </div>
          {/* 现代化分区块展示 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* 简介 */}
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col md:col-span-2">
              <p className="text-lg font-semibold text-red-700 mb-2">中国辅助生殖新典范，专注高端IVF技术与国际化服务</p>
              <p className="text-base text-gray-700">唐IVF Center 坐落于中国某大都市核心地段，是一家融合前沿科技与人文关怀的现代化辅助生殖专科医院。医院配备国际一流的胚胎实验室与IVF手术室，致力于为全球患者提供精准、安全、高成功率的辅助生殖解决方案。</p>
            </div>
            {/* 核心特色 */}
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col">
              <h4 className="font-bold text-red-700 mb-2">核心特色</h4>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>国际认证胚胎实验室与独立IVF手术区</li>
                <li>中英双语医疗团队，服务全球患者</li>
                <li>专属一对生殖Advisor，全程陪护</li>
                <li>高龄、反复失败及特殊病例专属绿色通道</li>
                <li>远程会诊与全球随访服务</li>
              </ul>
            </div>
            {/* 为什么选择唐IVF Center */}
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col">
              <h4 className="font-bold text-red-700 mb-2">为什么选择唐IVF Center？</h4>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>采用全球领先的辅助生殖技术与设备</li>
                <li>专家团队均有丰富国际经验与认证</li>
                <li>注重患者隐私与心理关怀</li>
                <li>全流程数字化管理，提升就医体验</li>
                <li>多学科协作，个性化定制治疗方案</li>
              </ul>
            </div>
            {/* 中心介绍（横跨两列） */}
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col md:col-span-2">
              <h4 className="font-bold text-red-700 mb-2">中心愿景</h4>
              <p className="text-gray-700">唐IVF Center，致力于让每一个家庭都能拥有属于自己的新生命。未来，我们将不断创新，成为亚洲辅助生殖领域的引领者。</p>
            </div>
          </div>
        </div>
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
                  alt={`吉尔吉斯代孕医疗团队 - ${member.name}`} 
                  className="w-full h-64 object-cover transition-transform duration-700 hover:scale-110" 
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=6366f1&color=fff&size=256`;
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-white/80">{member.title}</p>
                </div>
              </div>
              <div className="p-6 text-left">
                <div className="mb-4 pb-4 border-b border-gray-100">
                  <p className="text-gray-800 font-medium mb-2">{member.title}</p>
                  <p className="text-gray-700 text-sm">{member.specialty}</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 ml-2">{member.experience}临床经验</span>
                  </div>
                  
                  {member.achievements && (
                    <div className="flex items-start">
                      <Award className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm ml-2">{member.achievements}</span>
                    </div>
                  )}
                  
                  {member.languages && (
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                      </svg>
                      <span className="text-gray-600 text-sm ml-2">{member.languages}</span>
                    </div>
                  )}
                </div>
                
                <div className="mt-6 space-y-3">
                  <button 
                    className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
                    onClick={() => {
                      // 滚动到联系表单
                      const contactForm = document.getElementById('contact');
                      if (contactForm) {
                        contactForm.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    立即预约
                  </button>
                  <button 
                    className="w-full py-2.5 px-4 border border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-medium rounded-lg transition-colors"
                    onClick={() => {
                      // 这里可以添加查看详情的逻辑
                      const modal = document.createElement('div');
                      modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50';
                      modal.innerHTML = `
                        <div class="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 relative">
                          <button class="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onclick="this.parentElement.parentElement.remove()">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                          </button>
                          <h3 class="text-2xl font-bold text-gray-800 mb-4">${member.name}医生简介</h3>
                          <div class="space-y-6">
                            ${member.education ? `
                              <div>
                                <h4 class="text-lg font-semibold text-gray-800 mb-2">教育背景</h4>
                                <ul class="space-y-2 text-gray-700">
                                  ${member.education.map(item => `<li class="flex"><span class="mr-2">•</span> ${item}</li>`).join('')}
                                </ul>
                              </div>
                            ` : ''}
                            ${member.training ? `
                              <div>
                                <h4 class="text-lg font-semibold text-gray-800 mb-2">培训经历</h4>
                                <ul class="space-y-2 text-gray-700">
                                  ${member.training.map(item => `<li class="flex"><span class="mr-2">•</span> ${item}</li>`).join('')}
                                </ul>
                              </div>
                            ` : ''}
                            ${member.experienceList ? `
                              <div>
                                <h4 class="text-lg font-semibold text-gray-800 mb-2">工作经历</h4>
                                <ul class="space-y-2 text-gray-700">
                                  ${member.experienceList.map(item => `<li class="flex"><span class="mr-2">•</span> ${item}</li>`).join('')}
                                </ul>
                              </div>
                            ` : ''}
                            ${member.specialties ? `
                              <div>
                                <h4 class="text-lg font-semibold text-gray-800 mb-2">专业领域</h4>
                                <ul class="grid grid-cols-1 md:grid-cols-2 gap-2">
                                  ${member.specialties.map(item => `<li class="flex text-gray-700"><span class="text-indigo-500 mr-2">•</span> ${item}</li>`).join('')}
                                </ul>
                              </div>
                            ` : ''}
                          </div>
                        </div>
                      `;
                      document.body.appendChild(modal);
                    }}
                  >
                    查看详细资料
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MedicalTeam;
