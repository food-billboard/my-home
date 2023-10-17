import { Vector3 } from 'three'

// 房间数据 对象
export const ROOM_DATA: RoomData = {
  bridgeStart: {
    name: '桥下',
    description: '一开始的门口',
    floor: 0,
    map: new URL('@/assets/map_living_room.jpg', import.meta.url).href,
    position: new Vector3(0, 0, 0),
    index: true,
    visibleRoom: [
      {
        key: 'glfHomeStart',
        position: new Vector3(-6, 2, -8)
      },
    ],
    interactivePoints: [
      {
        key: 'well',
        name: '井',
        description: '小时候的水源，现在大家都当石墩子用',
        position: new Vector3(-6, 2, -8),
        cover: new URL('@/assets/thing.jpg', import.meta.url).href,
      },
      {
        key: 'bikeShed',
        name: '车子',
        description: '家里的车子',
        position: new Vector3(-6, 2, -8),
        cover: new URL('@/assets/thing.jpg', import.meta.url).href,
      }
    ]
  },
  glfHomeStart: {
    name: '我的家',
    description: '家门口',
    floor: 0,
    map: new URL('@/assets/map_living_room.jpg', import.meta.url).href,
    position: new Vector3(0, 0, 0),
    visibleRoom: [
      {
        key: 'bridgeStart',
        position: new Vector3(-6, 2, -8)
      },
      {
        key: 'glfHomeLobby',
        position: new Vector3(-6, 2, -8)
      },
      {
        key: 'glfHomeLane',
        position: new Vector3(-6, 2, -8)
      },
      {
        key: 'glfHomeTree',
        position: new Vector3(-6, 2, -8)
      },
    ],
    interactivePoints: [
      {
        key: 'photoWall',
        name: '结婚照',
        description: '今年的10月2日，本人刚刚结婚',
        position: new Vector3(-6, 2, -8),
        cover: new URL('@/assets/thing.jpg', import.meta.url).href,
      },
      {
        key: 'fatherCar',
        name: '爸爸的车',
        description: '爸爸现在是司机，公司的车子',
        position: new Vector3(-6, 2, -8),
        cover: new URL('@/assets/thing.jpg', import.meta.url).href,
      }
    ]
  },
  glfHomeLobby: {
    name: '门前空地',
    description: '一楼大门进来，也就是里面，有花坛',
    floor: 0,
    map: new URL('@/assets/map_living_room.jpg', import.meta.url).href,
    position: new Vector3(0, 0, 0),
    floorUp: true,
    visibleRoom: [
      {
        key: 'glfHomeStart',
        position: new Vector3(-6, 2, -8)
      },
      {
        key: 'glfHomeFloor2Start',
        position: new Vector3(-6, 2, -8)
      },
    ],
    interactivePoints: [
      {
        key: 'sweetScentedTree',
        name: '桂花树',
        description: '每年的秋天，闻着桂花香，那是一件幸福的事',
        position: new Vector3(-6, 2, -8),
        cover: new URL('@/assets/thing.jpg', import.meta.url).href,
      },
      {
        key: 'plumTree',
        name: '李子树',
        description: '春天结束，夏天到来，就是迫不及待等着李子结果的时候',
        position: new Vector3(-6, 2, -8),
        cover: new URL('@/assets/thing.jpg', import.meta.url).href,
      }
    ]
  },
  glfHomeLane: {
    name: '弄堂',
    description: '房子左边的弄堂',
    floor: 0,
    map: new URL('@/assets/map_living_room.jpg', import.meta.url).href,
    position: new Vector3(0, 0, 0),
    visibleRoom: [
      {
        key: 'glfHomeStart',
        position: new Vector3(-6, 2, -8)
      },
      {
        key: 'glfHomeBackDoor',
        position: new Vector3(-6, 2, -8)
      },
    ],
  },
  glfHomeTree: {
    name: '绿植',
    description: '房子右边的绿植',
    floor: 0,
    map: new URL('@/assets/map_living_room.jpg', import.meta.url).href,
    position: new Vector3(0, 0, 0),
    visibleRoom: [
      {
        key: 'glfHomeStart',
        position: new Vector3(-6, 2, -8)
      },
      {
        key: 'glfHomeBackDoor',
        position: new Vector3(-6, 2, -8)
      },
    ],
  },
  glfHomeBackDoor: {
    name: '后门',
    description: '房子后门',
    floor: 0,
    map: new URL('@/assets/map_living_room.jpg', import.meta.url).href,
    position: new Vector3(0, 0, 0),
    visibleRoom: [
      {
        key: 'glfHomeLane',
        position: new Vector3(-6, 2, -8)
      },
      {
        key: 'glfHomeTree',
        position: new Vector3(-6, 2, -8)
      },
    ],
    interactivePoints: [
      {
        key: 'oldHouse',
        name: '老房子',
        description: '06年以前，我们住在这里，现在已经出租了',
        position: new Vector3(-6, 2, -8),
        cover: new URL('@/assets/thing.jpg', import.meta.url).href,
      },
      {
        key: 'chickenHouse',
        name: '后院',
        description: '后院以前是朋友们玩耍的地方，现在已经是鸡棚了',
        position: new Vector3(-6, 2, -8),
        cover: new URL('@/assets/thing.jpg', import.meta.url).href,
      }
    ]
  },
  glfHomeFloor2Start: {
    name: '楼梯',
    description: '二楼楼梯口',
    floor: 1,
    floorDown: true,
    map: new URL('@/assets/map_living_room.jpg', import.meta.url).href,
    position: new Vector3(0, 0, 0),
    visibleRoom: [
      {
        key: 'glfHomeFloor2Living',
        position: new Vector3(-6, 2, -8)
      },
    ],
    interactivePoints: [
      {
        key: 'numberPlate',
        name: '《田杜里25号》',
        position: new Vector3(-6, 2, -8),
        cover: new URL('@/assets/thing.jpg', import.meta.url).href,
      },
    ]
  },
  glfHomeFloor2Living: {
    name: '客厅',
    description: '二楼的客厅',
    floor: 1,
    map: new URL('@/assets/map_bed_room.jpg', import.meta.url).href,
    position: new Vector3(0, 0, 0),
    floorUp: true,
    visibleRoom: [
      {
        key: 'glfHomeFloor2Start',
        position: new Vector3(-6, 2, -8)
      },
      {
        key: 'glfHomeFloor2Kitchen',
        position: new Vector3(-6, 2, -8)
      },
      {
        key: 'glfHomeFloor2Storeroom',
        position: new Vector3(-6, 2, -8)
      },
      {
        key: 'glfHomeFloor3Staircase',
        position: new Vector3(-6, 2, -8)
      },
    ],
    interactivePoints: [
      {
        key: 'embroidery',
        name: '《福》',
        description: '妈妈废老大劲绣的十字绣',
        position: new Vector3(-6, 2, -8),
        cover: new URL('@/assets/thing.jpg', import.meta.url).href,
      },
      {
        key: 'massageChair',
        name: '按摩椅',
        description: '今年送给爸爸的生日礼物',
        position: new Vector3(-6, 2, -8),
        cover: new URL('@/assets/thing.jpg', import.meta.url).href,
      },
    ]
  },
  glfHomeFloor2Kitchen: {
    name: '厨房',
    description: '二楼的厨房',
    floor: 1,
    map: new URL('@/assets/map_study_room.jpg', import.meta.url).href,
    position: new Vector3(0, 0, 0),
    visibleRoom: [
      {
        key: 'glfHomeFloor2Living',
        position: new Vector3(-6, 2, -8)
      },
    ],
  },
  glfHomeFloor2Storeroom: {
    name: '储藏室',
    description: '二楼的楼梯下的储藏室',
    floor: 1,
    map: new URL('@/assets/map_study_room.jpg', import.meta.url).href,
    position: new Vector3(0, 0, 0),
    visibleRoom: [
      {
        key: 'glfHomeFloor2Living',
        position: new Vector3(-6, 2, -8)
      },
    ],
  },
  glfHomeFloor3Staircase: {
    name: '楼梯',
    description: '三楼楼梯口',
    floor: 2,
    floorDown: true,
    floorUp: true,
    map: new URL('@/assets/map_study_room.jpg', import.meta.url).href,
    position: new Vector3(0, 0, 0),
    visibleRoom: [
      {
        key: 'glfHomeFloor3BackDoor',
        position: new Vector3(-6, 2, -8)
      },
      {
        key: 'glfHomeFloor3Parent',
        position: new Vector3(-6, 2, -8)
      },
      {
        key: 'glfHomeFloor3Wc',
        position: new Vector3(-6, 2, -8)
      },
      {
        key: 'glfHomeFloor3Bedroom',
        position: new Vector3(-6, 2, -8)
      },
      {
        key: 'glfHomeFloor4Attic',
        position: new Vector3(-6, 2, -8)
      },
    ],
  },
  glfHomeFloor3BackDoor: {
    name: '小房间',
    description: '三楼后面小房间',
    floor: 2,
    map: new URL('@/assets/map_study_room.jpg', import.meta.url).href,
    position: new Vector3(0, 0, 0),
    visibleRoom: [
      {
        key: 'glfHomeFloor3Staircase',
        position: new Vector3(-6, 2, -8)
      },
    ]
  },
  glfHomeFloor3Parent: {
    name: '爸妈房间',
    description: '三楼爸妈的房间',
    floor: 2,
    map: new URL('@/assets/map_study_room.jpg', import.meta.url).href,
    position: new Vector3(0, 0, 0),
    visibleRoom: [
      {
        key: 'glfHomeFloor3Staircase',
        position: new Vector3(-6, 2, -8)
      },
    ],
    interactivePoints: [
      {
        key: 'parentWeedingPhoto',
        name: '结婚照',
        description: '爸爸妈妈的结婚照，1996年12月18号',
        position: new Vector3(-6, 2, -8),
        cover: new URL('@/assets/thing.jpg', import.meta.url).href,
      },
      {
        key: 'originWC',
        name: '一堵墙',
        description: '这里以前是一个厕所门口，后面被填上了',
        position: new Vector3(-6, 2, -8),
        cover: new URL('@/assets/thing.jpg', import.meta.url).href,
      },
    ]
  },
  glfHomeFloor3Wc: {
    name: '厕所',
    description: '公用厕所',
    floor: 2,
    map: new URL('@/assets/map_study_room.jpg', import.meta.url).href,
    position: new Vector3(0, 0, 0),
    visibleRoom: [
      {
        key: 'glfHomeFloor3Staircase',
        position: new Vector3(-6, 2, -8)
      },
    ]
  },
  glfHomeFloor3Bedroom: {
    name: '卧室',
    description: '我的房间',
    floor: 2,
    map: new URL('@/assets/map_study_room.jpg', import.meta.url).href,
    position: new Vector3(0, 0, 0),
    visibleRoom: [
      {
        key: 'glfHomeFloor3Gym',
        position: new Vector3(-6, 2, -8)
      },
      {
        key: 'glfHomeFloor3MyWc',
        position: new Vector3(-6, 2, -8)
      },
      {
        key: 'glfHomeFloor3Cloakroom',
        position: new Vector3(-6, 2, -8)
      },
      {
        key: 'glfHomeFloor3Balcony',
        position: new Vector3(-6, 2, -8)
      },
      {
        key: 'glfHomeFloor3Staircase',
        position: new Vector3(-6, 2, -8)
      },
    ],
    interactivePoints: [
      {
        key: 'myWeedingPhoto',
        name: '我的结婚照',
        description: '比较满意的几张',
        position: new Vector3(-6, 2, -8),
        cover: new URL('@/assets/thing.jpg', import.meta.url).href,
      },
      {
        key: 'originCenterHouse',
        name: '客厅',
        description: '以前这里是一个客厅',
        position: new Vector3(-6, 2, -8),
        cover: new URL('@/assets/thing.jpg', import.meta.url).href,
      },
      {
        key: 'originLeftHouse',
        name: '以前的卧室',
        description: '以前这里是爸爸妈妈的卧室',
        position: new Vector3(-6, 2, -8),
        cover: new URL('@/assets/thing.jpg', import.meta.url).href,
      },
    ]
  },
  glfHomeFloor3Gym: {
    name: '健身房',
    description: '我的健身房',
    floor: 2,
    map: new URL('@/assets/map_study_room.jpg', import.meta.url).href,
    position: new Vector3(0, 0, 0),
    visibleRoom: [
      {
        key: 'glfHomeFloor3Bedroom',
        position: new Vector3(-6, 2, -8)
      },
    ],
    interactivePoints: [
      {
        key: 'originMyBedRoom',
        name: '小时候的卧室',
        description: '去年这里还是我的卧室呢',
        position: new Vector3(-6, 2, -8),
        cover: new URL('@/assets/thing.jpg', import.meta.url).href,
      },
    ]
  },
  glfHomeFloor3MyWc: {
    name: '厕所',
    description: '我的房间的厕所',
    floor: 2,
    map: new URL('@/assets/map_study_room.jpg', import.meta.url).href,
    position: new Vector3(0, 0, 0),
    visibleRoom: [
      {
        key: 'glfHomeFloor3Bedroom',
        position: new Vector3(-6, 2, -8)
      },
    ]
  },
  glfHomeFloor3Cloakroom: {
    name: '衣帽间',
    description: '我的房间的衣帽间',
    floor: 2,
    map: new URL('@/assets/map_study_room.jpg', import.meta.url).href,
    position: new Vector3(0, 0, 0),
    visibleRoom: [
      {
        key: 'glfHomeFloor3Bedroom',
        position: new Vector3(-6, 2, -8)
      },
    ]
  },
  glfHomeFloor3Balcony: {
    name: '阳台',
    description: '三楼阳台',
    floor: 2,
    map: new URL('@/assets/map_study_room.jpg', import.meta.url).href,
    position: new Vector3(0, 0, 0),
    visibleRoom: [
      {
        key: 'glfHomeFloor3Bedroom',
        position: new Vector3(-6, 2, -8)
      },
    ]
  },
  glfHomeFloor4Attic: {
    name: '阁楼',
    description: '顶楼阁楼',
    floor: 3,
    floorDown: true,
    map: new URL('@/assets/map_study_room.jpg', import.meta.url).href,
    position: new Vector3(0, 0, 0),
  }
}

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
  cover: string
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
  index?: boolean
  interactivePoints?: InteractivePoint[]
  visibleRoom?: VisibleRoom[]
  floorDown?: boolean 
  floorUp?: boolean 
}

export type RoomData = {
  [roomKey: string]: RoomDataObject
}