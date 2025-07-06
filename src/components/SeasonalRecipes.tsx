import React from 'react';
import { ChefHat, Clock, Users, Flame } from 'lucide-react';
import { getSeasonalProduce } from '../utils/dateUtils';

interface SeasonalRecipesProps {
  currentDate: Date;
}

const SeasonalRecipes: React.FC<SeasonalRecipesProps> = ({ currentDate }) => {
  const month = currentDate.getMonth() + 1;
  
  const getSeasonalRecipes = () => {
    if (month >= 3 && month <= 5) {
      return {
        season: '春季',
        color: 'green',
        recipes: [
          {
            name: '韭菜盒子',
            ingredients: ['韭菜', '鸡蛋', '面粉', '虾皮'],
            time: '30分钟',
            serves: '4人份',
            difficulty: '简单',
            description: '春季韭菜最嫩，做成盒子香脆可口，是北方春天的经典小食。',
            tips: '韭菜要洗净控干水分，避免出水影响口感。'
          },
          {
            name: '菠菜鸡蛋汤',
            ingredients: ['菠菜', '鸡蛋', '香油', '盐'],
            time: '15分钟',
            serves: '3人份',
            difficulty: '简单',
            description: '春季养肝，菠菜富含铁质，搭配鸡蛋营养丰富。',
            tips: '菠菜要焯水去草酸，蛋花要慢慢倒入形成漂亮的蛋花。'
          },
          {
            name: '春饼卷菜',
            ingredients: ['面粉', '豆芽菜', '韭菜', '胡萝卜丝'],
            time: '45分钟',
            serves: '6人份',
            difficulty: '中等',
            description: '立春时节吃春饼，寓意迎接春天，各种蔬菜丝营养均衡。',
            tips: '面饼要擀得薄一些，蔬菜丝要爽脆，可加点肉丝增加口感。'
          }
        ]
      };
    } else if (month >= 6 && month <= 8) {
      return {
        season: '夏季',
        color: 'red',
        recipes: [
          {
            name: '凉拌黄瓜',
            ingredients: ['黄瓜', '蒜泥', '香醋', '香油'],
            time: '10分钟',
            serves: '2人份',
            difficulty: '简单',
            description: '夏季解腻开胃，黄瓜清脆爽口，是消暑的好选择。',
            tips: '黄瓜要拍碎再切，这样更容易入味，蒜泥要现拍现用。'
          },
          {
            name: '西红柿鸡蛋面',
            ingredients: ['西红柿', '鸡蛋', '挂面', '葱花'],
            time: '20分钟',
            serves: '2人份',
            difficulty: '简单',
            description: '夏季西红柿最甜美，做成汤面酸甜开胃，老少皆宜。',
            tips: '西红柿要去皮炒出汁水，鸡蛋要嫩滑，面条不要煮过头。'
          },
          {
            name: '茄子焖面',
            ingredients: ['茄子', '面条', '豆角', '五花肉'],
            time: '40分钟',
            serves: '4人份',
            difficulty: '中等',
            description: '北方夏季经典，茄子软糯，面条筋道，一锅出菜很实惠。',
            tips: '茄子要先过油或干煸，面条要半熟再焖，这样口感最好。'
          }
        ]
      };
    } else if (month >= 9 && month <= 11) {
      return {
        season: '秋季',
        color: 'orange',
        recipes: [
          {
            name: '白萝卜炖羊肉',
            ingredients: ['白萝卜', '羊肉', '生姜', '料酒'],
            time: '90分钟',
            serves: '6人份',
            difficulty: '中等',
            description: '秋季进补，羊肉温补，白萝卜去膻味，是北方秋冬的滋补佳品。',
            tips: '羊肉要先焯水去血沫，萝卜后放避免煮烂，小火慢炖最香。'
          },
          {
            name: '醋溜白菜',
            ingredients: ['大白菜', '干辣椒', '醋', '生抽'],
            time: '15分钟',
            serves: '3人份',
            difficulty: '简单',
            description: '秋季白菜上市，醋溜做法酸甜开胃，是北方家常菜的代表。',
            tips: '白菜要大火快炒，醋要最后放保持酸味，不要炒得太软。'
          },
          {
            name: '苹果银耳汤',
            ingredients: ['苹果', '银耳', '冰糖', '枸杞'],
            time: '60分钟',
            serves: '4人份',
            difficulty: '简单',
            description: '秋季润燥，苹果和银耳都有润肺的功效，甜汤暖胃。',
            tips: '银耳要提前泡发，苹果不要煮太久，保持一定的脆嫩口感。'
          }
        ]
      };
    } else {
      return {
        season: '冬季',
        color: 'blue',
        recipes: [
          {
            name: '酸菜炖粉条',
            ingredients: ['酸菜', '粉条', '五花肉', '血肠'],
            time: '45分钟',
            serves: '6人份',
            difficulty: '中等',
            description: '东北经典菜，酸菜开胃，粉条吸汤，冬季暖身的好选择。',
            tips: '酸菜要先炒出香味，粉条要提前泡软，血肠最后放避免煮老。'
          },
          {
            name: '羊肉饺子',
            ingredients: ['羊肉馅', '韭菜', '饺子皮', '生姜'],
            time: '60分钟',
            serves: '8人份',
            difficulty: '中等',
            description: '冬至吃饺子，羊肉馅温补暖身，是北方冬季的传统美食。',
            tips: '羊肉馅要加姜去膻，韭菜要最后放，包饺子时不要放太多馅。'
          },
          {
            name: '小鸡炖蘑菇',
            ingredients: ['土鸡', '榛蘑', '粉条', '大葱'],
            time: '90分钟',
            serves: '8人份',
            difficulty: '中等',
            description: '东北四大炖菜之一，鸡肉鲜美，蘑菇香浓，冬季滋补佳品。',
            tips: '鸡要选土鸡，蘑菇要提前泡发，粉条后放避免煮烂。'
          }
        ]
      };
    }
  };

  const seasonalRecipes = getSeasonalRecipes();

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case '简单': return 'text-green-600 bg-green-100';
      case '中等': return 'text-yellow-600 bg-yellow-100';
      case '困难': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-800">
        <ChefHat className="w-5 h-5 text-orange-500" />
        {seasonalRecipes.season}北方食谱推荐
      </h3>
      
      <div className="space-y-6">
        {seasonalRecipes.recipes.map((recipe, index) => (
          <div key={index} className={`bg-${seasonalRecipes.color}-50 rounded-lg p-4 border border-${seasonalRecipes.color}-100`}>
            <div className="flex items-start justify-between mb-3">
              <h4 className={`text-lg font-medium text-${seasonalRecipes.color}-800`}>
                {recipe.name}
              </h4>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(recipe.difficulty)}`}>
                {recipe.difficulty}
              </span>
            </div>
            
            <p className={`text-sm text-${seasonalRecipes.color}-700 mb-3`}>
              {recipe.description}
            </p>
            
            {/* Recipe Info */}
            <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{recipe.time}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>{recipe.serves}</span>
              </div>
            </div>
            
            {/* Ingredients */}
            <div className="mb-3">
              <h5 className="text-sm font-medium text-gray-700 mb-2">主要食材：</h5>
              <div className="flex flex-wrap gap-2">
                {recipe.ingredients.map((ingredient, idx) => (
                  <span key={idx} className="px-2 py-1 bg-white rounded text-xs text-gray-700 border">
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Tips */}
            <div className={`bg-${seasonalRecipes.color}-100 rounded p-3`}>
              <div className="flex items-start gap-2">
                <Flame className={`w-4 h-4 text-${seasonalRecipes.color}-600 mt-0.5 flex-shrink-0`} />
                <div>
                  <h5 className={`text-sm font-medium text-${seasonalRecipes.color}-800 mb-1`}>烹饪小贴士：</h5>
                  <p className={`text-xs text-${seasonalRecipes.color}-700`}>{recipe.tips}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Seasonal Cooking Tips */}
      <div className="mt-6 bg-gray-50 rounded-lg p-4">
        <h4 className="text-sm font-medium text-gray-800 mb-2 flex items-center gap-2">
          <ChefHat className="w-4 h-4" />
          {seasonalRecipes.season}烹饪要点
        </h4>
        <ul className="text-sm text-gray-700 space-y-1">
          {month >= 3 && month <= 5 && (
            <>
              <li>• 春季多吃绿叶蔬菜，有助于肝脏排毒</li>
              <li>• 韭菜、菠菜等要趁新鲜食用，营养价值最高</li>
              <li>• 春季容易上火，烹饪宜清淡少油</li>
            </>
          )}
          {month >= 6 && month <= 8 && (
            <>
              <li>• 夏季多吃凉拌菜，清热解暑开胃</li>
              <li>• 西红柿、黄瓜等要选择新鲜的，口感更好</li>
              <li>• 避免过于油腻，多用蒸煮的方式</li>
            </>
          )}
          {month >= 9 && month <= 11 && (
            <>
              <li>• 秋季进补，可适当增加肉类和坚果</li>
              <li>• 白萝卜、梨等有润燥的功效</li>
              <li>• 烹饪时间可以稍长，有助于营养吸收</li>
            </>
          )}
          {(month >= 12 || month <= 2) && (
            <>
              <li>• 冬季宜温补，多炖煮暖身的汤品</li>
              <li>• 酸菜、腌菜等发酵食品有助消化</li>
              <li>• 可适当增加辛辣调料，驱寒暖胃</li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SeasonalRecipes;