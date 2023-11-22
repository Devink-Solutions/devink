'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { fadeIn } from '@/utils/motionTransitions'

export default function Circle() {
  return (
    <motion.div
      variants={fadeIn('left', 0.5)}
      initial="hidden"
      animate="show"
      exit="hidden "
      className="bottom-0 right-0 z-[-10] hidden md:inline-block"
    >
      <Image src="/assets/circles.png" width="350" height="350" className="h-full w-full" alt="Circle" />
    </motion.div>
  )
}
