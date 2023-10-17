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
import { BounceLoader } from 'react-spinners'
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
  const [previewCover, setPreviewCover] = useState('')

  const handleClick = useCallback(() => {
    alert('1111')
  }, [])

  const handlePreview = useCallback((cover: string, e: any) => {
    console.log(22222)
    e.stopPropagation()
    setPreviewCover(cover)
  }, [])

  const onClose = useCallback(() => {
    setPreviewCover('')
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
          const { visible, extraStyle, name, description, key, cover } = item
          return (
            <div
              style={{
                ...extraStyle,
                visibility: !!visible ? 'visible' : 'hidden'
              }}
              key={key}
              onClick={handleClick.bind(null, item)}
              className={styles['room-marker-item']}
            >
              <BounceLoader className={styles['room-marker-item-icon']} size={20} color='white' />
              <div className={styles['room-marker-item-main']}>
                <img src={cover} onClick={handlePreview.bind(null, cover)} />
                <div className={styles['room-marker-item-main-content']}>
                  <div>{name}</div>
                  <div>{description}</div>
                </div>
              </div>
            </div>
          )
        })
      }
      <div 
        className={styles['preview-modal']} 
        style={{
          visibility: previewCover ? 'visible' : 'hidden'
        }}
      >
      <div onClick={onClose} className={styles['preview-modal-mask']} />
        <div
          className={styles['preview-modal-main']}
        >
          <div className={styles['preview-modal-close']} onClick={onClose}>X</div>
          <img width={'100%'} src={previewCover} />
        </div>
      </div>
    </div>
  )

}

export default Marker