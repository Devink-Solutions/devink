'use client'

import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { optionsParticles } from './particleOptions'

export default function Cover() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async () => { }, [])

  return (
    <div id="cover" className=" z-[-10]">
      <Particles
        className=" h-full w-full"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={optionsParticles}
      />
    </div>
  )
}
