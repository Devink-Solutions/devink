import { motion } from 'framer-motion'
import {
  FaReact, FaRocket, FaPalette, FaChartLine, FaDesktop,
  FaCode, FaMobileAlt, FaDatabase, FaCloud, FaBug, FaUserShield,
} from 'react-icons/fa'
import { v4 as uuidv4 } from 'uuid'

const carouselItems = [
  { IconComponent: FaReact, text: 'Development' },
  { IconComponent: FaRocket, text: 'Strategy' },
  { IconComponent: FaPalette, text: 'UX/UI Design' },
  { IconComponent: FaChartLine, text: 'Analytics' },
  { IconComponent: FaDesktop, text: 'Web Design' },
  { IconComponent: FaReact, text: 'More Development' },
  { IconComponent: FaCode, text: 'Coding' },
  { IconComponent: FaMobileAlt, text: 'Mobile Apps' },
  { IconComponent: FaDatabase, text: 'Database Management' },
  { IconComponent: FaCloud, text: 'Cloud Services' },
  { IconComponent: FaBug, text: 'Bug Testing' },
  { IconComponent: FaUserShield, text: 'Cybersecurity' },
]

const InfiniteSlider = () => {
  // Duplica los elementos para crear la ilusión de flujo infinito
  const slidingItems = [...carouselItems, ...carouselItems]

  // Ajusta la duración según la velocidad deseada
  const duration = 100

  const slide = {
    animate: {
      x: ['0%', '-100%'], // Desplazamiento del 0% al 100% del ancho del contenedor
    },
    transition: {
      duration,
      repeat: Infinity, // Repetición infinita
      ease: 'linear', // Movimiento constante
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
            key={uuidv4()} // Clave única para cada elemento
            className="flex h-full min-w-[340px] items-center justify-center rounded-md bg-bg-dark text-white transition-all duration-200 hover:scale-105"
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
