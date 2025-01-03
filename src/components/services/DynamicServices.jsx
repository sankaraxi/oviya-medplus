import { servicesData } from "../../utils/services/servicesData"
import SQUARE from "../../assets/services/overlapSquare.png"

const DynamicServices = () => {
  const index = 0;
  return (
    <div id={servicesData[index]?.id} className="p-36 flex justify-between items-center">
        {/* Content */}
        <div className="w-6/12 ">
            <h1 className="font-oswald text-[32px] font-bold text-heading uppercase">{servicesData[index]?.title}</h1>
            <p className="text-[18px] text-left font-heebo pt-5 text-justify leading-8">{servicesData[index]?.description}</p>
        </div>
        {/* Image */}
        <div className="w-5/12 relative inset-0 flex justify-center">
          {/* Main Image */}
          <div className="relative z-10">
            <img 
              src={servicesData[index]?.image_id}
              alt="service"
              className="w-[416px] h-[416px]"
            />
          </div>

          {/* Square */}
          <div className="absolute top-4 left-[68px] z-0">
            <img 
              src={SQUARE}
              alt="square"
              className="w-[416px] h-[416px]"
            />
          </div>
        </div>

    </div>
  )
}

export default DynamicServices