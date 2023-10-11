import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { 
  SphereGeometry, 
  MeshBasicMaterial, 
  TextureLoader, 
  Mesh,
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
} from 'three'
import { useSize } from 'ahooks'
import { Tween } from 'three/examples/jsm/libs/tween.module.js'
import { OrbitControls } from './utils/OrbitControls'
import styles from './index.less'

const Home = () => {

  const containerRef = useRef(null)

  const renderer = useRef<THREE.WebGLRenderer>()
  const scene = useRef<THREE.Scene>()
  const camera = useRef<THREE.PerspectiveCamera>()
  const controls = useRef<any>()

  const { width=0, height=0 } = useSize(() => containerRef.current!) || {}

  // 场景创建
  function createScene() {
    const geometry = new SphereGeometry(16, 256, 256);
    const material = new MeshBasicMaterial({
      // map: TextureLoader.load(map),
      // side: THREE.DoubleSide,
      color: 0xffffff
    });
    // geometry.scale(1, 1, -1);
    const room = new Mesh(geometry, material);
    room.position.set(200, 200, 200)
    console.log(room, 2222)
    return room 
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

      // 初始化相机
      camera.current = new PerspectiveCamera(65, width / height, 0.1, 1000)
      // camera.position.z = data.cameraZAxis 
      scene.current.add(camera.current)

      // 镜头控制器
      controls.current = new OrbitControls(camera.current, renderer.current.domElement)
      controls.current.target.set(0, 0, 0)
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
      controls.current?.update();
      // Tween && new Tween().update();
      renderer.current?.render(scene.current!, camera.current!);
      if(!done) window.requestAnimationFrame(tick);
    };
    tick();

    return () => {
      done = true 
    }

  }

  useEffect(() => {
    const dispose = initThree()

    const room = createScene()
    scene.current?.add(room)

    return dispose
  }, [width, height])

  return (
    <div className={styles['home-page']} ref={containerRef}>
      <canvas id="my-house" />
    </div>
  )

}

export default Home 