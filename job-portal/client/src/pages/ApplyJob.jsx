import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext';
import { useParams } from 'react-router-dom';   
import Loading from '../components/Loading';
import Navbar from '../components/Navbar';
import { assets } from '../assets/assets';
const ApplyJob = () => {
    const { id} = useParams();
const [jobData, setJobData] = useState(null);


const  {jobs } = useContext(AppContext);


const fetchJob = async () => {
const data  = jobs.filter(job => job._id === id);
if(data.length !== 0){
    setJobData(data[0]);
    console.log(data[0]);
}
}

useEffect(() => {
    if(jobs.length > 0) {
        fetchJob();
    }

}, [id,jobs]);



    return jobData ?  (
     <>
     
    <Navbar />
    <div>
        <div>
            <div>
                <div>
                    <img src={assets.company_icon} alt="" />
                    <div>
                        <h1>{jobData.title}</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
     
     </>
    ) : (
      <Loading />
    )
}

export default ApplyJob
