import { useEffect, useState } from 'react'
import { EVENT, emitter } from '../../utils/mitt'
import { ROOM_DATA } from '../../constants'
import styles from './index.less'

const TinyMap = ({ currentRoom }: { currentRoom: string }) => {

  const [ rotate, setRotate ] = useState(0)
    
  const { thumbPosition } = ROOM_DATA[currentRoom] || {} 

  useEffect(() => {
    function listener(event: any) {
      const { camera, controls } = event as { camera: THREE.PerspectiveCamera, controls: any }
      const dirX = camera.position.x - controls.target.x
      const dirZ = camera.position.z - controls.target.z
      const theta = Math.atan2(dirX, dirZ) * 180 / Math.PI;
      setRotate(theta)
    }

    emitter.on(EVENT.THREE_INSTANCE_TICK, listener)
  }, [])

  return (
    <div className={styles['tiny-map']}>
      <div
        className={styles['tiny-map-pointer']}
        style={{
          transform: `rotate(${rotate}deg)`,
          ...thumbPosition,
        }}
      />
    </div>
  )

}

export default TinyMap