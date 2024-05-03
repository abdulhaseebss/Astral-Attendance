import { useEffect} from "react";
import Tables from "../table/Tables";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleEmp = () => {

//  const [data, setData] = useState(null); // Fixed useState syntax

const params =useParams()

useEffect(()=>{
  axios.get(`https://fakestoreapi.com/products/${params.id}`)
  .then((res)=>{
    console.log(res.data);
  })
})


  return (
    <>
      <div className="flex justify-center mt-5">
        <div className="circle bg-gray-300 rounded-full w-56 h-56 text-center"></div>
      </div>
      <div className="text-center">
          <p className="font-medium text-xl mb-6">Muhammad Owais</p>
        </div>
      <Tables />
    </>
  );
};

export default SingleEmp;





// import{ useEffect, useState } from 'react'
// import axios from 'axios'
// import { useParams } from 'react-router-dom'

// const SingleProduct = () => {
//   const [data, setData] = useState(null); // Fixed useState syntax

//   const params = useParams()
//   //useEffect ka kaam
//   useEffect(() => {
//     axios.get(`https://fakestoreapi.com/products/${params.id}`)
//       .then((res) => {
//         console.log(res.data);
//         setData(res.data);
//       })
//       .catch((Error) => {
//         console.log(Error);
//       });
//   }, []);

//   return (
//     <>
//       {data ? <SeeNowCard title={data.title}
//         src={data.image}
//         description={data.description}
//         price={` ${data.price} $`} />
//         : <h1 className='text-center mt-[20%] font-semibold'>Loading...</h1> };
//     </>
//   )
// }

// export default SingleProduct
