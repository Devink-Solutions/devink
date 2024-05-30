import { motion } from 'framer-motion'
import {
  FaReact, FaRocket, FaPalette, FaChartLine, FaDesktop,
  FaCode, FaMobileAlt, FaDatabase, FaCloud, FaBug, FaUserShield,
} from 'react-icons/fa'

const carouselItems = [
  { IconComponent: FaReact, text: 'Development' },
  { IconComponent: FaRocket, text: 'Strategy' },
  { IconComponent: FaPalette, text: 'UX/UI Design' },
  { IconComponent: FaChartLine, text: 'Analytics' },
  { IconComponent: FaDesktop, text: 'Web Design' },
  { IconComponent: FaMobileAlt, text: 'Mobile Apps' },
  { IconComponent: FaDatabase, text: 'Database Management' },
  { IconComponent: FaCloud, text: 'Cloud Services' },
  { IconComponent: FaBug, text: 'Bug Testing' },
  { IconComponent: FaUserShield, text: 'Cybersecurity' },
]

const InfiniteSlider = () => {
  const slidingItems = [...carouselItems, ...carouselItems, ...carouselItems]

  const duration = 100

  const slide = {
    animate: {
      x: ['0%', '-80%'],
    },
    transition: {
      duration,
      repeat: Infinity,
      ease: 'linear',
    },
  }

  return (
    <div className="relative z-50 flex h-[10vh] min-h-[90px] w-full items-center overflow-hidden bg-bg-dark shadow-md shadow-cyan-bright/40">
      <motion.div
        className="flex"
        initial={{ x: '0%' }}
        animate={slide.animate}
        transition={slide.transition}
      >
        {slidingItems.map((item) => (
          <div
            key={item.text}
            className="flex h-full min-w-[340px] items-center
            justify-center rounded-md bg-bg-dark text-white transition-all duration-200 hover:scale-105"
          >
            <item.IconComponent size={24} className="mr-2 text-current" />
            <span className="text-lg">{item.text}</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default InfiniteSlider
