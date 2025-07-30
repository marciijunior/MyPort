import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export function Box() {
  const ref = useRef()

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01
      ref.current.rotation.x += 0.005
    }
  })

  return (
    <mesh ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}
