import React from 'react'
import './Header.scss'
import headerLogo from '../../assets/png/airbnbLogo.png'

export default function Header() {
  return (
    <div className='header'>
        <img src={headerLogo} alt="" className='headerLogo'/>
    </div>
  )
}
