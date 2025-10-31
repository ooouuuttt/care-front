import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate, useParams } from 'react-router-dom'

const HospDoc = () => {

    const {hospitals, doctors} = useContext(AppContext)
    const  { hospId } = useParams()
    const [hospInfo, setHospInfo] = useState(null)
    const [docList, setDocList] = useState([])
    const navigate = useNavigate()

    const fetchHosInfo = async () => {
        const hospital = hospitals.find(hosp => hosp.id === hospId)
        setHospInfo(hospital)
    }

    const fetchDocList = async () => {
        const relatedDoctors = doctors.filter(doc => doc.hospitalId === hospId) 
        setDocList(relatedDoctors)
    }

    useEffect(() => {
        if (hospitals.length) fetchHosInfo() 
    }, [hospitals, hospId])

    useEffect(() => {
        if (doctors.length && hospInfo) fetchDocList()
    }, [doctors, hospInfo])

  return (
    <div>
        <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
                <h1 className='text-3xl font-medium'>Doctors</h1>
                <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
                {docList.map((doc, index) => (
                    <div onClick={() => { navigate(`/appointment/${doc.id}`); window.scrollTo(0, 0) }} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                        <img className='w-full h-48 object-cover bg-blue-50' src={doc.image} alt={doc.name} />
                        <div className='p-4'>
                            <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                                <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                            </div>
                            <p className='text-gray-900 text-lg font-medium'>{doc.name}</p>
                            <p className='text-gray-600 text-sm'>{doc.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default HospDoc