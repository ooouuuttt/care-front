import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopHospitals = () => {

    const navigate = useNavigate()
    const { hospitals } = useContext(AppContext)

    return (
      <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
        <h1 className='text-3xl font-medium'>Top Hospitals</h1>
        <p className='sm:w-1/3 text-center text-sm'>Providing World-Class Care, Just a Step Away</p>
        <blockquote className="mt-4 text-base text-gray-500">
          "Your health deserves the best. Explore our curated list of trusted hospitals and find the right care at the right place."
        </blockquote>
        <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
          {hospitals.slice(0, 5).map((item, index) => {
            // Parse the address if it is a JSON string
            const address = typeof item.address === 'string' ? JSON.parse(item.address) : item.address;

            return (
              <div 
                onClick={() => { navigate(`/about-hospitals/${item.id}/${item.name}`); scrollTo(0, 0); }}
                className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' 
                key={index}
              >
                <img className='w-50 h-48 object-cover' src={item.image} alt='' />
                <div className='p-4'>
                  <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                  <p className='text-gray-800 text-base'>Address:</p>
                  <p className='text-gray-600 text-sm'>{address.line1}</p>
                  <p className='text-gray-600 text-sm'>{address.line2}</p>
                </div>
              </div>
            );
          })}
        </div>
        <button 
          onClick={() => { navigate('/hospitals'); scrollTo(0, 0); }} 
          className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10'
        >
          more
        </button>
      </div>
    )
}

export default TopHospitals
