import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { doctors } from '../assets/assets'

const Doctors = () => {

  const {speciality} = useParams()
  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate() 
  const {Doctors} = useContext(AppContext)

  const applyFilter = () => {
    let filtered = doctors;
    
    if (speciality) {
      filtered = filtered.filter(doc => doc.speciality === speciality);
    }
    
    if (searchQuery) {
      filtered = filtered.filter(doc => doc.Hospital.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    
    setFilterDoc(filtered);
  };

  useEffect(()=>{
    applyFilter()
  },[doctors,speciality,searchQuery])
  return (
        <div className='sm:mx-2'>
          <div className="flex items-center justify-end p-5">
          <div className="rounded-lg border border-gray-300">
            <div className="flex">
              <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
                <svg
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="pointer-events-none absolute w-5 fill-gray-500 transition"
                >
                  <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z" />
                </svg>
              </div>
              <input
                type="text"
                className="w-full max-w-[300px] bg-white pl-2 text-base font-sm outline-0"
                placeholder="Search by Hospitals....."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                id=""
              />
              <input
                type="button"
                value="Search"
                className="bg-primary p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"
              />
            </div>
          </div>
        </div>
        <p className='text-gary-600'>View Doctors Based on Their Specialties</p>
        <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
          <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`} onClick={()=>setShowFilter(prev => !prev)}>Filters</button>
          <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
            <p onClick={()=> {speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician'); scrollTo(0,0)}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "General physician" ? "bg-indigo-100 text-black" : ""}`}>General physician</p>
            <p onClick={()=> {speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist'); scrollTo(0,0)}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gynecologist" ? "bg-indigo-100 text-black" : ""}`}>Gynecologist</p>
            <p onClick={()=> {speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist'); scrollTo(0,0)}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Dermatologist" ? "bg-indigo-100 text-black" : ""}`}>Dermatologist</p>
            <p onClick={()=> {speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians'); scrollTo(0,0)}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Pediatricians" ? "bg-indigo-100 text-black" : ""}`}>Pediatricians</p>
            <p onClick={()=> {speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist'); scrollTo(0,0)}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Neurologist" ? "bg-indigo-100 text-black" : ""}`}>Neurologist</p>
            <p onClick={()=> {speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist'); scrollTo(0,0)}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gastroenterologist" ? "bg-indigo-100 text-black" : ""}`}>Gastroenterologist</p>
            <p onClick={()=> {speciality === 'Surgery' ? navigate('/doctors') : navigate('/doctors/Surgery'); scrollTo(0,0)}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Surgery" ? "bg-indigo-100 text-black" : ""}`}>Surgery</p>
            <p onClick={()=> {speciality === 'Anaesthesiology' ? navigate('/doctors') : navigate('/doctors/Anaesthesiology'); scrollTo(0,0)}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Anaesthesiology" ? "bg-indigo-100 text-black" : ""}`}>Anaesthesiology</p>
            <p onClick={()=> {speciality === 'Ophthalmology' ? navigate('/doctors') : navigate('/doctors/Ophthalmology'); scrollTo(0,0)}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Ophthalmology" ? "bg-indigo-100 text-black" : ""}`}>Ophthalmology</p>
            <p onClick={()=> {speciality === 'Psychiatry' ? navigate('/doctors') : navigate('/doctors/Psychiatry'); scrollTo(0,0)}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Psychiatry" ? "bg-indigo-100 text-black" : ""}`}>Psychiatry</p>
            <p onClick={()=> {speciality === 'Plastic Surgery' ? navigate('/doctors') : navigate('/doctors/Plastic Surgery'); scrollTo(0,0)}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Plastic Surgery" ? "bg-indigo-100 text-black" : ""}`}>Plastic Surgery</p>
            <p onClick={()=> {speciality === 'Dentist' ? navigate('/doctors') : navigate('/doctors/Dentist'); scrollTo(0,0)}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Dentist" ? "bg-indigo-100 text-black" : ""}`}>Dentist</p>
            <p onClick={()=> {speciality === 'Paediatrics' ? navigate('/doctors') : navigate('/doctors/Paediatrics'); scrollTo(0,0)}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Paediatrics" ? "bg-indigo-100 text-black" : ""}`}>Paediatrics</p>
            <p onClick={()=> {speciality === 'Medicine' ? navigate('/doctors') : navigate('/doctors/Medicine'); scrollTo(0,0)}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Medicine" ? "bg-indigo-100 text-black" : ""}`}>Medicine</p>
            <p onClick={()=> {speciality === 'Shoulder and Sports Injuries' ? navigate('/doctors') : navigate('/doctors/Shoulder and Sports Injuries'); scrollTo(0,0)}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Shoulder and Sports Injuries" ? "bg-indigo-100 text-black" : ""}`}>Shoulder and Sports Injuries</p>
            <p onClick={()=> {speciality === 'Oncosurgery' ? navigate('/doctors') : navigate('/doctors/Oncosurgery'); scrollTo(0,0)}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Oncosurgery" ? "bg-indigo-100 text-black" : ""}`}>Oncosurgery</p>
            <p onClick={()=> {speciality === 'Orthopedics' ? navigate('/doctors') : navigate('/doctors/Orthopedics'); scrollTo(0,0)}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Orthopedics" ? "bg-indigo-100 text-black" : ""}`}>Orthopedics</p>
          </div>
          <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
            {filterDoc.map((item,index)=>(
                <div onClick={()=>navigate(`/appointment/${item.id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                    <img className='w-60 h-50 object-cover bg-blue-50' src={item.image} alt='' />
                    <div className='p-4'>
                        <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                            <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                        </div>
                        <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                        <p className='text-gray-600 text-sm'>{item.speciality}</p>
                        <p className='text-gray-600 text-sm'>{item.Hospital}</p>
                    </div>
                </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Doctors