import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const PricePackages = () => {
  const [activeTab, setActiveTab] = useState('ivf');
  
  // 试管婴儿套餐价格
  const ivfPackages = {
    headers: [
      '节点\\金额',
      '二代手术(不含促排)',
      '二代试管(一取一移)',
      '二代无限次(两年内无限次多取多移)',
      '三代手术(不含促排)',
      '三代试管(一取一移)',
      '三代无限次(两年内无限次多取多移)'
    ],
    rows: [
      {
        name: '签约',
        prices: [5000, 5500, 7500, 7000, 7500, 10000]
      },
      {
        name: '取卵',
        prices: [5000, 5500, 7500, 7000, 7500, 10000]
      },
      {
        name: '项目总金额',
        prices: [10000, 11000, 15000, 14000, 15000, 20000]
      }
    ]
  };
  
  // 代孕套餐价格
  const surrogacyPackages = {
    headers: [
      '节点\\金额',
      'D1(纯移植)',
      'D2(自精自卵)',
      'D2N(自精自卵二代+代母)',
      'D3N(自精自卵三代+代母)',
      'D2NL(自精供卵二代+代母)',
      'D3NL(自精供卵三代+代母)'
    ],
    rows: [
      {
        name: '签约',
        prices: [10000, 10000, 13000, 13000, 13000, 13000]
      },
      {
        name: '取卵',
        prices: [0, 10000, 10000, 18000, 13000, 20000]
      },
      {
        name: '移植',
        prices: [17000, 12800, 16800, 18800, 16800, 19800]
      },
      {
        name: '孕16周',
        prices: [10000, 10000, 10000, 10000, 10000, 10000]
      },
      {
        name: '出生3日内',
        prices: [10000, 10000, 10000, 10000, 10000, 10000]
      },
      {
        name: '办理回国护照前',
        prices: [3000, 7000, 7000, 7000, 7000, 7000]
      },
      {
        name: '项目总金额',
        prices: [50000, 59800, 66800, 76800, 69800, 79800]
      }
    ]
  };
  
  // DOC医院 - 胚胎移植和捐卵套餐价格
  const docEmbryoPackages = {
    headers: [
      '安吉儿 海外医疗服务',
      '胚胎转运一次移植',
      '胚胎转运无限移植', 
      '亚裔捐卵包成功',
      '亚裔捐卵指定性别包成功'
    ],
    rows: [
      {
        name: '第一笔 意向金',
        prices: [2000, 2000, 3000, 3000]
      },
      {
        name: '第二笔 确认代孕签约当日',
        prices: [7500, 7500, 15000, 17000]
      },
      {
        name: '第三笔 移植前三天内',
        prices: [7500, 9000, 15000, 17000]
      },
      {
        name: '第四笔 HCG验孕成功',
        prices: [7500, 9000, 10000, 15000]
      },
      {
        name: '第五笔 孕12周',
        prices: [7500, 9000, 10000, 12000]
      },
      {
        name: '第六笔 孕24周',
        prices: [7500, 9000, 9000, 12000]
      },
      {
        name: '第七笔 宝宝出生后三天内',
        prices: [7500, 9000, 10000, 12000]
      },
      {
        name: '项目总金额',
        prices: [47000, 54500, 72000, 88000]
      }
    ]
  };
  
  // DOC医院 - 自卵代孕套餐价格
  const docSelfEggPackages = {
    headers: [
      '安吉儿代孕套餐',
      '自卵两次移植',
      '自卵无限次移植',
      '自卵一次尝试转亚裔捐卵包成功'
    ],
    rows: [
      {
        name: '第一笔 意向金',
        prices: [2000, 2000, 3000]
      },
      {
        name: '第二笔 签约当日',
        prices: [15000, 15000, 15000]
      },
      {
        name: '第三笔 取卵前三天',
        prices: [7500, 7500, 15000]
      },
      {
        name: '第四笔 自卵无胚胎转捐卵',
        prices: [0, 0, 9000]
      },
      {
        name: '第五笔 有胚胎后三天内',
        prices: [5500, 5500, 10000]
      },
      {
        name: '第六笔 孕12周',
        prices: [10000, 10000, 10000]
      },
      {
        name: '第七笔 孕24周',
        prices: [5000, 5000, 10000]
      },
      {
        name: '第八笔 宝宝出生后三天内',
        prices: [10500, 12500, 10000]
      },
      {
        name: '项目总金额',
        prices: [55500, 57500, 82000]
      }
    ]
  };
  
  // 切换标签的处理函数
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  // 显示价格表格
  const renderTable = (packageData) => (
    <div className="mt-6">
      {/* 桌面端表格 */}
      <div className="hidden lg:block overflow-x-auto shadow-lg rounded-xl">
        <table className="w-full text-sm divide-y divide-gray-200 border">
          <thead className="bg-gradient-to-r from-indigo-600 to-indigo-800">
            <tr>
              {packageData.headers.map((header, index) => (
                <th 
                  key={index} 
                  className={`px-4 py-4 text-white font-semibold text-sm text-center ${
                    index === 0 ? 'text-left' : ''
                  }`}
                  dangerouslySetInnerHTML={{__html: header.replace('\\', '<br/>')}}
                />
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {packageData.rows.map((row, rowIndex) => (
              <tr 
                key={rowIndex} 
                className={row.name.includes('总金额') ? 'bg-yellow-100 font-bold' : ''}
              >
                <td className="px-4 py-4 whitespace-nowrap text-gray-800">
                  {row.name}
                </td>
                {row.prices.map((price, priceIndex) => (
                  <td 
                    key={priceIndex} 
                    className="px-4 py-4 whitespace-nowrap text-center text-gray-800"
                  >
                    {price ? `${price} 美元` : '-'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* 移动端卡片布局 */}
      <div className="lg:hidden space-y-4">
        {packageData.headers.slice(1).map((header, headerIndex) => (
          <div key={headerIndex} className="bg-white rounded-lg shadow-md p-4">
            <h4 className="font-bold text-indigo-700 mb-3 text-center">
              {header.replace('\\', ' ')}
            </h4>
            <div className="space-y-2">
              {packageData.rows.map((row, rowIndex) => (
                <div 
                  key={rowIndex} 
                  className={`flex justify-between items-center py-2 ${
                    row.name.includes('总金额') 
                      ? 'bg-yellow-100 font-bold px-3 rounded' 
                      : 'border-b border-gray-100'
                  }`}
                >
                  <span className="text-gray-700">{row.name}</span>
                  <span className="text-gray-800 font-medium">
                    {row.prices[headerIndex] ? `${row.prices[headerIndex]} 美元` : '-'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="prices" className="py-32 relative bg-slate-50">
      <div className="section-divider mb-20"></div>
      
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-indigo-700">
            医疗服务套餐价格
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            唐IVF与DOC医院透明收费标准，全程无隐形消费
          </p>
        </motion.div>
        
        {/* 标签切换 */}
        <div className="flex flex-col sm:flex-row justify-center mb-8 gap-4">
          <button
            className={`px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg font-medium transition ${
              activeTab === 'ivf' 
                ? 'bg-indigo-600 text-white' 
                : 'bg-white text-indigo-600 border border-indigo-200'
            }`}
            onClick={() => handleTabChange('ivf')}
          >
            唐IVF试管婴儿
          </button>
          <button
            className={`px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg font-medium transition ${
              activeTab === 'surrogacy' 
                ? 'bg-indigo-600 text-white' 
                : 'bg-white text-indigo-600 border border-indigo-200'
            }`}
            onClick={() => handleTabChange('surrogacy')}
          >
            唐IVF代孕套餐
          </button>
          <button
            className={`px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg font-medium transition ${
              activeTab === 'doc-embryo' 
                ? 'bg-indigo-600 text-white' 
                : 'bg-white text-indigo-600 border border-indigo-200'
            }`}
            onClick={() => handleTabChange('doc-embryo')}
          >
            DOC胚胎移植
          </button>
          <button
            className={`px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg font-medium transition ${
              activeTab === 'doc-self-egg' 
                ? 'bg-indigo-600 text-white' 
                : 'bg-white text-indigo-600 border border-indigo-200'
            }`}
            onClick={() => handleTabChange('doc-self-egg')}
          >
            DOC自卵代孕
          </button>
        </div>
        
        {/* 价格表格 */}
        {(() => {
          switch(activeTab) {
            case 'ivf':
              return renderTable(ivfPackages);
            case 'surrogacy':
              return renderTable(surrogacyPackages);
            case 'doc-embryo':
              return renderTable(docEmbryoPackages);
            case 'doc-self-egg':
              return renderTable(docSelfEggPackages);
            default:
              return renderTable(ivfPackages);
          }
        })()}
        
        {/* 补充说明 */}
        <div className="mt-10 bg-white p-4 sm:p-6 rounded-lg shadow-md">
          <h3 className="text-lg sm:text-xl font-bold mb-4 text-gray-800">套餐说明</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-600">
            <li>以上价格单位均为美元，可接受人民币、美元等多种货币付款</li>
            <li>套餐价格包含吉尔吉斯斯坦当地医疗费用、住宿及基础翻译服务</li>
            <li>所有套餐均由中国医生亲自操作，确保医疗质量</li>
            <li>代孕套餐包含代孕妈妈招募、筛选、合约等全流程服务</li>
            <li>客户可根据实际需求选择合适的套餐，我们提供定制服务</li>
            <li>DOC医院套餐可根据客户实际情况定制专属服务方案</li>
            <li>价格可能会根据市场变动有所调整，详情请咨询客服</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PricePackages;