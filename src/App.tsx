import React, { useState } from 'react';
import { Calendar, ShoppingCart, Leaf, Sun, Moon, AlertTriangle } from 'lucide-react';
import CalendarHeader from './components/CalendarHeader';
import CalendarGrid from './components/CalendarGrid';
import ProducePanel from './components/ProducePanel';
import MarketReminder from './components/MarketReminder';
import MarketingTips from './components/MarketingTips';
import SeasonalRecipes from './components/SeasonalRecipes';

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-blue-600">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="flex items-center justify-center gap-3 mb-4">
            {/* Logo inspired by the circular design */}
            <div className="relative">
              <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full"></div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            <h1 className="text-4xl font-bold text-white">营销日历</h1>
            <Leaf className="text-green-300 w-8 h-8" />
          </div>
          <p className="text-white/80 text-lg mb-4">农产品营销与集市提醒日历</p>
          <div className="text-white/60 text-sm">
            <span className="font-medium">圆丰科技</span> @ 2025
          </div>
        </div>

        {/* Market Reminder Banner */}
        <MarketReminder currentDate={currentDate} />

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Calendar Section */}
          <div className="xl:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <CalendarHeader 
                currentDate={currentDate}
                onNavigate={navigateMonth}
                onToday={goToToday}
              />
              <CalendarGrid currentDate={currentDate} />
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="xl:col-span-2 space-y-6">
            <ProducePanel currentDate={currentDate} />
            <MarketingTips currentDate={currentDate} />
          </div>
        </div>


        {/* Seasonal Recipes Section */}
        <div className="mt-8">
          <SeasonalRecipes currentDate={currentDate} />
        </div>

        {/* Legend */}
        <div className="mt-8 bg-white rounded-2xl shadow-xl p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Sun className="w-5 h-5 text-yellow-500" />
            图例说明
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <span>法定节假日</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span>集市日 (农历2/5/8)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <span>传统节日</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
              <span>二十四节气</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <span>农历初一 (朔日)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
              <span>农历十五 (望日)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;