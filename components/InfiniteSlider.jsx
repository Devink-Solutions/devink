import { motion } from 'framer-motion'
import {
  FaReact, FaRocket, FaPalette, FaChartLine, FaDesktop,
} from 'react-icons/fa'
import { v4 as uuidv4 } from 'uuid'

const carouselItems = [
  { IconComponent: FaReact, text: 'Development' },
  { IconComponent: FaRocket, text: 'Strategy' },
  { IconComponent: FaPalette, text: 'UX/UI Design' },
  { IconComponent: FaChartLine, text: 'Analytics' },
  { IconComponent: FaDesktop, text: 'Web Design' },
  { IconComponent: FaReact, text: 'More Development' },
]

const InfiniteSlider = () => {
  // Concatenar los elementos dos veces para crear la ilusión de un flujo infinito
  const slidingItems = [...carouselItems, ...carouselItems]

  return (
    <div className="relative m-auto flex h-[10vh] w-full items-center overflow-hidden shadow-sm shadow-cyan-bright">
      <motion.div
        className="flex"
        initial={{ x: 0 }}
        animate={{ x: '-50%' }}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 30, // Puedes ajustar la duración para cambiar la velocidad del desplazamiento
          ease: 'linear', // Movimiento constante sin aceleración o desaceleración
        }}
      >
        {slidingItems.map((item) => (
          <div
            key={uuidv4()} // Generar una clave única para cada elemento
            className=" flex h-full min-w-[240px] items-center justify-center rounded-md
             bg-bg-dark  text-white   transition-all duration-200 hover:scale-105 "
          >
            <item.IconComponent size={36} className="mr-4 text-current" />
            <span className="text-lg">{item.text}</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default InfiniteSlider
