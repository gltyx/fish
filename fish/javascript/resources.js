var resources = {
    money: {
        internal: "money",
        message: "钱常常花得太多，但我怀疑鱼不在乎",
        count: 0,
        total: 0
    },

    fuel: {
        display: "Fuel",
        internal: "fuel",
        message: "",
        price: 5,
        count: 0,
        total: 0,
        max: 30
    },

    workers: {
        display: "Workers",
        internal: "workers",
        message: "",
        price: 1000,
        count: 0,
        total: 0,
        max: 10,
        show_max: true
    },

    fish_meta: {
        internal: "fish_meta",
        display: "Total fish caught",
        count: 0
    },

    /* 
        breakdown of the bait/tackle/fish objects
        guppies: {
            the name displayed on the resource counter
            display: "Guppies",

            the name used in internal references and IDs
            internal: "guppies",

            the message displayed when the fish is first caught
            message: "these would make excellent bait for larger fish",

            if this fish has been caught before
            caught: false,

            if a horizontal break should be added
            break: false,

            if the max number of this fish should be displayed on the resource counters
            show_max: false,

            the max number of this fish you can catch per bait used
            max_caught: 2,

            the current amount of this fish stored; set to 0 when you sell
            count: 0,

            the total amount of this fish caught (persists when you sell fish)
            total: 0,

            the max number of this fish you can store at once
            max: 10

            the chance to catch if you have avaliable bait
            chance: 60,

            disallow catching this fish before the specified fish is caught
            after: "bass",

            all of these baits must be avaliable to catch the fish
            bait: [
                {
                    the type of bait
                    type: "worms",

                    the amount needed to catch the fish
                    amount: 1
                }
            ],

            all of these tackle must be avaliable to catch the fish
            tackle: [
                {
                    the type of tackle
                    type: "fly_tackle",

                    the amount needed to catch the fish
                    amount: 1
                }
            ]
        }
    */

    bait: {
        worms: {
            display: "Worms",
            internal: "worms",
            message: "在泥里蠕动，这是很好的诱饵",
            max_caught: 3,
            price: 1,
            max: 30
        },
        minnows: {
            display: "Minnows",
            internal: "minnows",
            message: "这是钓大鱼的绝佳诱饵",
            max_caught: 2,
            max: 20,
            price: 1,
            chance: 60,
            after: "bass",
            bait: [
                {
                    type: "worms",
                    amount: 1
                }
            ]
        },
        guppies: {
            display: "Guppies",
            internal: "guppies",
            message: "小鱼能钓大鱼",
            price: 2,
            max: 20
        },
        insects: {
            display: "Insects",
            internal: "insects",
            message: "越难吃的动物，就越美味",
            price: 3,
            max: 20
        },
        mussels: {
            display: "Mussels",
            internal: "mussels",
            message: "坚硬的外壳保护着它们柔软可食的内部",
            price: 4,
            max: 20
        },
        crustaceans: {
            display: "Crustaceans",
            internal: "crustaceans",
            message: "桶里装满各种虾和磷虾",
            price: 5,
            max: 15
        },
        squid: {
            display: "Squid",
            internal: "squid",
            message: "触手状，半透明，气味难闻，但完美的诱饵",
            price: 6,
            max: 15
        },
        ground_fish: {
            display: "Ground Fish",
            internal: "ground_fish",
            message: "各种各样的鱼内脏和肉都是为大型猎人准备的",
            price: 7,
            max: 5
        },
    },

    tackle: {
        fly_tackle: {
            display: "Fly Tackle",
            internal: "fly_tackle",
            message: "",
            price: 2,
            max: 20
        },
        cages: {
            display: "Cages",
            internal: "cages",
            message: "",
            price: 4,
            max: 20
        },
        bobber: {
            display: "Bobber",
            internal: "bobber",
            message: "",
            price: 6,
            max: 15
        },
        spoon_lure: {
            display: "Spoon Lure",
            internal: "spoon_lure",
            message: "",
            price: 8,
            max: 15
        },
        harpoon: {
            display: "Harpoon",
            internal: "harpoon",
            message: "",
            price: 10,
            max: 10
        },
        spinner_lure: {
            display: "Spinner Lure",
            internal: "spinner_lure",
            message: "",
            price: 12,
            max: 5
        },
    },

    fish: {
        // lake fish
        bass: {
            display: "Bass",
            internal: "bass",
            message: "没什么特别的，但是会卖出去的",
            header: true,
            price: 5,
            max: 10,
            chance: 60,
            bait: [
                {
                    type: "worms",
                    amount: 1
                }
            ]
        },
        sturgeon: {
            display: "Sturgeon",
            internal: "sturgeon",
            message: "这一只在服从命令之前被猛击了一顿",
            price: 10,
            max: 5,
            chance: 45,
            after: "minnows",
            bait: [
                {
                    type: "worms",
                    amount: 1
                },
                {
                    type: "minnows",
                    amount: 1
                }
            ]
        },
        chub: {
            display: "Chub",
            internal: "chub",
            message: "一条大鱼，看来曾经是一个战士",
            price: 15,
            max: 3,
            chance: 30,
            after: "sturgeon",
            bait: [
                {
                    type: "worms",
                    amount: 2
                },
                {
                    type: "minnows",
                    amount: 2
                }
            ]
        },
        // river fish
        salmon: {
            display: "Salmon",
            internal: "salmon",
            message: "逆流而上的跳鱼很容易捕到",
            header: true,
            price: 10,
            max: 10,
            chance: 60,
            bait: [
                {
                    type: "worms",
                    amount: 1
                }
            ],
            tackle: [
                {
                    type: "fly_tackle",
                    amount: 1
                }
            ]
        },
        trout: {
            display: "Trout",
            internal: "trout",
            message: "这些鱼又淡又油，很无趣",
            price: 15,
            max: 5,
            chance: 40,
            after: "salmon",
            bait: [
                {
                    type: "minnows",
                    amount: 1
                },
                {
                    type: "guppies",
                    amount: 1
                }
            ],
            tackle: [
                {
                    type: "fly_tackle",
                    amount: 1
                }
            ]
        },
        crawdads: {
            display: "Crawdads",
            internal: "crawdads",
            message: "这种小甲壳类杂食动物也被称为小龙虾，很适合与玉米搭配",
            price: 15,
            max: 5,
            chance: 40,
            after: "trout",
            tackle: [
                {
                    type: "cages",
                    amount: 1
                }
            ]
        },
        pike: {
            display: "Pike",
            internal: "pike",
            message: "这些夜间捕猎者经常在波涛汹涌的水中被捕",
            price: 20,
            max: 3,
            chance: 30,
            after: "crawdads",
            bait: [
                {
                    type: "guppies",
                    amount: 2
                }
            ],
            tackle: [
                {
                    type: "fly_tackle",
                    amount: 1
                }
            ]
        },
        // pier fish
        redfish: {
            display: "Redfish",
            internal: "redfish",
            message: "一种流行的鱼，常用于汤中",
            header: true,
            price: 25,
            max: 10,
            chance: 60,
            bait: [
                {
                    type: "insects",
                    amount: 1
                }
            ],
            tackle: [
                {
                    type: "bobber",
                    amount: 1
                }
            ]
        },
        mackerel: {
            display: "Mackerel",
            internal: "mackerel",
            message: "它们成群结队，是食肉动物的美味佳肴",
            price: 30,
            max: 5,
            chance: 40,
            after: "redfish",
            bait: [
                {
                    type: "guppies",
                    amount: 1
                },
                {
                    type: "insects",
                    amount: 1
                }
            ],
            tackle: [
                {
                    type: "bobber",
                    amount: 1
                }
            ]
        },
        crabs: {
            display: "Crabs",
            internal: "crabs",
            message: "它们可能会侧着走，但它们会侧着走到你的笼子里",
            price: 30,
            max: 5,
            chance: 40,
            after: "mackerel",
            tackle: [
                {
                    type: "cages",
                    amount: 1
                }
            ]
        },
        black_drum: {
            display: "Black Drum",
            internal: "black_drum",
            message: "这个底部给料机不会站起来与这条线搏斗的。",
            price: 35,
            max: 3,
            chance: 30,
            after: "crabs",
            bait: [
                {
                    type: "guppies",
                    amount: 1
                },
                {
                    type: "insects",
                    amount: 2
                }
            ],
            tackle: [
                {
                    type: "bobber",
                    amount: 1
                }
            ]
        },
        tarpon: {
            display: "Tarpon",
            internal: "tarpon",
            message: "发亮的野兽，他们经常在被卷进去时跳跃和打翻",
            price: 45,
            max: 1,
            chance: 5,
            after: "black_drum",
            bait: [
                {
                    type: "insects",
                    amount: 5
                }
            ],
            tackle: [
                {
                    type: "spoon_lure",
                    amount: 1
                }
            ]
        },
        // reef fish
        snapper: {
            display: "Snapper",
            internal: "snapper",
            message: "尽管它们很常见，但也被认为具有攻击性",
            header: true,
            price: 45,
            max: 10,
            chance: 60,
            bait: [
                {
                    type: "insects",
                    amount: 2
                }
            ],
            tackle: [
                {
                    type: "bobber",
                    amount: 1
                }
            ]
        },
        hogfish: {
            display: "Hogfish",
            internal: "hogfish",
            message: "一条美丽的猪鱼，如果可以存在的话",
            price: 50,
            max: 7,
            chance: 40,
            after: "snapper",
            bait: [
                {
                    type: "mussels",
                    amount: 1
                }
            ],
            tackle: [
                {
                    type: "spoon_lure",
                    amount: 1
                }
            ]
        },
        moray_eel: {
            display: "Moray Eel",
            internal: "moray_eel",
            message: "当一条鱼咬了你的脚跟，它看起来像条鳗鱼。",
            price: 55,
            max: 5,
            chance: 30,
            after: "hogfish",
            bait: [
                {
                    type: "insects",
                    amount: 1
                },
                {
                    type: "mussels",
                    amount: 2
                }
            ]
        },
        barracuda: {
            display: "Barracuda",
            internal: "barracuda",
            message: "又长又瘦，咄咄逼人，渴望咬任何闪亮的东西",
            price: 70,
            max: 3,
            chance: 10,
            after: "moray_eel",
            tackle: [
                {
                    type: "spoon_lure",
                    amount: 2
                }
            ]
        },
        lemon_shark: {
            display: "Lemon Shark",
            internal: "lemon_shark",
            message: "一种沙色鲨鱼，它的肉对某些人来说是美味佳肴",
            price: 80,
            max: 1,
            chance: 5,
            after: "barracuda",
            bait: [
                {
                    type: "crustaceans",
                    amount: 3
                }
            ],
            tackle: [
                {
                    type: "spinner_lure",
                    amount: 1
                }
            ]
        },
        // spearfishing fish
        lobster: {
            display: "Lobster",
            internal: "lobster",
            message: "两只圆圆的眼睛两侧有两只大爪子",
            header: true,
            price: 60,
            max: 10,
            chance: 60,
            tackle: [
                {
                    type: "cages",
                    amount: 1
                }
            ]
        },
        grouper: {
            display: "Grouper",
            internal: "grouper",
            message: "这些大鱼通常被认为是海里的鲈鱼",
            price: 65,
            max: 7,
            chance: 40,
            after: "lobster",
            bait: [
                {
                    type: "crustaceans",
                    amount: 2
                }
            ],
            tackle: [
                {
                    type: "harpoon",
                    amount: 1
                }
            ]
        },
        tuna: {
            display: "Tuna",
            internal: "tuna",
            message: "快速游动的鱼，人类和猫似乎喜欢",
            price: 70,
            max: 5,
            chance: 30,
            after: "grouper",
            bait: [
                {
                    type: "crustaceans",
                    amount: 1
                },
                {
                    type: "squid",
                    amount: 1
                }
            ],
            tackle: [
                {
                    type: "harpoon",
                    amount: 1
                }
            ]
        },
        swordfish: {
            display: "Swordfish",
            internal: "swordfish",
            message: "它的脑袋上有个大的“剑”，非常快又难以捉摸",
            price: 80,
            max: 3,
            chance: 10,
            after: "tuna",
            bait: [
                {
                    type: "squid",
                    amount: 2
                }
            ],
            tackle: [
                {
                    type: "harpoon",
                    amount: 2
                }
            ]
        },
        tiger_shark: {
            display: "Tiger Shark",
            internal: "tiger_shark",
            message: "夜间猎食者，几乎可以吃任何东西，包括你",
            price: 100,
            max: 1,
            chance: 5,
            after: "swordfish",
            bait: [
                {
                    type: "squid",
                    amount: 3
                },
                {
                    type: "ground_fish",
                    amount: 1
                }
            ],
            tackle: [
                {
                    type: "harpoon",
                    amount: 3
                }
            ]
        },
        // deep sea fish
        whitefish: {
            display: "Whitefish",
            internal: "whitefish",
            message: "这些鱼通常呆在海底附近",
            header: true,
            price: 70,
            max: 10,
            chance: 60,
            bait: [
                {
                    type: "insects",
                    amount: 3
                },
                {
                    type: "crustaceans",
                    amount: 2
                }
            ],
            tackle: [
                {
                    type: "spoon_lure",
                    amount: 1
                }
            ]
        },
        lingcod: {
            display: "Lingcod",
            internal: "lingcod",
            message: "它们既贪婪又丑陋，美味得令人吃惊",
            price: 75,
            max: 7,
            chance: 40,
            after: "whitefish",
            bait: [
                {
                    type: "squid",
                    amount: 3
                }
            ],
            tackle: [
                {
                    type: "spinner_lure",
                    amount: 1
                }
            ]
        },
        stonefish: {
            display: "Stonefish",
            internal: "stonefish",
            message: "通常被误认为是岩石或珊瑚的有毒鱼类",
            price: 80,
            max: 5,
            chance: 30,
            after: "lingcod",
            bait: [
                {
                    type: "crustaceans",
                    amount: 3
                }
            ],
            tackle: [
                {
                    type: "spinner_lure",
                    amount: 1
                }
            ]
        },
        marlin: {
            display: "Marlin",
            internal: "marlin",
            message: "这是剑鱼，如果剑鱼有更好的剑和更大的身体",
            price: 100,
            max: 3,
            chance: 15,
            after: "stonefish",
            bait: [
                {
                    type: "squid",
                    amount: 3
                },
                {
                    type: "ground_fish",
                    amount: 1
                }
            ],
            tackle: [
                {
                    type: "spinner_lure",
                    amount: 1
                }
            ]
        },
        mako_shark: {
            display: "Mako Shark",
            internal: "mako_shark",
            message: "鲨鱼里面速度最快的一种，它能把猎物撕成碎片",
            price: 125,
            max: 1,
            chance: 10,
            after: "marlin",
            bait: [
                {
                    type: "ground_fish",
                    amount: 3
                }
            ],
            tackle: [
                {
                    type: "spinner_lure",
                    amount: 1
                }
            ]
        },
        thresher_shark: {
            display: "Thresher Shark",
            internal: "thresher_shark",
            message: "这些食肉动物用它们的长尾巴拍打和击晕猎物",
            price: 175,
            max: 1,
            chance: 5,
            after: "mako_shark",
            bait: [
                {
                    type: "squid",
                    amount: 3,
                },
                {
                    type: "ground_fish",
                    amount: 2
                }
            ],
            tackle: [
                {
                    type: "spinner_lure",
                    amount: 1
                }
            ]
        },
    }
}