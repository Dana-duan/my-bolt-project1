import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, BarChart3 } from 'lucide-react';

interface PriceTrackerProps {
  currentDate: Date;
}

const PriceTracker: React.FC<PriceTrackerProps> = ({ currentDate }) => {
  // Mock price data - in production, you'd fetch from market price APIs
  const priceData = [
    { name: '苹果', price: 8.5, change: 0.5, trend: 'up', unit: '元/斤' },
    { name: '白菜', price: 2.3, change: -0.2, trend: 'down', unit: '元/斤' },
    { name: '土豆', price: 3.8, change: 0.1, trend: 'up', unit: '元/斤' },
    { name: '胡萝卜', price: 4.2, change: 0.0, trend: 'stable', unit: '元/斤' },
    { name: '大米', price: 5.6, change: 0.3, trend: 'up', unit: '元/斤' },
    { name: '玉米', price: 2.8, change: -0.1, trend: 'down', unit: '元/斤' }
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'down': return <TrendingDown className="w-4 h-4 text-red-500" />;
      default: return <BarChart3 className="w-4 h-4 text-gray-500" />;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up': return 'text-green-600';
      case 'down': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20 mb-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-800">
        <DollarSign className="w-5 h-5 text-green-500" />
        市场价格追踪
      </h3>
      
      <div className="space-y-3">
        {priceData.map((item, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div className="flex items-center gap-3">
              <div className="text-sm font-medium text-gray-800">{item.name}</div>
              <div className="text-xs text-gray-500">{item.unit}</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-lg font-bold text-gray-800">¥{item.price}</div>
              <div className={`flex items-center gap-1 text-sm ${getTrendColor(item.trend)}`}>
                {getTrendIcon(item.trend)}
                <span>{item.change > 0 ? '+' : ''}{item.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Price Analysis */}
      <div className="mt-4 bg-blue-50 rounded-lg p-3">
        <h4 className="text-sm font-medium text-blue-800 mb-2">价格分析</h4>
        <ul className="text-xs text-blue-700 space-y-1">
          <li>• 苹果价格上涨，建议增加库存</li>
          <li>• 白菜价格下跌，可适当降价促销</li>
          <li>• 大米需求稳定，价格持续上涨</li>
        </ul>
      </div>
    </div>
  );
};

export default PriceTracker;