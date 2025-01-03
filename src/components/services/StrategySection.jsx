import { strategyData } from '../../utils/services/accordianData'

console.log(strategyData)

const StrategySection = () => {
  return (
    <div className='flex flex-col items-center justify-center pt-5 pb-10'>
        <h1 className='font-oswald text-center font-semibold text-heading text-[28px]'>Oviya MedSafe has formed strong strategic alliances where we can provide
        <br/>the following services:</h1>
        <div className='w-9/12 flex flex-wrap justify-center items-center mt-10'>
            {
                strategyData.map((item) => (
                    <div key={item.id} className='w-[280px] h-[283px] rounded-lg mr-16 bg-white shadow-lg flex flex-col items-center justify-center mt-10'>
                        <div>
                            <img src={item?.image_id} alt="service" className='' />
                        </div>
                        <p className='pt-7 font-dmsans font-bold'>{item.title}</p>
                    </div>
                ) )
            }

        </div>
        
        
    </div>
  )
}

export default StrategySection