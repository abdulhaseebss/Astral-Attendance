import React from 'react'
import { getAllData } from '../config/firebase/firebaseMethod'


const AllMembers = () => {


    getAllData("user").then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    })

  return (
    <>
        <h1 className='text-2xl font-semibold text-center mt-5'>All Members </h1>
    </>
  )
}

export default AllMembers