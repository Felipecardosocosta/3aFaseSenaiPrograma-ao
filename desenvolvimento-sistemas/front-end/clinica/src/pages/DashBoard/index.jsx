import React from 'react'
import PatientCounter from '../../components/counters/PatientCounter'
import ConsultCounter from '../../components/counters/ConsultCounter'
import ExamsCounter from '../../components/counters/ExamsCounter'

const DashBoard = () => {
  return (
    <div >
      <h1 className='text-xl font-bold text-cyan-800 mb-6'>Dashboard </h1>
      
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
        <PatientCounter/>
        <ConsultCounter/>
        <ExamsCounter/>
      </div>

      <h2>Lista de pacientes</h2>
      
      
      
      </div>
  )
}

export default DashBoard