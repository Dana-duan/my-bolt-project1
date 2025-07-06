import React from 'react';
import { AlertTriangle, ShoppingCart, Calendar } from 'lucide-react';
import { getNextMarketDays, isMarketDay, getLunarDate } from '../utils/dateUtils';

interface MarketReminderProps {
  currentDate: Date;
}

const MarketReminder: React.FC<MarketReminderProps> = ({ currentDate }) => {
  const today = new Date();
  const isTodayMarketDay = isMarketDay(today);
  const nextMarketDays = getNextMarketDays(today, 3);

  if (isTodayMarketDay) {
    return (
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl p-6 mb-8 shadow-xl border border-white/20">
        <div className="flex items-center gap-4">
          <div className="bg-white/20 p-3 rounded-full">
            <ShoppingCart className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-xl font-bold">今天是集市日！</h3>
            <p className="text-green-100 mt-1">记得准备充足的货物，今天是销售的好日子</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl p-6 mb-8 shadow-xl border border-white/20">
      <div className="flex items-center gap-4">
        <div className="bg-white/20 p-3 rounded-full">
          <AlertTriangle className="w-8 h-8" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold">集市提醒</h3>
          <p className="text-blue-100 mt-1">接下来的集市日期：</p>
          <div className="flex gap-4 mt-2">
            {nextMarketDays.map((date, index) => (
              <div key={index} className="bg-white/30 px-3 py-2 rounded-lg text-sm font-medium">
                <div>{date.getMonth() + 1}月{date.getDate()}日</div>
                <div className="text-xs opacity-80">{getLunarDate(date)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketReminder;