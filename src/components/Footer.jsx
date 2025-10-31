import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-0 bg-black'>
        <div className='flex flex-col sm:grid sm:mx-3 grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            {/* ---- Left Section ---- */}
            <div>
                <img className='mb-4 w-20 mt-4' src={assets.logo2} alt='' />
                <p className='w-full md:w-2/3 text-white leading-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>

            {/* ---- Center Section ---- */}
            <div className='mt-4'>
                <p className='text-xl text-white font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-white'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            {/* ---- Right Section ---- */}
            <div className='mt-4'>
                <p className='text-xl text-white font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-white'>
                    <li>+1-212-456-7890</li>
                    <li>murtaza@gamil.com</li>
                </ul>
            </div>
        </div>
        <div class="text-center">
            <hr className="inline-block w-[700px] border-t-2 border-indigo-600" />
            <p className="py-5 text-sm text-white bg-black">Copyright 2024@ CareConnect - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer