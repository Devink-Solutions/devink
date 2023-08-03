import Gear from './Gear'
const GearColumn = () => {
  return (
    <section className='hidden h-2/3 flex-col space-y-[-4px] md:flex'>
      <Gear reverse={true} />
      <Gear />
      <Gear reverse={true} />
      <Gear />
      <Gear reverse={true} />
      <Gear />
      <Gear reverse={true} />
      <Gear />
      <Gear reverse={true} />
      <Gear />
      <Gear reverse={true} />
    </section>
  )
}
export default GearColumn
