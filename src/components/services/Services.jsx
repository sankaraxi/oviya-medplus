import { servicesData } from "../../utils/services/servicesdata"

const Services = () => {

  console.log(servicesData[0])
  return (
    <div id={servicesData[0]?.id} className="p-36">
        {/* Content */}
        <div className="w-6/12 ">
            <h1 className="font-oswald text-[32px] font-bold text-heading">{servicesData[0]?.title}</h1>
            <p className="text-[18px] pt-5 text-justify leading-8">{servicesData[0]?.description}</p>
        </div>
        {/* Image */}
        <div className="w-5/12">
            <div>
              
            </div>
        </div>
    </div>
  )
}

export default Services