import React from 'react'
import Navbar from '../components/Navbar'   
import { useState } from 'react'
import { assets } from '../assets/assets';
const Application = () => {

    const [isEdit, setIsEdit] = useState(false);
    const [resume, setResume] = useState(null);

    return (
      <>
      <Navbar />

      <div className='container px-4 min-h-[65vh] 2xl:px-20 mx-auto my-10'>
        <h2 className='text-xl font-semibold'>Your Resume</h2>
        <div className='flex gap-2 mb-6 mt-3'>
            {isEdit 
            ? <>
            <label htmlFor="resumeUpload">
                <p>Select Resume</p>
                <input id='resumeUpload' onChange={e => setResume(e.target.files[0])} accept="application/pdf" type='text' />
                <img src={assets.profile_upload_icon} alt="" />
            </label>
            
            </>:
            <div className='flex gap-2'>
                <a className='bg-blue-100 text-blue-600 px-4 py-2 rounded' href="">   Resume

                </a>
                <button onClick={()=>setIsEdit(true)} className='text-gray-500 border border-gray-300 rounded-lg px-4 py-2'>Edit</button>
                 
                </div>
                }

        </div>
      </div>
      
      
      
      
      
      
      
      
      
      
      </>
    )
}

export default Application
