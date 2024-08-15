import React from 'react'
import './styles.css';
export const Button = ({onClick}) => {
  return (
    <div className='containerButton'>
        <button onClick={onClick}>Enviar</button>
    </div>
  )
}
