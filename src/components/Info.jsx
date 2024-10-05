import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cleanInfo } from '../store/infoSlice';

const Info = () => {
  const population = 8.07;
  
  const ynState = useSelector((state)=> state.yn.status)
  
  const userAge = useSelector((state) => state.poll?.age || [0, 0, 0, 0, 0]);
  const userGender = useSelector((state) => state.poll?.gender || [0, 0, 0]);
  const userReligion = useSelector((state) => state.poll?.religon || [0, 0, 0, 0, 0]);

  const dispatch = useDispatch();


  const cleanPoll = () => {
    dispatch(cleanInfo());
    console.log(userAge); 
  };

  return (
    <div className="w-2/6 shadow-lg">
     
      <div className="h-16 w-44 mt-2 ml-40 rounded-lg shadow-lg flex items-center justify-center">
        <div className="text-violet-600">Poll Info</div>
      </div>

     
      <div className="bg-white h-32 w-5/6 ml-16 mt-10 shadow-2xl rounded-lg">
        <div className='flex justify-center items-center'><div>Age</div></div>
        <div className=''>
         {ynState? (
             <div>
               <div className='flex mt-5'>
                <div>18-28: <span className='text-red-600'>{userAge[0]}</span><span className='text-blue-600'>0</span></div>
               <div className='ml-28'>28-35: <span className='text-red-600'>{userAge[1]}</span><span className='text-blue-600'>0</span></div>
              <div className='ml-24'>35-45: <span className='text-red-600'>{userAge[2]}</span><span className='text-blue-600'>0</span></div>
              </div>

              <div className='flex mt-5'>
              <div className=''>45-55:<span className='text-red-600'>{userAge[3]}</span><span className='text-blue-600'>0</span></div>
              <div className='ml-28'>55+:<span className='text-red-600'>{userAge[4]}</span><span className='text-blue-600'>0</span></div>
              </div>
              
             </div>
         ): (
          <div>
             <div>
               <div className='flex mt-5'>
                <div>18-28: <span className='text-red-600'>0</span><span className='text-blue-600'>{userAge[0]}</span></div>
               <div className='ml-28'>28-35: <span className='text-red-600'>0</span><span className='text-blue-600'>{userAge[1]}</span></div>
              <div className='ml-24'>35-45: <span className='text-red-600'>0</span><span className='text-blue-600'>{userAge[2]}</span></div>
              </div>

              <div className='flex mt-5'>
              <div className=''>45-55:<span className='text-red-600'>0</span><span className='text-blue-600'>{userAge[3]}</span></div>
              <div className='ml-28'>55+:<span className='text-red-600'>0</span><span className='text-blue-600'>{userAge[4]}</span></div>
              </div>
              
             </div>
          </div>
         )}
        </div>
      </div>

    
      <div className="bg-white h-28 w-5/6 ml-16 mt-5 rounded-lg shadow-2xl">
        <div className="flex items-center justify-center"><h1>Gender</h1></div>
        <div className=''>
          {ynState? (
              <div>
                <div>Male:<span className='text-red-600'>{userGender[0]}</span><span className='text-blue-600'>0</span></div>
                <div>Female: <span className='text-red-600'>{userGender[1]}</span><span className='text-blue-600'>0</span></div>
                <div>Others: <span className='text-red-600'>{userGender[3]}</span><span className='text-blue-600'>0</span></div>
              </div>
          ): (
            <div>
               <div>
                <div>Male:<span className='text-red-600'>0</span><span className='text-blue-600'>{userGender[0]}</span></div>
                <div>Female: <span className='text-red-600'>0</span><span className='text-blue-600'>{userGender[1]}</span></div>
                <div>Others: <span className='text-red-600'>0</span><span className='text-blue-600'>{userGender[2]}</span></div>
              </div>
            </div>
          )}
        </div>
      </div>

      
      <div className="bg-white h-28 w-5/6 ml-16 mt-5 rounded-lg shadow-2xl">
        <div className="flex items-center justify-center"><div>Religon</div></div>
        <div className=''>
         {ynState? (
             <div>
               <div className='flex mt-2'>
                <div>Hindu:<span className='text-red-600'>{userReligion[0]}</span><span className='text-blue-600'>0</span></div>
               <div className='ml-28'>Muslim:<span className='text-red-600'>{userReligion[1]}</span><span className='text-blue-600'>0</span></div>
              <div className='ml-20'>Christan:<span className='text-red-600'>{userReligion[2]}</span><span className='text-blue-600'>0</span></div>
              </div>

              <div className='flex mt-5'>
              <div className=''>Sikh:<span className='text-red-600'>{userReligion[3]}</span><span className='text-blue-600'>0</span></div>
              <div className='ml-28'>Buddhist:<span className='text-red-600'>{userReligion[4]}</span><span className='text-blue-600'>0</span></div>
              </div>
              
             </div>
         ): (
          <div>
          <div className='flex mt-2'>
           <div>Hindu:<span className='text-red-600'>0</span><span className='text-blue-600'>{userReligion[0]}</span></div>
          <div className='ml-28'>Muslim:<span className='text-red-600'>0</span><span className='text-blue-600'>{userReligion[1]}</span></div>
         <div className='ml-20'>Christan:<span className='text-red-600'>0</span><span className='text-blue-600'>{userReligion[2]}</span></div>
         </div>

         <div className='flex mt-5'>
         <div className=''>Sikh:<span className='text-red-600'>0</span><span className='text-blue-600'>{userReligion[3]}</span></div>
         <div className='ml-28'>Buddhist:<span className='text-red-600'>0</span><span className='text-blue-600'>{userReligion[4]}</span></div>
         </div>
         
        </div>
         )}
        </div>
      </div>

      
      <div className="bg-white mt-16 ml-10 h-20 w-5/6 text-2xl">
        Current Population: {population} Billion
      </div>

     
      <div className="bg-white h-10  ml-5 w-20 rounded-lg flex items-center justify-center">
        <button className="shadow-2xl bg-violet-600 rounded-lg text-white" onClick={cleanPoll}>Return</button>
      </div>
    </div>
  );
};

export default Info;
