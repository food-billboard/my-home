import { Vector3 } from 'three'

// 房间数据 对象
export const ROOM_DATA: RoomData = {
  bridgeStart: {
    name: '桥上',
    description: '一开始的门口',
    floor: 0,
    map: new URL('@/assets/private/桥上.jpg', import.meta.url).href,
    position: new Vector3(0, 0, 0),
    thumbPosition: {
      left: 20,
      top: 20
    },
    index: true,
    visibleRoom: [
      {
        key: 'glfHomeStart',
        position: new Vector3(-6.7, 1.91, -14)
      },
    ],
    interactivePoints: [
      {
        key: 'well',
        name: '井',
        description: '小时候的水源，现在大家都当石墩子用',
        position: new Vector3(10.42, -3.94, -11.48),
        cover: [
          new URL('@/assets/private/井.jpg', import.meta.url).href
        ],
      },
      {
        key: 'bikeShed',
        name: '车子',
        description: '家里的车子',
        position: new Vector3(-8.2, -0.92, -13.65),
        cover: new URL('@/assets/private/车子.jpg', import.meta.url).href,
      },
      {
        key: 'bikeShed4Y',
        name: '阿益的车子',
        description: '老婆的小胖子',
        position: new Vector3(-3.13, -1.22, -15.64),
        cover: new URL('@/assets/private/元plus.jpg', import.meta.url).href,
      },
      {
        key: 'ghtHomeStart',
        name: '葛涵天的家',
        description: '好朋友的家',
        position: new Vector3(-0.67, 1.7, -15),
        cover: new URL('@/assets/private/friends.jpeg', import.meta.url).href,
      }
    ]
  },
  glfHomeStart: {
    name: '我的家',
    description: '家门口',
    floor: 0,
    map: new URL('@/assets/private/大门.jpg', import.meta.url).href,
    position: new Vector3(0, 0, 0),
    thumbPosition: {
      left: 20,
      top: 20
    },
    visibleRoom: [
      {
        key: 'bridgeStart',
        position: new Vector3(1.11, -0.827, -15.9)
      },
      {
        key: 'glfHomeLobby',
        position: new Vector3(-3.9, -3.63, 15)
      },
      {
        key: 'glfHomeLane',
        position: new Vector3(15, -0.28, 5.3)
      },
      {
        key: 'glfHomeTree',
        position: new Vector3(-14, -0.87, 6.4)
      },
    ],
    interactivePoints: [
      {
        key: 'fatherCar',
        name: '爸爸的车',
        description: '爸爸现在是司机，公司的车子',
        position: new Vector3(-13, -2.81, -8.4),
        cover: new URL('@/assets/private/爸爸的车.jpg', import.meta.url).href,
      }
    ]
  },
  glfHomeLobby: {
    name: '院子',
    description: '一楼大门进来，也就是里面，有花坛',
    floor: 0,
    map: new URL('@/assets/private/院子.jpg', import.meta.url).href,
    position: new Vector3(0, 0, 0),
    thumbPosition: {
      left: 20,
      top: 20
    },
    floorUp: true,
    visibleRoom: [
      {
        key: 'glfHomeStart',
        position: new Vector3(9, -3.1, 12.8)
      },
    ],
    interactivePoints: [
      {
        key: 'sweetScentedTree',
        name: '桂花树',
        description: '每年的秋天，闻着桂花香，那是一件幸福的事',
        position: new Vector3(13.05, 8.57, 3.46),
        cover: new URL('@/assets/private/桂花树.jpg', import.meta.url).href,
      },
      {
        key: 'plumTree',
        name: '李子树',
        description: '春天结束，夏天到来，就是迫不及待等着李子结果的时候',
        position: new Vector3(13.6, 4.68, -6.99),
        cover: new URL('@/assets/private/李子树.jpg', import.meta.url).href,
      }
    ]
  },
  glfHomeLane: {
    name: '弄堂',
    description: '房子左边的弄堂',
    floor: 0,
    map: new URL('@/assets/private/弄堂.jpg', import.meta.url).href,
    position: new Vector3(0, 0, 0),
    thumbPosition: {
      left: 20,
      top: 20
    },
    visibleRoom: [
      {
        key: 'glfHomeStart',
        position: new Vector3(13.11, -0.65, 9.14)
      },
      {
        key: 'glfHomeBackDoor',
        position: new Vector3(-10, -2.04, -11.59)
      },
    ],
  },
  glfHomeTree: {
    name: '绿植',
    description: '房子右边的绿植',
    floor: 0,
    map: new URL('@/assets/private/绿植.jpg', import.meta.url).href,
    position: new Vector3(0, 0, 0),
    thumbPosition: {
      left: 20,
      top: 20
    },
    visibleRoom: [
      {
        key: 'glfHomeStart',
        position: new Vector3(-10, 2.34, 12)
      },
    ],
  },
  glfHomeBackDoor: {
    name: '后门',
    description: '房子后门',
    floor: 0,
    map: new URL('@/assets/private/后门.jpg', import.meta.url).href,
    position: new Vector3(0, 0, 0),
    thumbPosition: {
      left: 20,
      top: 20
    },
    visibleRoom: [
      {
        key: 'glfHomeLane',
        position: new Vector3(15.1, -3.73, 3.72)
      },
      {
        key: 'glfHomeBackYard',
        position: new Vector3(-14.94, -2.28, -5.24)
      },
    ],
  },
  glfHomeBackYard: {
    name: '后门的院子',
    description: '后门的院子',
    floor: 0,
    map: new URL('@/assets/private/后院全部.jpg', import.meta.url).href,
    position: new Vector3(0, 0, 0),
    thumbPosition: {
      left: 20,
      top: 20
    },
    visibleRoom: [
      {
        key: 'glfHomeBackDoor',
        position: new Vector3(-3.12, -1.13, 15.64)
      },
    ],
    interactivePoints: [
      {
        key: 'oldHouse',
        name: '老房子',
        description: '06年以前，我们住在这里，现在已经出租了',
        position: new Vector3(-14.26, 7.25, 0.02),
        cover: new URL('@/assets/private/老房子.jpg', import.meta.url).href,
      },
      {
        key: 'chickenHouse',
        name: '后院',
        description: '后院以前是朋友们玩耍的地方，现在已经是鸡棚了',
        position: new Vector3(-9.56, -3.98, -12.19),
        cover: new URL('@/assets/private/后院.jpg', import.meta.url).href,
      }
    ]
  },
  glfHomeFloor2Start: {
    name: '二楼',
    description: '二楼楼梯口',
    floor: 1,
    floorDown: true,
    map: new URL('@/assets/private/二楼楼梯.jpg', import.meta.url).href,
    position: new Vector3(0, 0, 0),
    thumbPosition: {
      left: 20,
      top: 20
    },
    visibleRoom: [
      {
        key: 'glfHomeFloor2Living',
        position: new Vector3(5.82, -0.06, -14.9)
      },
    ],
    interactivePoints: [
      {
        key: 'numberPlate',
        name: '《田杜里25号》',
        position: new Vector3(2.29, 7.58, -13.89),
        cover: new URL('@/assets/private/门牌.jpg', import.meta.url).href,
      },
    ]
  },
  glfHomeFloor2Living: {
    name: '客厅',
    description: '二楼的客厅',
    floor: 1,
    map: new URL('@/assets/private/客厅.jpg', import.meta.url).href,
    position: new Vector3(0, 0, 0),
    thumbPosition: {
      left: 20,
      top: 20
    },
    floorUp: true,
    visibleRoom: [
      {
        key: 'glfHomeFloor2Start',
        position: new Vector3(-12.7, 1.7, 9.56)
      },
      {
        key: 'glfHomeFloor2Kitchen',
        position: new Vector3(14.89, 2.7, -5.183)
      },
    ],
    interactivePoints: [
      {
        key: 'embroidery',
        name: '《福》',
        description: '妈妈废老大劲绣的十字绣',
        position: new Vector3(8.92, -3.51, -12.8),
        cover: new URL('@/assets/private/福.jpg', import.meta.url).href,
      },
      {
        key: 'massageChair',
        name: '按摩椅',
        description: '今年送给爸爸的生日礼物',
        position: new Vector3(2.5, -0.86, -15.77),
        cover: new URL('@/assets/private/按摩椅.jpg', import.meta.url).href,
      },
      {
        key: 'fatherWine',
        name: '酒',
        description: '爸爸的宝贝杨梅烧酒',
        position: new Vector3(11.17, -0.98, 11.4),
        cover: new URL('@/assets/private/杨梅酒.jpg', import.meta.url).href,
      },
      {
        key: 'previousLiving',
        name: '以前的客厅',
        description: '装修前的样子',
        position: new Vector3(8.66, 1.24, 13.38),
        cover: [
          new URL('@/assets/private/以前客厅-1.jpg', import.meta.url).href,
          new URL('@/assets/private/以前客厅-2.jpg', import.meta.url).href
        ],
      },
    ]
  },
  glfHomeFloor2Kitchen: {
    name: '厨房',
    description: '二楼的厨房',
    floor: 1,
    map: new URL('@/assets/private/厨房.jpeg', import.meta.url).href,
    position: new Vector3(0, 0, 0),
    thumbPosition: {
      left: 20,
      top: 20
    },
    visibleRoom: [
      {
        key: 'glfHomeFloor2Living',
        position: new Vector3(-11, -0.74, -11.17)
      },
    ],
  },
  glfHomeFloor3Staircase: {
    name: '楼梯拐角',
    description: '三楼楼梯口',
    floor: 2,
    floorDown: true,
    floorUp: true,
    map: new URL('@/assets/private/三楼走廊.jpeg', import.meta.url).href,
    position: new Vector3(0, 0, 0),
    thumbPosition: {
      left: 20,
      top: 20
    },
    visibleRoom: [
      {
        key: 'glfHomeFloor3BackDoor',
        position: new Vector3(15.8, 2.33, 0.91)
      },
      {
        key: 'glfHomeFloor3Parent',
        position: new Vector3(-15.61, -0.6, -3.44)
      },
      {
        key: 'glfHomeFloor3Wc',
        position: new Vector3(11.88, -0.89, -10.67)
      },
      {
        key: 'glfHomeFloor3Bedroom',
        position: new Vector3(5.06, 0.97, -15.14)
      },
    ],
    interactivePoints: [
      {
        key: 'previousFloor3',
        name: '以前的楼梯口',
        description: '装修以前的楼梯口',
        position: new Vector3(6.53, -11.47, 9.03),
        cover: [
          new URL('@/assets/private/以前三楼-1.jpg', import.meta.url).href,
          new URL('@/assets/private/以前三楼-2.jpg', import.meta.url).href
        ],
      }
    ]
  },
  glfHomeFloor3BackDoor: {
    name: '小房间',
    description: '三楼后面小房间',
    floor: 2,
    map: new URL('@/assets/private/三楼小房间.jpeg', import.meta.url).href,
    position: new Vector3(0, 0, 0),
    thumbPosition: {
      left: 20,
      top: 20
    },
    visibleRoom: [
      {
        key: 'glfHomeFloor3Staircase',
        position: new Vector3(-13.8, 1.72, 7.89)
      },
    ]
  },
  glfHomeFloor3Parent: {
    name: '爸妈房间',
    description: '三楼爸妈的房间',
    floor: 2,
    map: new URL('@/assets/private/爸妈房间.jpg', import.meta.url).href,
    position: new Vector3(0, 0, 0),
    thumbPosition: {
      left: 20,
      top: 20
    },
    visibleRoom: [
      {
        key: 'glfHomeFloor3Staircase',
        position: new Vector3(-13.63, 2.23, 8.06)
      },
    ],
    interactivePoints: [
      {
        key: 'parentWeedingPhoto',
        name: '结婚照',
        description: '爸爸妈妈的结婚照，1996年12月18号',
        position: new Vector3(-7.32, 0.99, -14.18),
        cover: [
          new URL('@/assets/private/爸爸妈妈的结婚照.jpg', import.meta.url).href,
          new URL('@/assets/private/爸爸妈妈的结婚照现在.jpg', import.meta.url).href
        ],
      },
      {
        key: 'originWC',
        name: '一堵墙',
        description: '这里以前是一个厕所门口，后面被填上了',
        position: new Vector3(-10.71, 2.98, 11.5),
        cover: new URL('@/assets/private/以前的小厕所.jpg', import.meta.url).href,
      },
    ]
  },
  glfHomeFloor3Wc: {
    name: '厕所',
    description: '公用厕所',
    floor: 2,
    map: new URL('@/assets/private/厕所.jpg', import.meta.url).href,
    position: new Vector3(0, 0, 0),
    thumbPosition: {
      left: 20,
      top: 20
    },
    visibleRoom: [
      {
        key: 'glfHomeFloor3Staircase',
        position: new Vector3(0.18, 2.27, 15.83)
      },
    ],
  },
  glfHomeFloor3Bedroom: {
    name: '卧室',
    description: '我的房间',
    floor: 2,
    map: new URL('@/assets/private/卧室.jpg', import.meta.url).href,
    position: new Vector3(0, 0, 0),
    thumbPosition: {
      left: 20,
      top: 20
    },
    visibleRoom: [
      {
        key: 'glfHomeFloor3Gym',
        position: new Vector3(7.16, -0.53, -14.29)
      },
      {
        key: 'glfHomeFloor3MyWc',
        position: new Vector3(12.89, 0.82, 9.43)
      },
      {
        key: 'glfHomeFloor3Balcony',
        position: new Vector3(-14.09, -2.6, -7.11)
      },
      {
        key: 'glfHomeFloor3Staircase',
        position: new Vector3(13.06, -0.24, -9.23)
      },
    ],
    interactivePoints: [
      {
        key: 'myWeedingPhoto',
        name: '我的结婚照',
        description: '比较满意的几张',
        position: new Vector3(0.2, 3.86, -15.52),
        cover: new URL('@/assets/private/我墙上的结婚照.jpg', import.meta.url).href,
      },
      {
        key: 'pooh',
        name: '噗噗',
        description: '送给老婆的噗噗',
        position: new Vector3(0.41, -1.27, -15.94),
        cover: new URL('@/assets/private/噗噗.jpg', import.meta.url).href,
      },
      {
        key: 'originCenterHouse',
        name: '以前的客厅',
        description: '以前这里是一个客厅',
        position: new Vector3(-14.89, 5.52, -1.87),
        cover: [
          new URL('@/assets/private/以前的前面房间-1.jpg', import.meta.url).href,
          new URL('@/assets/private/以前的前面房间-2.jpg', import.meta.url).href,
        ]
      },
      {
        key: 'originLeftHouse',
        name: '以前的卧室',
        description: '以前这里是爸爸妈妈的卧室',
        position: new Vector3(-3.17, -3.47, 15.29),
        cover: new URL('@/assets/private/以前的爸妈房间.jpg', import.meta.url).href,
      },
    ]
  },
  glfHomeFloor3Gym: {
    name: '健身房',
    description: '我的健身房',
    floor: 2,
    map: new URL('@/assets/private/健身房.jpeg', import.meta.url).href,
    position: new Vector3(0, 0, 0),
    thumbPosition: {
      left: 20,
      top: 20
    },
    visibleRoom: [
      {
        key: 'glfHomeFloor3Bedroom',
        position: new Vector3(-6.07, 0.36, 14.79)
      },
    ],
    interactivePoints: [
      {
        key: 'originMyBedRoom',
        name: '小时候的卧室',
        description: '去年这里还是我的卧室呢',
        position: new Vector3(-8.53, -7.98, -10.93),
        cover: new URL('@/assets/private/以前的卧室.jpg', import.meta.url).href,
      },
    ]
  },
  glfHomeFloor3MyWc: {
    name: '厕所衣帽间',
    description: '我的房间的厕所',
    floor: 2,
    map: new URL('@/assets/private/厕所衣帽间.pic.jpg', import.meta.url).href,
    position: new Vector3(0, 0, 0),
    thumbPosition: {
      left: 20,
      top: 20
    },
    visibleRoom: [
      {
        key: 'glfHomeFloor3Bedroom',
        position: new Vector3(15.58, -1.88, -3.1)
      },
    ],
    interactivePoints: [
      {
        key: 'previousFloorWc',
        name: '以前的卧室厕所',
        description: '装修以前的厕所',
        position: new Vector3(-2.95, -2.67, -15.49),
        cover: new URL('@/assets/private/以前前面的厕所.jpg', import.meta.url).href,
      }
    ]
  },
  glfHomeFloor3Balcony: {
    name: '阳台',
    description: '三楼阳台',
    floor: 2,
    map: new URL('@/assets/private/三楼阳台.pic.jpg', import.meta.url).href,
    position: new Vector3(0, 0, 0),
    thumbPosition: {
      left: 20,
      top: 20
    },
    visibleRoom: [
      {
        key: 'glfHomeFloor3Bedroom',
        position: new Vector3(6.4, -1.92, 14.53)
      },
    ],
    interactivePoints: [
      {
        key: 'photoWall',
        name: '结婚照',
        description: '今年的10月2日，本人刚刚结婚',
        position: new Vector3(14.83, 1.37, 5.82),
        cover: new URL('@/assets/private/结婚照.jpg', import.meta.url).href,
      },
      {
        key: 'previousBalcony',
        name: '以前的阳台',
        description: '装修以前的样子',
        position: new Vector3(-11.74, 4.1, 10.05),
        cover: new URL('@/assets/private/以前的阳台.jpg', import.meta.url).href,
      },
    ]
  },
  glfHomeFloor4Attic: {
    name: '阁楼',
    description: '顶楼阁楼',
    floor: 3,
    floorDown: true,
    map: new URL('@/assets/private/阁楼.pic.jpg', import.meta.url).href,
    position: new Vector3(0, 0, 0),
    thumbPosition: {
      left: 20,
      top: 20
    },
    visibleRoom: [
      {
        key: 'glfHomeFloor3Staircase',
        position: new Vector3(-7.76, -10.53, 9.19)
      },
    ],
  }
}

// export const _ROOM_DATA: RoomData = {
//   bridgeStart: {
//     name: '桥上',
//     description: '一开始的门口',
//     floor: 0,
//     // map: new URL('./images/桥上.jpg', import.meta.url).href,
//     map: image,
//     position: new Vector3(0, 0, 0),
//     thumbPosition: {
//       left: 20,
//       top: 20
//     },
//     index: true,
//   },
// }

// 房间数据 数组
export const ROOM_DATA_ARRAY = Object.entries(ROOM_DATA).map(item => ({ ...item[1], key: item[0] }))

// 最高楼层
export const MAX_ROOM_FLOOR = Math.max(...ROOM_DATA_ARRAY.map(item => item.floor))

// 最低楼层
export const MIN_ROOM_FLOOR = Math.min(...ROOM_DATA_ARRAY.map(item => item.floor))

export type InteractivePoint = {
  key: string
  name: string
  description?: string
  position: Vector3
  cover: string[] | string 
}

export type VisibleRoom = {
  position: Vector3
  // 就是roomKey
  key: string 
}

export type RoomDataObject = {
  floor: number 
  name: string
  description?: string 
  map: string
  position: Vector3
  thumbPosition: {
    left: number 
    top: number 
  }
  index?: boolean
  interactivePoints?: InteractivePoint[]
  visibleRoom?: VisibleRoom[]
  floorDown?: boolean 
  floorUp?: boolean 
}

export type RoomData = {
  [roomKey: string]: RoomDataObject
}