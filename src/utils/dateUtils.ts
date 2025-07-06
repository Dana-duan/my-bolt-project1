// 2025年农历月份天数和对应的公历日期
const lunarCalendar2025 = {
  // 农历新年：2025年1月29日（农历正月初一）
  newYear: new Date(2025, 0, 29),
  
  // 2025年农历各月天数
  monthDays: [
    29, // 正月 (1月29日-2月26日)
    30, // 二月 (2月27日-3月28日)
    29, // 三月 (3月29日-4月26日)
    30, // 四月 (4月27日-5月26日)
    29, // 五月 (5月27日-6月24日)
    30, // 六月 (6月25日-7月24日)
    29, // 七月 (7月25日-8月22日)
    30, // 八月 (8月23日-9月21日)
    29, // 九月 (9月22日-10月20日)
    30, // 十月 (10月21日-11月19日)
    29, // 十一月 (11月20日-12月18日)
    30  // 腊月 (12月19日-2026年1月16日)
  ],
  
  // 关键日期对照
  keyDates: [
    { solar: new Date(2025, 0, 29), lunar: { month: 1, day: 1 } }, // 春节
    { solar: new Date(2025, 1, 12), lunar: { month: 1, day: 15 } }, // 元宵节
    { solar: new Date(2025, 4, 31), lunar: { month: 5, day: 5 } },  // 端午节
    { solar: new Date(2025, 6, 5), lunar: { month: 6, day: 11 } },  // 您提供的准确日期
    { solar: new Date(2025, 7, 29), lunar: { month: 7, day: 7 } },  // 七夕节
    { solar: new Date(2025, 9, 6), lunar: { month: 8, day: 15 } },  // 中秋节
    { solar: new Date(2025, 9, 29), lunar: { month: 9, day: 9 } }   // 重阳节
  ]
};

// Lunar calendar conversion
export function getLunarDate(date: Date): string {
  const lunarMonths = [
    '正月', '二月', '三月', '四月', '五月', '六月',
    '七月', '八月', '九月', '十月', '十一月', '腊月'
  ];
  
  const lunarDays = [
    '初一', '初二', '初三', '初四', '初五', '初六', '初七', '初八', '初九', '初十',
    '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '二十',
    '廿一', '廿二', '廿三', '廿四', '廿五', '廿六', '廿七', '廿八', '廿九', '三十'
  ];
  
  // 使用关键日期进行精确计算
  const targetTime = date.getTime();
  
  // 找到最接近的关键日期
  let closestKey = lunarCalendar2025.keyDates[0];
  let minDiff = Math.abs(targetTime - closestKey.solar.getTime());
  
  for (const keyDate of lunarCalendar2025.keyDates) {
    const diff = Math.abs(targetTime - keyDate.solar.getTime());
    if (diff < minDiff) {
      minDiff = diff;
      closestKey = keyDate;
    }
  }
  
  // 从最接近的关键日期计算
  const daysDiff = Math.floor((targetTime - closestKey.solar.getTime()) / (1000 * 60 * 60 * 24));
  
  let lunarMonth = closestKey.lunar.month;
  let lunarDay = closestKey.lunar.day + daysDiff;
  
  // 调整月份和日期
  while (lunarDay > lunarCalendar2025.monthDays[lunarMonth - 1]) {
    lunarDay -= lunarCalendar2025.monthDays[lunarMonth - 1];
    lunarMonth++;
    if (lunarMonth > 12) {
      lunarMonth = 1;
    }
  }
  
  while (lunarDay < 1) {
    lunarMonth--;
    if (lunarMonth < 1) {
      lunarMonth = 12;
    }
    lunarDay += lunarCalendar2025.monthDays[lunarMonth - 1];
  }
  
  // 确保索引在有效范围内
  const monthIndex = Math.max(0, Math.min(11, lunarMonth - 1));
  const dayIndex = Math.max(0, Math.min(29, lunarDay - 1));
  
  return `${lunarMonths[monthIndex]}${lunarDays[dayIndex]}`;
}

// Check if date is a market day (农历逢2、5、8)
export function isMarketDay(date: Date): boolean {
  const lunarDateStr = getLunarDate(date);
  
  // 提取农历日期中的数字
  const dayMatches = [
    /初二/, /初五/, /初八/,
    /十二/, /十五/, /十八/,
    /廿二/, /廿五/, /廿八/
  ];
  
  // 检查是否匹配集市日模式
  for (const pattern of dayMatches) {
    if (pattern.test(lunarDateStr)) {
      return true;
    }
  }
  
  return false;
}

// Get next market days
export function getNextMarketDays(from: Date, count: number): Date[] {
  const marketDays = [];
  const currentDate = new Date(from);
  let attempts = 0;
  const maxAttempts = 100;
  
  while (marketDays.length < count && attempts < maxAttempts) {
    currentDate.setDate(currentDate.getDate() + 1);
    if (isMarketDay(currentDate)) {
      marketDays.push(new Date(currentDate));
    }
    attempts++;
  }
  
  return marketDays;
}

// 2025年实际节假日数据
const holidays = [
  // 元旦节
  { date: '01-01', name: '元旦', type: 'legal' },
  
  // 春节假期 (1月28日-2月3日，农历除夕到正月初六)
  { date: '01-28', name: '除夕', type: 'legal' },
  { date: '01-29', name: '春节', type: 'legal' },
  { date: '01-30', name: '春节', type: 'legal' },
  { date: '01-31', name: '春节', type: 'legal' },
  { date: '02-01', name: '春节', type: 'legal' },
  { date: '02-02', name: '春节', type: 'legal' },
  { date: '02-03', name: '春节', type: 'legal' },
  
  // 清明节 (4月5日-7日)
  { date: '04-05', name: '清明节', type: 'legal' },
  { date: '04-06', name: '清明节', type: 'legal' },
  { date: '04-07', name: '清明节', type: 'legal' },
  
  // 劳动节 (5月1日-5日)
  { date: '05-01', name: '劳动节', type: 'legal' },
  { date: '05-02', name: '劳动节', type: 'legal' },
  { date: '05-03', name: '劳动节', type: 'legal' },
  { date: '05-04', name: '劳动节', type: 'legal' },
  { date: '05-05', name: '劳动节', type: 'legal' },
  
  // 端午节 (5月31日-6月2日，农历五月初五)
  { date: '05-31', name: '端午节', type: 'legal' },
  { date: '06-01', name: '端午节', type: 'legal' },
  { date: '06-02', name: '端午节', type: 'legal' },
  
  // 中秋节 (10月6日，农历八月十五)
  { date: '10-06', name: '中秋节', type: 'legal' },
  
  // 国庆节 (10月1日-7日)
  { date: '10-01', name: '国庆节', type: 'legal' },
  { date: '10-02', name: '国庆节', type: 'legal' },
  { date: '10-03', name: '国庆节', type: 'legal' },
  { date: '10-04', name: '国庆节', type: 'legal' },
  { date: '10-05', name: '国庆节', type: 'legal' },
  { date: '10-07', name: '国庆节', type: 'legal' },
  
  // 传统节日
  { date: '02-12', name: '元宵节', type: 'traditional' }, // 农历正月十五
  { date: '02-14', name: '情人节', type: 'traditional' },
  { date: '03-08', name: '妇女节', type: 'traditional' },
  { date: '03-12', name: '植树节', type: 'traditional' },
  { date: '04-01', name: '愚人节', type: 'traditional' },
  { date: '05-04', name: '青年节', type: 'traditional' },
  { date: '06-01', name: '儿童节', type: 'traditional' },
  { date: '07-01', name: '建党节', type: 'traditional' },
  { date: '08-01', name: '建军节', type: 'traditional' },
  { date: '08-29', name: '七夕节', type: 'traditional' }, // 农历七月初七
  { date: '09-10', name: '教师节', type: 'traditional' },
  { date: '10-29', name: '重阳节', type: 'traditional' }, // 农历九月初九
  { date: '10-31', name: '万圣节', type: 'traditional' },
  { date: '11-11', name: '双十一', type: 'traditional' },
  { date: '12-25', name: '圣诞节', type: 'traditional' }
];

// Check if date is a holiday
export function isHoliday(date: Date): { name: string; type: string } | null {
  const monthDay = `${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  const holiday = holidays.find(h => h.date === monthDay);
  return holiday || null;
}

// 2025年二十四节气准确日期
const solarTerms = [
  { date: '01-05', name: '小寒' },
  { date: '01-20', name: '大寒' },
  { date: '02-04', name: '立春' },
  { date: '02-18', name: '雨水' },
  { date: '03-05', name: '惊蛰' },
  { date: '03-20', name: '春分' },
  { date: '04-05', name: '清明' },
  { date: '04-20', name: '谷雨' },
  { date: '05-05', name: '立夏' },
  { date: '05-21', name: '小满' },
  { date: '06-05', name: '芒种' },
  { date: '06-21', name: '夏至' },
  { date: '07-07', name: '小暑' },
  { date: '07-22', name: '大暑' },
  { date: '08-07', name: '立秋' },
  { date: '08-23', name: '处暑' },
  { date: '09-07', name: '白露' },
  { date: '09-23', name: '秋分' },
  { date: '10-08', name: '寒露' },
  { date: '10-23', name: '霜降' },
  { date: '11-07', name: '立冬' },
  { date: '11-22', name: '小雪' },
  { date: '12-07', name: '大雪' },
  { date: '12-21', name: '冬至' }
];

// Get solar term for date
export function getSolarTerm(date: Date): string | null {
  const monthDay = `${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  const term = solarTerms.find(t => t.date === monthDay);
  return term ? term.name : null;
}

// 检查是否是农历初一或十五
export function isLunarSpecialDate(date: Date): { type: 'newMoon' | 'fullMoon' | null; name: string } {
  const lunarDateStr = getLunarDate(date);
  
  if (lunarDateStr.includes('初一')) {
    return { type: 'newMoon', name: '朔日' };
  } else if (lunarDateStr.includes('十五')) {
    return { type: 'fullMoon', name: '望日' };
  }
  
  return { type: null, name: '' };
}

// 2025年北方季节性农产品数据
const seasonalProduce = {
  spring: {
    fruits: ['草莓', '樱桃', '杏子', '李子', '桃子', '枇杷', '桑葚', '青梅'],
    vegetables: ['韭菜', '菠菜', '生菜', '芹菜', '豌豆', '蚕豆', '春笋', '荠菜'],
    grains: ['春小麦', '大麦', '燕麦', '春玉米', '高粱', '谷子']
  },
  summer: {
    fruits: ['西瓜', '甜瓜', '桃子', '荔枝', '龙眼', '葡萄', '杨梅', '蓝莓'],
    vegetables: ['番茄', '黄瓜', '茄子', '辣椒', '丝瓜', '冬瓜', '苦瓜', '豆角'],
    grains: ['夏玉米', '高粱', '谷子', '绿豆', '红豆', '芝麻']
  },
  autumn: {
    fruits: ['苹果', '梨子', '柿子', '石榴', '冬枣', '柚子', '猕猴桃', '山楂'],
    vegetables: ['白菜', '萝卜', '胡萝卜', '洋葱', '土豆', '红薯', '南瓜', '莲藕'],
    grains: ['水稻', '小麦', '玉米', '大豆', '花生', '向日葵']
  },
  winter: {
    fruits: ['橙子', '柚子', '苹果', '梨子', '冬枣', '猕猴桃', '甘蔗', '橘子'],
    vegetables: ['大白菜', '萝卜', '胡萝卜', '洋葱', '土豆', '白萝卜', '芹菜', '菠菜'],
    grains: ['冬小麦', '大麦', '燕麦', '荞麦', '黑豆', '红小豆']
  }
};

// Get seasonal produce
export function getSeasonalProduce(date: Date): { fruits: string[]; vegetables: string[]; grains: string[] } {
  const month = date.getMonth() + 1;
  
  if (month >= 3 && month <= 5) {
    return seasonalProduce.spring;
  } else if (month >= 6 && month <= 8) {
    return seasonalProduce.summer;
  } else if (month >= 9 && month <= 11) {
    return seasonalProduce.autumn;
  } else {
    return seasonalProduce.winter;
  }
}

// 获取工作日信息（考虑调休）
export function getWorkdayInfo(date: Date): { isWorkday: boolean; isAdjusted: boolean; reason?: string } {
  const monthDay = `${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  const dayOfWeek = date.getDay();
  
  // 2025年调休安排
  const adjustedWorkdays = [
    { date: '01-26', reason: '春节调休' }, // 周日上班
    { date: '02-08', reason: '春节调休' }, // 周六上班
    { date: '04-27', reason: '劳动节调休' }, // 周日上班
    { date: '09-28', reason: '国庆节调休' }, // 周日上班
    { date: '10-11', reason: '国庆节调休' } // 周六上班
  ];
  
  const adjustedHolidays = [
    { date: '04-28', reason: '劳动节调休' }, // 周一放假
    { date: '09-29', reason: '国庆节调休' }, // 周一放假
    { date: '10-12', reason: '国庆节调休' } // 周日放假
  ];
  
  // 检查是否是法定节假日
  const holiday = isHoliday(date);
  if (holiday && holiday.type === 'legal') {
    return { isWorkday: false, isAdjusted: false, reason: holiday.name };
  }
  
  // 检查调休放假
  const adjustedHoliday = adjustedHolidays.find(h => h.date === monthDay);
  if (adjustedHoliday) {
    return { isWorkday: false, isAdjusted: true, reason: adjustedHoliday.reason };
  }
  
  // 检查调休上班
  const adjustedWorkday = adjustedWorkdays.find(w => w.date === monthDay);
  if (adjustedWorkday) {
    return { isWorkday: true, isAdjusted: true, reason: adjustedWorkday.reason };
  }
  
  // 正常工作日判断（周一到周五）
  const isNormalWorkday = dayOfWeek >= 1 && dayOfWeek <= 5;
  return { isWorkday: isNormalWorkday, isAdjusted: false };
}