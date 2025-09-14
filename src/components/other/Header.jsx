import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'
const Header = (props) => {

  const logout=()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')

  }
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium text-white'>
        Hello 
        <br />
        <span className='text-3xl font-semibold text-white'>userName👋</span>
      </h1>
      <button
       onClick={logout}
       className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm'>
        Log out
      </button>
    </div>
  )
}

export default Header
