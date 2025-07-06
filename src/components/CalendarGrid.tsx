import React from 'react';
import DayCell from './DayCell';

interface CalendarGridProps {
  currentDate: Date;
}

const CalendarGrid: React.FC<CalendarGridProps> = ({ currentDate }) => {
  const weekDays = ['日', '一', '二', '三', '四', '五', '六'];
  
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  
  // Get first day of month and number of days
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDayOfWeek = firstDay.getDay();
  
  // Create array of dates for the calendar
  const calendarDays = [];
  
  // Add empty cells for days before the month starts
  for (let i = 0; i < startingDayOfWeek; i++) {
    calendarDays.push(null);
  }
  
  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(new Date(year, month, day));
  }

  return (
    <div className="grid grid-cols-7 gap-1">
      {/* Week day headers */}
      {weekDays.map(day => (
        <div key={day} className="h-10 flex items-center justify-center font-semibold text-gray-700 bg-gray-100 rounded-lg border border-gray-200">
          {day}
        </div>
      ))}
      
      {/* Calendar days */}
      {calendarDays.map((date, index) => (
        <DayCell key={index} date={date} />
      ))}
    </div>
  );
};

export default CalendarGrid;