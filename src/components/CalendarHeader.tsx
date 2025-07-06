import React from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

interface CalendarHeaderProps {
  currentDate: Date;
  onNavigate: (direction: 'prev' | 'next') => void;
  onToday: () => void;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({ 
  currentDate, 
  onNavigate, 
  onToday 
}) => {
  const monthNames = [
    '一月', '二月', '三月', '四月', '五月', '六月',
    '七月', '八月', '九月', '十月', '十一月', '十二月'
  ];

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  return (
    <div className="flex items-center justify-between mb-6">
      <button 
        onClick={() => onNavigate('prev')}
        className="p-3 rounded-full hover:bg-gray-100 transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>
      
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          {year}年 {monthNames[month]}
        </h2>
        <button 
          onClick={onToday}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm flex items-center gap-2 mx-auto"
        >
          <Calendar className="w-4 h-4" />
          今天
        </button>
      </div>
      
      <button 
        onClick={() => onNavigate('next')}
        className="p-3 rounded-full hover:bg-gray-100 transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>
    </div>
  );
};

export default CalendarHeader;