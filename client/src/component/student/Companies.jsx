import React from 'react'
import { assets } from '../../assets/assets'

const Companies = () => {
  return (
    <div className='pt-16'>
      <p className='text-base text-gray-500'>Trusted by</p>
      <div className='flex flex-wrap items-center justify-center gap-6 md:gap-16 md:mt-10 mt-5'>
        <img src={assets.microsoft_logo} alt="microsoft_logo" className='w-20 md:w-28' />
        <img src={assets.google_logo} alt="google_logo" className='w-20 md:w-28' />
        <img src={assets.foodpanda_logo} alt="foodpanda_logo" className='w-20 md:w-28' />
        <img src={assets.adobe_logo} alt="adobe_logo" className='w-20 md:w-28' />
        <img src={assets.bikash_logo} alt="bikash_logo" className='w-20 md:w-28' />
      </div>
    </div>
  )
}

export default Companies
