import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Radio from '../components/Radio';

const Hospitals = () => {
  const navigate = useNavigate();
  const { hospitals } = useContext(AppContext);

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredHospitals = hospitals.filter((hospital) =>
    hospital.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='sm:mx-2'>
      <div className="flex items-center justify-left p-5">
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
              placeholder="Search Hospitals....."
              value={searchQuery}
              onChange={handleSearchChange}
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
      <div className='w-full grid grid-row-auto gap-4 gap-y-6'>
        {filteredHospitals.map((item, index) => {
          // Parse the address if it's a JSON string
          const address = typeof item.address === 'string' ? JSON.parse(item.address) : item.address;

          return (
            <div
              onClick={() => navigate(`/about-hospitals/${item.id}/${item.name}`)}
              className='flex flex-cols border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'
              key={index}
            >
              <img className='w-60 h-50 object-cover bg-blue-50' src={item.image} alt='' />
              <div className='p-4'>
                <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                <p className='text-gray-600 text-sm'>{item.speciality}</p>
                <p className='text-gray-900 text-base font-medium'>Address:</p>
                <p className='text-gray-600 text-sm'>{address.line1}</p>
                <p className='text-gray-600 text-sm'>{address.line2}</p>
                <p className='text-gray-900 text-base font-medium'>
                  Phone: <span className='text-gray-600 text-sm'>{item.phone}</span>
                </p>
                <div>
                  <p className='flex items-center gap-1 text-lg font-medium text-gray-900 mt-3'>
                    User Ratings: <Radio />
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hospitals;
