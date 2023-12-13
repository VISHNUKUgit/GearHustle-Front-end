import React from 'react'
import Step from '../Components/Step'
import StepInp from '../Components/StepInp'

function SellToUs() {
  return (
    <div className="d-flex justify-content-center">
        <div className='container'>
            <Step step1/>
            <StepInp/>
        </div>
    </div>
  )
}

export default SellToUs