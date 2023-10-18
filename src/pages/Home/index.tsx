import { useCallback, useEffect, useRef, useState } from 'react'
import { FadeLoader } from 'react-spinners'
import * as THREE from 'three'
import { 
  SphereGeometry, 
  MeshBasicMaterial, 
  Mesh,
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  Raycaster
} from 'three'
import { useSize, useUpdateEffect } from 'ahooks'
import { update as tweenUpdate } from 'three/examples/jsm/libs/tween.module.js'
import RoomChanger from './components/RoomChanger'
import Marker from './components/Marker'
import TinyMap from './components/TinyMap'
import WaterMark from './components/WaterMark'
import { sleep } from './utils'
import { OrbitControls } from './utils/OrbitControls'
import { ROOM_DATA_ARRAY, ROOM_DATA } from './constants'
import type { RoomDataObject } from './constants'
import { EVENT, emitter } from './utils/mitt'
import styles from './index.less'

// 贴图加载
const textLoader = new THREE.TextureLoader()
// 相机深度
const cameraZAxis = 8 

const Home = () => {

  const [ currentRoom, setCurrentRoom ] = useState<string>(ROOM_DATA_ARRAY[0].key)
  const [ changeRoomLoading, setChangeRoomLoading ] = useState(false)

  const containerRef = useRef(null)

  const renderer = useRef<THREE.WebGLRenderer>()
  const scene = useRef<THREE.Scene>()
  const targetScene = useRef<THREE.Scene>()
  const camera = useRef<THREE.PerspectiveCamera>()
  const rayCaster = useRef<Raycaster>(new Raycaster())
  const controls = useRef<any>()

  const roomRef = useRef<THREE.Mesh>()

  const { width=0, height=0 } = useSize(() => containerRef.current!) || {}

  // 场景切换
  const onRoomChange = useCallback((currentRoom: string) => {
    setCurrentRoom(currentRoom)
  }, []) 

  // 场景创建
  async function createRoom({ name, map, position }: RoomDataObject) {
    const timestamps = Date.now()
    setChangeRoomLoading(true)
    async function loadMap() {
      let mapResult!: THREE.Texture;
      await new Promise<void>((resolve) => {
        mapResult = textLoader.load(map, () => resolve())
      });
      return mapResult
    }
    const isInit = !roomRef.current
    const mapResult = await loadMap()
    if(isInit) {
      const geometry = new SphereGeometry(16, 256, 256);
      geometry.scale(1, 1, -1);
      const material = new MeshBasicMaterial({
        side: THREE.DoubleSide,
      });
      roomRef.current = new Mesh(geometry, material);
      roomRef.current.rotation.y = Math.PI / 2
    }

    // if(!isInit) await sleep(Math.max(2000 - Date.now() + timestamps, 0));

    setChangeRoomLoading(false);

    (roomRef.current!.material as THREE.MeshBasicMaterial).map = mapResult

    roomRef.current!.name = name 
    // roomRef.current!.position.set(position.x, position.y, position.z)

    if(isInit) scene.current?.add(roomRef.current!)

  }

  // 交互点显示检测
  function interactivePointRayCaster() {
    emitter.emit(EVENT.MARKER_RAY_CASTER, {
      callback: function(points: { position: THREE.Vector3, [key: string]: any }[]) {
        return points.map(point => {
          const newPoint: any = {
            ...point,
            visible: false 
          }
          // 获取2D屏幕位置
          const screenPosition = point.position.clone();
          const pos = screenPosition.project(camera.current!);
          rayCaster.current.setFromCamera(screenPosition as any, camera.current!);
          const intersects = rayCaster.current.intersectObjects(scene.current!.children, true);
          if (intersects.length === 0) {
            // 未找到相交点，显示
            newPoint.visible = true 
          } else {
            // 找到相交点
            // 获取相交点的距离和点的距离
            const intersectionDistance = intersects[0].distance;
            const pointDistance = point.position.distanceTo(camera.current!.position);
            // 相交点距离比点距离近，隐藏；相交点距离比点距离远，显示
            newPoint.visible = intersectionDistance >= pointDistance
          }
          newPoint.visible = pos.z < 1
          const translateX = screenPosition.x * width * 0.5;
          const translateY = -screenPosition.y * height * 0.5;
          newPoint.extraStyle = {
            transform: `translateX(${translateX}px) translateY(${translateY}px)`
          }
          return newPoint
        })
      }
    })
  }

  // 普通three实例共享
  function normalThreeInstanceTick() {
    emitter.emit(EVENT.THREE_INSTANCE_TICK, {
      camera: camera.current,
      controls: controls.current
    })
  }

  // 初始化
  function initThree() {

    let done = false 

    // 初始化
    if(!renderer.current) {
      // 初始化渲染器
      const canvas = document.querySelector('canvas#my-house')
      renderer.current = new WebGLRenderer({ canvas: canvas! })
      renderer.current.setSize(width, height)
      renderer.current.setPixelRatio(Math.min(window.devicePixelRatio, 2))

      // 初始化场景
      scene.current = new Scene()
      targetScene.current = new Scene()

      // 初始化相机
      camera.current = new PerspectiveCamera(55, width / height, 0.1, 1000)
      camera.current.position.set(0, 0, 2)
      scene.current.add(camera.current)

      // 镜头控制器
      controls.current = new OrbitControls(camera.current, renderer.current.domElement)
      controls.current.target.set(0, 0, 0)
      // 转动惯性
      controls.current.enableDamping = true;
      // 禁止平移
      controls.current.enablePan = false;
      // 缩放限制
      controls.current.maxDistance = 12;
      // 垂直旋转限制
      controls.current.minPolarAngle = Math.PI / 2;
      controls.current.maxPolarAngle = Math.PI / 2;


    }
    // 页面尺寸发生变化
    else {
      // 更新渲染
      renderer.current.setSize(width, height);
      renderer.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      // 更新相机
      if(camera.current) {
        camera.current.aspect = width / height;
        camera.current.updateProjectionMatrix();
      }
    }

    // 动画
    const tick = () => {
      interactivePointRayCaster()
      normalThreeInstanceTick()
      controls.current?.update();
      tweenUpdate()
      renderer.current?.render(scene.current!, camera.current!);
      if(!done) window.requestAnimationFrame(tick);
    };
    tick();

    return () => {
      done = true 
    }

  }

  useEffect(() => {
    if(!width && !height) return 
    const dispose = initThree()
    createRoom(ROOM_DATA_ARRAY[0])
    return dispose
  }, [width, height])

  useUpdateEffect(() => {
    const currentRoomData = ROOM_DATA[currentRoom]
    createRoom(currentRoomData)
    // const x = currentRoomData.position.x
    // const y = currentRoomData.position.y
    // const z = currentRoomData.position.z 

    // Animations.animateCamera(camera.current!, controls.current, { x, y, z: cameraZAxis }, { x, y, z }, 1600);

  }, [currentRoom])

  return (
    <div className={styles['home-page']} ref={containerRef}>
      <canvas 
        id="my-house" 
        style={changeRoomLoading ? {
          filter: 'blur(10px)'
        } : {}}
      />
      {
        !changeRoomLoading && (
          <>
            <RoomChanger 
              currentRoom={currentRoom}
              onRoomChange={onRoomChange}
            />
            <Marker
              currentRoom={currentRoom}
            />
          </>
        )
      }
      {
        changeRoomLoading && (
          <div className={styles['home-page-loading']}>
            <FadeLoader color='rgb(54, 215, 183)' />
          </div>
        )
      }
      <TinyMap 
        currentRoom={currentRoom}
      />
      <WaterMark />
    </div>
  )

}

export default Home 