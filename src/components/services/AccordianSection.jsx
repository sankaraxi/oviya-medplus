import { accordianData } from "../../utils/services/accordianData"

const AccordianSection = () => {
    console.log(accordianData[0])
  return (
    <div className='w-full bg-gradient-to-r from-gradientfrom to-gradientto'>
        <div className="p-36 flex justify-between items-center bg-white ">
            {
                accordianData[0]?.serviceOne?.map((item) => () => {
                    return (
                        <div key={item.id} className="w-6/12 ">
                            <h1 className="font-oswald text-[32px] font-bold text-heading uppercase">{item.title}</h1>
                            <p className="text-[18px] pt-5 text-justify leading-8">{item.content}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default AccordianSection