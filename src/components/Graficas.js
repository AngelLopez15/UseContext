import React, {useContext} from 'react'
import {SumaContext} from './SumaContext'

export default function Graficas() {
  
  const sumaContext = useContext(SumaContext)
  
  return (
    <div>
      <h1>Grafias: {sumaContext}</h1>
    </div>
  )
}
