import React from 'react'
import DynamicServices from './services/DynamicServices'
import AccordianSection from './services/AccordianSection'
import StrategySection from './services/StrategySection';

export const Services = () => {

  const id = 3;

  return (
    <div>
        <DynamicServices />
        {id ===1 || id === 2 ? <AccordianSection />: <StrategySection />}
    </div>
  )
}
