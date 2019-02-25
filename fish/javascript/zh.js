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

