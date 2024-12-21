import React from 'react'
import Navbar from '../components/Navbar'   
import { useState } from 'react'
const Application = () => {

    const [isEdit, setIsEdit] = useState(false);

    return (
      <>
      <Navbar />

      <div className='container px-4 min-h-[65vh] 2xl:px-20 mx-auto my-10'>
        <h2 className=''>Your Resume</h2>
        <div>
            {isEdit 
            ? <>
            
            
            </>:
            <div>
                <a href="">   Resume

                </a>
                <button>Edit</button>
                 
                </div>
                }

        </div>
      </div>
      
      
      
      
      
      
      
      
      
      
      </>
    )
}

export default Application
