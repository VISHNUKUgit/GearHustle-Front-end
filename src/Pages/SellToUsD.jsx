import React from 'react'
import Step from '../Components/Step'
import StepInpD from '../Components/StepInpD'

function SellToUsD() {
  return (
    <div className="d-flex justify-content-center">
        <div className='container'>
            <Step step2={true}/>
            <StepInpD/>
            
        </div>
    </div>
  )
}

export default SellToUsD