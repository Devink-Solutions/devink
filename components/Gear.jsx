import { VscSettingsGear } from "react-icons/vsc"
const Gear = ({ reverse }) => {
  return (
    <VscSettingsGear
      color="#d1d5db"
      className={reverse ? "gear-reverse" : "animate-spin-slow "}
      size={"3em"}
    />
  )
}
export default Gear
