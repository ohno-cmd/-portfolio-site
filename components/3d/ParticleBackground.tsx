'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  let time = 0

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    containerRef.current.appendChild(renderer.domElement)

    camera.position.z = 50

    // Create multiple particle systems for more dynamic effect
    const particleCount = 500
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const velocities = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)

    // Color palette for excitement: orange, red, pink, yellow
    const colorPalette = [
      new THREE.Color(0xFF6B35), // neon-orange
      new THREE.Color(0xFF0000), // red
      new THREE.Color(0xFFD700), // gold
      new THREE.Color(0xFF1493), // deep pink
      new THREE.Color(0xFF4500), // orange-red
    ]

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 250
      positions[i + 1] = (Math.random() - 0.5) * 250
      positions[i + 2] = (Math.random() - 0.5) * 250

      velocities[i] = (Math.random() - 0.5) * 1.5
      velocities[i + 1] = (Math.random() - 0.5) * 1.5
      velocities[i + 2] = (Math.random() - 0.5) * 1.5

      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)]
      colors[i] = color.r
      colors[i + 1] = color.g
      colors[i + 2] = color.b
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const material = new THREE.PointsMaterial({
      size: 1.2,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.8,
      vertexColors: true,
    })

    const particles = new THREE.Points(geometry, material)
    scene.add(particles)

    // Mouse tracking
    let mouseX = 0
    let mouseY = 0

    const onMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener('mousemove', onMouseMove)

    // Animation loop - more dynamic and exciting
    const animate = () => {
      requestAnimationFrame(animate)
      time += 0.01

      const positionAttribute = geometry.getAttribute('position')
      const positions = positionAttribute.array as Float32Array

      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] += velocities[i]
        positions[i + 1] += velocities[i + 1]
        positions[i + 2] += velocities[i + 2]

        // Explosive bounce effect
        if (Math.abs(positions[i]) > 125) {
          velocities[i] *= -1.2
          positions[i] = Math.sign(positions[i]) * 125
        }
        if (Math.abs(positions[i + 1]) > 125) {
          velocities[i + 1] *= -1.2
          positions[i + 1] = Math.sign(positions[i + 1]) * 125
        }
        if (Math.abs(positions[i + 2]) > 125) {
          velocities[i + 2] *= -1.2
          positions[i + 2] = Math.sign(positions[i + 2]) * 125
        }

        // Add some turbulence for more chaotic motion
        velocities[i] += Math.sin(time + i) * 0.02
        velocities[i + 1] += Math.cos(time + i) * 0.02
      }

      positionAttribute.needsUpdate = true

      // Fast, energetic rotation
      particles.rotation.x += 0.0008
      particles.rotation.y += 0.0012
      particles.rotation.z += 0.0005

      // Strong mouse interaction
      particles.rotation.x += mouseY * 0.01
      particles.rotation.y += mouseX * 0.01

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', handleResize)
      containerRef.current?.removeChild(renderer.domElement)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0" />
}
