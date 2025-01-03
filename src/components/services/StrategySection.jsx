import { strategyData } from '../../utils/services/accordianData'

console.log(strategyData)

const StrategySection = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <h1 className='font-oswald text-center font-semibold text-heading text-[28px]'>Oviya MedSafe has formed strong strategic alliances where we can provide
        <br/>the following services:</h1>
        <div className='w-[280px] h-[283px] bg-white shadow-xl flex flex-col items-center justify-center mt-10'>
            <div>
                <img src={strategyData[0]?.image_id} alt="service" className='' />
            </div>
            <p className='pt-7 font-bold'>{strategyData[0].title}</p>
        </div>
    </div>
  )
}

export default StrategySection