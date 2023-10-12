import { Vector3 } from 'three'

export type RoomDataType = {
  name: string
  key: string 
  map: string 
  position: Vector3
}

export const ROOM_DATA: RoomDataType[] = [
  {
    name: '测试',
    key: '1',
    map: new URL('@/assets/map_living_room.jpg', import.meta.url).href,
    position: new Vector3(0, 0, 0)
  }
]

export type RoomData = {
  floor: number 
  
}