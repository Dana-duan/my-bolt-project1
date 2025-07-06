import React from 'react';
import { Cloud, Sun, CloudRain, Wind, Thermometer } from 'lucide-react';

interface WeatherWidgetProps {
  currentDate: Date;
}

const WeatherWidget: React.FC<WeatherWidgetProps> = ({ currentDate }) => {
  // Mock weather data - in production, you'd fetch from a weather API
  const mockWeather = {
    temperature: 22,
    condition: 'sunny',
    humidity: 65,
    windSpeed: 12,
    forecast: [
      { day: '今天', temp: 22, condition: 'sunny' },
      { day: '明天', temp: 25, condition: 'cloudy' },
      { day: '后天', temp: 19, condition: 'rainy' }
    ]
  };

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'sunny': return <Sun className="w-6 h-6 text-yellow-500" />;
      case 'cloudy': return <Cloud className="w-6 h-6 text-gray-500" />;
      case 'rainy': return <CloudRain className="w-6 h-6 text-blue-500" />;
      default: return <Sun className="w-6 h-6 text-yellow-500" />;
    }
  };

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20 mb-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-800">
        <Thermometer className="w-5 h-5 text-orange-500" />
        天气预报
      </h3>
      
      {/* Current Weather */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {getWeatherIcon(mockWeather.condition)}
            <div>
              <div className="text-2xl font-bold text-gray-800">{mockWeather.temperature}°C</div>
              <div className="text-sm text-gray-600">晴朗</div>
            </div>
          </div>
          <div className="text-right text-sm text-gray-600">
            <div className="flex items-center gap-1 mb-1">
              <Wind className="w-4 h-4" />
              {mockWeather.windSpeed} km/h
            </div>
            <div>湿度 {mockWeather.humidity}%</div>
          </div>
        </div>
      </div>

      {/* 3-day Forecast */}
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-gray-700 mb-2">三天预报</h4>
        {mockWeather.forecast.map((day, index) => (
          <div key={index} className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg">
            <span className="text-sm text-gray-700">{day.day}</span>
            <div className="flex items-center gap-2">
              {getWeatherIcon(day.condition)}
              <span className="text-sm font-medium">{day.temp}°C</span>
            </div>
          </div>
        ))}
      </div>

      {/* Weather Tips */}
      <div className="mt-4 bg-yellow-50 rounded-lg p-3">
        <h4 className="text-sm font-medium text-yellow-800 mb-2">天气提醒</h4>
        <ul className="text-xs text-yellow-700 space-y-1">
          <li>• 晴天适合户外销售，增加摊位展示</li>
          <li>• 雨天准备遮雨设备，调整货物摆放</li>
          <li>• 高温天气注意保鲜，增加冷藏设备</li>
        </ul>
      </div>
    </div>
  );
};

export default WeatherWidget;