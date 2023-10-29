import { useCallback, useEffect, useState, CSSProperties, useRef } from 'react'
import Marquee from 'react-fast-marquee'
import { BounceLoader } from 'react-spinners'
import * as THREE from 'three'
import Preview from '../Preview'
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

  const [interactivePoints, setInteractivePoints] = useState<CustomInteractivePoint[]>([])
  const [previewData, setPreviewData] = useState<{image: string[], visible: boolean}>({
    image: [],
    visible: false 
  })

  const handleClick = useCallback((target: CustomInteractivePoint) => {
    // alert('1111')
  }, [])

  const changeDataRef = useRef<{ [key: string]: { x: number, y: number, z: number } }>({})
  const handleChange = useCallback((pointKey: string, key: string, value: number, e: any) => {
    e.stopPropagation()
    changeDataRef.current[pointKey] = changeDataRef.current[pointKey] || { x: 0, y: 0, z: 0 };
    (changeDataRef.current[pointKey] as any)[key] += value 
  }, [])

  const handlePreview = useCallback((cover: string[], e: any) => {
    e.stopPropagation()
    setPreviewData({
      image: cover,
      visible: true 
    })
  }, [])

  const onClose = useCallback(() => {
    setPreviewData(prev => {
      return {
        ...prev,
        visible: false 
      }
    })
  }, [])

  useEffect(() => {
    function _listener(event: any) {
      const {
        callback
      } = event as {
        callback: (points: InteractivePoint[]) => CustomInteractivePoint[]
      }
      const currentRoomData = ROOM_DATA[currentRoom]
      const { interactivePoints = [] } = currentRoomData
      // const newInteractivePoints = callback(interactivePoints)
      const newInteractivePoints = callback(interactivePoints.map(item => {
        return {
          ...item,
          position: new THREE.Vector3(
            item.position.x + (changeDataRef.current?.[item.key]?.x || 0), 
            item.position.y + (changeDataRef.current?.[item.key]?.y || 0), 
            item.position.z + (changeDataRef.current?.[item.key]?.z || 0)
          )
        }
      }))
      setInteractivePoints(newInteractivePoints)
    }
    const listener = throttle(_listener, 200)

    emitter.on(EVENT.MARKER_RAY_CASTER, listener)
    return () => {
      emitter.off(EVENT.MARKER_RAY_CASTER, listener)
    }
  }, [])

  return (
    <>
      {
        interactivePoints.map(item => {
          const { visible, extraStyle, name, description, key, cover } = item
          const realCover = Array.isArray(cover) ? cover : [cover]
          return (
            <div
              style={{
                ...extraStyle,
                visibility: !!visible ? 'visible' : 'hidden'
              }}
              key={key}
              onClick={handleClick.bind(null, item)}
              className={styles['room-marker']}
            >
              <BounceLoader className={styles['room-marker-icon']} size={20} color='white' />
              <div className={styles['room-marker-main']}>
                <img src={realCover[0]} onClick={handlePreview.bind(null, realCover)} />
                <div className={styles['room-marker-main-content']}>
                  <div>{name}</div>
                  <Marquee speed={25} pauseOnHover>{description}</Marquee>
                </div>
              </div>
            </div>
          )
        })
      }
      <Preview
        visible={!!previewData.visible}
        onClose={onClose}
        value={previewData.image}
      />
    </>
  )

}

export default Marker