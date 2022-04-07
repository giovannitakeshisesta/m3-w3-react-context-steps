import React from 'react'
import FourthContext, { useFourth } from '../contexts/FourtContext'

export default function FourthContextPage() {

    const color = useFourth(FourthContext)

  return (
    <div className='firstContext'>
    <h3>FOURTH CONTEXT</h3>
    <h2>Locale Storage</h2>
    <p>To store key and value:   localStorage.setItem(KEY, VALUE)</p>
    <p>To get values:   localStorage.getItem(KEY)</p>

    <button  onClick={color.toggleColor}
    className='btn btn-warning mb-3 mt-3'> 
    change the color of the navbar!
    </button>

    <p>the color now is : <b>{color.color}</b></p>
    </div>
  )
}
