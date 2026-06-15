'use client'

export default function ParticleBackground() {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/花火.mp4" type="video/mp4" />
      </video>
    </>
  )
}
