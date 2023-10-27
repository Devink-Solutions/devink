import { VscSettingsGear } from 'react-icons/vsc'

const Gear = ({ reverse }) => (
  <VscSettingsGear
    color="#5BC0BE"
    className={` ${reverse ? 'gear-reverse' : 'animate-spin-slow'} `}
    size="2.5em"
  />
)
export default Gear
