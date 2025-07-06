import React from 'react';
import { ShoppingCart, Star, Flower, Moon, Sun } from 'lucide-react';
import { getLunarDate, isHoliday, isMarketDay, getSolarTerm, getWorkdayInfo, isLunarSpecialDate } from '../utils/dateUtils';

interface DayCellProps {
  date: Date | null;
}

const DayCell: React.FC<DayCellProps> = ({ date }) => {
  if (!date) {
    return <div className="h-24 border border-gray-100 rounded-lg"></div>;
  }

  const today = new Date();
  const isToday = date.toDateString() === today.toDateString();
  const lunarDate = getLunarDate(date);
  const holiday = isHoliday(date);
  const marketDay = isMarketDay(date);
  const solarTerm = getSolarTerm(date);
  const workdayInfo = getWorkdayInfo(date);
  const lunarSpecial = isLunarSpecialDate(date);

  return (
    <div className={`h-36 border border-gray-200 rounded-lg p-2 relative hover:bg-gray-50 transition-colors ${
      isToday ? 'bg-blue-100 border-blue-300' : 
      holiday?.type === 'legal' ? 'bg-red-50' :
      !workdayInfo.isWorkday ? 'bg-gray-50' : 'bg-white'
    }`}>
      {/* Solar date */}
      <div className={`text-lg font-semibold ${
        isToday ? 'text-blue-800' : 
        holiday?.type === 'legal' ? 'text-red-600' :
        !workdayInfo.isWorkday ? 'text-gray-500' : 'text-gray-800'
      }`}>
        {date.getDate()}
      </div>
      
      {/* Lunar date */}
      <div className={`text-xs ${
        lunarSpecial.type ? 'text-yellow-600 font-bold' : 'text-gray-500'
      }`}>
        {lunarDate}
      </div>
      
      {/* Work day indicator */}
      {workdayInfo.isAdjusted && (
        <div className="text-xs text-orange-600 font-medium">
          {workdayInfo.isWorkday ? '补班' : '调休'}
        </div>
      )}
      
      {/* Indicators */}
      <div className="absolute top-1 right-1 flex flex-col gap-1">
        {holiday && (
          <div className={`w-2 h-2 rounded-full ${holiday.type === 'legal' ? 'bg-red-500' : 'bg-blue-500'}`}></div>
        )}
        {marketDay && (
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
        )}
        {solarTerm && (
          <div className="w-2 h-2 rounded-full bg-purple-500"></div>
        )}
        {lunarSpecial.type && (
          <div className={`w-2 h-2 rounded-full ${
            lunarSpecial.type === 'newMoon' ? 'bg-yellow-500' : 'bg-orange-500'
          }`}></div>
        )}
      </div>
      
      {/* Lunar special date indicator */}
      {lunarSpecial.type && (
        <div className="absolute bottom-1 left-1">
          {lunarSpecial.type === 'newMoon' ? (
            <Moon className="w-3 h-3 text-yellow-600" />
          ) : (
            <Sun className="w-3 h-3 text-orange-600" />
          )}
        </div>
      )}
      
      {/* Market day indicator */}
      {marketDay && (
        <div className="absolute bottom-1 right-1">
          <ShoppingCart className="w-3 h-3 text-green-600" />
        </div>
      )}
      
      {/* Holiday name */}
      {holiday && (
        <div className={`text-xs font-medium truncate ${
          holiday.type === 'legal' ? 'text-red-600' : 'text-blue-600'
        }`} title={holiday.name}>
          {holiday.name}
        </div>
      )}
      
      {/* Solar term */}
      {solarTerm && (
        <div className="text-xs text-purple-600 font-medium truncate mt-1" title={solarTerm}>
          {solarTerm}
        </div>
      )}
      
      {/* Lunar special date name */}
      {lunarSpecial.type && !holiday && !solarTerm && (
        <div className={`text-xs font-bold truncate mt-1 ${
          lunarSpecial.type === 'newMoon' ? 'text-yellow-600' : 'text-orange-600'
        }`} title={lunarSpecial.name}>
          {lunarSpecial.name}
        </div>
      )}
      
      {/* Market day text */}
      {marketDay && !holiday && !solarTerm && !lunarSpecial.type && (
        <div className="text-xs text-green-600 font-medium truncate">
          集市日
        </div>
      )}
    </div>
  );
};

export default DayCell;