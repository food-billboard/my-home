import { CSSProperties, useCallback, useEffect, useMemo, useState } from 'react'
import { throttle } from 'lodash'
import {
  ROOM_DATA,
  ROOM_DATA_ARRAY,
  MAX_ROOM_FLOOR,
  MIN_ROOM_FLOOR
} from '../../constants'
import type { RoomDataObject, VisibleRoom } from '../../constants'
import { emitter, EVENT } from '../../utils/mitt'
import styles from './index.less'
import markerStyle from '../Marker/index.less'

type RoomChangerProps = {
  currentRoom: string
  onRoomChange: (room: string) => void
}

type CustomRoomData = VisibleRoom & { key: string, visible: boolean, extraStyle: CSSProperties }

const RoomChanger = (props: RoomChangerProps) => {

  const { currentRoom, onRoomChange } = props

  const { floor } = ROOM_DATA[currentRoom]

  const [roomList, setRoomList] = useState<CustomRoomData[]>([])

  const handleFloorChange = useCallback((floor: number) => {
    const currentFloorRoomList = ROOM_DATA_ARRAY.filter(item => item.floor === floor)
    const indexRoom = currentFloorRoomList.find(item => !!item.index) || currentFloorRoomList[0]
    onRoomChange(indexRoom.key)
  }, [onRoomChange])

  useEffect(() => {
    function _listener(event: any) {
      const {
        callback
      } = event as {
        callback: (points: VisibleRoom[]) => CustomRoomData[]
      }
      const currentRoomData = ROOM_DATA[currentRoom]
      const { visibleRoom = [] } = currentRoomData
      const newVisibleRoom = callback(visibleRoom)
      setRoomList(newVisibleRoom)
    }
    const listener = throttle(_listener, 200)

    emitter.on(EVENT.MARKER_RAY_CASTER, listener)
    return () => {
      emitter.off(EVENT.MARKER_RAY_CASTER, listener)
    }
  }, [])

  return (
    <>
      <div className={styles['room-changer']}>
        {
          floor > MIN_ROOM_FLOOR && (
            <div
              key={'down'}
              className={styles['room-changer-item']}
              onClick={handleFloorChange.bind(null, floor - 1)}
            >
              下楼
            </div>
          )
        }
        {
          roomList
            .filter(room => !room.visible)
            .map(room => {
              const { key } = room
              const { name } = ROOM_DATA[key]
              return (
                <div
                  key={key}
                  className={styles['room-changer-item']}
                  onClick={onRoomChange.bind(null, key)}
                >
                  {name}
                </div>
              )
            })
        }
        {
          floor < MAX_ROOM_FLOOR && (
            <div
              key={'up'}
              className={styles['room-changer-item']}
              onClick={handleFloorChange.bind(null, floor + 1)}
            >
              上楼
            </div>
          )
        }
      </div>
      <div className={markerStyle['room-marker']}>
        {
          roomList
            .filter(room => room.visible)
            .map(room => {
              const { key, extraStyle = {} } = room
              const { name } = ROOM_DATA[key] 
              return (
                <div
                  key={key}
                  className={styles['room-changer-visible']}
                  onClick={onRoomChange.bind(null, key)}
                  style={extraStyle}
                >
                  {name}
                </div>
              )
            })
        }
      </div>
    </>
  )

}

export default RoomChanger