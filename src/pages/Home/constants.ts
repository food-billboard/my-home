import { Vector3 } from 'three'

// 房间数据 对象
export const ROOM_DATA: RoomData = {
  test1: {
    name: '测试',
    floor: 0,
    map: new URL('@/assets/map_living_room.jpg', import.meta.url).href,
    position: new Vector3(0, 0, 0),
    index: true,
    visibleRoom: [
      {
        key: 'test2',
        position: new Vector3(-6, 2, -8)
      },
      {
        key: 'test4',
        position: new Vector3(-12, 2, 15)
      }
    ],
    interactivePoints: [
      {
        key: '2',
        name: '测试111',
        description: '这是一个测试物品',
        position: new Vector3(-6, 2, -8),
        cover: new URL('@/assets/thing.jpg', import.meta.url).href,
      }
    ]
  },
  test4: {
    name: '测试22222',
    floor: 0,
    map: new URL('@/assets/floor_1.jpeg', import.meta.url).href,
    position: new Vector3(0, 0, 0),
    index: true,
    visibleRoom: [
      {
        key: 'test·',
        position: new Vector3(0, 0, 0)
      }
    ],
    interactivePoints: []
  },
  test2: {
    name: '测试2222',
    floor: 0,
    map: new URL('@/assets/map_bed_room.jpg', import.meta.url).href,
    position: new Vector3(0, 0, 0),
    interactivePoints: [
      {
        key: '4',
        name: '测试111',
        description: '这是一个测试物品',
        position: new Vector3(0, 0, 0),
        cover: new URL('@/assets/thing.jpg', import.meta.url).href,
      }
    ]
  },
  test3: {
    name: '测试3333',
    floor: 1,
    index: true,
    map: new URL('@/assets/map_study_room.jpg', import.meta.url).href,
    position: new Vector3(0, 0, 0),
    interactivePoints: [
      {
        key: '5',
        name: '测试222',
        description: '这是一个测试物品2',
        position: new Vector3(0, 0, 0),
        cover: new URL('@/assets/thing.jpg', import.meta.url).href,
      }
    ]
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
  description: string
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
  map: string
  position: Vector3
  index?: boolean
  interactivePoints?: InteractivePoint[]
  visibleRoom?: VisibleRoom[]
}

export type RoomData = {
  [roomKey: string]: RoomDataObject
}