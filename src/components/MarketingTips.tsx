import React from 'react';
import { Lightbulb, Target, Users, Megaphone } from 'lucide-react';
import { getSeasonalProduce } from '../utils/dateUtils';

interface MarketingTipsProps {
  currentDate: Date;
}

const MarketingTips: React.FC<MarketingTipsProps> = ({ currentDate }) => {
  const seasonalProduce = getSeasonalProduce(currentDate);
  const month = currentDate.getMonth() + 1;

  const getSeasonalTips = () => {
    if (month >= 3 && month <= 5) {
      return {
        season: '春季',
        tips: [
          '春季新鲜蔬菜上市，强调"新鲜"和"嫩绿"',
          '利用春节后的健康饮食趋势推广绿色蔬菜',
          '草莓等春季水果可以打造"踏青必备"概念',
          '韭菜等春季特色菜品可以突出"春补"功效'
        ],
        color: 'green'
      };
    } else if (month >= 6 && month <= 8) {
      return {
        season: '夏季',
        tips: [
          '夏季水果丰富，主打"解暑"和"清甜"',
          '西瓜、甜瓜等可以推出"消暑套餐"',
          '强调新鲜度，突出"当日采摘"',
          '利用夏季户外活动增多，推广便携包装'
        ],
        color: 'red'
      };
    } else if (month >= 9 && month <= 11) {
      return {
        season: '秋季',
        tips: [
          '秋季丰收，主打"丰收"和"营养储备"',
          '苹果、梨等可以推出"秋季养生"套餐',
          '利用中秋、国庆等节日推出礼品装',
          '强调"应季"和"自然成熟"的概念'
        ],
        color: 'orange'
      };
    } else {
      return {
        season: '冬季',
        tips: [
          '冬季保暖，主打"温补"和"储存"',
          '大白菜、萝卜等可以推出"冬储菜"',
          '利用春节临近推出年货套装',
          '强调"耐储存"和"营养丰富"'
        ],
        color: 'blue'
      };
    }
  };

  const seasonalTips = getSeasonalTips();

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-800">
        <Lightbulb className="w-5 h-5 text-yellow-500" />
        营销策略建议
      </h3>
      
      {/* Seasonal Marketing */}
      <div className={`bg-${seasonalTips.color}-50 rounded-lg p-4 mb-4`}>
        <h4 className={`text-sm font-medium text-${seasonalTips.color}-800 mb-3 flex items-center gap-2`}>
          <Target className="w-4 h-4" />
          {seasonalTips.season}营销重点
        </h4>
        <ul className={`text-sm text-${seasonalTips.color}-700 space-y-2`}>
          {seasonalTips.tips.map((tip, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-xs mt-1">•</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Customer Targeting */}
      <div className="bg-purple-50 rounded-lg p-4 mb-4">
        <h4 className="text-sm font-medium text-purple-800 mb-3 flex items-center gap-2">
          <Users className="w-4 h-4" />
          目标客户分析
        </h4>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="bg-white rounded p-2">
            <div className="font-medium text-gray-800">家庭主妇</div>
            <div className="text-xs text-gray-600">注重性价比和新鲜度</div>
          </div>
          <div className="bg-white rounded p-2">
            <div className="font-medium text-gray-800">年轻白领</div>
            <div className="text-xs text-gray-600">偏好有机和便捷包装</div>
          </div>
          <div className="bg-white rounded p-2">
            <div className="font-medium text-gray-800">老年人群</div>
            <div className="text-xs text-gray-600">重视传统和营养价值</div>
          </div>
          <div className="bg-white rounded p-2">
            <div className="font-medium text-gray-800">餐饮商户</div>
            <div className="text-xs text-gray-600">需要批量和稳定供应</div>
          </div>
        </div>
      </div>

      {/* Promotion Ideas */}
      <div className="bg-pink-50 rounded-lg p-4">
        <h4 className="text-sm font-medium text-pink-800 mb-3 flex items-center gap-2">
          <Megaphone className="w-4 h-4" />
          促销活动建议
        </h4>
        <ul className="text-sm text-pink-700 space-y-1">
          <li>• 集市日推出"买三送一"活动</li>
          <li>• 节假日前推出"节日套餐"</li>
          <li>• 建立会员制度，老客户享受折扣</li>
          <li>• 与周边商户合作，互相推荐</li>
        </ul>
      </div>
    </div>
  );
};

export default MarketingTips;