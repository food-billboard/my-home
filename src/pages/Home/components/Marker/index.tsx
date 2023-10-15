import { useCallback, useMemo, useEffect, useState, CSSProperties } from 'react'
import { 
  SphereGeometry, 
  MeshBasicMaterial, 
  Mesh,
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  Raycaster
} from 'three'
import { useGetState } from 'ahooks'
import { EVENT, emitter } from '../../utils/mitt'
import { ROOM_DATA } from '../../constants'
import type { InteractivePoint } from '../../constants'
import styles from './index.less'
import { throttle } from 'lodash'

type MarkerProps = {
  currentRoom: string 
}

type CustomInteractivePoint = InteractivePoint & { visible: boolean, extraStyle?: CSSProperties }

const Marker = (props: MarkerProps) => {

  const { currentRoom } = props
  
  const [ interactivePoints, setInteractivePoints ] = useState<CustomInteractivePoint[]>([])

  const handleClick = useCallback(() => {
    alert('1111')
  }, [])

  useEffect(() => {
    return 
    function _listener(event: any) {
      const { 
        callback
      } = event as { 
        callback: (points: InteractivePoint[]) => CustomInteractivePoint[]
      }
      const currentRoomData = ROOM_DATA[currentRoom]
      const { interactivePoints=[] } = currentRoomData
      const newInteractivePoints = callback(interactivePoints)
      setInteractivePoints(newInteractivePoints)
    }
    const listener = throttle(_listener, 200)

    emitter.on(EVENT.MARKER_RAY_CASTER, listener)
    return () => {
      emitter.off(EVENT.MARKER_RAY_CASTER, listener)
    }
  }, [])

  return (
    <div className={styles['room-marker']}>
      {
        interactivePoints.map(item => {
          const { visible, extraStyle, name, description, key } = item 
          return (
            <div
              style={{
                ...extraStyle,
                visibility: !!visible ? 'visible' : 'hidden'
              }}
              key={key}
              onClick={handleClick.bind(null, item)}
            >
              <div>
                <div>{name}</div>
                <div>{description}</div>
              </div>
            </div>
          )
        })
      }
    </div>
  )

}

export default Marker