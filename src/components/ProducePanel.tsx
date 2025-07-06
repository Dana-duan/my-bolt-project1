import React from 'react';
import { Leaf, Apple, Carrot, Wheat } from 'lucide-react';
import { getSeasonalProduce } from '../utils/dateUtils';

interface ProducePanelProps {
  currentDate: Date;
}

const ProducePanel: React.FC<ProducePanelProps> = ({ currentDate }) => {
  const seasonalProduce = getSeasonalProduce(currentDate);

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Leaf className="w-5 h-5 text-green-500" />
        当季农产品推荐
      </h3>
      
      <div className="space-y-4">
        {/* Fruits */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            <Apple className="w-4 h-4 text-red-500" />
            水果类
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {seasonalProduce.fruits.map((fruit, index) => (
              <div key={index} className="bg-red-50 text-red-700 px-3 py-2 rounded-lg text-sm">
                {fruit}
              </div>
            ))}
          </div>
        </div>

        {/* Vegetables */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            <Carrot className="w-4 h-4 text-orange-500" />
            蔬菜类
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {seasonalProduce.vegetables.map((vegetable, index) => (
              <div key={index} className="bg-green-50 text-green-700 px-3 py-2 rounded-lg text-sm">
                {vegetable}
              </div>
            ))}
          </div>
        </div>

        {/* Grains */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            <Wheat className="w-4 h-4 text-yellow-500" />
            谷物类
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {seasonalProduce.grains.map((grain, index) => (
              <div key={index} className="bg-yellow-50 text-yellow-700 px-3 py-2 rounded-lg text-sm">
                {grain}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marketing Tips */}
      <div className="mt-6 bg-purple-50 rounded-lg p-4">
        <h4 className="text-sm font-medium text-purple-800 mb-2">营销建议</h4>
        <ul className="text-sm text-purple-700 space-y-1">
          <li>• 提前3-5天准备当季产品</li>
          <li>• 集市日增加备货量30%</li>
          <li>• 关注天气变化调整销售策略</li>
          <li>• 节假日前适当增加库存</li>
        </ul>
      </div>
    </div>
  );
};

export default ProducePanel;