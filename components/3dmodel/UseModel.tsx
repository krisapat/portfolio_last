'use client'

import { useEffect, useRef } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import {
  OrbitControls,
  Center,
  Environment,
  Float,
} from '@react-three/drei'
import { useInView } from 'framer-motion'
import MyModel from './MyModel'

const MyCanvas = () => {
  const { invalidate } = useThree()

  // ใช้สามค่าเพื่อประหยัดการ render
  useEffect(() => {
    const interval = setInterval(() => {
      invalidate()
    }, 1000 / 30) // render ~30 FPS
    return () => clearInterval(interval)
  }, [invalidate])

  return (
    <>
      <ambientLight intensity={1.2} />
      <directionalLight position={[2, 4, 2]} intensity={2.5} />
      <Center>
        <Float
          speed={0.5}
          floatIntensity={0.1}
          rotationIntensity={0.8}
          floatingRange={[-0.02, 0.02]}
        >
          <MyModel />
        </Float>
      </Center>
      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.5}
        enablePan={false}
      />
      <Environment preset="apartment" background={false} />
    </>
  )
}

const UseModel = () => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, margin: '-50px' }) // ตรวจแค่เกือบหลุดจอ

  return (
    <div ref={containerRef} className="w-full h-screen">
      {isInView && (
        <Canvas
          frameloop="demand"
          dpr={[0.5, 1.5]}
          camera={{ position: [0, 2.3, 4], fov: 45 }}
        >
          <MyCanvas />
        </Canvas>
      )}
    </div>
  )
}

export default UseModel
