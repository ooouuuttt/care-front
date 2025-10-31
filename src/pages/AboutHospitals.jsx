import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useParams, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import Radio from '../components/Radio'

const AboutHospitals = () => {

    const { hospitals, doctors } = useContext(AppContext)
    const { hospId, hospName } = useParams()
    const [hospInfo, setHospInfo] = useState(null)
    const [docList, setDocList] = useState([]) 
    const navigate = useNavigate()

    const fetchHosInfo = async () => {
        const hospital = hospitals.find(hosp => hosp.id === Number(hospId))
        setHospInfo(hospital)
    }

    const fetchDocList = async () => {
        const relatedDoctors = doctors.filter(doc => doc.hospital === hospName) 
        setDocList(relatedDoctors)
    }

    useEffect(() => {
        if (hospitals.length) fetchHosInfo() 
    }, [hospitals, hospId])

    useEffect(() => {
        if (doctors.length && hospInfo) fetchDocList()
    }, [doctors, hospInfo])

    return hospInfo && (
        <div className='sm:mx-2 mt-2'>
            {/* --------- Hospital Details --------*/}
            <div className='flex flex-col sm:flex-row gap-4'>
                <div>
                    <img className='bg-primary w-full h-60 sm:max-w-72 rounded-lg' src={hospInfo.image} alt={hospInfo.name} />
                </div>
                <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
                    <p className='flex items-center sap-2 text-2xl font-medium text-gray-900'>
                        {hospInfo.name}
                        <img className='w-5 mx-2' src={assets.verified_icon} alt="Verified Icon" />
                    </p>
                    <div>
                        <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>Specialities</p>
                        <p className='flex items-center gap-2 text-sm mt-1 text-gray-600'>{hospInfo.speciality}</p>
                    </div>

                    {/*---- Hospital About------ */}
                    <div>
                        <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>About <img src={assets.info_icon} alt="Info Icon" /></p>
                        <p className='text-sm text-gray-500 max-w-[1200px] mt-1'>{hospInfo.about}</p>
                    </div>

                    <div>
                        <p className='flex items-center gap-1 text-lg font-medium text-gray-900 mt-3'>User Ratings: <Radio /></p>
                    </div>
                </div>
            </div>

            {/* --------- Doctors Section -------- */}
            <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
                <h1 className='text-3xl font-medium'>Doctors</h1>
                <div className='w-3/4 grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0 mx-auto'>
                {docList.slice(0, 4).map((doc, index) => (
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
            {docList.length > 5 && (
                <button onClick={() => { navigate(`/hospdoc/${hospId}`); window.scrollTo(0, 0) }} className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10'>more</button>
            )}
            </div>
        </div>
    )
}

export default AboutHospitals
