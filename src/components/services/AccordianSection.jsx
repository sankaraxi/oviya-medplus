import { useState } from "react";
import { accordianData } from "../../utils/services/accordianData";
import { FaPlus, FaMinus } from "react-icons/fa";

const AccordianSection = () => {
  const [expandedItemId, setExpandedItemId] = useState(null);

  const clickHandle = (id) => {
    // Toggle the expanded state for the clicked item
    setExpandedItemId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="w-full py-[49px] flex flex-col justify-between items-center bg-gradient-to-r from-gradientfrom to-gradientto">
      <div className="bg-white w-[708px]">
        {accordianData[0]?.serviceOne.map((item) => {
          const isExpanded = expandedItemId === item.id;

          return (
            <div
              key={item.id}
              className="min-h-[92px] p-5 border-b-[1px] border-plus cursor-pointer"
              onClick={() => clickHandle(item.id)}
            >
              <div className="flex justify-between items-center">
                <div className="w-1/12">
                  <div className="flex justify-center items-center rounded-full text-[19px] w-[36px] h-[36px] bg-black text-plus">
                    {isExpanded ? <FaMinus /> : <FaPlus />}
                  </div>
                </div>
                <div className="w-11/12">
                  <h1 className="text-[20px] text-plus capitalize">{item.title}</h1>
                </div>
              </div>
              {/* Display content only for the expanded item */}
              <div
                className={`transition-max-height duration-300 overflow-hidden ${
                  isExpanded ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <p className="text-[18px] font-heebo pt-5 text-justify leading-8 text-black">
                  {item.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AccordianSection;
