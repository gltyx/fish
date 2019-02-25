//汉化杂项
var cnItems = {
    'Worms': '蠕虫',
    'Minnows': '小鱼',
    'Guppies': '孔雀鱼',
    'Insects': '昆虫',
    'Mussels': '青口贝',
    'Crustaceans': '甲壳动物',
    'Squid': '乌贼',
    'Ground Fish': '底栖鱼',
    'Fly Tackle': '飞铲',
    'Sturgeon': '鲟鱼',
    'Chub': '鲢鱼',
    'Bass': '鲈鱼',
    'Spinner Lure': '旋转诱饵',
    'Harpoon': '鱼叉',
    'River': '河流',
    'Lake': '湖泊',
    'Shop': '商店',
    'Forage for worms': '寻找蠕虫',
    'Cast out line': '抛出线',
    'Reel in line': '收回线',
    'Deep Sea': '深海',
    'Spoon Lure': '匙形鱼饵',
    'Spear Fishing': '鱼叉捕鱼',
    'Fuel': '燃料',
    'Reef': '暗礁',
    'Pier': '码头',
    'Cages': '笼子',
    'Bobber': '浮子',
    'Hire a worker to be assigned to an available area': '雇佣一名工人分配到一个可用的区域',
    'Send out "influencers" to spread false rumors about specific lakes to free them for your workers': '派出“影响者”散布关于特定湖泊的虚假谣言，为你的工人释放它们',
    'Tackle': '钓具',
    'Bait': '鱼饵',
    'Misc': '杂项',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

};

function cnItem(text) {
    //数组里面有的，返回中文
    for (var i in cnItems) {
        if (text == i) {
            return cnItems[i];
        }
    }
    //数组里面没有的，原样返回
    for (var i in cnItems) {
        if (text != i) {
            console.log("需汉化的英文Item：" + text);
            return text;
        }
    }
}



//汉化标题
var cntit = {
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    

};

function cntitle(text) {
    //数组里面有的，返回中文
    for (var i in cntit) {
        if (text == i) {
            return cntit[i];
        }
    }
    //数组里面没有的，原样返回
    for (var i in cntit) {
        if (text != i) {
            console.log("需汉化的英文标题：" + text);
            return text;
        }
    }
}

