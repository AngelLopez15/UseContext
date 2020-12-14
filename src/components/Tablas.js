import React, {useContext} from 'react'
import {SumaContext} from './SumaContext'

export default function Tablas() {

  const sumaContext = useContext(SumaContext)

  return (
    <div>
      <h1>Tablas: {sumaContext} </h1>
    </div>
  )
}
